const DATA_MONSTROS = [
  {
  "id": "mob_bandido_plus1",
  "nome": "Bandido",
  "tipo": "Humanoide (qualquer raça)",
  "alinhamento": "Qualquer não-bom",
  "ca": 13,
  "tipo_ca": "Armadura de couro +1",
  "pv": 11,
  "dados_vida": "2d8 + 2",
  "deslocamento": "9m",

  "atributos": {
    "for": 11,
    "des": 12,
    "con": 12,
    "int": 10,
    "sab": 10,
    "car": 10
  },

  "habilidades": [],
  "sentidos": "Percepção passiva 10",
  "idiomas": "Comum",
  "cr": 0.125,
  "xp": 25,

  "acoes": [
    {
      "nome": "Cimitarra +1",
      "tipo": "corpo a corpo",
      "ataque": "+4",
      "alcance": "1,5m",
      "alvo": "1 criatura",
      "dano": "1d6 + 2 cortante + 1 mágico"
    },
    {
      "nome": "Besta leve +1",
      "tipo": "à distância",
      "ataque": "+4",
      "alcance": "24/96m",
      "alvo": "1 criatura",
      "dano": "1d8 + 1 perfurante + 1 mágico"
    }
  ]
  },
  {
  "id": "mob_capitao_salteador",
  "nome": "Chefe dos Salteadores",
  "tipo": "Humanoide",
  "alinhamento": "Neutro maligno",
  "ca": 17,
  "tipo_ca": "Cota de malha +1 + escudo",
  "pv": 110,
  "dados_vida": "13d8 + 39",
  "deslocamento": "9m",

  "atributos": {
    "for": 16,
    "des": 14,
    "con": 16,
    "int": 12,
    "sab": 12,
    "car": 16
  },

  "resistencias": [],
  "sentidos": "Percepção passiva 11",
  "idiomas": "Comum, Infernal",
  "cr": 6,
  "xp": 2300,

  "habilidades": [
    {
      "nome": "Conjuração de Bruxo",
      "descricao": "CD 14 para resistir às magias, +6 para atingir com ataques mágicos."
    },
    {
      "nome": "Recuperação da Lança",
      "descricao": "A lança retorna automaticamente para sua mão após ser arremessada."
    }
  ],

  "magias": {
    "truques": ["Eldritch Blast", "Mage Hand"],
    "1_nivel": ["Hex", "Armor of Agathys"],
    "2_nivel": ["Misty Step", "Hold Person"],
    "3_nivel": ["Counterspell", "Fear"]
  },

  "acoes": [
    {
      "nome": "Multiataque",
      "descricao": "Realiza dois ataques com a lança ou um ataque com lança e um Eldritch Blast."
    },
    {
      "nome": "Lança de Choque",
      "tipo": "corpo a corpo ou à distância",
      "ataque": "+7",
      "alcance": "1,5m ou 6/18m",
      "alvo": "1 criatura",
      "dano": "1d8 + 4 perfurante + 4d6 elétrico (apenas com arremesso)"
    },
    {
      "nome": "Eldritch Blast",
      "tipo": "à distância",
      "ataque": "+6",
      "alcance": "36m",
      "alvo": "1 criatura",
      "dano": "2d10 energia"
    }
  ],

  "reacoes": [
    {
      "nome": "Movimentação Defensiva",
      "descricao": "Adiciona +2 na CA contra um ataque corpo a corpo."
    }
  ],

  "loot": {
    "arma": "Lança de Choque",
    "equipamento": [
      "escudo",
      "armadura +1"
    ]
  }
  },
  {
  "id": "mob_subcapitao_bruto",
  "nome": "Subcapitão Brutamontes",
  "tipo": "Humanoide",
  "alinhamento": "Neutro maligno",
  "ca": 15,
  "tipo_ca": "Armadura de couro batido +1",
  "pv": 95,
  "dados_vida": "10d8 + 40",
  "deslocamento": "9m",

  "atributos": {
    "for": 18,
    "des": 12,
    "con": 18,
    "int": 10,
    "sab": 11,
    "car": 10
  },

  "habilidades": [
    {
      "nome": "Tough",
      "descricao": "Possui pontos de vida aumentados significativamente."
    }
  ],

  "sentidos": "Percepção passiva 10",
  "idiomas": "Comum",
  "cr": 3,
  "xp": 700,

  "acoes": [
    {
      "nome": "Multiataque",
      "descricao": "Realiza dois ataques com arma pesada."
    },
    {
      "nome": "Espadão +1",
      "tipo": "corpo a corpo",
      "ataque": "+6",
      "alcance": "1,5m",
      "alvo": "1 criatura",
      "dano": "2d6 + 4 cortante + 1 mágico"
    }
  ],

  "habilidades_especiais": [
    {
      "nome": "Fúria do Combate",
      "descricao": "Quando cai abaixo de 50% de vida, causa +2 de dano em ataques corpo a corpo."
    }
  ]
  },
  {
  "id": "mob_glabrezu_spell_eater",
  "nome": "Glabrezu Devorador de Magia",
  "tipo": "Demônio",
  "alinhamento": "Caótico maligno",
  "ca": 19,
  "tipo_ca": "Carapaça demoníaca + Escudo devorador de magia",
  "pv": 189,
  "dados_vida": "18d10 + 90",
  "deslocamento": "12m",

  "atributos": {
    "for": 20,
    "des": 15,
    "con": 21,
    "int": 19,
    "sab": 17,
    "car": 16
  },

  "habilidades": [
    {
      "nome": "Restauração Demoníaca",
      "descricao": "Ao morrer fora do Abismo, retorna instantaneamente ao Abismo com vida total."
    },
    {
      "nome": "Resistência à Magia",
      "descricao": "Vantagem em testes contra efeitos mágicos."
    },
    {
      "nome": "Escudo Devorador de Magia",
      "descricao": "Pode usar reação para tentar absorver magia (CD 13 + nível). Se sucesso, anula o efeito, sofre dano de força igual ao nível da magia e ganha +2 CA até o próximo turno."
    }
  ],
  "sentidos": "Percepção passiva 17, visão verdadeira 36m",
  "idiomas": "Abissal, telepatia 36m",
  "cr": 9,
  "xp": 5000,

  "acoes": [
    {
      "nome": "Multiataque",
      "descricao": "Realiza dois ataques de pinça e um esmagar ou magia."
    },
    {
      "nome": "Pinça",
      "tipo": "corpo a corpo",
      "ataque": "+9",
      "alcance": "3m",
      "alvo": "1 criatura",
      "dano": "2d10 + 5 cortante e agarra (CD 15)"
    },
    {
      "nome": "Esmagar",
      "tipo": "corpo a corpo",
      "alcance": "alvo agarrado",
      "alvo": "1 criatura",
      "dano": "3d6 + 5 contundente (CD 17 DES metade)"
    }
  ],

  "habilidades_especiais": [
    {
      "nome": "Conjuração Demoníaca",
      "descricao": "Pode conjurar Darkness, Detect Magic e Dispel Magic à vontade; 1/dia Confusion, Fly e Power Word Stun."
    }
  ]
  },
  {
  "id": "mob_adult_black_dragon",
  "nome": "Dragão Negro Adulto",
  "tipo": "Dragão",
  "alinhamento": "Caótico maligno",
  "ca": 19,
  "tipo_ca": "Escamas naturais",
  "pv": 195,
  "dados_vida": "17d12 + 85",
  "deslocamento": "12m, voo 24m, nado 12m",

  "atributos": {
    "for": 23,
    "des": 14,
    "con": 21,
    "int": 14,
    "sab": 13,
    "car": 19
  },

  "habilidades": [
    {
      "nome": "Anfíbio",
      "descricao": "Pode respirar ar e água."
    },
    {
      "nome": "Resistência Lendária",
      "descricao": "3 vezes por dia, se falhar em um teste de resistência, pode escolher passar."
    }
  ],

  "sentidos": "Percepção passiva 21, visão no escuro 36m, percepção às cegas 18m",
  "idiomas": "Comum, Dracônico",
  "cr": 14,
  "xp": 11500,

  "acoes": [
    {
      "nome": "Multiataque",
      "descricao": "Realiza três ataques de dilacerar."
    },
    {
      "nome": "Dilacerar",
      "tipo": "corpo a corpo",
      "ataque": "+11",
      "alcance": "3m",
      "alvo": "1 criatura",
      "dano": "2d6 + 6 cortante + 1d8 ácido"
    },
    {
      "nome": "Sopro Ácido",
      "tipo": "área",
      "alcance": "18m linha (1,5m largura)",
      "alvo": "todas as criaturas na área",
      "dano": "12d8 ácido (CD 18 DES metade)"
    }
  ],

  "habilidades_especiais": [
    {
      "nome": "Presença Aterradora",
      "descricao": "Pode conjurar medo em inimigos próximos, forçando testes de Sabedoria."
    },
    {
      "nome": "Magias Dracônicas",
      "descricao": "Pode conjurar Detect Magic, Fear e Melf’s Acid Arrow à vontade; 1/dia Speak with Dead e Vitriolic Sphere."
    }
  ]
  },
  {
  "id": "mob_erinyes_terror",
  "nome": "Erinyes Ceifadora do Terror",
  "tipo": "Diabo",
  "alinhamento": "Leal maligno",
  "ca": 18,
  "tipo_ca": "Armadura infernal",
  "pv": 178,
  "dados_vida": "21d8 + 84",
  "deslocamento": "9m, voo 18m",

  "atributos": {
    "for": 18,
    "des": 16,
    "con": 18,
    "int": 14,
    "sab": 14,
    "car": 18
  },

  "habilidades": [
    {
      "nome": "Restauração Diabólica",
      "descricao": "Ao morrer fora dos Nove Infernos, retorna lá com vida total."
    },
    {
      "nome": "Resistência à Magia",
      "descricao": "Vantagem contra efeitos mágicos."
    },
    {
      "nome": "Máscara Devoradora de Medo",
      "descricao": "Pode conjurar Cause Fear várias vezes por descanso longo. Ganha +1 em ataques, dano, testes e resistências para cada inimigo amedrontado próximo (máx +5)."
    },
    {
      "nome": "Aura de Terror",
      "descricao": "Inimigos amedrontados a até 9m sofrem 1d6 dano psíquico ao final do turno."
    }
  ],

  "sentidos": "Percepção passiva 16, visão verdadeira 36m",
  "idiomas": "Infernal, telepatia 36m",
  "cr": 12,
  "xp": 8400,

  "acoes": [
    {
      "nome": "Multiataque",
      "descricao": "Realiza três ataques com espada ou usa a corda mágica."
    },
    {
      "nome": "Espada do Terror",
      "tipo": "corpo a corpo",
      "ataque": "+8",
      "alcance": "1,5m",
      "alvo": "1 criatura",
      "dano": "2d8 + 4 cortante + 2d10 necrótico (crítico 19-20 causa medo CD 20 SAB)"
    },
    {
      "nome": "Corda Enredadora",
      "tipo": "à distância",
      "alcance": "36m",
      "alvo": "1 criatura",
      "dano": "4d6 força + restringido (CD 16 FOR)"
    }
  ],

  "habilidades_especiais": [
    {
      "nome": "Parry",
      "descricao": "Adiciona +4 na CA contra um ataque corpo a corpo."
    },
    {
      "nome": "Motor de Medo",
      "descricao": "Se houver 3+ inimigos amedrontados, a erinyes ganha vantagem em ataques."
    }
  ]
  },
  {
	  "id": "npc_edward_newgate",
	  "nome": "Edward Newgate, Barba Branca",
	  "tipo": "Humano",
	  "alinhamento": "Caótico bom",
	  "ca": 17,
	  "tipo_ca": "Resistência monstruosa + casaco de capitão",
	  "pv": 310,
	  "dados_vida": "20d12 + 160",
	  "deslocamento": "9m",

	  "atributos": {
		"for": 24,
		"des": 12,
		"con": 26,
		"int": 12,
		"sab": 16,
		"car": 20
	  },

	  "habilidades": [
		{
		  "nome": "Presença de Imperador",
		  "descricao": "Criaturas hostis a até 9m devem passar em CD 18 SAB ou ficam Amedrontadas por 1 turno."
		},
		{
		  "nome": "Corpo Inquebrável",
		  "descricao": "Reduz todo dano recebido em 5. Quando abaixo de 50% de vida, ganha resistência a dano."
		}
	  ],

	  "sentidos": "Percepção passiva 18",
	  "idiomas": "Comum",
	  "cr": 17,
	  "xp": 18000,

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza dois ataques com sua naginata ou um ataque devastador sísmico."
		},
		{
		  "nome": "Murakumogiri",
		  "tipo": "corpo a corpo",
		  "ataque": "+12",
		  "alcance": "3m",
		  "alvo": "1 criatura",
		  "dano": "2d10 + 7 cortante + 2d8 impacto"
		},
		{
		  "nome": "Golpe Sísmico",
		  "tipo": "área",
		  "alcance": "6m raio",
		  "alvo": "todas as criaturas",
		  "dano": "4d10 contundente (CD 18 DES metade)"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Quebra do Mundo",
		  "descricao": "1 vez por combate, causa 8d10 dano em área ampla e derruba todas as criaturas (prone)."
		},
		{
		  "nome": "Vontade Inabalável",
		  "descricao": "Não pode ser derrubado ou empurrado contra sua vontade."
		}
	  ]
	},
	{
	  "id": "npc_marco_fenix",
	  "nome": "Marco, a Fênix",
	  "tipo": "Humano",
	  "alinhamento": "Caótico bom",
	  "ca": 18,
	  "tipo_ca": "Forma híbrida mística",
	  "pv": 210,
	  "dados_vida": "18d10 + 108",
	  "deslocamento": "12m, voo 18m",

	  "atributos": {
		"for": 16,
		"des": 20,
		"con": 22,
		"int": 14,
		"sab": 16,
		"car": 18
	  },

	  "habilidades": [
		{
		  "nome": "Forma da Fênix",
		  "descricao": "Pode voar e ignora terreno difícil."
		},
		{
		  "nome": "Regeneração Azul",
		  "descricao": "Recupera 15 PV no início do turno. Não funciona se estiver inconsciente."
		}
	  ],

	  "sentidos": "Percepção passiva 17",
	  "idiomas": "Comum",
	  "cr": 13,
	  "xp": 10000,

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza dois ataques flamejantes."
		},
		{
		  "nome": "Garras da Fênix",
		  "tipo": "corpo a corpo",
		  "ataque": "+10",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "2d6 + 5 cortante + 2d8 fogo"
		},
		{
		  "nome": "Investida Flamejante",
		  "tipo": "linha",
		  "alcance": "9m",
		  "alvo": "criaturas na linha",
		  "dano": "3d8 fogo (CD 16 DES metade)"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Chamas Restauradoras",
		  "descricao": "Como ação, cura um aliado em 4d8 PV."
		},
		{
		  "nome": "Ressurgir",
		  "descricao": "1 vez por dia, ao cair a 0 PV, retorna com 80 PV."
		}
	  ]
	},
	  {
		"id": "npc_bb_garrik_ancora",
		"nome": "Garrik 'Âncora'",
		"tipo": "Humano",
		"alinhamento": "Caótico bom",
		"ca": 15,
		"tipo_ca": "Armadura de couro reforçado",
		"pv": 48,
		"dados_vida": "6d8 + 18",
		"deslocamento": "9m",

		"atributos": { "for": 18, "des": 10, "con": 16, "int": 10, "sab": 12, "car": 11 },

		"habilidades": [
		  { "nome": "Linha de Frente", "descricao": "Ganha +2 CA enquanto adjacente a aliados." }
		],

		"sentidos": "Percepção passiva 11",
		"idiomas": "Comum",
		"cr": 2,
		"xp": 450,

		"acoes": [
		  {
			"nome": "Martelo Naval",
			"tipo": "corpo a corpo",
			"ataque": "+6",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d10 + 4 contundente"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Segurar Linha", "descricao": "Pode impor desvantagem em ataque contra aliado próximo 1x por turno." }
		],

		"funcao_navio": "Tanque / defensor da tripulação"
	  },

	  {
		"id": "npc_bb_lira_mar",
		"nome": "Lira 'Maré Rápida'",
		"tipo": "Humana",
		"alinhamento": "Caótico bom",
		"ca": 14,
		"tipo_ca": "Couro leve",
		"pv": 34,
		"dados_vida": "5d8 + 10",
		"deslocamento": "12m",

		"atributos": { "for": 10, "des": 18, "con": 14, "int": 12, "sab": 13, "car": 12 },

		"habilidades": [
		  { "nome": "Agilidade Costeira", "descricao": "Ignora terreno difícil em combate naval." }
		],

		"sentidos": "Percepção passiva 13",
		"idiomas": "Comum",
		"cr": 1,
		"xp": 200,

		"acoes": [
		  {
			"nome": "Adaga Dupla",
			"tipo": "corpo a corpo",
			"ataque": "+6",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 4 perfurante"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Ataque Furtivo", "descricao": "Causa +2d6 se tiver vantagem ou aliado próximo." }
		],

		"funcao_navio": "Batedora / mensageira"
	  },

	  {
		"id": "npc_bb_doran_canhao",
		"nome": "Doran 'Canhão'",
		"tipo": "Anão",
		"alinhamento": "Neutro",
		"ca": 16,
		"tipo_ca": "Armadura média",
		"pv": 45,
		"dados_vida": "6d8 + 18",
		"deslocamento": "7,5m",

		"atributos": { "for": 16, "des": 12, "con": 18, "int": 11, "sab": 10, "car": 10 },

		"habilidades": [
		  { "nome": "Resistente", "descricao": "Vantagem contra venenos." }
		],

		"sentidos": "Percepção passiva 10",
		"idiomas": "Comum, Anão",
		"cr": 2,
		"xp": 450,

		"acoes": [
		  {
			"nome": "Disparo de Canhão Portátil",
			"tipo": "à distância",
			"ataque": "+5",
			"alcance": "18m",
			"alvo": "1 criatura",
			"dano": "2d8 + 3 contundente"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Recuo Brutal", "descricao": "Empurra alvo 3m em acerto crítico." }
		],

		"funcao_navio": "Artilheiro"
	  },

	  {
		"id": "npc_bb_sera_corda",
		"nome": "Sera 'Corda Negra'",
		"tipo": "Humana",
		"alinhamento": "Neutro",
		"ca": 13,
		"tipo_ca": "Sem armadura",
		"pv": 32,
		"dados_vida": "5d8 + 5",
		"deslocamento": "9m",

		"atributos": { "for": 12, "des": 16, "con": 12, "int": 14, "sab": 13, "car": 11 },

		"habilidades": [
		  { "nome": "Manipuladora de Cordas", "descricao": "Vantagem para agarrar ou restringir." }
		],

		"sentidos": "Percepção passiva 12",
		"idiomas": "Comum",
		"cr": 1,
		"xp": 200,

		"acoes": [
		  {
			"nome": "Laço",
			"tipo": "controle",
			"ataque": "+5",
			"alcance": "9m",
			"alvo": "1 criatura",
			"dano": "restrito (CD 13)"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Puxão", "descricao": "Pode puxar inimigo 3m após prender." }
		],

		"funcao_navio": "Controle / captura"
	  },

	  {
		"id": "npc_bb_kael_fauno",
		"nome": "Kael 'Riso Salgado'",
		"tipo": "Humano",
		"alinhamento": "Caótico neutro",
		"ca": 13,
		"tipo_ca": "Couro leve",
		"pv": 30,
		"dados_vida": "5d8",
		"deslocamento": "9m",

		"atributos": { "for": 10, "des": 14, "con": 12, "int": 12, "sab": 10, "car": 16 },

		"habilidades": [
		  { "nome": "Charme Canalha", "descricao": "Pode tentar distrair inimigos (CD 13 SAB)." }
		],

		"sentidos": "Percepção passiva 10",
		"idiomas": "Comum",
		"cr": 1,
		"xp": 200,

		"acoes": [
		  {
			"nome": "Espada Curta",
			"tipo": "corpo a corpo",
			"ataque": "+4",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 2 cortante"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Provocar", "descricao": "Força alvo a focar nele (CD 13 SAB)." }
		],

		"funcao_navio": "Negociador / distração"
	  },

	  {
		"id": "npc_bb_thorv_mastro",
		"nome": "Thorv 'Olho do Mastro'",
		"tipo": "Meio-orc",
		"alinhamento": "Neutro",
		"ca": 14,
		"tipo_ca": "Couro reforçado",
		"pv": 42,
		"dados_vida": "6d8 + 12",
		"deslocamento": "9m",

		"atributos": { "for": 16, "des": 14, "con": 16, "int": 10, "sab": 14, "car": 9 },

		"habilidades": [
		  { "nome": "Visão Aguçada", "descricao": "Vantagem em Percepção à distância." }
		],

		"sentidos": "Percepção passiva 15",
		"idiomas": "Comum, Orc",
		"cr": 2,
		"xp": 450,

		"acoes": [
		  {
			"nome": "Arco Longo",
			"tipo": "à distância",
			"ataque": "+6",
			"alcance": "45m",
			"alvo": "1 criatura",
			"dano": "1d8 + 3 perfurante"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Marca do Alvo", "descricao": "Aliados ganham +1 para acertar o alvo marcado." }
		],

		"funcao_navio": "Atirador / vigia"
	  },

	  {
		"id": "npc_bb_mira_curandeira",
		"nome": "Mira 'Maresia'",
		"tipo": "Humana",
		"alinhamento": "Boa",
		"ca": 13,
		"tipo_ca": "Vestes leves",
		"pv": 36,
		"dados_vida": "5d8 + 10",
		"deslocamento": "9m",

		"atributos": { "for": 10, "des": 12, "con": 14, "int": 14, "sab": 16, "car": 12 },

		"habilidades": [
		  { "nome": "Curandeira", "descricao": "Pode estabilizar automaticamente aliados." }
		],

		"sentidos": "Percepção passiva 13",
		"idiomas": "Comum",
		"cr": 2,
		"xp": 450,

		"acoes": [
		  {
			"nome": "Bastão",
			"tipo": "corpo a corpo",
			"ataque": "+4",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 2 contundente"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Cura Rápida", "descricao": "Cura 2d8 PV em aliado (3x por combate)." }
		],

		"funcao_navio": "Suporte / curandeira"
	  },
	  {
		"id": "npc_bb_fenn_cozinheiro",
		"nome": "Fenn 'Panela de Ferro'",
		"tipo": "Halfling",
		"alinhamento": "Neutro bom",
		"ca": 13,
		"tipo_ca": "Couro",
		"pv": 33,
		"dados_vida": "5d8 + 5",
		"deslocamento": "7,5m",

		"atributos": { "for": 10, "des": 16, "con": 12, "int": 13, "sab": 12, "car": 14 },

		"habilidades": [
		  { "nome": "Coragem Halfling", "descricao": "Vantagem contra medo." }
		],

		"sentidos": "Percepção passiva 12",
		"idiomas": "Comum, Halfling",
		"cr": 1,
		"xp": 200,

		"acoes": [
		  {
			"nome": "Panela Improvisada",
			"tipo": "corpo a corpo",
			"ataque": "+5",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 3 contundente"
		  }
		],

		"habilidades_especiais": [
		  { "nome": "Reforço de Moral", "descricao": "Aliados próximos ganham +1 em testes por 1 turno (1x combate)." }
		],

		"funcao_navio": "Cozinheiro / suporte moral"
	  },
	  {
		  "id": "npc_vc_capitao_rennik",
		  "nome": "Capitão Rennik Voss",
		  "tipo": "Humano",
		  "alinhamento": "Neutro",
		  "ca": 17,
		  "tipo_ca": "Armadura reforçada + experiência",
		  "pv": 165,
		  "dados_vida": "18d8 + 72",
		  "deslocamento": "9m",

		  "atributos": {
			"for": 18,
			"des": 18,
			"con": 18,
			"int": 14,
			"sab": 14,
			"car": 16
		  },

		  "habilidades": [
			{
			  "nome": "Comando Tático Avançado",
			  "descricao": "Aliados a até 9m recebem +2 em ataques e dano."
			},
			{
			  "nome": "Instinto de Combate",
			  "descricao": "Vantagem em testes de iniciativa."
			}
		  ],

		  "sentidos": "Percepção passiva 14",
		  "idiomas": "Comum",
		  "cr": 10,
		  "xp": 5900,

		  "acoes": [
			{
			  "nome": "Multiataque",
			  "descricao": "Realiza dois ataques com sabre ou um ataque à distância."
			},
			{
			  "nome": "Sabre Naval",
			  "tipo": "corpo a corpo",
			  "ataque": "+9",
			  "alcance": "1,5m",
			  "alvo": "1 criatura",
			  "dano": "1d8 + 5 cortante + 1d6 adicional"
			},
			{
			  "nome": "Pistola de Elite",
			  "tipo": "à distância",
			  "ataque": "+9",
			  "alcance": "18m",
			  "alvo": "1 criatura",
			  "dano": "2d10 + 4 perfurante"
			}
		  ],

		  "habilidades_especiais": [
			{
			  "nome": "Ordem de Ataque",
			  "descricao": "Um aliado pode usar reação para realizar um ataque."
			},
			{
			  "nome": "Determinação do Capitão",
			  "descricao": "Ao cair abaixo de 50% PV, ganha resistência a dano por 2 turnos."
			}
		  ]
		},
		{
		  "id": "npc_vc_imediato_tarik",
		  "nome": "Tarik Mão-Firme",
		  "tipo": "Humano",
		  "alinhamento": "Leal neutro",
		  "ca": 18,
		  "tipo_ca": "Armadura pesada naval",
		  "pv": 130,
		  "dados_vida": "15d8 + 60",
		  "deslocamento": "9m",

		  "atributos": {
			"for": 18,
			"des": 12,
			"con": 18,
			"int": 12,
			"sab": 16,
			"car": 12
		  },

		  "habilidades": [
			{
			  "nome": "Postura de Guarda",
			  "descricao": "Aliados adjacentes recebem +2 CA."
			},
			{
			  "nome": "Protetor Nato",
			  "descricao": "Pode interceptar ataques direcionados ao capitão (1x por turno)."
			}
		  ],

		  "sentidos": "Percepção passiva 15",
		  "idiomas": "Comum",
		  "cr": 8,
		  "xp": 3900,

		  "acoes": [
			{
			  "nome": "Multiataque",
			  "descricao": "Realiza dois ataques com machado."
			},
			{
			  "nome": "Machado Pesado",
			  "tipo": "corpo a corpo",
			  "ataque": "+8",
			  "alcance": "1,5m",
			  "alvo": "1 criatura",
			  "dano": "1d10 + 5 cortante"
			}
		  ],

		  "habilidades_especiais": [
			{
			  "nome": "Linha Inquebrável",
			  "descricao": "Enquanto estiver acima de 50% PV, não pode ser empurrado ou derrubado."
			}
		  ]
		},

	  {
		"id": "npc_vc_arqueira_syl",
		"nome": "Syl Vento Leve",
		"tipo": "Elfa",
		"alinhamento": "Neutro",
		"ca": 14,
		"tipo_ca": "Couro",
		"pv": 40,
		"dados_vida": "6d8 + 12",
		"deslocamento": "9m",

		"atributos": { "for": 10, "des": 18, "con": 14, "int": 12, "sab": 13, "car": 10 },

		"habilidades": [
		  { "nome": "Atiradora Precisa", "descricao": "Ignora meia cobertura." }
		],

		"sentidos": "Percepção passiva 14",
		"idiomas": "Comum, Élfico",
		"cr": 2,
		"xp": 450,

		"acoes": [
		  {
			"nome": "Arco Longo",
			"tipo": "à distância",
			"ataque": "+6",
			"alcance": "45m",
			"alvo": "1 criatura",
			"dano": "1d8 + 4 perfurante"
		  }
		]
	  },

	  {
		"id": "npc_vc_arqueira_lyss",
		"nome": "Lyss Flecha Curva",
		"tipo": "Humana",
		"alinhamento": "Neutro",
		"ca": 13,
		"tipo_ca": "Couro leve",
		"pv": 38,
		"dados_vida": "6d8 + 10",
		"deslocamento": "9m",

		"atributos": { "for": 10, "des": 16, "con": 14, "int": 11, "sab": 12, "car": 10 },

		"habilidades": [
		  { "nome": "Fogo Cruzado", "descricao": "Ganha +2 para acertar se alvo já foi atingido." }
		],

		"sentidos": "Percepção passiva 12",
		"idiomas": "Comum",
		"cr": 2,
		"xp": 450,

		"acoes": [
		  {
			"nome": "Arco Curto",
			"tipo": "à distância",
			"ataque": "+5",
			"alcance": "30m",
			"alvo": "1 criatura",
			"dano": "1d6 + 3 perfurante"
		  }
		]
	  },

	  {
		"id": "npc_vc_bruto_1",
		"nome": "Bruto do Convés",
		"tipo": "Humano",
		"alinhamento": "Neutro",
		"ca": 14,
		"tipo_ca": "Couro",
		"pv": 52,
		"dados_vida": "7d8 + 21",
		"deslocamento": "9m",
		"atributos": { "for": 17, "des": 12, "con": 16, "int": 8, "sab": 10, "car": 9 },
		"cr": 2,
		"xp": 450,
		"acoes": [
		  {
			"nome": "Porrete Pesado",
			"tipo": "corpo a corpo",
			"ataque": "+5",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d10 + 3 contundente"
		  }
		]
	  },

	  {
		"id": "npc_vc_bruto_2",
		"nome": "Bruto do Convés",
		"tipo": "Humano",
		"alinhamento": "Neutro",
		"ca": 14,
		"tipo_ca": "Couro",
		"pv": 52,
		"dados_vida": "7d8 + 21",
		"deslocamento": "9m",
		"atributos": { "for": 17, "des": 12, "con": 16, "int": 8, "sab": 10, "car": 9 },
		"cr": 2,
		"xp": 450,
		"acoes": [
		  {
			"nome": "Porrete Pesado",
			"tipo": "corpo a corpo",
			"ataque": "+5",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d10 + 3 contundente"
		  }
		]
	  },

	  {
		"id": "npc_vc_marujos_1",
		"nome": "Marujo Armado",
		"tipo": "Humano",
		"alinhamento": "Neutro",
		"ca": 13,
		"tipo_ca": "Couro",
		"pv": 30,
		"dados_vida": "5d8",
		"deslocamento": "9m",
		"atributos": { "for": 12, "des": 14, "con": 12, "int": 10, "sab": 10, "car": 10 },
		"cr": 1,
		"xp": 200,
		"acoes": [
		  {
			"nome": "Espada Curta",
			"tipo": "corpo a corpo",
			"ataque": "+4",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 2 cortante"
		  }
		]
	  },

	  {
		"id": "npc_vc_marujos_2",
		"nome": "Marujo Armado",
		"tipo": "Humano",
		"alinhamento": "Neutro",
		"ca": 13,
		"tipo_ca": "Couro",
		"pv": 30,
		"dados_vida": "5d8",
		"deslocamento": "9m",
		"atributos": { "for": 12, "des": 14, "con": 12, "int": 10, "sab": 10, "car": 10 },
		"cr": 1,
		"xp": 200,
		"acoes": [
		  {
			"nome": "Espada Curta",
			"tipo": "corpo a corpo",
			"ataque": "+4",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 2 cortante"
		  }
		]
	  },

	  {
		"id": "npc_vc_marujos_3",
		"nome": "Marujo Armado",
		"tipo": "Humano",
		"alinhamento": "Neutro",
		"ca": 13,
		"tipo_ca": "Couro",
		"pv": 30,
		"dados_vida": "5d8",
		"deslocamento": "9m",
		"atributos": { "for": 12, "des": 14, "con": 12, "int": 10, "sab": 10, "car": 10 },
		"cr": 1,
		"xp": 200,
		"acoes": [
		  {
			"nome": "Espada Curta",
			"tipo": "corpo a corpo",
			"ataque": "+4",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 2 cortante"
		  }
		]
	  },

	  {
		"id": "npc_vc_marujos_4",
		"nome": "Marujo Armado",
		"tipo": "Humano",
		"alinhamento": "Neutro",
		"ca": 13,
		"tipo_ca": "Couro",
		"pv": 30,
		"dados_vida": "5d8",
		"deslocamento": "9m",
		"atributos": { "for": 12, "des": 14, "con": 12, "int": 10, "sab": 10, "car": 10 },
		"cr": 1,
		"xp": 200,
		"acoes": [
		  {
			"nome": "Espada Curta",
			"tipo": "corpo a corpo",
			"ataque": "+4",
			"alcance": "1,5m",
			"alvo": "1 criatura",
			"dano": "1d6 + 2 cortante"
		  }
		]
	},
	{
	  "id": "mob_pirata_amaldicoado",
	  "nome": "Pirata Amaldiçoado",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Caótico maligno",
	  "ca": 13,
	  "tipo_ca": "Couro encharcado",
	  "pv": 35,
	  "dados_vida": "6d8 + 6",
	  "deslocamento": "9m, natação 9m",

	  "atributos": {
		"for": 14,
		"des": 12,
		"con": 12,
		"int": 8,
		"sab": 10,
		"car": 6
	  },

	  "habilidades": [
		{
		  "nome": "Maldição do Tesouro",
		  "descricao": "Ao morrer, se desfaz em água escura e retorna ao navio após algumas horas."
		}
	  ],

	  "sentidos": "Percepção passiva 10",
	  "idiomas": "Comum (fragmentado)",
	  "cr": 1,
	  "xp": 200,

	  "acoes": [
		{
		  "nome": "Sabre Enferrujado",
		  "tipo": "corpo a corpo",
		  "ataque": "+4",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d6 + 2 cortante"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Corpo Salino",
		  "descricao": "Resistência a dano perfurante não mágico."
		}
	  ]
	},
	{
	  "id": "mob_saqueador_amaldicoado",
	  "nome": "Saqueador Amaldiçoado",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Caótico maligno",
	  "ca": 15,
	  "tipo_ca": "Armadura leve +1",
	  "pv": 70,
	  "dados_vida": "10d8 + 20",
	  "deslocamento": "9m, natação 9m",

	  "atributos": {
		"for": 16,
		"des": 14,
		"con": 14,
		"int": 10,
		"sab": 10,
		"car": 8
	  },

	  "habilidades": [
		{
		  "nome": "Maldição do Tesouro",
		  "descricao": "Retorna ao navio após a morte."
		}
	  ],

	  "sentidos": "Percepção passiva 11",
	  "idiomas": "Comum",
	  "cr": 3,
	  "xp": 700,

	  "acoes": [
		{
			"Multi-ataque": "Faz dois ataques por rodada."
		},
		{
		  "nome": "Pistola +1 Corroída",
		  "tipo": "corpo a corpo",
		  "ataque": "+6",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 4 perfurante + 1 mágico"
		},
		{
		  "nome": "Espada +1 Corroída",
		  "tipo": "corpo a corpo",
		  "ataque": "+6",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 4 cortante + 1 mágico"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Fúria Afogada",
		  "descricao": "Abaixo de 50% PV causa +2 dano."
		}
	  ]
	},
	{
	  "id": "mob_capitao_amaldicoado",
	  "nome": "Capitão Amaldiçoado",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Caótico maligno",
	  "ca": 17,
	  "tipo_ca": "Armadura +1",
	  "pv": 140,
	  "dados_vida": "16d8 + 64",
	  "deslocamento": "9m, natação 9m",

	  "atributos": {
		"for": 18,
		"des": 16,
		"con": 18,
		"int": 12,
		"sab": 12,
		"car": 14
	  },

	  "habilidades": [
		{
		  "nome": "Coração Amaldiçoado",
		  "descricao": "Não pode ser destruído permanentemente sem o tesouro."
		}
	  ],

	  "sentidos": "Percepção passiva 12",
	  "idiomas": "Comum, Abissal",
	  "cr": 9,
	  "xp": 5000,

	  "acoes": [
		{
		  "nome": "Multi-ataque",
		  "tipo": "Faz 3 ataques, Sabre Maldito/Pistola do Abismo",
		},
		{
		  "nome": "Sabre Maldito",
		  "tipo": "corpo a corpo",
		  "ataque": "+8",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 5 cortante + 1d6 necrótico"
		},
		{
		  "nome": "Pistola do Abismo",
		  "recarregar": "Um tiro por rodada, precisa de 3+ para funcionar",
		  "tipo": "à distância",
		  "ataque": "+9",
		  "alcance": "18m",
		  "alvo": "1 criatura",
		  "dano": "2d10 + 4 perfurante + 4d6 necrótico"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Tripulação Infinita",
		  "descricao": "Aliados retornam após a morte enquanto o capitão existir."
		}
	  ]
	},
	{
	  "id": "mob_elemental_tempestade",
	  "nome": "Elemental da Tempestade",
	  "tipo": "Elemental",
	  "alinhamento": "Neutro",
	  "ca": 16,
	  "tipo_ca": "Forma elétrica",
	  "pv": 180,
	  "dados_vida": "19d10 + 76",
	  "deslocamento": "0m, voo 18m",

	  "atributos": {
		"for": 18,
		"des": 18,
		"con": 18,
		"int": 6,
		"sab": 12,
		"car": 10
	  },

	  "habilidades": [
		{
		  "nome": "Campo Elétrico",
		  "descricao": "Inimigos próximos sofrem 1d6 elétrico por turno."
		}
	  ],

	  "sentidos": "Percepção passiva 11",
	  "idiomas": "Primordial",
	  "cr": 10,
	  "xp": 5900,

	  "acoes": [
		{
		  "nome": "Raio Concentrado 3x",
		  "tipo": "à distância",
		  "ataque": "+8",
		  "alcance": "18m",
		  "alvo": "1 criatura",
		  "dano": "3d8 elétrico"
		}
	  ]
	},
	{
	  "id": "mob_espirito_vento",
	  "nome": "Espírito do Vento",
	  "tipo": "Elemental",
	  "alinhamento": "Neutro",
	  "ca": 14,
	  "tipo_ca": "Forma gasosa",
	  "pv": 45,
	  "dados_vida": "7d8 + 14",
	  "deslocamento": "voo 18m",

	  "atributos": {
		"for": 8,
		"des": 16,
		"con": 14,
		"int": 6,
		"sab": 10,
		"car": 8
	  },

	  "sentidos": "Percepção passiva 10",
	  "idiomas": "Primordial",
	  "cr": 2,
	  "xp": 450,

	  "acoes": [
		{
		  "nome": "Rajada 2x",
		  "tipo": "à distância",
		  "ataque": "+5",
		  "alcance": "12m",
		  "alvo": "Area, empurra os alvos 2 hex",
		  "dano": "3d6 contundente"
		}
	  ]
	}
];