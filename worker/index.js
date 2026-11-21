/* =====================================================================
   CASA PRADO – WORKER (servidor)
   - Entrega o site (pasta public/) e o conteúdo publicado pelo painel.
   - Protege o painel /admin e a API /api/admin/* (Cloudflare Access).
   - Guarda o conteúdo e o histórico de versões no KV (binding CONTENT).
   - Fotos no R2 (binding MEDIA) e tradução no Workers AI (binding AI): opcionais.
   ===================================================================== */

const KEY_CONTENT = "content";
const KEY_DRAFT = "draft";
const KEY_HISTORY = "history";
const MAX_HISTORY = 15;
const LANGS = ["pt", "en", "es"];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    try {
      if (path === "/content.js") return contentJs(env, KEY_CONTENT);
      if (path.startsWith("/media/")) return media(env, path.slice(7));
      if (path === "/admin" || path.startsWith("/admin/") || path.startsWith("/api/admin/")) {
        const user = await authenticate(request, env);
        if (!user) return forbidden(env);
        return admin(request, env, url, user);
      }
      if (path === "/" || path === "/index.html") return home(request, env, url);
      return env.ASSETS.fetch(request);
    } catch (err) {
      console.error(err);
      return new Response("Erro interno", { status: 500 });
    }
  }
};

/* ---------------- conteúdo ---------------- */

async function defaultContent(env) {
  const res = await env.ASSETS.fetch(new Request("https://assets.local/content.js"));
  const text = await res.text();
  const start = text.indexOf("{", text.indexOf("window.SITE"));
  return JSON.parse(text.slice(start, text.lastIndexOf("}") + 1));
}

async function currentContent(env) {
  const saved = await env.CONTENT.get(KEY_CONTENT, "json");
  return saved ? saved.data : defaultContent(env);
}

async function contentJs(env, key) {
  const saved = await env.CONTENT.get(key, "json");
  if (!saved && key === KEY_CONTENT) {
    const res = await env.ASSETS.fetch(new Request("https://assets.local/content.js"));
    return new Response(res.body, { headers: jsHeaders() });
  }
  const data = saved ? saved.data : await currentContent(env);
  return new Response("window.SITE = " + JSON.stringify(data) + ";\n", { headers: jsHeaders() });
}

function jsHeaders() {
  return { "content-type": "application/javascript; charset=utf-8", "cache-control": "no-cache" };
}

/* ---------------- página inicial: título e descrição editáveis ---------------- */

async function home(request, env, url) {
  const res = await env.ASSETS.fetch(new Request(new URL("/", url), request));
  if (!res.ok || !(res.headers.get("content-type") || "").includes("text/html")) return res;
  let seo;
  try { seo = (await currentContent(env)).seo; } catch (e) { seo = null; }
  if (!seo) return res;
  const lang = LANGS.includes(url.searchParams.get("lang")) ? url.searchParams.get("lang") : "pt";
  const pick = (o) => (o && (o[lang] || o.pt)) || "";
  const title = pick(seo.titulo), desc = pick(seo.descricao);
  const image = seo.imagem ? new URL(seo.imagem, url.origin).href : "";
  const setContent = (v) => ({ element(el) { if (v) el.setAttribute("content", v); } });
  return new HTMLRewriter()
    .on("title", { element(el) { if (title) el.setInnerContent(title); } })
    .on('meta[name="description"]', setContent(desc))
    .on('meta[property="og:title"]', setContent(title))
    .on('meta[property="og:description"]', setContent(desc))
    .on('meta[property="og:image"]', setContent(image))
    .on('meta[property="og:url"]', setContent(url.origin + "/"))
    .transform(res);
}

/* ---------------- fotos (R2) ---------------- */

async function media(env, key) {
  if (!env.MEDIA || !key || key.includes("..")) return new Response("Não encontrado", { status: 404 });
  const obj = await env.MEDIA.get(key);
  if (!obj) return new Response("Não encontrado", { status: 404 });
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set("cache-control", "public, max-age=31536000, immutable");
  return new Response(obj.body, { headers });
}

/* ---------------- painel ---------------- */

