const DATA_ENCONTROS = [
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
      "id": "encontro_coracao_da_clareira_antiga",
      "nome": "Coração da Clareira Antiga",
      "bioma": "Feywild - Primavera",
      "dificuldade": "Difícil",
      "descricao": "Os personagens atravessam uma clareira luminosa onde árvores gigantes se curvam lentamente ao vento mesmo sem brisa. Vozes suaves ecoam entre flores brilhantes enquanto raízes começam a se mover sob o solo.",
      "ambiente": {
        "terreno": [
          "Raízes expostas contam como terreno difícil",
          "Árvores antigas fornecem meia cobertura",
          "Flores feéricas liberam pólen luminoso"
        ],
        "efeitos": [
          {
            "nome": "Pólen Encantado",
            "descricao": "Criaturas que iniciarem o turno em áreas floridas devem realizar CD 14 de Sabedoria ou terão desvantagem no próximo ataque até o início do próximo turno."
          }
        ]
      },
      "inimigos": [
        {
          "id": "dryad_feerica_guardia",
          "nome": "Dryad Feérica Guardiã",
          "quantidade": "5",
          "cr": 5,
          "funcao": "Controladora"
        },
        {
          "id": "treant_guardiao_ancestral",
          "nome": "Treant Guardião Ancestral",
          "quantidade": "2",
          "cr": 9,
          "funcao": "Tanque"
        }
      ],
      "taticas": [
        "As dryads tentam separar intrusos usando magias de encantamento e raízes.",
        "Treants permanecem imóveis inicialmente, confundindo-se com árvores comuns.",
        "As dryads focam conjuradores e arqueiros primeiro."
      ],
      "recompensas": [
        "Seiva feérica rara",
        "Madeira viva encantada",
        "Fragmentos de âmbar mágico"
      ],
      "segredo": "Uma das árvores da clareira contém um portal adormecido conectado às Terras de Entremeio."
    },
    {
		"id": "encontro_bruxa_verde_do_pantano",
		"nome": "A Lama que Respira",
		"bioma": "Pântano Feérico",
		"nivel_recomendado": "Difícil",
		"descricao": "O cheiro de ervas podres e sangue antigo paira sobre o pântano. Uma cabana torta afunda lentamente na lama enquanto um enorme wyvern coberto de fungos circula acima das árvores.",
		"inimigos": [
		  { "id": "bruxa_verde_morvakka", "quantidade": 1 },
		  { "id": "wyvern_putrefato", "quantidade": 1 }
		],
		"taticas": [
		  "Morvakka utiliza magia de terreno e venenos para separar o grupo.",
		  "O wyvern mergulha contra conjuradores e tenta arrastar vítimas para a lama.",
		  "A bruxa utiliza ilusões vegetais para dificultar visão."
		],
		"segredo": "A cabana da bruxa possui raízes conectadas diretamente a um antigo coração feérico enterrado sob o pântano."
	},
	{
		"id": "encontro_bruxa_do_destino",
		"nome": "O Tear das Possibilidades",
		"bioma": "Ruínas Feéricas",
		"nivel_recomendado": "Muito Difícil",
		"descricao": "Fios dourados atravessam o ar como teias invisíveis enquanto olhos observam de todas as direções. Uma figura encapuzada costura linhas brilhantes diante de um enorme observador deformado.",
		"inimigos": [
		  { "id": "bruxa_do_destino_elyndra", "quantidade": 1 },
		  { "id": "beholder_oracular", "quantidade": 1 }
		],
		"taticas": [
		  "Elyndra força rerrolagens, manipula iniciativa e enfraquece alvos prioritários.",
		  "O beholder mantém distância enquanto cobre corredores e áreas abertas.",
		  "As linhas douradas do cenário funcionam como alarmes mágicos."
		],
		"segredo": "Parte das profecias da bruxa menciona estrelas desaparecendo do céu da Feywild."
	},
	{
		"id": "encontro_bruxa_da_noite",
		"nome": "O Banquete da Lua Morta",
		"bioma": "Floresta Sombria",
		"nivel_recomendado": "Mortal",
		"descricao": "A floresta mergulha em silêncio absoluto enquanto a lua parece apagar lentamente acima das árvores negras. Entre os galhos, uma criatura dracônica deformada rasteja ao lado de uma mulher de olhos vazios.",
		"inimigos": [
		  { "id": "bruxa_da_noite_nyssara", "quantidade": 1 },
		  { "id": "meio_dragao_umbral", "quantidade": 1 }
		],
		"taticas": [
		  "Nyssara utiliza escuridão mágica e magia psíquica para quebrar formação.",
		  "O meio-dragão caça alvos isolados nas sombras.",
		  "A bruxa tenta incapacitar antes de causar dano massivo."
		],
		"segredo": "Nyssara possui fragmentos de memórias roubadas de arquifadas desaparecidas."
	}
];