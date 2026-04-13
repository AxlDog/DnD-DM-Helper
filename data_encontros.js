const DATA_ENCONTROS = [
  {
  "id": "enc_band_acampamento",
  "nome": "Fortificação dos Salteadores",
  "tipo": "combate",
  "nivel_recomendado": 6,
  "dificuldade": "dificil_alto",

  "descricao": "Uma fortificação improvisada protege um acampamento de bandidos. O local está ativo e preparado para combate.",

  "contexto": {
    "local": "Estrada para Baldur's Gate",
    "hora": "dia"
  },

  "inimigos": [
    {
      "id": "mob_capitao_salteador",
      "quantidade": 1,
      "posicao_inicial": "tenda central"
    },
    {
      "id": "mob_subcapitao_bruto",
      "quantidade": 1,
      "posicao_inicial": "linha de frente"
    },
    {
      "id": "mob_bandido_plus1",
      "quantidade": 6,
      "posicao_inicial": "espalhados pelo acampamento"
    }
  ],

  "terreno": {
    "descricao": "Acampamento cercado por estacas e com espaço limitado entre tendas.",
    "dificuldade_movimento": true,
    "cobertura": [
      {
        "tipo": "meia",
        "descricao": "Barricadas de madeira"
      },
      {
        "tipo": "meia",
        "descricao": "Tendas"
      }
    ]
  },

  "elementos_interativos": [
    {
      "nome": "Fogueira Central",
      "tipo": "ambiente",
      "descricao": "Fogo ativo no centro do acampamento",
      "interacoes": [
        "Empurrar inimigos causa 1d6 de dano de fogo",
        "Pode espalhar fogo em área próxima"
      ]
    },
    {
      "nome": "Barricadas de Estacas",
      "tipo": "objeto",
      "descricao": "Estacas apontadas para fora",
      "interacoes": [
        "Atravessar causa 1d6 de dano perfurante",
        "Pode ser destruída (CA 12, 15 PV)"
      ]
    },
    {
      "nome": "Barril de Água",
      "tipo": "recurso",
      "descricao": "Reservatório improvisado",
      "interacoes": [
        "Apagar fogo",
        "Derrubar cria terreno escorregadio"
      ]
    }
  ],

  "armadilhas": [
    {
      "nome": "Armadilha de Corda",
      "descricao": "Corda tensionada derruba o alvo",
      "cd_percepcao": 13,
      "cd_desarme": 12,
      "efeito": "Criatura fica caída (prone)"
    }
  ],

  "objetivos": [
    {
      "tipo": "derrotar",
      "descricao": "Eliminar o líder dos bandidos e libertar a elfa prisioneira",
    }
  ],

  "recompensas": {
    "xp": 6300,
    "itens": [
      "Lança de Choque",
      "Armas +1",
      "Armaduras +1"
    ],
    "ouro": {
      "PO": 366,
      "PP": 872,
      "PC": 1348
    }
  },

  "taticas_inimigos": [
    "Subcapitão avança primeiro",
    "Capitão usa magia antes de entrar no combate",
    "Bandidos cercam alvos frágeis"
  ],

  "condicoes_especiais": [
    "Se o capitão morrer, bandidos se dispersam"
  ]
  },
  {
	  "id": "enc_losango_convergencia_infernal",
	  "nome": "Luta para ajudar Frieren",
	  "tipo": "combate",
	  "nivel_recomendado": 15,
	  "dificuldade": "mortal_extremo",

	  "descricao": "Alguns demônios estão caçando uma poderosa maga élfa, os jogadores se propuzeram a ajudá-la em troca de informações.",

	  "contexto": {
		"local": "Túneis subterrâneos sob Elturel",
		"hora": "noite"
	  },

	  "inimigos": [
		{
		  "id": "mob_erinyes_terror",
		  "quantidade": 1,
		  "posicao_inicial": "chega junto de um dos bandidos"
		},
		{
		  "id": "mob_adult_black_dragon",
		  "quantidade": 1,
		  "posicao_inicial": "chega dos céus quando chamado"
		},
		{
		  "id": "mob_glabrezu_spell_eater",
		  "quantidade": 1,
		  "posicao_inicial": "chega junto dos bandidos"
		}
	  ],

	  "terreno": {
		"descricao": "Planicie em frente ao pequeno forte dos bandidos de Baldurs Gate.",
		"dificuldade_movimento": true,
		"cobertura": [
		  {
			"tipo": "estacas",
			"descricao": "estacas de madeira cercam o forte"
		  }
		]
	  },

	  "elementos_interativos": [
		{
		  "nome": "Poças Ácidas",
		  "tipo": "ambiente",
		  "descricao": "Água corrompida pelo dragão",
		  "interacoes": [
			"Entrar causa 2d6 dano ácido",
			"Pode ser empurrado para dentro"
		  ]
		},
	  ],

	  "armadilhas": [
		{
		  "nome": "Chuva Acida",
		  "descricao": "Após o dragão soltar seu bafo acido para os céus, os jogadores em toda a área recebem dano",
		  "cd_percepcao": 16,
		  "efeito": "2d6 dano acido em área"
		}
	  ],

	  "objetivos": [
		{
		  "tipo": "aguentar",
		  "descricao": "durar tempo o suficiente para Frieren chegar"
		}
	  ],

	  "recompensas": {
		"xp": 49800,
		"itens": [
		  "Fear Feaster’s Mask",
		  "Terrorizer (Greatsword)",
		  "Escudo Devorador de Magia",
		  "Tesouro dracônico corrompido"
		],
		"ouro": {
		  "PO": 789,
		  "PP": 953,
		  "PC": 1236
		}
	  },

	  "taticas_inimigos": [
		"Erinyes inicia com medo em múltiplos alvos para escalar poder",
		"Glabrezu foca conjuradores e absorve magias importantes",
		"Dragão usa sopro ácido para dividir o grupo e controlar área",
		"Inimigos priorizam alvos isolados ou amedrontados"
	  ],

	  "condicoes_especiais": [
		"Após 5 rodadas, o ritual intensifica causando efeitos mágicos aleatórios",
		"Se a Erinyes morrer, efeitos de medo cessam",
		"Se o dragão cair, partes da caverna começam a desabar",
		"Se o círculo for destruído, todos os inimigos sofrem penalidades temporárias"
	  ]
	},
	{
	  "id": "enc_assalto_vento_cinzento",
	  "nome": "Assalto ao Vento Cinzento",
	  "tipo": "combate",
	  "nivel_recomendado": 6,
	  "dificuldade": "dificil_alto",

	  "descricao": "Um navio mercante armado balança suavemente no cais. Sua tripulação está alerta, mas não preparada para um ataque direto... ainda.",

	  "contexto": {
		"local": "Cais de Baldur's Gate",
		"hora": "noite"
	  },

	  "inimigos": [
		{
		  "id": "npc_vc_capitao_rennik",
		  "quantidade": 1,
		  "posicao_inicial": "castelo de popa"
		},
		{
		  "id": "npc_vc_imediato_tarik",
		  "quantidade": 1,
		  "posicao_inicial": "centro do convés"
		},
		{
		  "id": "npc_vc_arqueira_syl",
		  "quantidade": 1,
		  "posicao_inicial": "mastro principal"
		},
		{
		  "id": "npc_vc_arqueira_lyss",
		  "quantidade": 1,
		  "posicao_inicial": "castelo de proa"
		},
		{
		  "id": "npc_vc_bruto_1",
		  "quantidade": 1,
		  "posicao_inicial": "linha de frente"
		},
		{
		  "id": "npc_vc_bruto_2",
		  "quantidade": 1,
		  "posicao_inicial": "linha de frente"
		},
		{
		  "id": "npc_vc_marujos_1",
		  "quantidade": 1,
		  "posicao_inicial": "espalhado no convés"
		},
		{
		  "id": "npc_vc_marujos_2",
		  "quantidade": 1,
		  "posicao_inicial": "espalhado no convés"
		},
		{
		  "id": "npc_vc_marujos_3",
		  "quantidade": 1,
		  "posicao_inicial": "espalhado no convés"
		},
		{
		  "id": "npc_vc_marujos_4",
		  "quantidade": 1,
		  "posicao_inicial": "espalhado no convés"
		}
	  ],

	  "terreno": {
		"descricao": "Convés de madeira estreito com cordas, mastros e áreas elevadas. O mar se move constantemente, tornando o combate instável.",
		"dificuldade_movimento": true,
		"cobertura": [
		  {
			"tipo": "meia",
			"descricao": "Barris e caixas de carga"
		  },
		  {
			"tipo": "meia",
			"descricao": "Cordas e mastros"
		  },
		  {
			"tipo": "total",
			"descricao": "Cabine do capitão"
		  }
		]
	  },

	  "elementos_interativos": [
		{
		  "nome": "Cordas do Mastro",
		  "tipo": "mobilidade",
		  "descricao": "Cordas permitem subir ou se balançar pelo convés",
		  "interacoes": [
			"Mover-se rapidamente entre áreas elevadas",
			"Testes de Destreza CD 12 para não cair"
		  ]
		},
		{
		  "nome": "Barris de Carga",
		  "tipo": "objeto",
		  "descricao": "Barril pesado que pode ser empurrado",
		  "interacoes": [
			"Empurrar causa 2d6 de dano",
			"Derrubar cria terreno difícil"
		  ]
		},
		{
		  "nome": "Beirada do Navio",
		  "tipo": "perigo",
		  "descricao": "Queda direta no mar",
		  "interacoes": [
			"Empurrão pode derrubar no mar",
			"Teste de Força ou Destreza CD 13 para se segurar"
		  ]
		}
	  ],

	  "armadilhas": [
		{
		  "nome": "Convés Escorregadio",
		  "descricao": "Água do mar deixa áreas perigosas",
		  "cd_percepcao": 12,
		  "cd_desarme": 0,
		  "efeito": "Falha em teste de Destreza resulta em queda (prone)"
		}
	  ],

	  "objetivos": [
		{
		  "tipo": "dominar",
		  "descricao": "Tomar controle do navio eliminando ou rendendo a tripulação"
		},
		{
		  "tipo": "sobreviver",
		  "descricao": "Evitar ser jogado ao mar durante o combate"
		}
	  ],

	  "recompensas": {
		"xp": 5200,
		"itens": [
		  "Navio Vento Cinzento",
		  "Armas básicas",
		  "Carga comercial variada"
		],
		"ouro": {
		  "PO": 180,
		  "PP": 95,
		  "PC": 320
		}
	  },

	  "taticas_inimigos": [
		"Capitão coordena aliados aumentando precisão",
		"Arqueiros mantêm distância e focam conjuradores",
		"Brutos seguram a linha de frente",
		"Marujos cercam alvos isolados",
		"Imediato protege o capitão"
	  ],

	  "condicoes_especiais": [
		"Se o capitão cair, a tripulação pode tentar se render",
		"Criaturas no mar precisam gastar movimento extra para subir",
		"Combate prolongado pode atrair guardas do cais"
	  ]
	},
	{
	  "nome": "Caçadores de Destroços Amaldiçoados",
	  "tipo": "combate",
	  "dificuldade": "medio",

	  "detecao": {
		"passiva": 13,
		"ativa": "Percepção CD 13 ou Intuição CD 12",
		"sucesso": "Os corpos flutuando parecem intactos demais... e alguns se movem levemente contra a maré",
		"falha": "Os piratas emergem diretamente ao lado do barco"
	  },

	  "inimigos": [
		"1x Saqueador Amaldiçoado (Capitão menor, PV 70, espada +1)",
		"4x Piratas Amaldiçoados (PV 35 cada)"
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Maldição do Tesouro Afundado",
		  "descricao": "Quando um pirata amaldiçoado morre, seu corpo se desfaz em água escura e sal. Ele não concede XP adicional e retorna ao navio principal após 1d4 horas."
		}
	  ],

	  "taticas": [
		"Piratas tentam puxar jogadores para o mar",
		"Atacam em grupo e não recuam",
		"Ignoram autopreservação"
	  ],

	  "recompensas": [
		"Espada longa +1 corroída",
		"Fragmentos de ouro amaldiçoado (pista do encontro maior)"
	  ],

	  "gancho": "Os piratas murmuram sobre 'o coração do navio' e 'o capitão que nunca morre'"
	},
	{
	  "nome": "Corsários do Abismo Amaldiçoados",
	  "tipo": "combate",
	  "dificuldade": "alto",

	  "detecao": {
		"passiva": 15,
		"ativa": "Percepção CD 15 ou Sobrevivência CD 14",
		"sucesso": "Um navio negro surge sem vento, velas rasgadas mas firmes",
		"falha": "O navio já está ao lado, como se sempre estivesse lá"
	  },

	  "inimigos": [
		"1x Capitão Amaldiçoado (CA 17, PV 140, armadura +1, pistola mágica)",
		"2x Arqueiros Amaldiçoados (PV 50)",
		"4x Piratas Amaldiçoados (PV 40)"
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Maldição do Tesouro Afundado",
		  "descricao": "Ao morrer, os piratas se dissolvem em água escura e retornam ao navio após algumas horas. Enquanto o capitão existir, a tripulação sempre retorna."
		},
		{
		  "nome": "Coração Amaldiçoado",
		  "descricao": "O capitão não pode ser destruído permanentemente enquanto o tesouro amaldiçoado não for encontrado."
		}
	  ],

	  "acoes_capitao": [
		{
		  "nome": "Pistola do Abismo",
		  "descricao": "Ataque à distância +9, alcance 18m, 2d10 + 4 perfurante + 2d6 necrótico. Em acerto crítico, o alvo deve passar em CON CD 15 ou ficar enfraquecido (desvantagem em ataques) por 1 turno."
		}
	  ],

	  "taticas": [
		"Capitão foca alvos perigosos com a pistola",
		"Tripulação avança sem medo da morte",
		"Arqueiros pressionam retaguarda"
	  ],

	  "recompensas": [
		"Armadura +1 corroída",
		"Mapa parcial do tesouro amaldiçoado",
		"300 PO (alguns amaldiçoados)"
	  ]
	},
	{
	  "nome": "Avatar da Tempestade Desperto",
	  "tipo": "combate",
	  "dificuldade": "alto",

	  "detecao": {
		"passiva": 16,
		"ativa": "Percepção CD 16",
		"sucesso": "O ar vibra e pequenas descargas elétricas cruzam o céu",
		"falha": "A tempestade começa com um impacto direto"
	  },

	  "inimigos": [
		"1x Elemental da Tempestade (PV 180)",
		"2x Espíritos do Vento (PV 45 cada)"
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Campo Elétrico",
		  "descricao": "Criaturas a até 3m do elemental sofrem 1d6 de dano elétrico no início do turno."
		}
	  ],

	  "taticas": [
		"Empurra inimigos para fora do barco",
		"Mantém pressão constante em área"
	  ],

	  "recompensas": [
		"Lança de Zeus",
		"Fragmento elemental (200 PO)"
	  ],

	  "item_especial": {
		"nome": "Lança de Zeus",
		"descricao": "Arma de arremesso +1. Ao ser lançada, se transforma em um raio. Causa 1d6 extra de dano elétrico. Uma vez por descanso longo, causa 3d6 adicionais e pode saltar para um segundo alvo próximo."
	  }
	}
];