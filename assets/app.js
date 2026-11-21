/* =====================================================================
   CASA PRADO – MONTAGEM DA PÁGINA
   Lê o conteúdo de content.js (window.SITE) e monta o site nos 3 idiomas.
   ===================================================================== */
(function () {
  "use strict";
  var S = window.SITE;
  var IDIOMAS = [
    { id: "pt", bandeira: "🇧🇷", sigla: "PT", html: "pt-BR" },
    { id: "en", bandeira: "🇺🇸", sigla: "EN", html: "en" },
    { id: "es", bandeira: "🇪🇸", sigla: "ES", html: "es" }
  ];

  /* Textos fixos da interface (títulos de seção, botões) */
  var UI = {
    menu: {
      casa: { pt: "A casa", en: "The house", es: "La casa" },
      quartos: { pt: "Quartos", en: "Rooms", es: "Habitaciones" },
      servicos: { pt: "Incluso", en: "Included", es: "Incluido" },
      local: { pt: "Localização", en: "Location", es: "Ubicación" },
      passeios: { pt: "Passeios", en: "Trips", es: "Paseos" },
      faq: { pt: "Dúvidas", en: "FAQ", es: "Preguntas" },
      contato: { pt: "Contato", en: "Contact", es: "Contacto" }
    },
    cidade: { pt: "Belo Horizonte · MG · Brasil", en: "Belo Horizonte · MG · Brazil", es: "Belo Horizonte · MG · Brasil" },
    verQuartos: { pt: "Ver os quartos", en: "See the rooms", es: "Ver las habitaciones" },
    falar: { pt: "Falar no WhatsApp", en: "Chat on WhatsApp", es: "Hablar por WhatsApp" },
    aPartirDe: { pt: "a partir de", en: "from", es: "desde" },
    mes: { pt: "/mês", en: "/month", es: "/mes" },
    fotoEmBreve: { pt: "Foto em breve", en: "Photo coming soon", es: "Foto próximamente" },
    anfitrioes: { sobre: { pt: "Quem somos", en: "Who we are", es: "Quiénes somos" }, titulo: { pt: "Uma casa mineira de verdade", en: "A true Minas Gerais home", es: "Una verdadera casa mineira" } },
    casa: { sobre: { pt: "A casa", en: "The house", es: "La casa" }, titulo: { pt: "Dois andares, duas casas", en: "Two floors, two homes", es: "Dos plantas, dos casas" },
      sub: { pt: "Você mora no andar de cima, com entrada própria. Nós, no andar de baixo.", en: "You live upstairs, with your own entrance. We live downstairs.", es: "Tú vives arriba, con entrada propia. Nosotros, abajo." } },
    quartos: { sobre: { pt: "Quartos", en: "Rooms", es: "Habitaciones" }, titulo: { pt: "4 quartos individuais", en: "4 private rooms", es: "4 habitaciones individuales" },
      sub: { pt: "Um morador por quarto. Todos mobiliados e prontos para morar.", en: "One resident per room. All furnished and ready to move in.", es: "Un residente por habitación. Todas amuebladas y listas para vivir." },
      todos: { pt: "Todos os quartos têm", en: "Every room has", es: "Todas las habitaciones tienen" },
      quero: { pt: "Tenho interesse", en: "I’m interested", es: "Me interesa" },
      espera: { pt: "Entrar na lista de espera", en: "Join the waiting list", es: "Entrar en lista de espera" },
      sit: {
        disponivel: { pt: "Disponível", en: "Available", es: "Disponible" },
        reservado: { pt: "Reservado", en: "Booked", es: "Reservada" },
        a_partir: { pt: "A partir de", en: "From", es: "Desde" }
      },
      minimo: { pt: "Estadia mínima de {n} meses", en: "Minimum stay of {n} months", es: "Estadía mínima de {n} meses" },
      caucao: { pt: "Caução de {n} mês", en: "{n}-month deposit", es: "Depósito de {n} mes" }
    },
    servicos: { sobre: { pt: "Incluso e cortesias", en: "Included & perks", es: "Incluido y cortesías" }, titulo: { pt: "Tudo pensado para você só chegar", en: "Everything ready, just arrive", es: "Todo listo para que solo llegues" },
      grupos: {
        incluso: { pt: "Incluso no preço", en: "Included in the price", es: "Incluido en el precio" },
        cortesia: { pt: "Cortesias", en: "Welcome perks", es: "Cortesías" },
        opcional: { pt: "Opcionais", en: "Optional extras", es: "Opcionales" }
      },
      consulta: { pt: "sob consulta", en: "on request", es: "a consultar" },
      combinar: { pt: "a combinar", en: "to be arranged", es: "a convenir" } },
    local: { sobre: { pt: "Localização", en: "Location", es: "Ubicación" }, titulo: { pt: "No bairro Prado, perto de tudo", en: "In Prado, close to everything", es: "En el Prado, cerca de todo" },
      perto: { pt: "A poucos minutos a pé", en: "A few minutes’ walk", es: "A pocos minutos a pie" },
      acesso: { pt: "Universidades e cidade", en: "Universities & the city", es: "Universidades y ciudad" },
      mapa: { pt: "Ver a região no mapa", en: "See the area on the map", es: "Ver la zona en el mapa" },
      endereco: { pt: "O endereço completo é enviado após o primeiro contato.", en: "The full address is shared after first contact.", es: "La dirección completa se envía después del primer contacto." } },
    passeios: { sobre: { pt: "Passeios em Minas", en: "Trips in Minas", es: "Paseos en Minas" }, titulo: { pt: "Minas Gerais além de BH", en: "Minas Gerais beyond BH", es: "Minas Gerais más allá de BH" },
      dia: { pt: "Bate-volta", en: "Day trip", es: "Ida y vuelta" }, fds: { pt: "Fim de semana", en: "Weekend", es: "Fin de semana" },
      saber: { pt: "Quero saber dos passeios", en: "Ask about trips", es: "Consultar paseos" } },
    glossario: { sobre: { pt: "Mineirês", en: "Mineirês", es: "Mineirês" }, titulo: { pt: "Aprenda a falar mineirês", en: "Learn to speak “Mineirês”", es: "Aprende a hablar “mineirês”" },
      sub: { pt: "O jeitinho de falar de Minas. Toque nos cartões.", en: "The Minas way of speaking. Tap the cards.", es: "La forma de hablar de Minas. Toca las tarjetas." },
      toque: { pt: "toque para ver", en: "tap to reveal", es: "toca para ver" } },
    faq: { sobre: { pt: "Dúvidas", en: "FAQ", es: "Preguntas" }, titulo: { pt: "Perguntas frequentes", en: "Frequently asked questions", es: "Preguntas frecuentes" } },
    contato: { sobre: { pt: "Contato", en: "Contact", es: "Contacto" }, titulo: { pt: "Vamos conversar?", en: "Shall we talk?", es: "¿Conversamos?" },
      sub: { pt: "Conte quando você chega e qual quarto prefere. A mensagem já vai pronta para o nosso WhatsApp.", en: "Tell us when you arrive and which room you prefer. The message goes ready to our WhatsApp.", es: "Cuéntanos cuándo llegas y qué habitación prefieres. El mensaje va listo a nuestro WhatsApp." },
      nome: { pt: "Seu nome", en: "Your name", es: "Tu nombre" },
      quarto: { pt: "Quarto de interesse", en: "Room of interest", es: "Habitación de interés" },
      qualquer: { pt: "Qualquer quarto disponível", en: "Any available room", es: "Cualquier habitación disponible" },
      chegada: { pt: "Mês de chegada", en: "Arrival month", es: "Mes de llegada" },
      perfil: { pt: "Você é", en: "You are", es: "Eres" },
      perfis: [
        { pt: "Intercambista", en: "Exchange student", es: "Estudiante de intercambio" },
        { pt: "Pesquisador(a)", en: "Researcher", es: "Investigador(a)" },
        { pt: "Profissional / nômade digital", en: "Professional / digital nomad", es: "Profesional / nómada digital" }
      ],
      enviar: { pt: "Enviar pelo WhatsApp", en: "Send via WhatsApp", es: "Enviar por WhatsApp" },
      vantagens: [
        { icone: "message-circle", t: { pt: "Respondemos em português, espanhol e inglês", en: "We reply in Portuguese, Spanish and English", es: "Respondemos en portugués, español e inglés" } },
        { icone: "video", t: { pt: "Tour pela casa por videochamada", en: "House tour by video call", es: "Tour por la casa por videollamada" } },
        { icone: "file-pen-line", t: { pt: "Contrato assinado online, de qualquer país", en: "Contract signed online, from any country", es: "Contrato firmado en línea, desde cualquier país" } }
      ] },
    rodape: { feito: { pt: "Moradia para intercambistas, pesquisadores e profissionais no bairro Prado.", en: "Housing for exchange students, researchers and professionals in the Prado neighborhood.", es: "Vivienda para estudiantes de intercambio, investigadores y profesionales en el barrio Prado." } },
    msgQuarto: { pt: "Olá! Tenho interesse no {q} da Casa Prado.", en: "Hi! I’m interested in {q} at Casa Prado.", es: "¡Hola! Me interesa la {q} de Casa Prado." },
    msgEspera: { pt: "Olá! Gostaria de entrar na lista de espera do {q} da Casa Prado.", en: "Hi! I’d like to join the waiting list for {q} at Casa Prado.", es: "¡Hola! Me gustaría entrar en la lista de espera de la {q} de Casa Prado." },
    msgPasseios: { pt: "Olá! Gostaria de saber mais sobre os passeios da Casa Prado.", en: "Hi! I’d like to know more about the Casa Prado trips.", es: "¡Hola! Me gustaría saber más sobre los paseos de Casa Prado." },
    msgForm: {
      pt: "Olá! Meu nome é {nome}. Sou {perfil} e tenho interesse em: {quarto}. Chegada prevista: {mes}.",
      en: "Hi! My name is {nome}. I am a(n) {perfil} and I’m interested in: {quarto}. Expected arrival: {mes}.",
      es: "¡Hola! Me llamo {nome}. Soy {perfil} y me interesa: {quarto}. Llegada prevista: {mes}."
    }
  };

  /* ---------- utilidades ---------- */
  var L = escolherIdioma();
  function escolherIdioma() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && /^(pt|en|es)$/.test(q)) return q;
    try { var s = localStorage.getItem("cp_lang"); if (s) return s; } catch (e) {}
    var n = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return n === "en" || n === "es" ? n : "pt";
  }
  function t(o) { return o == null ? "" : typeof o === "string" ? o : (o[L] || o.pt || ""); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function ic(n) {
    var d = (window.ICONES || {})[n] || "";
    return '<svg class="lucide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  }
  function wa(msg) { return "https://wa.me/" + S.config.whatsapp + "?text=" + encodeURIComponent(msg); }
  function reais(v) { return "R$ " + Number(v).toLocaleString("pt-BR"); }
  function fmt(s, d) { return s.replace(/\{(\w+)\}/g, function (_, k) { return d[k] != null ? d[k] : ""; }); }
  function data(iso) {
    var p = iso.split("-");
    var dt = new Date(+p[0], +p[1] - 1, +p[2]);
    return dt.toLocaleDateString({ pt: "pt-BR", en: "en-US", es: "es-ES" }[L], { day: "numeric", month: "short", year: "numeric" });
  }
  function foto(src, extra) {
    return src
      ? '<div class="foto ' + (extra || "") + '"><img src="' + esc(src) + '" alt="" loading="lazy"></div>'
      : '<div class="foto foto--vazia ' + (extra || "") + '"><span>' + ic("camera") + esc(t(UI.fotoEmBreve)) + "</span></div>";
  }
  function cab(o, centro) {
    return '<div class="cab revela' + (centro ? " cab--centro" : "") + '"><span class="sobre">' + esc(t(o.sobre)) + "</span><h2>" + esc(t(o.titulo)) + "</h2>" + (o.sub ? "<p>" + esc(t(o.sub)) + "</p>" : "") + "</div>";
  }
  function visiveis(a) { return (a || []).filter(function (x) { return x.mostrar !== false; }); }
  function quartosVisiveis() { return visiveis(S.quartos); }
  function menorPreco() {
    var q = quartosVisiveis().filter(function (x) { return x.situacao !== "reservado"; });
    if (!q.length) q = quartosVisiveis();
    return q.length ? Math.min.apply(null, q.map(function (x) { return x.preco; })) : null;
  }

  /* ---------- seções ---------- */
  function secCapa() {
    var c = S.capa, p = menorPreco();
    return '<section class="capa" id="inicio">' +
      foto(c.foto, "capa__fundo") +
      '<div class="wrap capa__in">' +
        '<span class="capa__local">' + ic("map-pin") + esc(t(UI.cidade)) + "</span>" +
        "<h1>" + esc(t(c.titulo)) + "</h1>" +
        '<p class="capa__sub">' + esc(t(c.subtitulo)) + "</p>" +
        (p ? '<div class="capa__preco"><span>' + esc(t(UI.aPartirDe)) + "</span><b>" + reais(p) + '</b><span>' + esc(t(UI.mes)) + " · " + esc(t(c.inicio)) + "</span></div>" : "") +
        '<div class="capa__acoes"><a class="btn" href="#quartos">' + ic("bed-double") + esc(t(UI.verQuartos)) + '</a>' +
        '<a class="btn btn--claro" target="_blank" rel="noopener" href="' + wa(t(S.config.mensagemWhatsapp)) + '">' + ic("message-circle") + esc(t(UI.falar)) + "</a></div>" +
        '<div class="capa__destaques">' + c.destaques.map(function (d) { return "<div>" + ic(d.icone) + esc(t(d.texto)) + "</div>"; }).join("") + "</div>" +
      "</div></section>";
  }

  function secAnfitrioes() {
    var a = S.anfitrioes; if (a.mostrar === false) return "";
    return '<section class="secao" id="anfitrioes"><div class="wrap anfitrioes">' +
      '<div class="revela">' + foto(a.foto) + "</div>" +
      '<div class="anfitrioes__txt revela">' + cab(UI.anfitrioes).replace(" revela", "") +
        "<p>" + esc(t(a.texto)) + "</p>" +
        '<span class="selo">' + ic("languages") + esc(t(a.idiomas)) + "</span>" +
      "</div></div></section>";
  }

  function secCasa() {
    var c = S.casa;
    var gal = visiveis(c.galeria);
    return '<section class="secao secao--areia" id="casa"><div class="wrap">' + cab(UI.casa) +
      '<div class="andares">' +
        '<div class="andar revela"><h3>' + ic("circle-arrow-up") + esc(t(c.superior.titulo)) + "</h3><p>" + esc(t(c.superior.texto)) + "</p></div>" +
        '<div class="andar revela"><h3>' + ic("circle-arrow-down") + esc(t(c.inferior.titulo)) + "</h3><p>" + esc(t(c.inferior.texto)) + "</p></div>" +
      "</div>" +
      '<ul class="lista-icones lista-icones--3 revela">' + c.ambientes.map(function (x) { return "<li>" + ic(x.icone) + esc(t(x.texto)) + "</li>"; }).join("") + "</ul>" +
      '<div class="nota revela">' + ic("paw-print") + "<p>" + esc(t(c.pets)) + "</p></div>" +
      '<div class="nota revela" style="background:var(--verde-claro)">' + ic("moon") + "<p>" + esc(t(c.convivencia)) + "</p></div>" +
      (gal.length ? '<div class="galeria">' + gal.map(function (g) { return "<figure>" + foto(g.foto) + "<figcaption>" + esc(t(g.legenda)) + "</figcaption></figure>"; }).join("") + "</div>" : "") +
      "</div></section>";
  }

  function secQuartos() {
    var cd = S.condicoes;
    var cards = quartosVisiveis().map(function (q) {
      var sit = q.situacao || "disponivel";
      var rot = t(UI.quartos.sit[sit]) + (sit === "a_partir" && q.data ? " " + data(q.data) : "");
      var nome = t(q.nome);
      var msg = fmt(t(sit === "reservado" ? UI.msgEspera : UI.msgQuarto), { q: nome });
      return '<article class="quarto revela"><div class="quarto__foto">' + foto(q.foto) + '<span class="situacao situacao--' + esc(sit) + '">' + esc(rot) + "</span></div>" +
        '<div class="quarto__corpo">' +
          "<h3>" + esc(nome) + "</h3>" +
          '<span class="quarto__destaque">' + ic("star") + esc(t(q.destaque)) + "</span>" +
          '<p class="quarto__desc">' + esc(t(q.descricao)) + "</p>" +
          '<div class="quarto__preco"><b>' + reais(q.preco) + "</b><span>" + esc(t(UI.mes)) + "</span></div>" +
          '<a class="btn ' + (sit === "reservado" ? "btn--contorno " : "") + 'btn--bloco" target="_blank" rel="noopener" href="' + wa(msg) + '">' + ic("message-circle") + esc(t(sit === "reservado" ? UI.quartos.espera : UI.quartos.quero)) + "</a>" +
        "</div></article>";
    }).join("");
    return '<section class="secao" id="quartos"><div class="wrap">' + cab(UI.quartos) +
      '<div class="quartos">' + cards + "</div>" +
      '<div class="comodidades revela"><h3>' + esc(t(UI.quartos.todos)) + "</h3><ul>" +
        S.comodidades.map(function (c) { return "<li>" + ic(c.icone) + esc(t(c.texto)) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="condicoes revela">' +
        "<div>" + ic("calendar-check") + "<p>" + esc(fmt(t(UI.quartos.minimo), { n: cd.estadiaMinimaMeses })) + " · " + esc(fmt(t(UI.quartos.caucao), { n: cd.caucaoMeses })) + "</p></div>" +
        "<div>" + ic("file-pen-line") + "<p>" + esc(t(cd.contrato)) + "</p></div>" +
        "<div>" + ic("percent") + "<p>" + esc(t(cd.desconto)) + "</p></div>" +
      "</div></div></section>";
  }

  function secServicos() {
    var ordem = ["incluso", "cortesia", "opcional"];
    var icG = { incluso: "check", cortesia: "gift", opcional: "plus" };
    var grupos = ordem.map(function (g) {
      var itens = S.servicos.filter(function (s) { return s.classificacao === g; });
      if (!itens.length) return "";
      return '<div class="grupo grupo--' + g + ' revela"><div class="grupo__cab"><span>' + ic(icG[g]) + "</span><h3>" + esc(t(UI.servicos.grupos[g])) + "</h3></div><ul>" +
        itens.map(function (s) {
          var preco = "";
          if (g === "opcional" && s.preco != null) {
            preco = typeof s.preco === "number" ? reais(s.preco) : t(UI.servicos[s.preco === "combinar" ? "combinar" : "consulta"]);
          }
          var sub = [t(s.condicao), preco].filter(Boolean).join(" · ");
          return '<li class="item">' + ic(s.icone || "check") + "<div><b>" + esc(t(s.nome)) + "</b>" +
            (s.descricao ? "<small>" + esc(t(s.descricao)) + "</small>" : "") +
            (sub ? "<em>" + esc(sub) + "</em>" : "") + "</div></li>";
        }).join("") + "</ul></div>";
    }).filter(Boolean);
    if (!grupos.length) return "";
    return '<section class="secao secao--areia" id="servicos"><div class="wrap">' + cab(UI.servicos) +
      '<div class="grupos" style="--n:' + grupos.length + '">' + grupos.join("") + "</div></div></section>";
  }

  function secLocal() {
    var l = S.local;
    return '<section class="secao" id="local"><div class="wrap">' + cab(UI.local) +
      '<div class="local">' +
        '<div class="revela"><p style="font-size:1.05rem;margin-bottom:20px">' + esc(t(l.texto)) + "</p>" +
          '<h3 style="font-size:1.15rem;margin-bottom:12px">' + esc(t(UI.local.perto)) + "</h3>" +
          '<ul class="lista-icones">' + l.perto.map(function (x) { return "<li>" + ic(x.icone) + esc(t(x.texto)) + "</li>"; }).join("") + "</ul></div>" +
        '<div class="local__acesso revela"><h3>' + ic("graduation-cap") + esc(t(UI.local.acesso)) + "</h3>" +
          "<p>" + esc(t(l.acessos)) + "</p>" +
          '<div class="chips">' + l.universidades.map(function (u) { return "<span>" + esc(u) + "</span>"; }).join("") + "</div>" +
          '<a class="btn btn--claro" target="_blank" rel="noopener" href="' + esc(S.config.mapa) + '">' + ic("map") + esc(t(UI.local.mapa)) + "</a>" +
          '<p style="margin-top:14px;font-size:.84rem;color:#cfdcd5">' + esc(t(UI.local.endereco)) + "</p>" +
        "</div></div></div></section>";
  }

  function secPasseios() {
    var p = S.passeios; if (p.mostrar === false) return "";
    var itens = visiveis(p.itens); if (!itens.length) return "";
    return '<section class="secao secao--areia" id="passeios"><div class="wrap">' + cab({ sobre: UI.passeios.sobre, titulo: UI.passeios.titulo, sub: p.intro }) +
      '<div class="passeios">' + itens.map(function (x) {
        var tag = t(UI.passeios[x.tipo === "fds" ? "fds" : "dia"]) + (x.km ? " · " + x.km + " km" : "");
        return '<article class="passeio revela">' + foto(x.foto) + '<div class="passeio__txt"><span class="passeio__tag">' + esc(tag) + "</span><h3>" + esc(x.nome) + "</h3><p>" + esc(t(x.descricao)) + "</p></div></article>";
      }).join("") + "</div>" +
      '<div class="passeios-cta"><a class="btn btn--contorno" target="_blank" rel="noopener" href="' + wa(t(UI.msgPasseios)) + '">' + ic("compass") + esc(t(UI.passeios.saber)) + "</a></div>" +
      "</div></section>";
  }

  function secGlossario() {
    var g = S.glossario; if (g.mostrar === false) return "";
    var ps = visiveis(g.palavras); if (!ps.length) return "";
    return '<section class="secao" id="mineires"><div class="wrap">' + cab(UI.glossario, true) +
      '<div class="glossario">' + ps.map(function (w) {
        return '<button type="button" class="virar revela" aria-pressed="false"><span class="virar__in">' +
          '<span class="virar__frente"><b>' + esc(w.palavra) + "</b><small>" + ic("rotate-cw") + esc(t(UI.glossario.toque)) + "</small></span>" +
          '<span class="virar__verso"><p>' + esc(t(w.significado)) + "</p>" + (w.exemplo ? "<i>“" + esc(w.exemplo) + "”</i>" : "") + "</span>" +
          "</span></button>";
      }).join("") + "</div></div></section>";
  }

  function secFaq() {
    if (!S.faq || !S.faq.length) return "";
    return '<section class="secao secao--areia" id="faq"><div class="wrap">' + cab(UI.faq, true) +
      '<div class="faq">' + S.faq.map(function (f) {
        return '<details class="revela"><summary>' + esc(t(f.p)) + ic("plus") + "</summary><p>" + esc(t(f.r)) + "</p></details>";
      }).join("") + "</div></div></section>";
  }

  function mesesFuturos() {
    var out = [], d = new Date(), ini = new Date(2027, 1, 1);
    if (d < ini) d = ini; d = new Date(d.getFullYear(), d.getMonth(), 1);
    var loc = { pt: "pt-BR", en: "en-US", es: "es-ES" }[L];
    for (var i = 0; i < 12; i++) {
      var m = new Date(d.getFullYear(), d.getMonth() + i, 1);
      var s = m.toLocaleDateString(loc, { month: "long", year: "numeric" });
      out.push(s.charAt(0).toUpperCase() + s.slice(1));
    }
    return out;
  }

  function secContato() {
    var c = UI.contato;
    var qs = quartosVisiveis();
    return '<section class="secao secao--verde" id="contato"><div class="wrap contato">' +
      '<div class="revela">' + cab(c).replace(" revela", "") +
        '<ul class="contato__lista">' + c.vantagens.map(function (v) { return "<li>" + ic(v.icone) + esc(t(v.t)) + "</li>"; }).join("") + "</ul></div>" +
      '<form class="form revela" id="form" novalidate>' +
        "<label>" + esc(t(c.nome)) + '<input name="nome" autocomplete="given-name" required></label>' +
        "<label>" + esc(t(c.perfil)) + '<select name="perfil">' + c.perfis.map(function (p) { return "<option>" + esc(t(p)) + "</option>"; }).join("") + "</select></label>" +
        "<label>" + esc(t(c.quarto)) + '<select name="quarto"><option>' + esc(t(c.qualquer)) + "</option>" +
          qs.map(function (q) { return "<option>" + esc(t(q.nome) + " – " + t(q.destaque) + " (" + reais(q.preco) + ")") + "</option>"; }).join("") + "</select></label>" +
        "<label>" + esc(t(c.chegada)) + '<select name="mes">' + mesesFuturos().map(function (m) { return "<option>" + esc(m) + "</option>"; }).join("") + "</select></label>" +
        '<button class="btn btn--bloco" type="submit">' + ic("send") + esc(t(c.enviar)) + "</button>" +
      "</form></div></section>";
  }

  function rodape() {
    return '<div class="wrap"><div class="rodape__in">' +
      '<div><a href="#inicio" class="marca" style="margin-bottom:12px"><img src="assets/img/logo.jpg" alt="" width="44" height="44"><span class="marca__txt"><strong>Casa Prado</strong><small>Coliving &amp; Intercâmbio</small></span></a>' +
        "<p>" + esc(t(UI.rodape.feito)) + "</p><p>" + esc(t(UI.cidade)) + "</p></div>" +
      '<div><a class="btn btn--claro" target="_blank" rel="noopener" href="' + wa(t(S.config.mensagemWhatsapp)) + '">' + ic("message-circle") + esc(t(UI.falar)) + "</a>" +
        (S.config.email ? '<p style="margin-top:12px"><a href="mailto:' + esc(S.config.email) + '">' + esc(S.config.email) + "</a></p>" : "") + "</div>" +
      '</div><div class="rodape__mini">© ' + new Date().getFullYear() + " Casa Prado – Coliving &amp; Intercâmbio</div></div>";
  }

  /* ---------- montagem ---------- */
  function montar() {
    var h = IDIOMAS.filter(function (i) { return i.id === L; })[0];
    document.documentElement.lang = h.html;

    // faixa de aviso
    var av = document.getElementById("aviso");
    var fechado = false; try { fechado = sessionStorage.getItem("cp_aviso") === "1"; } catch (e) {}
    var ativo = S.aviso && S.aviso.mostrar && !fechado && (!S.aviso.ate || new Date() < new Date(S.aviso.ate + "T23:59:59"));
    av.hidden = !ativo;
    if (ativo) av.innerHTML = '<a href="#contato">' + esc(t(S.aviso.texto)) + '</a><button class="aviso__x" aria-label="Fechar">' + ic("x") + "</button>";

    // menu e idiomas
    var ids = { casa: "casa", quartos: "quartos", servicos: "servicos", local: "local", passeios: "passeios", faq: "faq", contato: "contato" };
    document.getElementById("menu").innerHTML = Object.keys(ids).filter(function (k) {
      return !(k === "passeios" && S.passeios.mostrar === false);
    }).map(function (k) { return '<a href="#' + ids[k] + '">' + esc(t(UI.menu[k])) + "</a>"; }).join("");
    document.getElementById("idiomas").innerHTML = IDIOMAS.map(function (i) {
      return '<button type="button" data-lang="' + i.id + '" aria-pressed="' + (i.id === L) + '" title="' + i.sigla + '"><span class="bandeira">' + i.bandeira + '</span><span class="sigla">' + i.sigla + "</span></button>";
    }).join("");

    document.getElementById("app").innerHTML =
      secCapa() + secAnfitrioes() + secCasa() + secQuartos() + secServicos() + secLocal() + secPasseios() + secGlossario() + secFaq() + secContato();
    document.getElementById("rodape").innerHTML = rodape();
    document.getElementById("waFlutuante").href = wa(t(S.config.mensagemWhatsapp));

    document.getElementById("menuBtn").innerHTML = ic("menu");
    revelar();
  }

  function revelar() {
    var els = document.querySelectorAll(".revela");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("visivel"); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("visivel"); io.unobserve(x.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- eventos ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]");
    if (b) {
      L = b.getAttribute("data-lang");
      try { localStorage.setItem("cp_lang", L); } catch (er) {}
      var u = new URL(location.href); u.searchParams.set("lang", L); history.replaceState(null, "", u);
      montar(); return;
    }
    var v = e.target.closest(".virar");
    if (v) { v.classList.toggle("virado"); v.setAttribute("aria-pressed", v.classList.contains("virado")); return; }
    if (e.target.closest(".aviso__x")) {
      document.getElementById("aviso").hidden = true;
      try { sessionStorage.setItem("cp_aviso", "1"); } catch (er) {}
      return;
    }
    var mb = e.target.closest("#menuBtn"), menu = document.getElementById("menu");
    if (mb) { var ab = menu.classList.toggle("aberto"); mb.setAttribute("aria-expanded", ab); return; }
    if (e.target.closest("#menu a")) { menu.classList.remove("aberto"); document.getElementById("menuBtn").setAttribute("aria-expanded", "false"); }
  });

  document.addEventListener("submit", function (e) {
    if (e.target.id !== "form") return;
    e.preventDefault();
    var f = e.target;
    if (!f.nome.value.trim()) { f.nome.focus(); return; }
    var msg = fmt(t(UI.msgForm), { nome: f.nome.value.trim(), perfil: f.perfil.value.toLowerCase(), quarto: f.quarto.value, mes: f.mes.value });
    window.open(wa(msg), "_blank", "noopener");
  });

  window.addEventListener("scroll", function () {
    document.getElementById("topo").classList.toggle("rolou", window.scrollY > 10);
  }, { passive: true });

  montar();
})();