async function admin(request, env, url, user) {
  const path = url.pathname;
  const method = request.method;

  if (path === "/admin/preview" || path === "/admin/preview/") {
    const res = await env.ASSETS.fetch(new Request(new URL("/", url)));
    return new HTMLRewriter()
      .on("head", { element(el) { el.prepend('<base href="/">', { html: true }); } })
      .on('script[src="content.js"]', { element(el) { el.setAttribute("src", "/api/admin/draft.js"); } })
      .transform(res);
  }

  if (path.startsWith("/api/admin/")) {
    if (method !== "GET") {
      // proteção contra envio a partir de outros sites
      if (request.headers.get("x-casa-prado") !== "1") return json({ erro: "Requisição inválida" }, 400);
      const origin = request.headers.get("origin");
      if (origin && origin !== url.origin) return json({ erro: "Origem inválida" }, 403);
    }
    const route = path.slice("/api/admin/".length);

    if (route === "me" && method === "GET")
      return json({ email: user.email, fotos: !!env.MEDIA, traducao: !!env.AI });

    if (route === "content" && method === "GET") {
      const saved = await env.CONTENT.get(KEY_CONTENT, "json");
      return json({ content: saved ? saved.data : await defaultContent(env), publicadoEm: saved ? saved.ts : null, por: saved ? saved.by : null });
    }

    if (route === "draft.js" && method === "GET") return contentJs(env, KEY_DRAFT);

    if (route === "draft" && method === "POST") {
      const body = await readJson(request);
      const erro = validate(body && body.content);
      if (erro) return json({ erro }, 400);
      await env.CONTENT.put(KEY_DRAFT, JSON.stringify({ ts: Date.now(), by: user.email, data: body.content }), { expirationTtl: 60 * 60 * 24 });
      return json({ ok: true });
    }

    if (route === "publish" && method === "POST") {
      const body = await readJson(request);
      const erro = validate(body && body.content);
      if (erro) return json({ erro }, 400);
      await pushHistory(env);
      const rec = { ts: Date.now(), by: user.email, data: body.content };
      await env.CONTENT.put(KEY_CONTENT, JSON.stringify(rec));
      return json({ ok: true, publicadoEm: rec.ts });
    }

    if (route === "history" && method === "GET") {
      const h = (await env.CONTENT.get(KEY_HISTORY, "json")) || [];
      return json({ versoes: h.map((v) => ({ id: v.id, ts: v.ts, by: v.by })) });
    }

    if (route === "restore" && method === "POST") {
      const body = await readJson(request);
      const h = (await env.CONTENT.get(KEY_HISTORY, "json")) || [];
      const v = h.find((x) => x.id === (body && body.id));
      if (!v) return json({ erro: "Versão não encontrada" }, 404);
      await pushHistory(env);
      await env.CONTENT.put(KEY_CONTENT, JSON.stringify({ ts: Date.now(), by: user.email, data: v.data, restauradoDe: v.ts }));
      return json({ ok: true });
    }

    if (route === "translate" && method === "POST") {
      if (!env.AI) return json({ erro: "Tradução automática ainda não ativada" }, 501);
      const body = await readJson(request);
      const to = body && body.to;
      const texts = (body && Array.isArray(body.texts) ? body.texts : []).slice(0, 40);
      if (!["en", "es"].includes(to) || !texts.length) return json({ erro: "Pedido inválido" }, 400);
      const out = [];
      for (const text of texts) {
        if (!text || typeof text !== "string") { out.push(""); continue; }
        const r = await env.AI.run("@cf/meta/m2m100-1.2b", { text: text.slice(0, 2000), source_lang: "pt", target_lang: to });
        out.push((r && r.translated_text) || "");
      }
      return json({ textos: out });
    }

    if (route === "upload" && method === "POST") {
      if (!env.MEDIA) return json({ erro: "Envio de fotos ainda não ativado" }, 501);
      const form = await request.formData();
      const file = form.get("foto");
      if (!file || typeof file === "string") return json({ erro: "Nenhuma foto enviada" }, 400);
      if (!/^image\/(jpeg|png|webp)$/.test(file.type)) return json({ erro: "Use foto JPG, PNG ou WEBP" }, 400);
      if (file.size > 8 * 1024 * 1024) return json({ erro: "Foto maior que 8 MB" }, 400);
      const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" }[file.type];
      const key = "fotos/" + new Date().toISOString().slice(0, 10) + "-" + crypto.randomUUID().slice(0, 8) + "." + ext;
      await env.MEDIA.put(key, file.stream(), { httpMetadata: { contentType: file.type } });
      return json({ caminho: "/media/" + key });
    }

    return json({ erro: "Não encontrado" }, 404);
  }

  // arquivos do painel (public/admin/)
  return env.ASSETS.fetch(request);
}

