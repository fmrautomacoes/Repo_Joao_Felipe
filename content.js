/* =====================================================================
   CASA PRADO – CONTEÚDO DO SITE
   ---------------------------------------------------------------------
   Todo o texto, preços e configurações do site ficam AQUI.
   O design (index.html, assets/) nunca precisa ser alterado para
   mudar conteúdo. Na Fase 2, o painel /admin vai editar este conteúdo.

   Cada texto tem 3 versões: pt (português), en (inglês), es (espanhol).
   ===================================================================== */

window.SITE = {

  /* ---------- 1. CONFIGURAÇÕES GERAIS ---------- */
  config: {
    // Número do WhatsApp: só dígitos, com 55 + DDD
    whatsapp: "553197739550",      // João: +55 31 9773-9550
    email: "",                       // opcional
    // Link do Google Maps apontando para a REGIÃO (bairro), não o endereço exato
    mapa: "https://www.google.com/maps/place/Prado,+Belo+Horizonte+-+MG",
    siteUrl: "",                     // preencher quando o domínio existir
    mensagemWhatsapp: {
      pt: "Olá! Vi o site da Casa Prado e gostaria de mais informações.",
      en: "Hi! I saw the Casa Prado website and would like more information.",
      es: "¡Hola! Vi el sitio de Casa Prado y me gustaría recibir más información."
    }
  },

  /* ---------- 2. FAIXA DE AVISO (some sozinha após a data) ---------- */
  aviso: {
    mostrar: true,
    ate: "2027-02-06",               // AAAA-MM-DD: depois desta data a faixa some
    texto: {
      pt: "🎭 Chegue para o Carnaval 2027 e fique para o semestre! Condições especiais – consulte.",
      en: "🎭 Arrive for Carnival 2027 and stay for the semester! Special conditions – ask us.",
      es: "🎭 ¡Llega para el Carnaval 2027 y quédate el semestre! Condiciones especiales – consúltanos."
    }
  },

  /* ---------- 3. CAPA ---------- */
  /* Textos com *asterisco* aparecem em destaque (itálico colorido) na versão 2. */
  capa: {
    foto: "assets/img/fotos/bh-mirante.jpg", // trocar pela foto da casa quando houver
    titulo: {
      pt: "Sua casa em *Belo Horizonte*",
      en: "Your home in *Belo Horizonte*",
      es: "Tu casa en *Belo Horizonte*"
    },
    subtitulo: {
      pt: "Quartos individuais com entrada independente, no tradicional bairro Prado, para intercambistas, pesquisadores e profissionais. Estadias a partir de 3 meses.",
      en: "Private rooms with an independent entrance in the traditional Prado neighborhood, for exchange students, researchers and professionals. Stays from 3 months.",
      es: "Habitaciones individuales con entrada independiente en el tradicional barrio Prado, para estudiantes de intercambio, investigadores y profesionales. Estadías desde 3 meses."
    },
    destaques: [
      { icone: "badge-check", texto: { pt: "Contas inclusas", en: "Bills included", es: "Gastos incluidos" } },
      { icone: "graduation-cap", texto: { pt: "Perto das universidades", en: "Close to universities", es: "Cerca de las universidades" } },
      { icone: "plane-landing", texto: { pt: "Recepção no aeroporto", en: "Airport pickup", es: "Recepción en el aeropuerto" } }
    ],
    inicio: {
      pt: "Check-in a partir de 6 de fevereiro de 2027",
      en: "Check-in from February 6, 2027",
      es: "Check-in a partir del 6 de febrero de 2027"
    }
  },

  /* ---------- 4. QUEM SOMOS ---------- */
  anfitrioes: {
    mostrar: true,
    foto: "",                        // ex.: "img/anfitrioes.jpg"
    texto: {
      pt: "Somos o casal anfitrião da Casa Prado. Moramos no andar de baixo, com nossos gatos e nosso cachorro, e adoramos receber gente do mundo inteiro. Aqui você vai provar a verdadeira comida mineira, do jeito que a gente faz em casa, e terá por perto quem conhece Belo Horizonte de verdade.",
      en: "We are the host couple of Casa Prado. We live downstairs with our cats and our dog, and we love welcoming people from all over the world. Here you will taste real Minas Gerais food, the way we make it at home, and you will have locals nearby who truly know Belo Horizonte.",
      es: "Somos la pareja anfitriona de Casa Prado. Vivimos en la planta baja con nuestros gatos y nuestro perro, y nos encanta recibir gente de todo el mundo. Aquí probarás la verdadera comida mineira, como la hacemos en casa, y tendrás cerca a quienes conocen Belo Horizonte de verdad."
    },
    idiomas: {
      pt: "Falamos português, espanhol e inglês.",
      en: "We speak Portuguese, Spanish and English.",
      es: "Hablamos portugués, español e inglés."
    }
  },

  /* ---------- 5. A CASA ---------- */
  casa: {
    superior: {
      titulo: { pt: "Andar superior · só dos moradores", en: "Upper floor · residents only", es: "Planta alta · solo residentes" },
      texto: {
        pt: "Entrada totalmente independente, exclusiva para 4 moradores, um por quarto.",
        en: "Fully independent entrance, exclusive to 4 residents, one per room.",
        es: "Entrada totalmente independiente, exclusiva para 4 residentes, uno por habitación."
      }
    },
    inferior: {
      titulo: { pt: "Andar inferior · casa dos anfitriões", en: "Lower floor · hosts’ home", es: "Planta baja · casa de los anfitriones" },
      texto: {
        pt: "Onde moramos e onde ficam a mini cervejaria, a biblioteca, os instrumentos musicais, a churrasqueira e o fogão a lenha.",
        en: "Where we live, and home to the mini brewery, the library, musical instruments, the barbecue and the wood-fired stove.",
        es: "Donde vivimos y donde están la mini cervecería, la biblioteca, los instrumentos musicales, la parrilla y el fogón a leña."
      }
    },
    ambientes: [
      { icone: "laptop", texto: { pt: "2 escritórios compartilhados e silenciosos", en: "2 quiet shared offices", es: "2 oficinas compartidas y silenciosas" } },
      { icone: "sofa", texto: { pt: "Sala de estar em 2 ambientes e recepção", en: "2-area living room and reception", es: "Sala de estar en 2 ambientes y recepción" } },
      { icone: "chef-hat", texto: { pt: "Cozinha equipada e copa", en: "Equipped kitchen and dining nook", es: "Cocina equipada y comedor" } },
      { icone: "microwave", texto: { pt: "Geladeira, fogão, airfryer, micro-ondas e cafeteira", en: "Fridge, stove, air fryer, microwave and coffee maker", es: "Heladera, cocina, freidora de aire, microondas y cafetera" } },
      { icone: "shower-head", texto: { pt: "1 banheiro completo com chuveiro + 2 lavabos", en: "1 full bathroom with shower + 2 half-baths", es: "1 baño completo con ducha + 2 medios baños" } },
      { icone: "cigarette-off", texto: { pt: "Casa 100% livre de fumo", en: "100% smoke-free house", es: "Casa 100% libre de humo" } }
    ],
    pets: {
      pt: "Temos 2 gatos (que vivem só dentro da nossa casa) e 1 cachorro dócil de porte médio (só no quintal). Nenhum pet tem acesso ao andar dos moradores.",
      en: "We have 2 cats (living only inside our home) and 1 gentle medium-sized dog (backyard only). No pet has access to the residents’ floor.",
      es: "Tenemos 2 gatos (que viven solo dentro de nuestra casa) y 1 perro dócil de tamaño mediano (solo en el patio). Ninguna mascota tiene acceso a la planta de los residentes."
    },
    convivencia: {
      pt: "Casa tranquila, ideal para quem estuda e trabalha: silêncio à noite e respeito a quem está nos escritórios.",
      en: "A calm house, ideal for studying and working: quiet at night and respect for those using the offices.",
      es: "Casa tranquila, ideal para estudiar y trabajar: silencio por la noche y respeto a quien está en las oficinas."
    },
    galeria: []                      // ex.: [{ foto: "img/sala.jpg", legenda: {pt:"Sala", en:"Living room", es:"Sala"} }]
  },

  /* ---------- 6. QUARTOS ---------- */
  // situacao: "disponivel" | "reservado" | "a_partir"  (com "data")
  quartos: [
    {
      mostrar: true, foto: "", preco: 1600, situacao: "a_partir", data: "2027-02-06",
      nome: { pt: "Quarto 1", en: "Room 1", es: "Habitación 1" },
      destaque: { pt: "Frigobar privativo", en: "Private minifridge", es: "Frigobar privado" },
      descricao: {
        pt: "Com frigobar dentro do quarto, além de todas as comodidades padrão.",
        en: "With a minifridge inside the room, plus all standard amenities.",
        es: "Con frigobar dentro de la habitación, además de todas las comodidades estándar."
      }
    },
    {
      mostrar: true, foto: "", preco: 1400, situacao: "a_partir", data: "2027-02-06",
      nome: { pt: "Quarto 2", en: "Room 2", es: "Habitación 2" },
      destaque: { pt: "Mesa de estudos própria", en: "Own study desk", es: "Escritorio propio" },
      descricao: {
        pt: "Compacto e aconchegante, com mesa e cadeira de estudos no quarto.",
        en: "Compact and cozy, with a study desk and chair in the room.",
        es: "Compacta y acogedora, con escritorio y silla de estudio en la habitación."
      }
    },
    {
      mostrar: true, foto: "", preco: 1500, situacao: "a_partir", data: "2027-02-06",
      nome: { pt: "Quarto 3", en: "Room 3", es: "Habitación 3" },
      destaque: { pt: "Padrão completo", en: "Full standard", es: "Estándar completa" },
      descricao: {
        pt: "Quarto completo, com acesso livre aos 2 escritórios da casa.",
        en: "Fully furnished room with free access to the 2 house offices.",
        es: "Habitación completa, con acceso libre a las 2 oficinas de la casa."
      }
    },
    {
      mostrar: true, foto: "", preco: 1500, situacao: "a_partir", data: "2027-02-06",
      nome: { pt: "Quarto 4", en: "Room 4", es: "Habitación 4" },
      destaque: { pt: "Padrão completo", en: "Full standard", es: "Estándar completa" },
      descricao: {
        pt: "Quarto completo, com acesso livre aos 2 escritórios da casa.",
        en: "Fully furnished room with free access to the 2 house offices.",
        es: "Habitación completa, con acceso libre a las 2 oficinas de la casa."
      }
    }
  ],
  comodidades: [
    { icone: "bed-double", texto: { pt: "Cama", en: "Bed", es: "Cama" } },
    { icone: "archive", texto: { pt: "Armário", en: "Wardrobe", es: "Armario" } },
    { icone: "fan", texto: { pt: "Ventilador de teto", en: "Ceiling fan", es: "Ventilador de techo" } },
    { icone: "armchair", texto: { pt: "Poltrona de leitura", en: "Reading armchair", es: "Sillón de lectura" } },
    { icone: "shirt", texto: { pt: "Enxoval completo", en: "Full linens", es: "Ropa de cama completa" } },
    { icone: "key-round", texto: { pt: "Fechadura com chave", en: "Private key lock", es: "Cerradura con llave" } }
  ],

  /* ---------- 7. CONDIÇÕES ---------- */
  condicoes: {
    estadiaMinimaMeses: 3,
    caucaoMeses: 1,
    contrato: {
      pt: "Contrato individual direto com o proprietário, assinado online.",
      en: "Individual contract directly with the owner, signed online.",
      es: "Contrato individual directo con el propietario, firmado en línea."
    },
    desconto: {
      pt: "Condições especiais para o Carnaval e para estadias longas – consulte.",
      en: "Special conditions for Carnival and long stays – ask us.",
      es: "Condiciones especiales para el Carnaval y estadías largas – consúltanos."
    }
  },

  /* ---------- 8. SERVIÇOS E EXPERIÊNCIAS ----------
     classificacao: "incluso" | "cortesia" | "opcional" | "oculto"
     preco (só opcional): número em R$, "consulta" ou "combinar"          */
  servicos: [
    { classificacao: "incluso", icone: "droplets", nome: { pt: "Água e gás", en: "Water and gas", es: "Agua y gas" } },
    { classificacao: "incluso", icone: "zap", nome: { pt: "Luz", en: "Electricity", es: "Luz" },
      condicao: { pt: "uso consciente", en: "conscious use", es: "uso consciente" } },
    { classificacao: "incluso", icone: "wifi", nome: { pt: "Wi-Fi de alta velocidade", en: "High-speed Wi-Fi", es: "Wi-Fi de alta velocidad" } },
    { classificacao: "incluso", icone: "landmark", nome: { pt: "IPTU", en: "Property tax", es: "Impuesto inmobiliario" } },
    { classificacao: "incluso", icone: "shirt", nome: { pt: "Enxoval", en: "Bed linens", es: "Ropa de cama" } },
    { classificacao: "incluso", icone: "spray-can", nome: { pt: "Produtos de limpeza", en: "Cleaning supplies", es: "Productos de limpieza" } },
    { classificacao: "incluso", icone: "plane-landing", nome: { pt: "Recepção no aeroporto", en: "Airport pickup", es: "Recepción en el aeropuerto" } },
    { classificacao: "incluso", icone: "library", nome: { pt: "Biblioteca", en: "Library", es: "Biblioteca" },
      descricao: {
        pt: "Literatura brasileira e estrangeira (em português) e literatura específica de filosofia, psicologia, sociologia, linguística e semiótica.",
        en: "Brazilian and foreign literature (in Portuguese) and specialized books on philosophy, psychology, sociology, linguistics and semiotics.",
        es: "Literatura brasileña y extranjera (en portugués) y literatura específica de filosofía, psicología, sociología, lingüística y semiótica."
      },
      condicao: { pt: "empréstimo com registro no livro", en: "borrow with a simple log entry", es: "préstamo con registro en el libro" } },
    { classificacao: "incluso", icone: "guitar", nome: { pt: "Instrumentos musicais", en: "Musical instruments", es: "Instrumentos musicales" },
      condicao: { pt: "das 10h às 20h, com registro no livro", en: "10am–8pm, with a log entry", es: "de 10 a 20 h, con registro en el libro" } },
    { classificacao: "cortesia", icone: "flame", nome: { pt: "Churrasco de boas-vindas", en: "Welcome barbecue", es: "Asado de bienvenida" },
      descricao: {
        pt: "Com acompanhamentos feitos no fogão a lenha, para receber você do jeito mineiro.",
        en: "With side dishes cooked on the wood-fired stove, to welcome you the Minas Gerais way.",
        es: "Con acompañamientos hechos en el fogón a leña, para recibirte al estilo mineiro."
      } },
    { classificacao: "cortesia", icone: "map", nome: { pt: "Tour básico por BH", en: "Basic BH tour", es: "Tour básico por BH" },
      condicao: { pt: "dia a combinar", en: "date to be arranged", es: "fecha a convenir" } },
    { classificacao: "opcional", icone: "beer", preco: "consulta", nome: { pt: "Curso prático de cerveja artesanal", en: "Hands-on craft beer course", es: "Curso práctico de cerveza artesanal" },
      condicao: { pt: "maiores de 18 anos", en: "18+ only", es: "mayores de 18 años" } },
    { classificacao: "opcional", icone: "sparkles", preco: "combinar", nome: { pt: "Faxina", en: "Cleaning service", es: "Limpieza" },
      condicao: { pt: "semanal, quinzenal ou mensal", en: "weekly, biweekly or monthly", es: "semanal, quincenal o mensual" } }
  ],

  /* ---------- 9. LOCALIZAÇÃO ---------- */
  local: {
    texto: {
      pt: "O Prado é um bairro tradicional e tranquilo de Belo Horizonte, com tudo a poucos minutos a pé.",
      en: "Prado is a traditional, peaceful neighborhood in Belo Horizonte, with everything a few minutes’ walk away.",
      es: "El Prado es un barrio tradicional y tranquilo de Belo Horizonte, con todo a pocos minutos a pie."
    },
    perto: [
      { icone: "shopping-cart", texto: { pt: "Supermercados e sacolão", en: "Supermarkets and produce market", es: "Supermercados y verdulería" } },
      { icone: "pill", texto: { pt: "Farmácias", en: "Pharmacies", es: "Farmacias" } },
      { icone: "croissant", texto: { pt: "Padarias", en: "Bakeries", es: "Panaderías" } },
      { icone: "utensils", texto: { pt: "Bares e restaurantes", en: "Bars and restaurants", es: "Bares y restaurantes" } },
      { icone: "shopping-bag", texto: { pt: "Polo da Moda (Barro Preto)", en: "Fashion district (Barro Preto)", es: "Polo de la Moda (Barro Preto)" } },
      { icone: "heart-pulse", texto: { pt: "Serviços de saúde públicos e particulares", en: "Public and private health services", es: "Servicios de salud públicos y privados" } }
    ],
    acessos: {
      pt: "Acesso rápido por transporte público à UFMG, CEFET-MG, PUC Minas, FUMEC e IBMEC, ao Hipercentro, à Savassi e a todas as regiões da cidade. Também há apps de transporte, patinetes e bikes compartilhadas.",
      en: "Quick public transport access to UFMG, CEFET-MG, PUC Minas, FUMEC and IBMEC, downtown, Savassi and every part of the city. Ride-hailing apps, shared scooters and bikes are also available.",
      es: "Acceso rápido en transporte público a la UFMG, CEFET-MG, PUC Minas, FUMEC e IBMEC, al centro, a Savassi y a todas las regiones de la ciudad. También hay apps de transporte, monopatines y bicicletas compartidas."
    },
    universidades: ["UFMG", "CEFET-MG", "PUC Minas", "FUMEC", "IBMEC"]
  },

  /* ---------- 10. PASSEIOS (sempre sob consulta) ---------- */
  passeios: {
    mostrar: true,
    intro: {
      pt: "Passeios organizados pelos anfitriões para grupos de 3 a 4 moradores. Valores e datas sob consulta.",
      en: "Trips organized by the hosts for groups of 3 to 4 residents. Prices and dates on request.",
      es: "Paseos organizados por los anfitriones para grupos de 3 a 4 residentes. Precios y fechas a consultar."
    },
    itens: [
      { mostrar: true, foto: "assets/img/fotos/inhotim-lago.jpg", km: 60, tipo: "dia", nome: "Inhotim",
        descricao: {
          pt: "Em Brumadinho: um dos maiores museus de arte contemporânea a céu aberto do mundo, dentro de um jardim botânico.",
          en: "In Brumadinho: one of the world’s largest open-air contemporary art museums, inside a botanical garden.",
          es: "En Brumadinho: uno de los mayores museos de arte contemporáneo al aire libre del mundo, dentro de un jardín botánico."
        } },
      { mostrar: true, foto: "assets/img/fotos/cachoeira-grande.jpg", km: 100, tipo: "dia", nome: "Serra do Cipó",
        descricao: {
          pt: "Trilhas, cânions e cachoeiras de água cristalina.",
          en: "Trails, canyons and crystal-clear waterfalls.",
          es: "Senderos, cañones y cascadas de agua cristalina."
        } },
      { mostrar: true, foto: "", km: 100, tipo: "dia", nome: "Ouro Preto",
        descricao: {
          pt: "Patrimônio Mundial da UNESCO: ladeiras, igrejas barrocas do século XVIII e obras de Aleijadinho.",
          en: "UNESCO World Heritage: steep streets, 18th-century Baroque churches and works by Aleijadinho.",
          es: "Patrimonio Mundial de la UNESCO: calles empinadas, iglesias barrocas del siglo XVIII y obras de Aleijadinho."
        } },
      { mostrar: true, foto: "", km: 90, tipo: "dia", nome: "Congonhas",
        descricao: {
          pt: "Os 12 Profetas de Aleijadinho no Santuário do Bom Jesus de Matosinhos.",
          en: "Aleijadinho’s 12 Prophets at the Sanctuary of Bom Jesus de Matosinhos.",
          es: "Los 12 Profetas de Aleijadinho en el Santuario del Bom Jesus de Matosinhos."
        } },
      { mostrar: true, foto: "", km: null, tipo: "fds", nome: "Estrada Real",
        descricao: {
          pt: "Fim de semana pela Estrada Real: Congonhas, Ouro Branco e Ouro Preto. Sai no sábado, volta no domingo.",
          en: "A weekend on the Estrada Real: Congonhas, Ouro Branco and Ouro Preto. Leave Saturday, back Sunday.",
          es: "Fin de semana por la Estrada Real: Congonhas, Ouro Branco y Ouro Preto. Sale el sábado, vuelve el domingo."
        } }
    ]
  },

  /* ---------- 11. GLOSSÁRIO MINEIRÊS ---------- */
  glossario: {
    mostrar: true,
    palavras: [
      { palavra: "Uai", significado: { pt: "Surpresa ou dúvida, tipo “ué!”.", en: "Surprise or doubt, like “huh?!”.", es: "Sorpresa o duda, como “¡¿eh?!”." },
        exemplo: "Uai, já acabou o pão de queijo?" },
      { palavra: "Trem", significado: { pt: "“Coisa”: serve para qualquer objeto.", en: "“Thing”: works for any object.", es: "“Cosa”: sirve para cualquier objeto." },
        exemplo: "Me passa esse trem aí." },
      { palavra: "Bão demais", significado: { pt: "Muito bom!", en: "Really good!", es: "¡Buenísimo!" },
        exemplo: "Esse café tá bão demais!" },
      { palavra: "Cadim", significado: { pt: "Um pouquinho.", en: "A tiny bit.", es: "Un poquito." },
        exemplo: "Põe só um cadim de açúcar." },
      { palavra: "Arredar", significado: { pt: "Sair da frente, mover-se.", en: "To move aside.", es: "Apartarse, moverse." },
        exemplo: "Arreda pra lá um cadim!" },
      { palavra: "Pelejar", significado: { pt: "Esforçar-se, batalhar por algo.", en: "To struggle, to work hard at something.", es: "Esforzarse, luchar por algo." },
        exemplo: "Pelejei, mas consegui!" },
      { palavra: "Nó / Nú", significado: { pt: "Espanto: “nossa!”.", en: "Amazement: “wow!”.", es: "Asombro: “¡guau!”." },
        exemplo: "Nó, que vista linda!" },
      { palavra: "Pão de queijo & café coado", significado: { pt: "O lanche sagrado de Minas.", en: "The sacred Minas snack.", es: "La merienda sagrada de Minas." },
        exemplo: "" }
    ]
  },

  /* ---------- 12. PERGUNTAS FREQUENTES ---------- */
  faq: [
    { p: { pt: "Qual é a estadia mínima?", en: "What is the minimum stay?", es: "¿Cuál es la estadía mínima?" },
      r: { pt: "3 meses. Estadias mais longas têm condições especiais.", en: "3 months. Longer stays get special conditions.", es: "3 meses. Las estadías más largas tienen condiciones especiales." } },
    { p: { pt: "O que está incluso no preço?", en: "What is included in the price?", es: "¿Qué incluye el precio?" },
      r: { pt: "Água, luz, gás, IPTU, Wi-Fi, enxoval, produtos de limpeza e recepção no aeroporto.", en: "Water, electricity, gas, property tax, Wi-Fi, bed linens, cleaning supplies and airport pickup.", es: "Agua, luz, gas, impuesto inmobiliario, Wi-Fi, ropa de cama, productos de limpieza y recepción en el aeropuerto." } },
    { p: { pt: "Como funciona a reserva?", en: "How does booking work?", es: "¿Cómo funciona la reserva?" },
      r: { pt: "Fale com a gente pelo WhatsApp. Depois de uma conversa (pode ser por vídeo), você recebe o contrato para assinar online, de qualquer país. A reserva é confirmada com a caução de 1 mês.", en: "Message us on WhatsApp. After a chat (video call is fine), you receive the contract to sign online, from any country. The booking is confirmed with a 1-month deposit.", es: "Escríbenos por WhatsApp. Después de una charla (puede ser por video), recibes el contrato para firmar en línea, desde cualquier país. La reserva se confirma con un depósito de 1 mes." } },
    { p: { pt: "Posso receber visitas?", en: "Can I have visitors?", es: "¿Puedo recibir visitas?" },
      r: { pt: "Sim, nas áreas sociais durante o dia. Os quartos são individuais; pernoites só com autorização prévia.", en: "Yes, in the social areas during the day. Rooms are private; overnight guests only with prior approval.", es: "Sí, en las áreas sociales durante el día. Las habitaciones son individuales; pernoctar solo con autorización previa." } },
    { p: { pt: "Quem cuida da limpeza?", en: "Who takes care of cleaning?", es: "¿Quién se encarga de la limpieza?" },
      r: { pt: "Os moradores cuidam da casa e recebem os produtos de limpeza. Se quiserem, podem combinar uma faxina semanal, quinzenal ou mensal.", en: "Residents look after the house and cleaning supplies are provided. If they wish, they can arrange a weekly, biweekly or monthly cleaning service.", es: "Los residentes cuidan la casa y reciben los productos de limpieza. Si quieren, pueden contratar una limpieza semanal, quincenal o mensual." } },
    { p: { pt: "Aceitam menores de 18 anos?", en: "Do you accept residents under 18?", es: "¿Aceptan menores de 18 años?" },
      r: { pt: "Sim, com o contrato assinado também pelos pais ou responsável legal.", en: "Yes, with the contract also signed by parents or a legal guardian.", es: "Sí, con el contrato firmado también por los padres o el tutor legal." } }
  ]
};
