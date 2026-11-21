/* =====================================================================
   CASA PRADO – MONTAGEM DA PÁGINA (versão principal, antiga v2)
   Lê o conteúdo de content.js (window.SITE).
   ===================================================================== */
(function () {
  "use strict";
  var S = window.SITE;
  var BASE = "";
  var IDIOMAS = [
    { id: "pt", bandeira: "🇧🇷", sigla: "PT", html: "pt-BR", loc: "pt-BR" },
    { id: "en", bandeira: "🇺🇸", sigla: "EN", html: "en", loc: "en-US" },
    { id: "es", bandeira: "🇪🇸", sigla: "ES", html: "es", loc: "es-ES" }
  ];

  var UI = {
    menu: [
      ["casa", { pt: "A casa", en: "The house", es: "La casa" }],
      ["quartos", { pt: "Quartos", en: "Rooms", es: "Habitaciones" }],
      ["como", { pt: "Como funciona", en: "How it works", es: "Cómo funciona" }],
      ["servicos", { pt: "Incluso", en: "Included", es: "Incluido" }],
      ["local", { pt: "Localização", en: "Location", es: "Ubicación" }],
      ["passeios", { pt: "Passeios", en: "Trips", es: "Paseos" }],
      ["faq", { pt: "Dúvidas", en: "FAQ", es: "Preguntas" }]
    ],
    cidade: { pt: "Belo Horizonte · MG · Brasil", en: "Belo Horizonte · MG · Brazil", es: "Belo Horizonte · MG · Brasil" },
    verQuartos: { pt: "Ver os quartos", en: "See the rooms", es: "Ver las habitaciones" },
    falar: { pt: "Chamar no WhatsApp", en: "Message on WhatsApp", es: "Escribir por WhatsApp" },
    mes: { pt: "/mês", en: "/month", es: "/mes" },
    fotoEmBreve: { pt: "Foto em breve", en: "Photo coming soon", es: "Foto próximamente" },
    numeros: [
      { pt: "a partir de, por mês", en: "from, per month", es: "desde, por mes" },
      { pt: "quartos individuais", en: "private rooms", es: "habitaciones individuales" },
      { pt: "meses de estadia mínima", en: "months minimum stay", es: "meses de estadía mínima" }
    ],
    faixa: ["UFMG", "CEFET-MG", "PUC Minas", "FUMEC", "IBMEC", "Savassi", "Pampulha", "Mercado Central", "Praça da Liberdade", "Inhotim", "Serra do Cipó", "Ouro Preto"],
    anf: { sobre: { pt: "Quem somos", en: "Who we are", es: "Quiénes somos" }, titulo: { pt: "Uma casa mineira *de verdade*", en: "A *true* Minas Gerais home", es: "Una casa mineira *de verdad*" } },
    casa: { sobre: { pt: "A casa", en: "The house", es: "La casa" }, titulo: { pt: "Dois andares, *duas casas*", en: "Two floors, *two homes*", es: "Dos plantas, *dos casas*" },
      sub: { pt: "Você mora no andar de cima, com entrada própria. Nós, no andar de baixo, sempre por perto.", en: "You live upstairs, with your own entrance. We live downstairs, always nearby.", es: "Tú vives arriba, con entrada propia. Nosotros, abajo, siempre cerca." } },
    quartos: { sobre: { pt: "Quartos", en: "Rooms", es: "Habitaciones" }, titulo: { pt: "Escolha o *seu canto*", en: "Choose *your space*", es: "Elige *tu rincón*" },
      sub: { pt: "4 quartos individuais, mobiliados e prontos para morar. Um morador por quarto.", en: "4 private rooms, furnished and ready to move in. One resident per room.", es: "4 habitaciones individuales, amuebladas y listas para vivir. Un residente por habitación." },
      quero: { pt: "Tenho interesse", en: "I’m interested", es: "Me interesa" },
      espera: { pt: "Lista de espera", en: "Waiting list", es: "Lista de espera" },
      sit: { disponivel: { pt: "Disponível", en: "Available", es: "Disponible" }, reservado: { pt: "Reservado", en: "Booked", es: "Reservada" }, a_partir: { pt: "A partir de", en: "From", es: "Desde" } },
      minimo: { pt: "Estadia mínima de {n} meses · caução de {c} mês", en: "Minimum stay {n} months · {c}-month deposit", es: "Estadía mínima de {n} meses · depósito de {c} mes" } },
    como: { sobre: { pt: "Simples assim", en: "That simple", es: "Así de simple" }, titulo: { pt: "Do primeiro oi à *sua chegada*", en: "From hello to *your arrival*", es: "Del primer hola a *tu llegada*" },
      passos: [
        { t: { pt: "Você chama", en: "You message us", es: "Nos escribes" }, d: { pt: "Conte quando chega e qual quarto prefere. Respondemos em português, espanhol e inglês.", en: "Tell us when you arrive and which room you prefer. We reply in Portuguese, Spanish and English.", es: "Cuéntanos cuándo llegas y qué habitación prefieres. Respondemos en portugués, español e inglés." } },
        { t: { pt: "Tour por vídeo", en: "Video tour", es: "Tour por video" }, d: { pt: "Mostramos a casa e o quarto por videochamada, sem compromisso.", en: "We show you the house and the room on a video call, no commitment.", es: "Te mostramos la casa y la habitación por videollamada, sin compromiso." } },
        { t: { pt: "Contrato online", en: "Online contract", es: "Contrato en línea" }, d: { pt: "Você assina pelo celular, de qualquer país. A caução confirma a reserva.", en: "You sign on your phone, from any country. The deposit confirms the booking.", es: "Firmas desde el celular, en cualquier país. El depósito confirma la reserva." } },
        { t: { pt: "A gente te busca", en: "We pick you up", es: "Te buscamos" }, d: { pt: "Recepção no aeroporto e churrasco de boas-vindas no fogão a lenha.", en: "Airport pickup and a welcome barbecue by the wood-fired stove.", es: "Recepción en el aeropuerto y asado de bienvenida en el fogón a leña." } }
      ] },
    servicos: { sobre: { pt: "Incluso e cortesias", en: "Included & perks", es: "Incluido y cortesías" }, titulo: { pt: "Você só precisa *chegar*", en: "You just need to *arrive*", es: "Solo tienes que *llegar*" },
      grupos: { incluso: { pt: "Incluso no preço", en: "Included in the price", es: "Incluido en el precio" }, cortesia: { pt: "Cortesias de boas-vindas", en: "Welcome perks", es: "Cortesías de bienvenida" }, opcional: { pt: "Opcionais", en: "Optional extras", es: "Opcionales" } },
      consulta: { pt: "sob consulta", en: "on request", es: "a consultar" }, combinar: { pt: "a combinar", en: "to be arranged", es: "a convenir" } },
    local: { sobre: { pt: "Localização", en: "Location", es: "Ubicación" }, titulo: { pt: "No Prado, *perto de tudo*", en: "In Prado, *close to everything*", es: "En el Prado, *cerca de todo*" },
      perto: { pt: "A poucos minutos a pé", en: "A few minutes’ walk", es: "A pocos minutos a pie" },
      mapa: { pt: "Ver a região no mapa", en: "See the area on the map", es: "Ver la zona en el mapa" },
      endereco: { pt: "O endereço completo é enviado após o primeiro contato.", en: "The full address is shared after first contact.", es: "La dirección completa se envía después del primer contacto." },
      fotos: [
        { foto: "assets/img/fotos/pampulha-igrejinha.jpg", t: { pt: "Universidades e cidade", en: "Universities & city", es: "Universidades y ciudad" }, uni: true },
        { foto: "assets/img/fotos/memorial-vale.jpg", t: { pt: "Cultura a um passo", en: "Culture nearby", es: "Cultura a un paso" }, d: { pt: "Praça da Liberdade, museus gratuitos, Mercado Central e a vida noturna da Savassi.", en: "Praça da Liberdade, free museums, Mercado Central and Savassi nightlife.", es: "Praça da Liberdade, museos gratuitos, Mercado Central y la vida nocturna de Savassi." } }
      ] },
    passeios: { sobre: { pt: "Passeios em Minas", en: "Trips in Minas", es: "Paseos en Minas" }, titulo: { pt: "Minas Gerais *além de BH*", en: "Minas Gerais *beyond BH*", es: "Minas Gerais *más allá de BH*" },
      dia: { pt: "Bate-volta", en: "Day trip", es: "Ida y vuelta" }, fds: { pt: "Fim de semana", en: "Weekend", es: "Fin de semana" },
      saber: { pt: "Quero saber dos passeios", en: "Ask about trips", es: "Consultar paseos" } },
    gloss: { sobre: { pt: "Mineirês", en: "Mineirês", es: "Mineirês" }, titulo: { pt: "Aprenda a falar *mineirês*", en: "Learn to speak *Mineirês*", es: "Aprende a hablar *mineirês*" },
      sub: { pt: "O jeitinho de falar de Minas. Toque nos cartões.", en: "The Minas way of speaking. Tap the cards.", es: "La forma de hablar de Minas. Toca las tarjetas." }, toque: { pt: "toque para ver", en: "tap to reveal", es: "toca para ver" } },
    faq: { sobre: { pt: "Dúvidas", en: "FAQ", es: "Preguntas" }, titulo: { pt: "Perguntas *frequentes*", en: "Frequently asked *questions*", es: "Preguntas *frecuentes*" } },
    contato: { sobre: { pt: "Contato", en: "Contact", es: "Contacto" }, titulo: { pt: "Vamos *conversar*?", en: "Shall we *talk*?", es: "¿*Conversamos*?" },
      sub: { pt: "Preencha em 20 segundos. A mensagem já vai pronta para o nosso WhatsApp.", en: "Fill in 20 seconds. The message goes ready to our WhatsApp.", es: "Completa en 20 segundos. El mensaje va listo a nuestro WhatsApp." },
      form: { pt: "Quero morar na Casa Prado", en: "I want to live at Casa Prado", es: "Quiero vivir en Casa Prado" },
      nome: { pt: "Seu nome", en: "Your name", es: "Tu nombre" }, perfil: { pt: "Você é", en: "You are", es: "Eres" },
      perfis: [{ pt: "Intercambista", en: "Exchange student", es: "Estudiante de intercambio" }, { pt: "Pesquisador(a)", en: "Researcher", es: "Investigador(a)" }, { pt: "Profissional / nômade digital", en: "Professional / digital nomad", es: "Profesional / nómada digital" }],
      quarto: { pt: "Quarto de interesse", en: "Room of interest", es: "Habitación de interés" }, qualquer: { pt: "Qualquer quarto disponível", en: "Any available room", es: "Cualquier habitación disponible" },
      chegada: { pt: "Mês de chegada", en: "Arrival month", es: "Mes de llegada" }, enviar: { pt: "Enviar pelo WhatsApp", en: "Send via WhatsApp", es: "Enviar por WhatsApp" },
      vant: [
        { i: "languages", t: { pt: "Atendimento em português, espanhol e inglês", en: "Service in Portuguese, Spanish and English", es: "Atención en portugués, español e inglés" } },
        { i: "video", t: { pt: "Tour pela casa por videochamada", en: "House tour by video call", es: "Tour por la casa por videollamada" } },
        { i: "file-pen-line", t: { pt: "Contrato assinado online, de qualquer país", en: "Contract signed online, from any country", es: "Contrato firmado en línea, desde cualquier país" } },
        { i: "plane-landing", t: { pt: "Recepção no aeroporto inclusa", en: "Airport pickup included", es: "Recepción en el aeropuerto incluida" } }
      ] },
    rodape: { pt: "Moradia para intercambistas, pesquisadores e profissionais no bairro Prado, em Belo Horizonte.", en: "Housing for exchange students, researchers and professionals in the Prado neighborhood, Belo Horizonte.", es: "Vivienda para estudiantes de intercambio, investigadores y profesionales en el barrio Prado, Belo Horizonte." },
    creditos: { pt: "Créditos das fotos", en: "Photo credits", es: "Créditos de las fotos" },
    msgQuarto: { pt: "Olá! Tenho interesse no {q} da Casa Prado.", en: "Hi! I’m interested in {q} at Casa Prado.", es: "¡Hola! Me interesa la {q} de Casa Prado." },
    msgEspera: { pt: "Olá! Gostaria de entrar na lista de espera do {q} da Casa Prado.", en: "Hi! I’d like to join the waiting list for {q} at Casa Prado.", es: "¡Hola! Me gustaría entrar en la lista de espera de la {q} de Casa Prado." },
    msgPasseios: { pt: "Olá! Gostaria de saber mais sobre os passeios da Casa Prado.", en: "Hi! I’d like to know more about the Casa Prado trips.", es: "¡Hola! Me gustaría saber más sobre los paseos de Casa Prado." },
    msgForm: { pt: "Olá! Meu nome é {nome}. Sou {perfil} e tenho interesse em: {quarto}. Chegada prevista: {mes}.", en: "Hi! My name is {nome}. I am a(n) {perfil} and I’m interested in: {quarto}. Expected arrival: {mes}.", es: "¡Hola! Me llamo {nome}. Soy {perfil} y me interesa: {quarto}. Llegada prevista: {mes}." }
  };

  /* ---------- utilidades ---------- */
  var L = (function () {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && /^(pt|en|es)$/.test(q)) return q;
    try { var s = localStorage.getItem("cp_lang"); if (s) return s; } catch (e) {}
    var n = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return n === "en" || n === "es" ? n : "pt";
  })();
  function lang() { return IDIOMAS.filter(function (i) { return i.id === L; })[0]; }
  function t(o) { return o == null ? "" : typeof o === "string" ? o : (o[L] || o.pt || ""); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function hl(s) { return esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>"); }
  function ic(n) { return '<svg class="lucide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ((window.ICONES || {})[n] || "") + "</svg>"; }
  function wa(m) { return "https://wa.me/" + S.config.whatsapp + "?text=" + encodeURIComponent(m); }
  function reais(v) { return "R$ " + Number(v).toLocaleString("pt-BR"); }
  function fmt(s, d) { return s.replace(/\{(\w+)\}/g, function (_, k) { return d[k] != null ? d[k] : ""; }); }
  function src(p) { return !p ? "" : /^(https?:|\/)/.test(p) ? p : BASE + p; }
  function data(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(lang().loc, { day: "numeric", month: "short" }); }
  function foto(p) {
    return p ? '<div class="foto"><img src="' + esc(src(p)) + '" alt="" loading="lazy"></div>'
      : '<div class="foto foto--vazia"><span>' + ic("camera") + esc(t(UI.fotoEmBreve)) + "</span></div>";
  }
  function cab(o, extra) {
    return '<div class="cab revela"><span class="eyebrow">' + esc(t(o.sobre)) + "</span><h2>" + hl(t(o.titulo)) + "</h2>" + (o.sub ? '<p class="lead">' + esc(t(o.sub)) + "</p>" : "") + (extra || "") + "</div>";
  }
  function sec(k, base) { var o = S.secoes && S.secoes[k]; return o ? Object.assign({}, base, o) : base; }
  function vis(a) { return (a || []).filter(function (x) { return x.mostrar !== false; }); }
  function menorPreco() {
    var q = vis(S.quartos).filter(function (x) { return x.situacao !== "reservado"; });
    if (!q.length) q = vis(S.quartos);
    return q.length ? Math.min.apply(null, q.map(function (x) { return x.preco; })) : null;
  }

  /* ---------- seções ---------- */
  function hero() {
    var c = S.capa, p = menorPreco();
    var cred = c.foto && /fotos\//.test(c.foto) ? '<span class="hero__credito"><a href="' + BASE + 'creditos.html">' + esc(t(UI.creditos)) + "</a></span>" : "";
    return '<section class="hero" id="inicio">' + foto(c.foto) +
      '<div class="hero__in">' +
        '<span class="pilula">' + esc(t(c.inicio)) + "</span>" +
        "<h1>" + hl(t(c.titulo)) + "</h1>" +
        '<p class="hero__sub">' + esc(t(c.subtitulo)) + "</p>" +
        '<div class="hero__acoes"><a class="btn btn-ouro" href="#quartos">' + esc(t(UI.verQuartos)) + ic("arrow-right") + "</a>" +
        '<a class="btn btn-vidro" target="_blank" rel="noopener" href="' + wa(t(S.config.mensagemWhatsapp)) + '">' + ic("message-circle") + esc(t(UI.falar)) + "</a></div>" +
        '<div class="numeros">' +
          (p ? "<div><b>" + reais(p) + "</b><span>" + esc(t(UI.numeros[0])) + "</span></div>" : "") +
          "<div><b>" + vis(S.quartos).length + "</b><span>" + esc(t(UI.numeros[1])) + "</span></div>" +
          "<div><b>" + S.condicoes.estadiaMinimaMeses + "</b><span>" + esc(t(UI.numeros[2])) + "</span></div>" +
        "</div></div>" + cred + "</section>" +
      '<div class="faixa" aria-hidden="true"><div class="faixa__trilho">' +
        (S.faixa || UI.faixa).concat(S.faixa || UI.faixa).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div></div>";
  }

  function anfitrioes() {
    var a = S.anfitrioes; if (a.mostrar === false) return "";
    return '<section class="secao" id="anfitrioes"><div class="wrap anf">' +
      '<div class="anf__foto revela">' + foto(a.foto) + '<div class="anf__selo">' + ic("languages") + "<span>" + esc(t(a.idiomas)) + "</span></div></div>" +
      '<div class="revela">' + cab(sec("anfitrioes", UI.anf)).replace(' revela"', '"') + '<p class="texto">' + esc(t(a.texto)) + "</p></div>" +
      "</div></section>";
  }

  function casa() {
    var c = S.casa;
    return '<section class="secao escuro" id="casa"><div class="wrap">' + cab(sec("casa", UI.casa)) +
      '<div class="casa">' +
        '<div class="andar revela"><span class="andar__n">01</span><h3>' + esc(t(c.superior.titulo)) + "</h3><p>" + esc(t(c.superior.texto)) + "</p></div>" +
        '<div class="andar revela"><span class="andar__n">02</span><h3>' + esc(t(c.inferior.titulo)) + "</h3><p>" + esc(t(c.inferior.texto)) + "</p></div>" +
      "</div>" +
      '<div class="tiles">' + c.ambientes.map(function (x) { return '<div class="tile revela"><i>' + ic(x.icone) + "</i>" + esc(t(x.texto)) + "</div>"; }).join("") + "</div>" +
      '<div class="notas"><div class="nota revela">' + ic("paw-print") + "<p>" + esc(t(c.pets)) + '</p></div><div class="nota revela">' + ic("moon") + "<p>" + esc(t(c.convivencia)) + "</p></div></div>" +
      "</div></section>";
  }

  function quartos() {
    var cards = vis(S.quartos).map(function (q, i) {
      var sit = q.situacao || "disponivel", nome = t(q.nome);
      var rot = t(UI.quartos.sit[sit]) + (sit === "a_partir" && q.data ? " " + data(q.data) : "");
      var msg = fmt(t(sit === "reservado" ? UI.msgEspera : UI.msgQuarto), { q: nome });
      return '<article class="quarto revela"><div class="quarto__foto">' + foto(q.foto) +
        '<span class="etiqueta etiqueta--' + esc(sit) + '">' + esc(rot) + '</span><span class="quarto__num" aria-hidden="true">0' + (i + 1) + "</span></div>" +
        '<div class="quarto__corpo"><span class="quarto__dest">' + esc(t(q.destaque)) + "</span><h3>" + esc(nome) + "</h3><p>" + esc(t(q.descricao)) + "</p>" +
        '<div class="quarto__preco"><b>' + reais(q.preco) + "</b><span>" + esc(t(UI.mes)) + "</span></div>" +
        '<a class="btn ' + (sit === "reservado" ? "btn-linha" : "btn-escuro") + ' btn-bloco" target="_blank" rel="noopener" href="' + wa(msg) + '">' + ic("message-circle") + esc(t(sit === "reservado" ? UI.quartos.espera : UI.quartos.quero)) + "</a>" +
        "</div></article>";
    }).join("");
    var cd = S.condicoes;
    return '<section class="secao" id="quartos"><div class="wrap">' + cab(sec("quartos", UI.quartos)) +
      '<div class="quartos">' + cards + "</div>" +
      '<div class="todos revela">' + S.comodidades.map(function (c) { return "<span>" + ic(c.icone) + esc(t(c.texto)) + "</span>"; }).join("") + "</div>" +
      '<div class="cond revela">' +
        "<div>" + ic("calendar-check") + "<p>" + esc(fmt(t(UI.quartos.minimo), { n: cd.estadiaMinimaMeses, c: cd.caucaoMeses })) + "</p></div>" +
        "<div>" + ic("file-pen-line") + "<p>" + esc(t(cd.contrato)) + "</p></div>" +
        "<div>" + ic("percent") + "<p>" + esc(t(cd.desconto)) + "</p></div>" +
      "</div></div></section>";
  }

  function como() {
    return '<section class="secao escuro" id="como"><div class="wrap">' + cab(sec("como", UI.como)) +
      '<div class="passos">' + sec("como", UI.como).passos.map(function (p, i) {
        return '<div class="passo revela"><b>0' + (i + 1) + "</b><h3>" + esc(t(p.t)) + "</h3><p>" + esc(t(p.d)) + "</p></div>";
      }).join("") + "</div></div></section>";
  }

  function servicos() {
    var icG = { incluso: "check", cortesia: "gift", opcional: "plus" };
    var g = ["incluso", "cortesia", "opcional"].map(function (k) {
      var itens = S.servicos.filter(function (s) { return s.classificacao === k; });
      if (!itens.length) return "";
      return '<div class="grupo grupo--' + k + ' revela"><div class="grupo__cab"><i>' + ic(icG[k]) + "</i><h3>" + esc(t(UI.servicos.grupos[k])) + "</h3></div><ul>" +
        itens.map(function (s) {
          var preco = k === "opcional" && s.preco != null ? (typeof s.preco === "number" ? reais(s.preco) : t(UI.servicos[s.preco === "combinar" ? "combinar" : "consulta"])) : "";
          var sub = [t(s.condicao), preco].filter(Boolean).join(" · ");
          return '<li class="item">' + ic(s.icone || "check") + "<div><b>" + esc(t(s.nome)) + "</b>" + (s.descricao ? "<small>" + esc(t(s.descricao)) + "</small>" : "") + (sub ? "<em>" + esc(sub) + "</em>" : "") + "</div></li>";
        }).join("") + "</ul></div>";
    }).filter(Boolean);
    if (!g.length) return "";
    return '<section class="secao" id="servicos"><div class="wrap">' + cab(sec("servicos", UI.servicos)) + '<div class="grupos">' + g.join("") + "</div></div></section>";
  }

  function local() {
    var l = S.local, f = UI.local.fotos;
    return '<section class="secao papel" id="local"><div class="wrap">' + cab(sec("local", UI.local)) +
      '<div class="mosaico">' +
        '<div class="mosaico__texto revela"><p class="lead" style="margin-top:0">' + esc(t(l.texto)) + "</p><h3>" + esc(t(UI.local.perto)) + '</h3><ul class="lista">' +
          l.perto.map(function (x) { return "<li>" + ic(x.icone) + esc(t(x.texto)) + "</li>"; }).join("") + "</ul>" +
          '<div style="margin-top:26px;display:flex;flex-wrap:wrap;gap:12px;align-items:center"><a class="btn btn-linha" target="_blank" rel="noopener" href="' + esc(S.config.mapa) + '">' + ic("map") + esc(t(UI.local.mapa)) + "</a>" +
          '<small style="color:var(--cinza)">' + esc(t(UI.local.endereco)) + "</small></div></div>" +
        f.map(function (x) {
          return '<div class="cartao-foto revela">' + foto(x.foto) + '<div class="cartao-foto__txt"><h3>' + esc(t(x.t)) + "</h3><p>" + esc(x.uni ? t(l.acessos) : t(x.d)) + "</p>" +
            (x.uni ? '<div class="chips">' + l.universidades.map(function (u) { return "<span>" + esc(u) + "</span>"; }).join("") + "</div>" : "") + "</div></div>";
        }).join("") +
      "</div></div></section>";
  }

  function passeios() {
    var p = S.passeios; if (p.mostrar === false) return "";
    var it = vis(p.itens); if (!it.length) return "";
    var fundo = (it.filter(function (x) { return x.foto; })[0] || {}).foto;
    return '<section class="secao escuro passeios-sec" id="passeios">' + foto(fundo) + '<div class="wrap">' +
      '<div class="cab--linha">' + cab({ sobre: sec("passeios", UI.passeios).sobre, titulo: sec("passeios", UI.passeios).titulo, sub: p.intro }) +
        '<div class="setas revela"><button type="button" data-rolar="-1" aria-label="Anterior">' + ic("arrow-left") + '</button><button type="button" data-rolar="1" aria-label="Próximo">' + ic("arrow-right") + "</button></div></div>" +
      '<div class="trilho" id="trilho">' + it.map(function (x) {
        var tag = t(UI.passeios[x.tipo === "fds" ? "fds" : "dia"]) + (x.km ? " · " + x.km + " km" : "");
        return '<article class="passeio">' + foto(x.foto) + '<span class="etiqueta" style="top:14px;left:14px">' + esc(tag) + '</span><div class="passeio__txt"><h3>' + esc(x.nome) + "</h3><p>" + esc(t(x.descricao)) + "</p></div></article>";
      }).join("") + "</div>" +
      '<div class="passeios-rodape"><a class="btn btn-ouro" target="_blank" rel="noopener" href="' + wa(t(UI.msgPasseios)) + '">' + ic("compass") + esc(t(UI.passeios.saber)) + "</a></div>" +
      "</div></section>";
  }

  function glossario() {
    var g = S.glossario; if (g.mostrar === false) return "";
    var ps = vis(g.palavras); if (!ps.length) return "";
    return '<section class="secao" id="mineires"><div class="wrap">' + cab(sec("glossario", UI.gloss)) +
      '<div class="glossario">' + ps.map(function (w) {
        return '<button type="button" class="virar revela" aria-pressed="false"><span class="virar__in">' +
          '<span class="virar__f"><b>' + esc(w.palavra) + "</b><small>" + ic("rotate-cw") + esc(t(UI.gloss.toque)) + "</small></span>" +
          '<span class="virar__v"><p>' + esc(t(w.significado)) + "</p>" + (w.exemplo ? "<i>“" + esc(w.exemplo) + "”</i>" : "<i></i>") + "</span></span></button>";
      }).join("") + "</div></div></section>";
  }

  function faq() {
    if (!S.faq || !S.faq.length) return "";
    return '<section class="secao papel" id="faq"><div class="wrap">' + cab(sec("faq", UI.faq)) + '<div class="faq">' +
      S.faq.map(function (f) { return '<details class="revela"><summary>' + esc(t(f.p)) + ic("plus") + "</summary><p>" + esc(t(f.r)) + "</p></details>"; }).join("") +
      "</div></div></section>";
  }

  function meses() {
    var out = [], d = new Date(), ini = new Date(2027, 1, 1);
    if (d < ini) d = ini;
    for (var i = 0; i < 12; i++) {
      var s = new Date(d.getFullYear(), d.getMonth() + i, 1).toLocaleDateString(lang().loc, { month: "long", year: "numeric" });
      out.push(s.charAt(0).toUpperCase() + s.slice(1));
    }
    return out;
  }

  function contato() {
    var c = UI.contato;
    return '<section class="secao contato-sec escuro" id="contato"><div class="wrap contato">' +
      '<div class="revela">' + cab(sec("contato", c)).replace(' revela"', '"') + '<ul class="vant">' + c.vant.map(function (v) { return "<li>" + ic(v.i) + esc(t(v.t)) + "</li>"; }).join("") + "</ul></div>" +
      '<form class="form revela" id="form" novalidate><h3>' + esc(t(c.form)) + "</h3>" +
        "<label>" + esc(t(c.nome)) + '<input name="nome" autocomplete="given-name" required></label>' +
        "<label>" + esc(t(c.perfil)) + '<select name="perfil">' + c.perfis.map(function (p) { return "<option>" + esc(t(p)) + "</option>"; }).join("") + "</select></label>" +
        "<label>" + esc(t(c.quarto)) + '<select name="quarto"><option>' + esc(t(c.qualquer)) + "</option>" + vis(S.quartos).map(function (q) { return "<option>" + esc(t(q.nome) + " – " + t(q.destaque) + " (" + reais(q.preco) + ")") + "</option>"; }).join("") + "</select></label>" +
        "<label>" + esc(t(c.chegada)) + '<select name="mes">' + meses().map(function (m) { return "<option>" + esc(m) + "</option>"; }).join("") + "</select></label>" +
        '<button class="btn btn-zap btn-bloco" type="submit">' + ic("send") + esc(t(c.enviar)) + "</button>" +
      "</form></div></section>";
  }

  function rodape() {
    return '<div class="wrap"><div class="rodape__in"><div>' +
      '<a href="#inicio" class="marca"><img src="' + BASE + 'assets/img/logo.jpg" alt="" width="40" height="40"><span>Casa <em>Prado</em></span></a>' +
      "<p>" + esc(t(UI.rodape)) + "</p><p>" + esc(t(UI.cidade)) + "</p></div>" +
      '<div><a class="btn btn-zap" target="_blank" rel="noopener" href="' + wa(t(S.config.mensagemWhatsapp)) + '">' + ic("message-circle") + esc(t(UI.falar)) + "</a></div></div>" +
      '<div class="rodape__mini">© ' + new Date().getFullYear() + ' Casa Prado – Coliving &amp; Intercâmbio · <a href="' + BASE + 'creditos.html">' + esc(t(UI.creditos)) + "</a></div></div>";
  }

  /* ---------- montagem ---------- */
  function montar() {
    document.documentElement.lang = lang().html;
    var av = document.getElementById("aviso"), fechado = false;
    try { fechado = sessionStorage.getItem("cp_aviso") === "1"; } catch (e) {}
    var ativo = S.aviso && S.aviso.mostrar && !fechado && (!S.aviso.ate || new Date() < new Date(S.aviso.ate + "T23:59:59"));
    av.hidden = !ativo;
    if (ativo) av.innerHTML = '<a href="#contato">' + esc(t(S.aviso.texto)) + '</a><button class="aviso__x" aria-label="Fechar">' + ic("x") + "</button>";

    document.getElementById("menu").innerHTML = UI.menu.filter(function (m) { return !(m[0] === "passeios" && S.passeios.mostrar === false); })
      .map(function (m) { return '<a href="#' + m[0] + '">' + esc(t(m[1])) + "</a>"; }).join("") +
      '<a class="btn btn-zap" style="margin-left:6px;padding:10px 18px;font-size:14px" target="_blank" rel="noopener" href="' + wa(t(S.config.mensagemWhatsapp)) + '">' + ic("message-circle") + "WhatsApp</a>";
    document.getElementById("idiomas").innerHTML = IDIOMAS.map(function (i) {
      return '<button type="button" data-lang="' + i.id + '" aria-pressed="' + (i.id === L) + '" title="' + i.sigla + '"><span class="bandeira">' + i.bandeira + '</span><span class="sigla">' + i.sigla + "</span></button>";
    }).join("");
    document.getElementById("menuBtn").innerHTML = ic("menu");

    document.getElementById("app").innerHTML = hero() + anfitrioes() + casa() + quartos() + como() + servicos() + local() + passeios() + glossario() + faq() + contato();
    document.getElementById("rodape").innerHTML = rodape();
    document.getElementById("waFlutuante").href = wa(t(S.config.mensagemWhatsapp));
    ajustarTopo();
    revelar();
  }

  function ajustarTopo() {
    var av = document.getElementById("aviso"), topo = document.getElementById("topo");
    topo.style.setProperty("--topo-y", av.hidden ? "0px" : av.offsetHeight + "px");
    topo.classList.toggle("fixo", window.scrollY > 40);
  }

  function revelar() {
    var els = document.querySelectorAll(".revela");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("visivel"); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("visivel"); io.unobserve(x.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

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
    if (e.target.closest(".aviso__x")) { document.getElementById("aviso").hidden = true; try { sessionStorage.setItem("cp_aviso", "1"); } catch (er) {} ajustarTopo(); return; }
    var r = e.target.closest("[data-rolar]");
    if (r) { var tr = document.getElementById("trilho"); tr.scrollBy({ left: +r.getAttribute("data-rolar") * Math.min(tr.clientWidth * 0.85, 360), behavior: "smooth" }); return; }
    if (e.target.closest("#menuBtn")) { var ab = document.body.classList.toggle("menu-aberto"); document.getElementById("menuBtn").setAttribute("aria-expanded", ab); return; }
    if (e.target.closest("#menu a")) { document.body.classList.remove("menu-aberto"); document.getElementById("menuBtn").setAttribute("aria-expanded", "false"); }
  });

  document.addEventListener("submit", function (e) {
    if (e.target.id !== "form") return;
    e.preventDefault();
    var f = e.target;
    if (!f.nome.value.trim()) { f.nome.focus(); return; }
    window.open(wa(fmt(t(UI.msgForm), { nome: f.nome.value.trim(), perfil: f.perfil.value.toLowerCase(), quarto: f.quarto.value, mes: f.mes.value })), "_blank", "noopener");
  });

  window.addEventListener("scroll", ajustarTopo, { passive: true });
  window.addEventListener("resize", ajustarTopo);
  montar();
})();
