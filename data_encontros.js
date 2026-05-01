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
	  "descricao": "Fragmentos de madeira e barris quebrados balançam lentamente sobre a água escura. Alguns corpos flutuam entre os destroços… imóveis demais.\nO mar está silencioso, pesado.\nEntão, um dos corpos vira a cabeça na direção do barco.\nMãos pálidas surgem da água… e começam a subir pelo casco.",
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
	  "descricao": "No horizonte, um navio surge… sem vento.\nSuas velas rasgadas não se movem, mas ele se aproxima mesmo assim.\nA madeira do casco é escura, quase negra — como se tivesse sido queimada e esquecida no fundo do mar.\nQuando ele encosta ao lado, figuras silenciosas já estão olhando para vocês… olhos vazios, esperando.",

	  "detecao": {
		"passiva": 15,
		"ativa": "Percepção CD 15 ou Sobrevivência CD 14",
		"sucesso": "Um navio negro surge sem vento, velas rasgadas mas firmes",
		"falha": "O navio já está ao lado, como se sempre estivesse lá"
	  },

	  "inimigos": [
		{
		  "id": "mob_capitao_amaldicoado",
		  "quantidade": 1
		},
		{
		  "id": "mob_saqueador_amaldicoado",
		  "quantidade": 3
		},
		{
		  "id": "mob_pirata_amaldicoado",
		  "quantidade": 5
		}
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
	  "descricao": "O céu escurece em questão de segundos, como se o dia tivesse sido arrancado do mundo.\nO ar vibra — pequenos estalos elétricos cruzam o convés.\nUm trovão explode, não no céu… mas ao redor do navio.\nNo centro da tempestade, uma forma se condensa — feita de vento, luz e fúria.",

	  "detecao": {
		"passiva": 18,
		"ativa": "Percepção CD 18",
		"sucesso": "O ar vibra e pequenas descargas elétricas cruzam o céu",
		"falha": "A tempestade começa com um impacto direto"
	  },

	  "inimigos": [
		{
		  "id": "mob_espirito_vento",
		  "quantidade": 2,
		  "posicao_inicial": "chega dos céus junto com o elemental"
		},
		{
		  "id": "mob_elemental_tempestade",
		  "quantidade": 1,
		  "posicao_inicial": "chega trazendo consigo uma tempestade"
		}
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
	},
	{
	  "id": "enc_campo_lich",
	  "nome": "O Senhor dos Ossos Silenciosos",
	  "tipo": "combate",
	  "nivel_recomendado": 10,
	  "dificuldade": "mortal",

	  "descricao": "O campo se estende em silêncio absoluto, coberto por lápides tortas e terra revirada. O ar é frio demais para a estação, e cada passo parece ecoar mais do que deveria. No centro, uma figura imóvel observa... como se já soubesse que vocês viriam.",

	  "contexto": {
		"local": "Campo dos Mortos, próximo a Baldur's Gate",
		"hora": "noite"
	  },

	  "inimigos": [
		{
		  "id": "mob_lich_senhor_ossos",
		  "quantidade": 1,
		  "posicao_inicial": "centro do campo"
		},
		{
		  "id": "mob_guardiao_tumulo",
		  "quantidade": 4,
		  "posicao_inicial": "enterrados ao redor"
		},
		{
		  "id": "mob_espirito_inquieto",
		  "quantidade": 3,
		  "posicao_inicial": "flutuando entre lápides"
		}
	  ],

	  "terreno": {
		"descricao": "Campo aberto com lápides, covas abertas e solo instável.",
		"dificuldade_movimento": true,
		"cobertura": [
		  {
			"tipo": "meia",
			"descricao": "Lápides de pedra"
		  },
		  {
			"tipo": "total",
			"descricao": "Criptas parcialmente abertas"
		  }
		]
	  },

	  "elementos_interativos": [
		{
		  "nome": "Túmulos Instáveis",
		  "tipo": "ambiente",
		  "descricao": "Solo fraco e cavado recentemente",
		  "interacoes": [
			"Criaturas podem cair (Teste DES CD 13)",
			"Mortos-vivos podem emergir se ativado pelo lich"
		  ]
		},
		{
		  "nome": "Foco de Energia Necromântica",
		  "tipo": "objeto",
		  "descricao": "Um ponto onde a energia da morte é mais forte",
		  "interacoes": [
			"Lich recupera 10 PV ao iniciar turno próximo",
			"Pode ser destruído (CA 14, 30 PV)"
		  ]
		}
	  ],

	  "armadilhas": [
		{
		  "nome": "Mão dos Mortos",
		  "descricao": "Braços emergem do solo tentando segurar intrusos",
		  "cd_percepcao": 15,
		  "cd_desarme": 14,
		  "efeito": "Alvo fica Restrained por 1 turno"
		}
	  ],

	  "objetivos": [
		{
		  "tipo": "derrotar",
		  "descricao": "Destruir o Lich ou interromper sua ligação com o filactério"
		}
	  ],

	  "recompensas": {
		"xp": 15000,
		"itens": [
		  "Grimório Necromântico",
		  "Anel de Proteção +1",
		  "Fragmento do Filactério"
		],
		"ouro": {
		  "PO": 500,
		  "PP": 300,
		  "PC": 0
		}
	  },

	  "taticas_inimigos": [
		"Lich mantém distância e controla o campo",
		"Invoca mortos-vivos constantemente",
		"Foca conjuradores primeiro",
		"Usa terreno para separar o grupo"
	  ],

	  "condicoes_especiais": [
		"Se o foco necromântico não for destruído, o lich regenera vida continuamente",
		"Ao cair, o lich pode retornar futuramente se o filactério não for destruído"
	  ]
	},
	{
	  "id": "enc_campo_mortos_inquietos",
	  "nome": "Mortos que Não Aceitam",
	  "tipo": "combate",
	  "nivel_recomendado": 6,
	  "dificuldade": "medio",

	  "descricao": "O vento sopra entre lápides quebradas, carregando um som baixo… quase como murmúrios. A terra parece fresca demais, como se tivesse sido revirada recentemente.\nEntão, dedos emergem do solo.\nE mais.\nE mais.",

	  "contexto": {
		"local": "Campos dos Mortos",
		"hora": "entardecer"
	  },

	  "inimigos": [
		{
		  "id": "mob_guardiao_tumulo",
		  "quantidade": 2,
		  "posicao_inicial": "enterrados próximos aos jogadores"
		},
		{
		  "id": "mob_espirito_inquieto",
		  "quantidade": 2,
		  "posicao_inicial": "flutuando entre lápides"
		}
	  ],

	  "terreno": {
		"descricao": "Solo instável e covas abertas dificultam movimentação.",
		"dificuldade_movimento": true,
		"cobertura": [
		  {
			"tipo": "meia",
			"descricao": "Lápides antigas"
		  }
		]
	  }
	},
	{
	  "id": "enc_campo_noiva_cadaver",
	  "nome": "A Noiva da Névoa",
	  "tipo": "combate",
	  "nivel_recomendado": 8,
	  "dificuldade": "dificil",

	  "descricao": "A névoa se adensa até engolir completamente o horizonte.\nUm vulto surge lentamente… vestido em trapos que um dia foram um vestido.\nUm choro ecoa — fino, quebrado… impossível de ignorar.\nQuando ela levanta o rosto, não há vida ali.\nApenas dor.",

	  "contexto": {
		"local": "Campos dos Mortos",
		"hora": "noite"
	  },

	  "inimigos": [
		{
		  "id": "mob_noiva_cadaver",
		  "quantidade": 1,
		  "posicao_inicial": "centro da névoa"
		},
		{
		  "id": "mob_espirito_inquieto",
		  "quantidade": 2,
		  "posicao_inicial": "ocultos na névoa"
		}
	  ],

	  "terreno": {
		"descricao": "Névoa densa reduz visibilidade e abafa sons.",
		"dificuldade_movimento": false,
		"cobertura": [
		  {
			"tipo": "leve",
			"descricao": "Névoa espessa (desvantagem em percepção visual à distância)"
		  }
		]
	  }
	},
	{
	  "id": "atq_sahuagin",
	  "nome": "Surpresa das profundezas",
	  "tipo": "combate",
	  "nivel_recomendado": 8,
	  "dificuldade": "dificil",

	  "descricao": "O vento não parece mais tocar as velas.\nUm silencio cobre os mares. Não há gaivotas, não há sons\nAté que... Splash. Algo sai da água.\nUm dos contratados grita, leva um momento para entender. Estamos sendo atacados.",

	  "contexto": {
		"local": "Alto Mar",
		"hora": "dia"
	  },

	  "inimigos": [
		{
		  "id": "sahuagin_comum",
		  "quantidade": 10,
		  "posicao_inicial": "atacando em ondas"
		},
		{
		  "id": "sahuagin_barao",
		  "quantidade": 1,
		  "posicao_inicial": "ocultos no mar"
		},
		{
		  "id": "sahuagin_sacerdote",
		  "quantidade": 1,
		  "posicao_inicial": "atacam quando 4 comuns caem"
		},
		{
		  "id": "sahuagin_guerreiro",
		  "quantidade": 2,
		  "posicao_inicial": "atacam quando dois comuns caem"
		},
		{
		  "id": "sea_hag",
		  "quantidade": 1,
		  "posicao_inicial": "ocultos no mar, ataca apenas se estiver muito fácil para os jogadores"
		}
	  ],

	  "terreno": {
		"descricao": "No calor do dia, a batalha acontece no návio dos jogadores.",
		"dificuldade_movimento": false,
		"cobertura": [
		  {
			"tipo": "nenhuma",
			"descricao": "Atacam vindo por baixo da água, percepção 20 para nota-los vindo."
		  }
		]
	  }
	}
];