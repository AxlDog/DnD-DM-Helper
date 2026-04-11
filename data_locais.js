
const DATA_LOCAIS = [
	{
	  "id": "quest_caos_no_mercado",
	  "nome": "Panelas, Pólvora e Problemas",
	  "tipo": "social_combate",
	  "nivel_recomendado": 6,
	  "dificuldade": "medio_dinamico",

	  "descricao": "No mercado do cais, um halfling excêntrico parece estar causando uma série de acidentes… ou algo pior.",

	  "contexto": {
		"local": "Mercado do cais de Baldur's Gate",
		"hora": "dia"
	  },

	  "gatilho": [
		"Jogadores passam pelo mercado",
		"Investigam movimentações estranhas no cais",
		"São atraídos por uma pequena explosão ou confusão"
	  ],

	  "npcs_envolvidos": [
		{
		  "id": "npc_bb_fenn_cozinheiro",
		  "papel": "catalisador do evento"
		},
		{
		  "id": "npc_bb_thorv_mastro",
		  "papel": "observador oculto"
		}
	  ],

	  "etapas": [
		{
		  "nome": "O Acidente",
		  "descricao": "Fenn derruba uma barraca, espalhando óleo e comida. Uma pequena explosão ocorre.",
		  "testes": [
			"Percepção CD 12 para notar que foi proposital",
			"Investigação CD 13 para identificar substâncias estranhas"
		  ],
		  "resultado": "Jogadores podem ajudar ou confrontar Fenn"
		},
		{
		  "nome": "Escalada",
		  "descricao": "Guardas ou civis reagem. Fenn entra em pânico ou finge entrar.",
		  "eventos": [
			"Barracas começam a cair",
			"Terreno se torna difícil",
			"Possível combate leve ou perseguição"
		  ]
		},
		{
		  "nome": "Intervenção",
		  "descricao": "Se a situação sair do controle, Thorv aparece de longe cobrindo Fenn.",
		  "efeitos": [
			"Disparos de aviso",
			"Pressão para os jogadores recuarem ou negociarem"
		  ]
		},
		{
		  "nome": "Convite",
		  "descricao": "Se os jogadores lidarem com a situação sem matar Fenn, ele ri e os convida para beber.",
		  "resultado": "Leva os jogadores até a Taberna Maré Partida"
		}
	  ],

	  "terreno": {
		"descricao": "Mercado cheio, com barracas, caixas e pessoas correndo.",
		"dificuldade_movimento": true,
		"elementos": [
		  "Barracas frágeis",
		  "Barris de óleo",
		  "Caixas empilhadas"
		]
	  },

	  "objetivos": [
		{
		  "tipo": "interagir",
		  "descricao": "Descobrir o que Fenn está fazendo"
		},
		{
		  "tipo": "resolver",
		  "descricao": "Controlar ou sobreviver ao caos do mercado"
		},
		{
		  "tipo": "social",
		  "descricao": "Ganhar a confiança da tripulação"
		}
	  ],

	  "recompensas": {
		"xp": 1200,
		"narrativas": [
		  "Acesso à tripulação do Barba Branca",
		  "Informações sobre movimentações no cais"
		]
	  },

	  "transicao": {
		"proximo_evento": "Encontro com Edward Newgate",
		"descricao": "Na taberna, uma presença dominante aguarda. O ar muda quando ele entra."
	  }
	}
];
