
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
	},
	{
	  "id": "L7-03",
	  "nivel": 7,
	  "tipo": "local",
	  "nome": "Mansão Varkros",
	  "aparencia": "Uma mansão imponente de pedra escura com janelas altas e estreitas, cercada por muros reforçados e portões de ferro ornamentados. Bandeiras discretas exibem um símbolo elegante: uma corrente negra entrelaçada a uma lua crescente prateada.\nOs guardas vestem uniformes refinados em tons escuros, com casacos longos ajustados, detalhes em prata e o símbolo da corrente bordado no peito. Suas armaduras leves são polidas e funcionais, e todos carregam armas bem cuidadas.\nNo interior, o luxo é impecável — mármore, tapeçarias e iluminação suave — mas o silêncio é pesado, como se cada sala escondesse algo.\nCorredores longos e organizados levam a áreas restritas, e há sinais sutis de passagens ocultas.\nNos níveis inferiores, o ar muda completamente: frio, úmido e carregado com cheiro de ferro e desespero.",
	  
	  "encontravel": "Distrito nobre de Baldur's Gate, com acesso controlado e forte presença de guardas privados.",

	  "testes": {
		"Percepcao": "CD 15 para notar vigilância constante e rotas de patrulha dos guardas.",
		"Investigacao": "CD 16 para descobrir passagens secretas ou registros escondidos.",
		"Furtividade": "CD 15 para infiltrar sem alertar os guardas."
	  },

	  "ameacas": [
		"Guardas privados treinados e leais",
		"Travas arcanas em áreas restritas",
		"Possível presença do próprio Darian Varkros (Bruxo de alto nível)"
	  ],

	  "interacao": {
		"Carisma": "CD 16 para convencer guardas ou servos a fornecer informações.",
		"Enganacao": "CD 15 para se passar por convidados ou mercadores.",
		"Intimidacao": "CD 17 pode gerar respostas, mas aumenta vigilância."
	  },

	  "recompensa": {
		"itens": [
		  "Documentos de tráfico de escravos",
		  "Foco arcano raro",
		  "Armaduras leves +1"
		],
		"ouro": "Entre 300 e 800 PO em cofres e pagamentos ocultos"
	  },

	  "custo": {
		"consequencias": [
		  "Atenção de nobres influentes",
		  "Retaliação direta de Varkros",
		  "Possível envolvimento com forças infernais"
		]
	  },

	  "EXP por Completar": 3200
	},
	{
	  "id": "dng_subsolo_varkros",
	  "nome": "Subsolos da Mansão Varkros",
	  "nivel_recomendado": 7,
	  "tema": "Escravidão, pactos infernais e rituais de dominação",

	  "descricao": "Abaixo da mansão elegante, corredores de pedra fria se estendem em silêncio pesado. O cheiro de ferro e umidade domina o ar. Correntes ecoam ao menor movimento… e algo mais profundo parece responder.",

	  "areas": [
		{
		  "id": "area_entrada_oculta",
		  "nome": "Passagem Secreta",
		  "descricao": "Uma estante móvel revela uma escada estreita que desce para a escuridão.",
		  "testes": {
			"Investigacao": "CD 16 para encontrar o mecanismo",
			"Furtividade": "CD 14 para descer sem alertar guardas"
		  },
		  "inimigos": [
			{
			  "id": "mob_vigilante_corrente",
			  "quantidade": 1
			}
		  ]
		},

		{
		  "id": "area_celas",
		  "nome": "Celas de Contenção",
		  "descricao": "Filas de celas de ferro guardam prisioneiros exaustos. Correntes nas paredes brilham com runas fracas.",
		  "interacoes": [
			"Libertar prisioneiros (FOR CD 14 ou chaves)",
			"Interrogar prisioneiros sobre rotas e operações",
			"Alguns prisioneiros podem entrar em pânico ou atrapalhar"
		  ],
		  "inimigos": [
			{
			  "id": "mob_guarda_corrente_negra",
			  "quantidade": 2
			}
		  ],
		  "recompensas": [
			"Informações sobre Varkros",
			"Aliados temporários"
		  ]
		},

		{
		  "id": "area_registros",
		  "nome": "Sala de Registros",
		  "descricao": "Mesas organizadas com livros e pergaminhos detalhando transações… mas não de mercadorias comuns.",
		  "testes": {
			"Investigacao": "CD 15 para encontrar provas incriminadoras",
			"Arcanismo": "CD 14 para entender símbolos do patrono"
		  },
		  "recompensas": [
			"Documentos de tráfico",
			"Mapa de rotas marítimas ilegais",
			"Símbolos da Corrente Faminta"
		  ]
		},

		{
		  "id": "area_camara_correntes",
		  "nome": "Câmara das Correntes",
		  "descricao": "Correntes grossas descem do teto e se movem levemente… mesmo sem vento. O chão está marcado com círculos rúnicos.",
		  "elementos_interativos": [
			"Correntes podem prender (FOR CD 15 para escapar)",
			"Ativar runas causa 2d6 dano necrótico"
		  ],
		  "inimigos": [
			{
			  "id": "mob_executor_corrente",
			  "quantidade": 1
			}
		  ]
		},

		{
		  "id": "area_ritual",
		  "nome": "Salão do Ritual",
		  "descricao": "Um grande círculo arcano ocupa o centro da sala. Correntes convergem para um ponto central onde energia sombria pulsa. Sussurros ecoam das paredes… mas não há ninguém falando.",
		  "mecanicas": [
			"Ritual ativo fortalece inimigos (+1 em ataques)",
			"Destruir foco ritual (CA 15, 40 PV) enfraquece Varkros",
			"A cada 2 turnos, surge uma corrente espectral (ataque automático 1d8 necrótico)"
		  ],
		  "inimigos": [
			{
			  "id": "mob_darian_varkros",
			  "quantidade": 1
			},
			{
			  "id": "mob_executor_corrente",
			  "quantidade": 1
			}
		  ],
		  "objetivo": "Interromper o ritual ou derrotar Varkros"
		}
	  ],

	  "armadilhas": [
		{
		  "nome": "Corrente Oculta",
		  "descricao": "Correntes surgem das paredes ao passar",
		  "cd_percepcao": 15,
		  "cd_desarme": 14,
		  "efeito": "Restrained por 1 turno"
		}
	  ],

	  "recompensas": {
		"xp": 9000,
		"itens": [
		  "Foco Arcano das Correntes",
		  "Anel de Controle Menor",
		  "Poções de cura"
		],
		"ouro": {
		  "PO": 450,
		  "PP": 200,
		  "PC": 300
		}
	  },

	  "condicoes_especiais": [
		"Se o ritual não for interrompido, o patrono pode se manifestar parcialmente",
		"Libertar prisioneiros pode gerar aliados ou caos durante o combate final"
	  ]
	}
];
