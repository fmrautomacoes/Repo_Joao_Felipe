/* =====================================================================
   CASA PRADO – PAINEL DO ADMINISTRADOR
   Os formulários são montados a partir do ESQUEMA abaixo.
   Para incluir um campo novo no painel, acrescente-o ao ESQUEMA.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- tipos de campo ----------
     i18n / i18nArea : texto em PT, EN e ES
     texto / area / numero / data / chave / opcoes / icone / foto / preco
     lista : lista de itens (com "item" = campos de cada item)                */
  var SITUACOES = [["a_partir", "Disponível a partir de uma data"], ["disponivel", "Disponível agora"], ["reservado", "Reservado (mostra lista de espera)"]];
  var CLASSIF = [["incluso", "Incluso no preço"], ["cortesia", "Cortesia"], ["opcional", "Opcional"], ["oculto", "Oculto (não aparece)"]];
  var TIPO_PASSEIO = [["dia", "Bate-volta"], ["fds", "Fim de semana"]];

  function titulosSecao(chave, comSub) {
    return { tipo: "grupo", titulo: "Títulos desta seção no site", campos: [
      { caminho: ["secoes", chave, "sobre"], tipo: "i18n", rotulo: "Texto pequeno acima do título" },
      { caminho: ["secoes", chave, "titulo"], tipo: "i18n", rotulo: "Título", dica: "Coloque entre *asteriscos* a parte que deve aparecer em destaque (itálico colorido)." }
    ].concat(comSub === false ? [] : [{ caminho: ["secoes", chave, "sub"], tipo: "i18nArea", rotulo: "Subtítulo (opcional)" }]) };
  }

  var ESQUEMA = [
    { id: "geral", nome: "⚙️ Geral", intro: "Contato, faixa de aviso e como o site aparece no Google e no WhatsApp.", campos: [
      { tipo: "grupo", titulo: "Contato", campos: [
        { caminho: ["config", "whatsapp"], tipo: "texto", rotulo: "WhatsApp", dica: "Só números, com 55 e DDD. Ex.: 5531997739550" },
        { caminho: ["config", "email"], tipo: "texto", rotulo: "E-mail (opcional)" },
        { caminho: ["config", "mapa"], tipo: "texto", rotulo: "Link do mapa (Google Maps)", dica: "Use um link da região do bairro, não do endereço exato." },
        { caminho: ["config", "mensagemWhatsapp"], tipo: "i18n", rotulo: "Mensagem pronta do botão de WhatsApp" }
      ] },
      { tipo: "grupo", titulo: "Faixa de aviso no topo do site", campos: [
        { caminho: ["aviso", "mostrar"], tipo: "chave", rotulo: "Mostrar a faixa" },
        { caminho: ["aviso", "ate"], tipo: "data", rotulo: "Some sozinha depois de", dica: "Deixe em branco para não ter data." },
        { caminho: ["aviso", "texto"], tipo: "i18n", rotulo: "Texto da faixa" }
      ] },
      { tipo: "grupo", titulo: "Google e prévia do link no WhatsApp", campos: [
        { caminho: ["seo", "titulo"], tipo: "i18n", rotulo: "Título da página", dica: "Aparece na aba do navegador, no Google e na prévia do link." },
        { caminho: ["seo", "descricao"], tipo: "i18nArea", rotulo: "Descrição", dica: "Uma ou duas frases. Aparece no Google e na prévia do link." },
        { caminho: ["seo", "imagem"], tipo: "foto", rotulo: "Imagem da prévia do link", dica: "Ideal: 1200 × 630 pixels." }
      ] }
    ] },
    { id: "capa", nome: "🏠 Capa", intro: "A primeira tela do site.", campos: [
      { caminho: ["capa", "foto"], tipo: "foto", rotulo: "Foto de fundo da capa", dica: "Foto horizontal, de boa qualidade." },
      { caminho: ["capa", "titulo"], tipo: "i18n", rotulo: "Título principal", dica: "Use *asteriscos* para o destaque dourado. Ex.: Sua casa em *Belo Horizonte*" },
      { caminho: ["capa", "subtitulo"], tipo: "i18nArea", rotulo: "Texto abaixo do título" },
      { caminho: ["capa", "inicio"], tipo: "i18n", rotulo: "Selo de data (acima do título)" },
      { caminho: ["faixa"], tipo: "lista", rotulo: "Faixa de lugares (nomes que passam abaixo da capa)", simples: true, novo: "", nomeItem: function (v) { return v || "(vazio)"; } }
    ] },
    { id: "anfitrioes", nome: "👋 Quem somos", campos: [
      { caminho: ["anfitrioes", "mostrar"], tipo: "chave", rotulo: "Mostrar esta seção" },
      { caminho: ["anfitrioes", "foto"], tipo: "foto", rotulo: "Foto dos anfitriões" },
      { caminho: ["anfitrioes", "texto"], tipo: "i18nArea", rotulo: "Texto de apresentação" },
      { caminho: ["anfitrioes", "idiomas"], tipo: "i18n", rotulo: "Selo de idiomas" },
      titulosSecao("anfitrioes", false)
    ] },
    { id: "casa", nome: "🏡 A casa", campos: [
      { tipo: "grupo", titulo: "Os dois andares", campos: [
        { caminho: ["casa", "superior", "titulo"], tipo: "i18n", rotulo: "Andar de cima – título" },
        { caminho: ["casa", "superior", "texto"], tipo: "i18nArea", rotulo: "Andar de cima – texto" },
        { caminho: ["casa", "inferior", "titulo"], tipo: "i18n", rotulo: "Andar de baixo – título" },
        { caminho: ["casa", "inferior", "texto"], tipo: "i18nArea", rotulo: "Andar de baixo – texto" }
      ] },
      { caminho: ["casa", "ambientes"], tipo: "lista", rotulo: "Ambientes e destaques", novo: { icone: "check", texto: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return v.texto && v.texto.pt; }, item: [
          { caminho: ["icone"], tipo: "icone", rotulo: "Ícone" }, { caminho: ["texto"], tipo: "i18n", rotulo: "Texto" }] },
      { caminho: ["casa", "pets"], tipo: "i18nArea", rotulo: "Aviso sobre os pets" },
      { caminho: ["casa", "convivencia"], tipo: "i18nArea", rotulo: "Perfil da casa (convivência)" },
      titulosSecao("casa")
    ] },
    { id: "quartos", nome: "🛏️ Quartos e preços", intro: "O preço “a partir de” da capa é calculado sozinho pelo quarto disponível mais barato.", campos: [
      { caminho: ["quartos"], tipo: "lista", rotulo: "Quartos", novo: { mostrar: true, foto: "", preco: 0, situacao: "disponivel", data: "", nome: { pt: "Novo quarto", en: "New room", es: "Nueva habitación" }, destaque: { pt: "", en: "", es: "" }, descricao: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return (v.nome && v.nome.pt) + " · R$ " + Number(v.preco || 0).toLocaleString("pt-BR"); }, item: [
          { caminho: ["mostrar"], tipo: "chave", rotulo: "Mostrar no site" },
          { tipo: "linha", campos: [{ caminho: ["preco"], tipo: "numero", rotulo: "Preço por mês (R$)" }, { caminho: ["situacao"], tipo: "opcoes", rotulo: "Situação", opcoes: SITUACOES }] },
          { caminho: ["data"], tipo: "data", rotulo: "Disponível a partir de", dica: "Usado quando a situação é “a partir de uma data”." },
          { caminho: ["nome"], tipo: "i18n", rotulo: "Nome" },
          { caminho: ["destaque"], tipo: "i18n", rotulo: "Destaque (ex.: Frigobar privativo)" },
          { caminho: ["descricao"], tipo: "i18nArea", rotulo: "Descrição" },
          { caminho: ["foto"], tipo: "foto", rotulo: "Foto do quarto" }] },
      { caminho: ["comodidades"], tipo: "lista", rotulo: "O que todos os quartos têm", novo: { icone: "check", texto: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return v.texto && v.texto.pt; }, item: [{ caminho: ["icone"], tipo: "icone", rotulo: "Ícone" }, { caminho: ["texto"], tipo: "i18n", rotulo: "Texto" }] },
      { tipo: "grupo", titulo: "Condições", campos: [
        { tipo: "linha", campos: [{ caminho: ["condicoes", "estadiaMinimaMeses"], tipo: "numero", rotulo: "Estadia mínima (meses)" }, { caminho: ["condicoes", "caucaoMeses"], tipo: "numero", rotulo: "Caução (meses)" }] },
        { caminho: ["condicoes", "contrato"], tipo: "i18n", rotulo: "Texto sobre o contrato" },
        { caminho: ["condicoes", "desconto"], tipo: "i18n", rotulo: "Texto sobre descontos" }
      ] },
      titulosSecao("quartos")
    ] },
    { id: "como", nome: "🔢 Como funciona", campos: [
      { caminho: ["secoes", "como", "passos"], tipo: "lista", rotulo: "Passos", novo: { t: { pt: "", en: "", es: "" }, d: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return v.t && v.t.pt; }, item: [{ caminho: ["t"], tipo: "i18n", rotulo: "Título do passo" }, { caminho: ["d"], tipo: "i18nArea", rotulo: "Descrição" }] },
      titulosSecao("como", false)
    ] },
    { id: "servicos", nome: "✅ Incluso e opcionais", intro: "Mude a classificação de um item e ele troca de bloco no site sozinho. Bloco vazio some.", campos: [
      { caminho: ["servicos"], tipo: "lista", rotulo: "Serviços e experiências", novo: { classificacao: "opcional", icone: "check", preco: "consulta", nome: { pt: "Novo serviço", en: "", es: "" } },
        nomeItem: function (v) { var c = (CLASSIF.filter(function (x) { return x[0] === v.classificacao; })[0] || [])[1] || ""; return (v.nome && v.nome.pt) + " · " + c; }, item: [
          { tipo: "linha", campos: [{ caminho: ["classificacao"], tipo: "opcoes", rotulo: "Classificação", opcoes: CLASSIF }, { caminho: ["preco"], tipo: "preco", rotulo: "Preço (só para opcionais)" }] },
          { caminho: ["icone"], tipo: "icone", rotulo: "Ícone" },
          { caminho: ["nome"], tipo: "i18n", rotulo: "Nome" },
          { caminho: ["descricao"], tipo: "i18nArea", rotulo: "Descrição (opcional)" },
          { caminho: ["condicao"], tipo: "i18n", rotulo: "Condição (opcional)", dica: "Ex.: maiores de 18 anos · dia a combinar" }] },
      titulosSecao("servicos", false)
    ] },
    { id: "local", nome: "📍 Localização", campos: [
      { caminho: ["local", "texto"], tipo: "i18nArea", rotulo: "Texto sobre o bairro" },
      { caminho: ["local", "perto"], tipo: "lista", rotulo: "Perto de casa (a pé)", novo: { icone: "map-pin", texto: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return v.texto && v.texto.pt; }, item: [{ caminho: ["icone"], tipo: "icone", rotulo: "Ícone" }, { caminho: ["texto"], tipo: "i18n", rotulo: "Texto" }] },
      { caminho: ["local", "acessos"], tipo: "i18nArea", rotulo: "Universidades e cidade (texto)" },
      { caminho: ["local", "universidades"], tipo: "lista", rotulo: "Universidades (etiquetas)", simples: true, novo: "", nomeItem: function (v) { return v || "(vazio)"; } },
      titulosSecao("local", false)
    ] },
    { id: "passeios", nome: "🌄 Passeios", campos: [
      { caminho: ["passeios", "mostrar"], tipo: "chave", rotulo: "Mostrar esta seção" },
      { caminho: ["passeios", "intro"], tipo: "i18nArea", rotulo: "Texto de apresentação" },
      { caminho: ["passeios", "itens"], tipo: "lista", rotulo: "Destinos", novo: { mostrar: true, foto: "", km: null, tipo: "dia", nome: "Novo destino", descricao: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return v.nome; }, item: [
          { caminho: ["mostrar"], tipo: "chave", rotulo: "Mostrar no site" },
          { caminho: ["nome"], tipo: "texto", rotulo: "Nome do destino" },
          { tipo: "linha", campos: [{ caminho: ["tipo"], tipo: "opcoes", rotulo: "Tipo", opcoes: TIPO_PASSEIO }, { caminho: ["km"], tipo: "numero", rotulo: "Distância (km, opcional)" }] },
          { caminho: ["descricao"], tipo: "i18nArea", rotulo: "Descrição" },
          { caminho: ["foto"], tipo: "foto", rotulo: "Foto" }] },
      titulosSecao("passeios", false)
    ] },
    { id: "glossario", nome: "💬 Mineirês", campos: [
      { caminho: ["glossario", "mostrar"], tipo: "chave", rotulo: "Mostrar esta seção" },
      { caminho: ["glossario", "palavras"], tipo: "lista", rotulo: "Palavras", novo: { mostrar: true, palavra: "", significado: { pt: "", en: "", es: "" }, exemplo: "" },
        nomeItem: function (v) { return v.palavra; }, item: [
          { caminho: ["mostrar"], tipo: "chave", rotulo: "Mostrar no site" },
          { caminho: ["palavra"], tipo: "texto", rotulo: "Palavra" },
          { caminho: ["significado"], tipo: "i18n", rotulo: "Significado" },
          { caminho: ["exemplo"], tipo: "texto", rotulo: "Exemplo de uso (opcional)" }] },
      titulosSecao("glossario")
    ] },
    { id: "faq", nome: "❓ Dúvidas", campos: [
      { caminho: ["faq"], tipo: "lista", rotulo: "Perguntas frequentes", novo: { p: { pt: "", en: "", es: "" }, r: { pt: "", en: "", es: "" } },
        nomeItem: function (v) { return v.p && v.p.pt; }, item: [{ caminho: ["p"], tipo: "i18n", rotulo: "Pergunta" }, { caminho: ["r"], tipo: "i18nArea", rotulo: "Resposta" }] },
      titulosSecao("faq", false)
    ] },
    { id: "contato", nome: "✉️ Contato", campos: [titulosSecao("contato")] }
  ];

  /* ---------- estado ---------- */
  var dados = null, original = "", info = {}, aba = "geral";
  try { aba = sessionStorage.getItem("cp_aba") || "geral"; } catch (e) {}

  /* ---------- utilidades ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (k === "on") Object.keys(v).forEach(function (ev) { el.addEventListener(ev, v[ev]); });
      else if (k === "html") el.innerHTML = v;
      else if (v != null && v !== false) el.setAttribute(k, v === true ? "" : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      (Array.isArray(c) ? c : [c]).forEach(function (x) { if (x != null && x !== false) el.appendChild(typeof x === "string" ? document.createTextNode(x) : x); });
    }
    return el;
  }
  function pegar(obj, cam) { return cam.reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj); }
  function por(obj, cam, val) {
    var o = obj;
    for (var i = 0; i < cam.length - 1; i++) { if (o[cam[i]] == null || typeof o[cam[i]] !== "object") o[cam[i]] = typeof cam[i + 1] === "number" ? [] : {}; o = o[cam[i]]; }
    o[cam[cam.length - 1]] = val;
  }
  function svgIcone(n) { return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ((window.ICONES || {})[n] || "") + "</svg>"; }
  function srcFoto(p) { return !p ? "" : /^(https?:|\/)/.test(p) ? p : "/" + p; }
  function aviso(msg, erro) {
    var t = document.getElementById("toast");
    t.textContent = msg; t.className = "aviso-toast ver" + (erro ? " erro" : "");
    clearTimeout(aviso.t); aviso.t = setTimeout(function () { t.className = "aviso-toast"; }, erro ? 6000 : 3000);
  }
  function api(rota, corpo) {
    var op = corpo === undefined ? { credentials: "same-origin" } : { method: "POST", credentials: "same-origin", headers: { "content-type": "application/json", "x-casa-prado": "1" }, body: JSON.stringify(corpo) };
    return fetch("/api/admin/" + rota, op).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.erro || "Erro " + r.status); return j; });
    });
  }
  function mudou() {
    var pend = JSON.stringify(dados) !== original;
    var e = document.getElementById("estado");
    e.textContent = pend ? "● Alterações não publicadas" : (info.publicadoEm ? "Publicado em " + new Date(info.publicadoEm).toLocaleString("pt-BR") : "Conteúdo inicial (nada publicado ainda)");
    e.className = "estado" + (pend ? " pendente" : "");
    document.getElementById("bPublicar").disabled = !pend;
  }

  /* ---------- campos ---------- */
  function campo(def, base) {
    var cam = base.concat(def.caminho || []);
    var wrap = h("div", { class: "campo" });
    var rot = def.rotulo ? h("label", null, def.rotulo) : null;
    var dica = def.dica ? h("small", { class: "dica" }, def.dica) : null;
    var v = pegar(dados, cam);

    switch (def.tipo) {
      case "grupo":
        return h("section", { class: "grupo" }, h("h2", null, def.titulo), def.campos.map(function (c) { return campo(c, base); }));
      case "linha":
        return h("div", { class: "linha2" }, def.campos.map(function (c) { return campo(c, base); }));
      case "i18n": case "i18nArea": {
        var area = def.tipo === "i18nArea";
        var caixa = h("div");
        var inputs = {};
        ["pt", "en", "es"].forEach(function (l) {
          var val = (v && typeof v === "object" ? v[l] : (l === "pt" ? v : "")) || "";
          var inp = area ? h("textarea", { rows: 3 }) : h("input", { type: "text" });
          inp.value = val;
          inp.addEventListener("input", function () {
            var cur = pegar(dados, cam); if (!cur || typeof cur !== "object") cur = { pt: "", en: "", es: "" };
            cur[l] = inp.value; por(dados, cam, cur); mudou();
          });
          inputs[l] = inp;
          caixa.appendChild(h("div", { class: "idioma" }, h("span", null, { pt: "🇧🇷 PT", en: "🇺🇸 EN", es: "🇪🇸 ES" }[l]), inp));
        });
        if (info.traducao) caixa.appendChild(h("button", { type: "button", class: "b b-linha b-mini traduzir", on: { click: function (e) {
          var b = e.currentTarget, pt = inputs.pt.value.trim();
          if (!pt) { aviso("Escreva o texto em português primeiro.", true); return; }
          b.disabled = true; b.textContent = "Traduzindo…";
          Promise.all(["en", "es"].map(function (to) { return api("translate", { to: to, texts: [pt] }).then(function (r) { return [to, r.textos[0]]; }); }))
            .then(function (res) { res.forEach(function (x) { if (x[1]) { inputs[x[0]].value = x[1]; inputs[x[0]].dispatchEvent(new Event("input")); } }); aviso("Traduzido. Confira o texto antes de publicar."); })
            .catch(function (err) { aviso(err.message, true); })
            .then(function () { b.disabled = false; b.textContent = "🌐 Traduzir para EN e ES"; });
        } } }, "🌐 Traduzir para EN e ES"));
        wrap.append(rot || "", caixa, dica || "");
        return wrap;
      }
      case "texto": case "area": {
        var el = def.tipo === "area" ? h("textarea") : h("input", { type: "text" });
        el.value = v == null ? "" : v;
        el.addEventListener("input", function () { por(dados, cam, el.value); mudou(); });
        wrap.append(rot || "", el, dica || ""); return wrap;
      }
      case "numero": {
        var n = h("input", { type: "number", min: "0", step: "1", inputmode: "numeric" });
        n.value = v == null ? "" : v;
        n.addEventListener("input", function () { por(dados, cam, n.value === "" ? null : Number(n.value)); mudou(); });
        wrap.append(rot || "", n, dica || ""); return wrap;
      }
      case "data": {
        var d = h("input", { type: "date" }); d.value = v || "";
        d.addEventListener("input", function () { por(dados, cam, d.value); mudou(); });
        wrap.append(rot || "", d, dica || ""); return wrap;
      }
      case "chave": {
        var c = h("input", { type: "checkbox" }); c.checked = v !== false;
        c.addEventListener("change", function () { por(dados, cam, c.checked); mudou(); render(); });
        wrap.append(h("label", { class: "chave" }, c, def.rotulo), dica || ""); return wrap;
      }
      case "opcoes": {
        var s = h("select");
        def.opcoes.forEach(function (o) { var op = h("option", { value: o[0] }, o[1]); if (o[0] === v) op.selected = true; s.appendChild(op); });
        s.addEventListener("change", function () { por(dados, cam, s.value); mudou(); render(); });
        wrap.append(rot || "", s, dica || ""); return wrap;
      }
      case "preco": {
        var modo = typeof v === "number" ? "valor" : (v === "combinar" ? "combinar" : "consulta");
        var sel = h("select");
        [["consulta", "Sob consulta"], ["combinar", "A combinar"], ["valor", "Valor em R$"]].forEach(function (o) { var op = h("option", { value: o[0] }, o[1]); if (o[0] === modo) op.selected = true; sel.appendChild(op); });
        var num = h("input", { type: "number", min: "0", step: "1", placeholder: "Valor em R$" }); num.value = typeof v === "number" ? v : "";
        num.hidden = modo !== "valor";
        sel.addEventListener("change", function () { num.hidden = sel.value !== "valor"; por(dados, cam, sel.value === "valor" ? Number(num.value || 0) : sel.value); mudou(); });
        num.addEventListener("input", function () { por(dados, cam, Number(num.value || 0)); mudou(); });
        wrap.append(rot || "", sel, num, dica || ""); return wrap;
      }
      case "icone": {
        var prev = h("span", { class: "ic", html: svgIcone(v) });
        var si = h("select");
        Object.keys(window.ICONES || {}).sort().forEach(function (k) { var op = h("option", { value: k }, k); if (k === v) op.selected = true; si.appendChild(op); });
        si.addEventListener("change", function () { por(dados, cam, si.value); prev.innerHTML = svgIcone(si.value); mudou(); });
        wrap.append(rot || "", h("div", { class: "icone-campo" }, prev, si), dica || ""); return wrap;
      }
      case "foto": {
        var pv = h("div", { class: "previa" });
        function mostrar(p) { pv.style.backgroundImage = p ? "url('" + srcFoto(p).replace(/'/g, "%27") + "')" : ""; pv.textContent = p ? "" : "Sem foto (aparece imagem provisória)"; }
        var cam_ = h("input", { type: "text", placeholder: "Sem foto" }); cam_.value = v || ""; mostrar(v);
        cam_.addEventListener("input", function () { por(dados, cam, cam_.value.trim()); mostrar(cam_.value.trim()); mudou(); });
        var lado = h("div", null, cam_);
        if (info.fotos) {
          var arq = h("input", { type: "file", accept: "image/jpeg,image/png,image/webp", hidden: true });
          var bt = h("button", { type: "button", class: "b b-escuro b-mini", style: "margin-top:8px", on: { click: function () { arq.click(); } } }, "📷 Enviar foto");
          arq.addEventListener("change", function () {
            if (!arq.files[0]) return;
            var fd = new FormData(); fd.append("foto", arq.files[0]);
            bt.disabled = true; bt.textContent = "Enviando…";
            fetch("/api/admin/upload", { method: "POST", body: fd, credentials: "same-origin", headers: { "x-casa-prado": "1" } })
              .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.erro || "Erro no envio"); return j; }); })
              .then(function (j) { cam_.value = j.caminho; cam_.dispatchEvent(new Event("input")); aviso("Foto enviada. Publique para aparecer no site."); })
              .catch(function (e) { aviso(e.message, true); })
              .then(function () { bt.disabled = false; bt.textContent = "📷 Enviar foto"; arq.value = ""; });
          });
          lado.append(bt, arq);
          if (v) lado.append(h("button", { type: "button", class: "b b-perigo b-mini", style: "margin:8px 0 0 6px", on: { click: function () { cam_.value = ""; cam_.dispatchEvent(new Event("input")); } } }, "Remover"));
        } else {
          lado.append(h("small", { class: "dica" }, "Envio de fotos pelo painel: em breve. Por enquanto, as fotos são colocadas no site pelo suporte."));
        }
        wrap.append(rot || "", h("div", { class: "foto-campo" }, pv, lado), dica || ""); return wrap;
      }
      case "lista": return lista(def, cam);
    }
    return wrap;
  }

  var abertos = {};
  function lista(def, cam) {
    var arr = pegar(dados, cam);
    if (!Array.isArray(arr)) { arr = []; por(dados, cam, arr); }
    var chaveLista = cam.join(".");
    var grupo = h("section", { class: "grupo" }, h("h2", null, def.rotulo));
    var box = h("div", { class: "lista" });
    arr.forEach(function (it, i) {
      var nome = (def.nomeItem && def.nomeItem(it)) || "(sem nome)";
      var oculto = it && typeof it === "object" && (it.mostrar === false || it.classificacao === "oculto");
      var det = h("details", { class: "item" });
      if (abertos[chaveLista + "." + i]) det.open = true;
      det.addEventListener("toggle", function () { abertos[chaveLista + "." + i] = det.open; });
      det.appendChild(h("summary", null, h("span", { class: "nome" }, (i + 1) + ". " + nome), oculto ? h("span", { class: "oculto" }, "oculto") : null));
      var corpo = h("div", { class: "item__corpo" });
      if (def.simples) {
        var inp = h("input", { type: "text" }); inp.value = it || "";
        inp.addEventListener("input", function () { arr[i] = inp.value; mudou(); });
        corpo.appendChild(h("div", { class: "campo", style: "margin-top:10px" }, inp));
      } else {
        def.item.forEach(function (c) { corpo.appendChild(campo(c, cam.concat([i]))); });
      }
      function mover(d) { var j = i + d; if (j < 0 || j >= arr.length) return; var t = arr[i]; arr[i] = arr[j]; arr[j] = t; abertos = {}; abertos[chaveLista + "." + j] = true; mudou(); render(); }
      corpo.appendChild(h("div", { class: "item__ferr" },
        h("button", { type: "button", class: "b b-linha b-mini", disabled: i === 0, on: { click: function () { mover(-1); } } }, "↑ Subir"),
        h("button", { type: "button", class: "b b-linha b-mini", disabled: i === arr.length - 1, on: { click: function () { mover(1); } } }, "↓ Descer"),
        h("button", { type: "button", class: "b b-linha b-mini", on: { click: function () { arr.splice(i + 1, 0, JSON.parse(JSON.stringify(arr[i]))); abertos = {}; abertos[chaveLista + "." + (i + 1)] = true; mudou(); render(); } } }, "Duplicar"),
        h("button", { type: "button", class: "b b-perigo b-mini", on: { click: function () {
          if (!confirm("Excluir “" + nome + "”? Se mudar de ideia, use o botão Histórico depois de publicar, ou recarregue a página antes de publicar.")) return;
          arr.splice(i, 1); abertos = {}; mudou(); render();
        } } }, "Excluir")));
      det.appendChild(corpo);
      box.appendChild(det);
    });
    grupo.appendChild(box);
    grupo.appendChild(h("button", { type: "button", class: "b b-escuro mais", on: { click: function () {
      arr.push(JSON.parse(JSON.stringify(def.novo))); abertos = {}; abertos[chaveLista + "." + (arr.length - 1)] = true; mudou(); render();
    } } }, "+ Adicionar"));
    return grupo;
  }

  /* ---------- telas ---------- */
  function render() {
    var sec = ESQUEMA.filter(function (s) { return s.id === aba; })[0] || ESQUEMA[0];
    var menu = document.getElementById("menu"), cel = document.getElementById("menuCelular");
    menu.innerHTML = ""; cel.innerHTML = "";
    ESQUEMA.forEach(function (s) {
      menu.appendChild(h("button", { type: "button", "aria-current": s.id === sec.id ? "true" : "false", on: { click: function () { trocar(s.id); } } }, s.nome));
      var op = h("option", { value: s.id }, s.nome); if (s.id === sec.id) op.selected = true; cel.appendChild(op);
    });
    var y = window.scrollY;
    var c = document.getElementById("conteudo");
    c.innerHTML = "";
    c.appendChild(h("h1", null, sec.nome.replace(/^\S+\s/, "")));
    if (sec.intro) c.appendChild(h("p", { class: "intro" }, sec.intro));
    if (sec.id === "geral") c.appendChild(h("div", { class: "ajuda", html: "<b>Como funciona:</b> altere o que quiser nas seções ao lado. Use <b>Pré-visualizar</b> para ver o resultado antes, e <b>Publicar</b> para colocar no ar. Errou? O <b>Histórico</b> volta a qualquer versão anterior." }));
    sec.campos.forEach(function (f) { c.appendChild(campo(f, [])); });
    window.scrollTo(0, y);
  }
  function trocar(id) { aba = id; abertos = {}; try { sessionStorage.setItem("cp_aba", id); } catch (e) {} render(); window.scrollTo(0, 0); }
  document.getElementById("menuCelular").addEventListener("change", function (e) { trocar(e.target.value); });

  document.getElementById("bPrevia").addEventListener("click", function () {
    var w = window.open("about:blank", "_blank");
    api("draft", { content: dados }).then(function () { if (w) w.location = "/admin/preview?t=" + Date.now(); else location.href = "/admin/preview"; })
      .catch(function (e) { if (w) w.close(); aviso(e.message, true); });
  });
  document.getElementById("bPublicar").addEventListener("click", function () {
    if (!confirm("Publicar as alterações? Elas aparecem no site em poucos segundos.")) return;
    var b = this; b.disabled = true; b.textContent = "Publicando…";
    api("publish", { content: dados }).then(function (r) {
      original = JSON.stringify(dados); info.publicadoEm = r.publicadoEm; aviso("Publicado! O site já está atualizado.");
    }).catch(function (e) { aviso(e.message, true); }).then(function () { b.textContent = "Publicar"; mudou(); });
  });
  document.getElementById("bHistorico").addEventListener("click", function () {
    var dlg = document.getElementById("dlg");
    dlg.innerHTML = "<h2>Histórico</h2><p>Carregando…</p>";
    dlg.showModal();
    api("history").then(function (r) {
      dlg.innerHTML = "";
      dlg.appendChild(h("h2", null, "Histórico de versões"));
      dlg.appendChild(h("p", null, r.versoes.length ? "Escolha uma versão anterior para colocá-la no ar de novo. A versão atual também fica guardada." : "Ainda não há versões anteriores. Elas aparecem aqui depois da segunda publicação."));
      var ul = h("ul", { class: "versoes" });
      r.versoes.forEach(function (v) {
        ul.appendChild(h("li", null, h("span", null, new Date(v.ts).toLocaleString("pt-BR") + (v.by ? " · " + v.by : "")),
          h("button", { type: "button", class: "b b-escuro b-mini", on: { click: function () {
            if (!confirm("Voltar o site para a versão de " + new Date(v.ts).toLocaleString("pt-BR") + "?")) return;
            api("restore", { id: v.id }).then(function () { dlg.close(); aviso("Versão restaurada e publicada."); carregar(); }).catch(function (e) { aviso(e.message, true); });
          } } }, "Restaurar")));
      });
      dlg.appendChild(ul);
      dlg.appendChild(h("button", { type: "button", class: "b b-linha", on: { click: function () { dlg.close(); } } }, "Fechar"));
    }).catch(function (e) { dlg.close(); aviso(e.message, true); });
  });
  window.addEventListener("beforeunload", function (e) { if (dados && JSON.stringify(dados) !== original) { e.preventDefault(); e.returnValue = ""; } });

  function carregar() {
    Promise.all([api("me"), api("content")]).then(function (r) {
      info = r[0]; dados = r[1].content; info.publicadoEm = r[1].publicadoEm;
      original = JSON.stringify(dados); render(); mudou();
    }).catch(function (e) {
      document.getElementById("conteudo").innerHTML = "<h1>Não foi possível abrir o painel</h1><p>" + e.message + "</p>";
      document.getElementById("estado").textContent = "Erro";
    });
  }
  carregar();
})();
