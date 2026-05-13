/* =========================================================
 * SCHEMA: DATA_NPCS
 * =========================================================
 * Array de objetos detalhando personagens não-jogadores (canônicos e extras).
 * 
 * DATA_NPCS = [{
 *   id: String,
 *   nome: String,
 *   raca: String,
 *   status: String,
 *   descricao: String (opcional),
 *   observacoes: String (opcional),
 *   segredo: String (opcional),
 *   desejo: String (opcional),
 *   comportamento: String (opcional),
 *   ligacoes: [String] (opcional),
 *   nivel_ameaca: String (opcional)
 * }]
 * ========================================================= */

const DATA_NPCS = [
  {
    "id": "undefined",
    "nome": "Zaryn Relentless",
    "raca": "Tiefling",
    "status": "Usando",
    "observacoes": "Guia"
  },
  {
	  "id": "ORI-0007",
	  "nome": "Pimby Amoras-Doces",
	  "raca": "Halfling",
	  "status": "Usando",

	  "descricao": "Uma halfling de sorriso largo e voz açucarada, sempre carregando cestos de frutas cristalizadas e doces caseiros. Pimby parece inofensiva demais até para os padrões halflings, com gestos exageradamente gentis e uma presença quase reconfortante. Ainda assim, há algo em seu olhar que demora meio segundo a mais do que deveria quando avalia alguém.",

	  "observacoes": "Malagard disfarçada. A arquidiaba está enfraquecida pelo poder de Asmodeus e que transformou seu corpo no chão do Sexto. Mantém-se em Elturel sob múltiplas camadas de disfarce e contratos menores.",

	  "segredo": "Deseja desesperadamente recuperar sua antiga forma e posição como arquidiaba. Acredita que fragmentos de poder ligados ao Companheiro ou às ações de Zariel possam permitir sua restauração.",

	  "desejo": "Ser novamente temida e reverenciada como Malagard, não como uma sombra sobrevivente.",

	  "comportamento": "Extremamente paciente. Prefere plantar ideias em vez de dar ordens. Demonstra falsa empatia para induzir culpa ou confiança.",

	  "ligacoes": [
		"Avernus",
		"Shar (indiretamente)",
		"Seguidores oportunistas de Zariel"
	  ],

	  "nivel_ameaca": "Extremo (oculto)"
	},
  {
    "id": "undefined",
    "nome": "Xalruth Karrmoran",
    "raca": "Demonio (Glabrezu)",
    "status": "Usando",
    "observacoes": "Glabrezu que controla a parte oeste de Elturel no momento. Apesar de forte, prefere usar de métodos mais indiretos na hora de conseguir o que quer. Ele foi o primeiro a saber da chegada dos aventureiros, mas através dele, Malthis descobriu também e agora pensa em conjunto com sua irmã em como agir."
  },
  {
    "id": "undefined",
    "nome": "Sevariel Danthrazek",
    "raca": "Diabo (Succubus)",
    "status": "Usando",
    "observacoes": "Um dos dois diabos que chegaram antes na região e conseguiram organizar alguns demônios, ele é o que tem maior força bruta entre os três, mas sua inteligencia deixa muito a desejar. Ela e seu irmão Malthis, mantinham o controle inicial da cidade antes da chegada de Xalruth e Azhkharion. "
  },
  {
    "id": "undefined",
    "nome": "Malthis Aruvarran",
    "raca": "Diabo (Incubus)",
    "status": "Usando",
    "observacoes": "Um dos dois diabos que chegaram antes na região e conseguiram organizar alguns demônios, ele é o mais inteligente entre os 3, embora seja também o mais fraco. Malthis tem feito o papel de agente duplo em meio a todo o caos da cidade, mantendo contato tanto com Xalruth quanto com Azhkharion. Ele passa mensagens de um para o outro e aproveita para contar sobre o que vê e escuta nos dois lugares, sempre com cuidado para tirar o maior proveito possível disso."
  },
  {
    "id": "undefined",
    "nome": "Azhkharion Vel Inthur",
    "raca": "Diabo (Erinye)",
    "status": "Usando",
    "observacoes": "Este seria o chefe dos outros dois diabos e o mais poderoso diabo, até o momento, na região de Elturel."
  },
  {
    "id": "undefined",
    "nome": "lketh, o Avaliador",
    "raca": "Diabo",
    "status": "Usando",
    "observacoes": "Um diabo de aparência refinada, vestes impecáveis, voz calma. Ele não ameaça, apenas explica consequências."
  }
];