async function pushHistory(env) {
  const cur = await env.CONTENT.get(KEY_CONTENT, "json");
  if (!cur) return;
  const h = (await env.CONTENT.get(KEY_HISTORY, "json")) || [];
  h.unshift({ id: crypto.randomUUID(), ts: cur.ts, by: cur.by, data: cur.data });
  await env.CONTENT.put(KEY_HISTORY, JSON.stringify(h.slice(0, MAX_HISTORY)));
}

/* Validação mínima: impede publicar algo que quebraria o site. */
function validate(c) {
  if (!c || typeof c !== "object" || Array.isArray(c)) return "Conteúdo inválido";
  if (JSON.stringify(c).length > 400000) return "Conteúdo grande demais";
  if (!c.config || !/^\d{10,15}$/.test(String(c.config.whatsapp || ""))) return "WhatsApp inválido: use só números, com 55 e DDD";
  if (!Array.isArray(c.quartos)) return "Lista de quartos inválida";
  for (const q of c.quartos) if (typeof q.preco !== "number" || !(q.preco >= 0)) return "Preço de quarto inválido";
  for (const k of ["servicos", "faq", "comodidades"]) if (c[k] && !Array.isArray(c[k])) return "Lista inválida: " + k;
  if (!c.capa || !c.capa.titulo) return "Falta o título da capa";
  return null;
}

/* ---------------- login (Cloudflare Access) ---------------- */

let certsCache = { at: 0, keys: null };

async function authenticate(request, env) {
  if (env.DEV_BYPASS === "1") return { email: "dev@local" }; // só no computador (.dev.vars), nunca publicado
  const team = (env.ACCESS_TEAM_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
  const aud = env.ACCESS_AUD || "";
  if (!team || !aud) return null;
  const token = request.headers.get("cf-access-jwt-assertion") || cookie(request, "CF_Authorization");
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  let header, payload;
  try { header = JSON.parse(b64urlText(parts[0])); payload = JSON.parse(b64urlText(parts[1])); } catch (e) { return null; }
  if (header.alg !== "RS256") return null;
  const now = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp < now) return null;
  if (payload.iss !== "https://" + team) return null;
  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(aud)) return null;
  const keys = await accessKeys(team);
  const jwk = keys.find((k) => k.kid === header.kid);
  if (!jwk) return null;
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64urlBytes(parts[2]), new TextEncoder().encode(parts[0] + "." + parts[1]));
  return ok ? { email: payload.email || "" } : null;
}

async function accessKeys(team) {
  if (certsCache.keys && Date.now() - certsCache.at < 3600_000) return certsCache.keys;
  const res = await fetch("https://" + team + "/cdn-cgi/access/certs");
  const data = await res.json();
  certsCache = { at: Date.now(), keys: data.keys || [] };
  return certsCache.keys;
}

function forbidden(env) {
  const configurado = env.ACCESS_TEAM_DOMAIN && env.ACCESS_AUD;
  const msg = configurado
    ? "Acesso restrito. Entre pelo endereço do painel com um e-mail autorizado."
    : "O login do painel ainda não foi configurado (Cloudflare Access).";
  return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Casa Prado – Painel</title><body style="font-family:system-ui;max-width:560px;margin:15vh auto;padding:0 16px;color:#13201B"><h1 style="font-family:Georgia,serif">Casa Prado · Painel</h1><p>' + msg + '</p><p><a href="/">Voltar ao site</a></p></body>', { status: 403, headers: { "content-type": "text/html; charset=utf-8" } });
}

/* ---------------- utilidades ---------------- */

function cookie(request, name) {
  const c = request.headers.get("cookie") || "";
  const m = c.match(new RegExp("(?:^|;\\s*)" + name + "=([^;]+)"));
  return m ? m[1] : null;
}
function b64urlBytes(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function b64urlText(s) { return new TextDecoder().decode(b64urlBytes(s)); }
async function readJson(request) { try { return await request.json(); } catch (e) { return null; } }
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
}
