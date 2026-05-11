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
	"ambientes": ["Bandido"],
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
	  "ambientes": ["Bandido"],

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
	  "ambientes": ["Bandido"],

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
	  "ambientes": ["Demonio"],

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
	  "ambientes": ["Dragão"],

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
	  "ambientes": ["Diabo"],

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
	  "ambientes": ["Bando Barba Branca"],

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
	  "ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		"ambientes": ["Bando Barba Branca"],

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
		  "ambientes": ["Pirata"],

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
		  "ambientes": ["Pirata"],

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
		"ambientes": ["Pirata"],

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
		"ambientes": ["Pirata"],

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
		"ambientes": ["Bandido"],
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
		"ambientes": ["Bandido"],
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
		"ambientes": ["Pirata"],
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
		"ambientes": ["Pirata"],
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
		"ambientes": ["Pirata"],
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
		"ambientes": ["Pirata"],
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
	  "ambientes": ["Pirata", "Morto vivo"],

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
	  "ambientes": ["Pirata", "Morto vivo"],

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
	  "ambientes": ["Pirata", "Morto vivo"],

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
		  "tipo": "Faz 3 ataques, Sabre Maldito/Pistola do Abismo"
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
	  "ambientes": ["Elemental"],

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
	  "ambientes": ["Elemental"],

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
	},
	{
	  "id": "mob_guardiao_tumulo",
	  "nome": "Guardião de Túmulo",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Neutro maligno",
	  "ca": 15,
	  "tipo_ca": "Armadura natural",
	  "pv": 75,
	  "dados_vida": "10d8 + 30",
	  "deslocamento": "6m",
	  "ambientes": ["Morto vivo"],

	  "atributos": {
		"for": 16,
		"des": 10,
		"con": 16,
		"int": 6,
		"sab": 10,
		"car": 6
	  },

	  "habilidades": [
		{
		  "nome": "Emergir do Solo",
		  "descricao": "Pode surgir do chão como ação bônus no primeiro turno."
		}
	  ],

	  "sentidos": "Visão no escuro 18m, Percepção passiva 10",
	  "idiomas": "—",
	  "cr": 4,
	  "xp": 1100,

	  "acoes": [
		{
		  "nome": "Golpe Pesado",
		  "tipo": "corpo a corpo",
		  "ataque": "+6",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "2d8 + 4 contundente"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Corpo Resistente",
		  "descricao": "Resistência a dano cortante e perfurante não mágico."
		}
	  ]
	},
	{
	  "id": "mob_espirito_inquieto",
	  "nome": "Espírito Inquieto",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Caótico maligno",
	  "ca": 13,
	  "tipo_ca": "Forma etérea",
	  "pv": 45,
	  "dados_vida": "7d8 + 14",
	  "deslocamento": "voo 12m",
	  "ambientes": ["Morto vivo"],

	  "atributos": {
		"for": 6,
		"des": 14,
		"con": 14,
		"int": 10,
		"sab": 12,
		"car": 14
	  },

	  "habilidades": [
		{
		  "nome": "Forma Incorpórea",
		  "descricao": "Pode atravessar objetos e criaturas."
		}
	  ],

	  "sentidos": "Visão no escuro 18m, Percepção passiva 11",
	  "idiomas": "Comum",
	  "cr": 2,
	  "xp": 450,

	  "acoes": [
		{
		  "nome": "Toque Gelado",
		  "tipo": "corpo a corpo",
		  "ataque": "+5",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "3d6 necrótico"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Sussurros da Morte",
		  "descricao": "Criaturas a até 3m têm desvantagem em testes de Sabedoria."
		}
	  ]
	},
	{
	  "id": "mob_lich_senhor_ossos",
	  "nome": "Lich, Senhor dos Ossos Silenciosos",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Leal maligno",
	  "ca": 19,
	  "tipo_ca": "Armadura arcana + Coroa do Arcanista Profano",
	  "pv": 180,
	  "dados_vida": "19d8 + 95",
	  "deslocamento": "9m",
	  "ambientes": ["Morto vivo"],

	  "atributos": {
		"for": 10,
		"des": 16,
		"con": 20,
		"int": 20,
		"sab": 16,
		"car": 18
	  },

	  "habilidades": [
		{
		  "nome": "Resistência Lendária",
		  "descricao": "3x por dia, pode escolher passar em um teste de resistência que falhou."
		},
		{
		  "nome": "Regeneração Necromântica",
		  "descricao": "Recupera 10 PV por turno se estiver próximo ao foco necromântico."
		},
		{
		  "nome": "Coroa do Arcanista Profano",
		  "descricao": "A CD das magias do lich aumenta em +1 (já incluído, CD 20)."
		},
		{
		  "nome": "Colar do Conjurador Voraz",
		  "descricao": "O lich adiciona seu modificador de Inteligência (+5) ao dano de suas cantrips."
		}
	  ],

	  "sentidos": "Visão no escuro 36m, Percepção passiva 13",
	  "idiomas": "Comum, Infernal, Abissal",
	  "cr": 12,
	  "xp": 8400,

	  "acoes": [
		{
		  "nome": "Toque Paralisante",
		  "tipo": "corpo a corpo",
		  "ataque": "+8",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "3d6 necrótico",
		  "efeito": "CON CD 20 ou fica paralisado por 1 turno"
		},
		{
		  "nome": "Raio da Morte",
		  "tipo": "à distância",
		  "ataque": "+9",
		  "alcance": "18m",
		  "alvo": "1 criatura",
		  "dano": "8d8 necrótico"
		},
		{
		  "nome": "Explosão Profana",
		  "tipo": "área",
		  "alcance": "6m",
		  "alvo": "todas criaturas",
		  "dano": "6d6 necrótico",
		  "efeito": "CON CD 20 para metade"
		},
		{
		  "nome": "Toque Necrótico (Cantrip)",
		  "tipo": "à distância",
		  "ataque": "+9",
		  "alcance": "18m",
		  "alvo": "1 criatura",
		  "dano": "3d8 + 5 necrótico"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Comandar Mortos",
		  "descricao": "Mortos-vivos aliados recebem +2 em ataques enquanto o lich estiver consciente."
		},
		{
		  "nome": "Filactério Oculto",
		  "descricao": "Ao morrer, retorna em 1d10 dias se o filactério não for destruído."
		}
	  ]
	},
	{
	  "id": "mob_noiva_cadaver",
	  "nome": "Noiva Cadáver",
	  "tipo": "Morto-vivo",
	  "alinhamento": "Caótico maligno",
	  "ca": 15,
	  "tipo_ca": "Forma espectral",
	  "pv": 135,
	  "dados_vida": "18d8 + 54",
	  "deslocamento": "voo 12m",
	  "ambientes": ["Morto vivo"],

	  "atributos": {
		"for": 8,
		"des": 16,
		"con": 16,
		"int": 12,
		"sab": 14,
		"car": 20
	  },

	  "habilidades": [
		{
		  "nome": "Forma Incorpórea",
		  "descricao": "Pode atravessar criaturas e objetos."
		},
		{
		  "nome": "Presença Dilacerante",
		  "descricao": "Criaturas a até 6m têm desvantagem em testes de resistência contra medo."
		}
	  ],

	  "sentidos": "Visão no escuro 18m, Percepção passiva 12",
	  "idiomas": "Comum",
	  "cr": 10,
	  "xp": 5900,

	  "acoes": [
		{
		  "nome": "Toque Espectral",
		  "tipo": "corpo a corpo",
		  "ataque": "+8",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "4d6 necrótico"
		},
		{
		  "nome": "Lamento da Noiva",
		  "tipo": "área",
		  "alcance": "9m",
		  "alvo": "todas criaturas",
		  "dano": "6d6 psíquico",
		  "efeito": "SAB CD 16 ou fica amedrontado por 1 minuto"
		},
		{
		  "nome": "Grito Mortal",
		  "tipo": "área",
		  "alcance": "9m",
		  "alvo": "criaturas que a ouvem",
		  "dano": "0",
		  "efeito": "CON CD 16 ou cai a 0 PV; sucesso sofre 4d6 necrótico",
		  "recarga": "5-6"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Véu de Lamento",
		  "descricao": "Quando reduzida a 0 PV pela primeira vez, permanece com 1 PV e libera automaticamente o Lamento da Noiva."
		}
	  ]
	},
	{
	  "id": "mob_guarda_corrente_negra",
	  "nome": "Guarda da Corrente Negra",
	  "tipo": "Humanoide",
	  "alinhamento": "Leal maligno",
	  "ca": 16,
	  "tipo_ca": "Armadura leve reforçada",
	  "pv": 52,
	  "dados_vida": "8d8 + 16",
	  "deslocamento": "9m",
	  "ambientes": ["Guarda nobre"],

	  "atributos": {
		"for": 14,
		"des": 14,
		"con": 14,
		"int": 10,
		"sab": 12,
		"car": 10
	  },

	  "habilidades": [
		{
		  "nome": "Treinamento Coordenado",
		  "descricao": "Recebe +1 em ataques se estiver a até 1,5m de outro guarda aliado."
		}
	  ],

	  "sentidos": "Percepção passiva 11",
	  "idiomas": "Comum",
	  "cr": 3,
	  "xp": 700,

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza dois ataques com espada curta."
		},
		{
		  "nome": "Espada Curta",
		  "tipo": "corpo a corpo",
		  "ataque": "+5",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d6 + 2 cortante"
		},
		{
		  "nome": "Besta Leve",
		  "tipo": "à distância",
		  "ataque": "+4",
		  "alcance": "24m",
		  "alvo": "1 criatura",
		  "dano": "1d8 perfurante"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Postura Defensiva",
		  "descricao": "Como ação bônus, ganha +2 CA até o próximo turno."
		}
	  ]
	},
	{
	  "id": "mob_vigilante_corrente",
	  "nome": "Vigilante da Corrente",
	  "tipo": "Humanoide",
	  "alinhamento": "Leal maligno",
	  "ca": 15,
	  "tipo_ca": "Armadura leve",
	  "pv": 45,
	  "dados_vida": "7d8 + 14",
	  "deslocamento": "9m",
	  "ambientes": ["Guarda nobre"],

	  "atributos": {
		"for": 12,
		"des": 16,
		"con": 14,
		"int": 12,
		"sab": 14,
		"car": 10
	  },

	  "habilidades": [
		{
		  "nome": "Olhos da Patrulha",
		  "descricao": "Vantagem em testes de Percepção."
		}
	  ],

	  "sentidos": "Percepção passiva 14",
	  "idiomas": "Comum",
	  "cr": 3,
	  "xp": 700,

	  "acoes": [
		{
		  "nome": "Disparo Preciso",
		  "tipo": "à distância",
		  "ataque": "+6",
		  "alcance": "30m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 3 perfurante"
		},
		{
		  "nome": "Rede de Contenção",
		  "tipo": "à distância",
		  "ataque": "+5",
		  "alcance": "6m",
		  "alvo": "1 criatura",
		  "dano": "0",
		  "efeito": "Alvo fica Restrained (FOR CD 13 para escapar)"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Alarme Silencioso",
		  "descricao": "Como reação, alerta todos os guardas em 18m, concedendo vantagem na iniciativa."
		}
	  ]
	},
	{
	  "id": "mob_executor_corrente",
	  "nome": "Executor da Corrente Negra",
	  "tipo": "Humanoide",
	  "alinhamento": "Leal maligno",
	  "ca": 17,
	  "tipo_ca": "Armadura arcana",
	  "pv": 88,
	  "dados_vida": "11d8 + 33",
	  "deslocamento": "9m",
	  "ambientes": ["Guarda nobre"],

	  "atributos": {
		"for": 12,
		"des": 14,
		"con": 16,
		"int": 14,
		"sab": 12,
		"car": 16
	  },

	  "habilidades": [
		{
		  "nome": "Toque do Patrono",
		  "descricao": "Seus ataques causam +1d6 necrótico."
		}
	  ],

	  "sentidos": "Percepção passiva 11",
	  "idiomas": "Comum, Infernal",
	  "cr": 6,
	  "xp": 2300,

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza dois ataques ou usa magia."
		},
		{
		  "nome": "Lâmina Negra",
		  "tipo": "corpo a corpo",
		  "ataque": "+6",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 2 cortante + 1d6 necrótico"
		},
		{
		  "nome": "Rajada Sombria",
		  "tipo": "à distância",
		  "ataque": "+7",
		  "alcance": "18m",
		  "alvo": "1 criatura",
		  "dano": "2d10 necrótico"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Vínculo Sombrio",
		  "descricao": "Quando um aliado cai a 0 PV a até 9m, o executor ganha +2 em ataques por 2 turnos."
		}
	  ]
	},
	{
	  "id": "mob_darian_varkros",
	  "nome": "Darian Varkros, Senhor das Correntes",
	  "tipo": "Humanoide",
	  "alinhamento": "Leal maligno",
	  "ca": 18,
	  "tipo_ca": "Armadura arcana + Proteções do Patrono",
	  "pv": 165,
	  "dados_vida": "18d8 + 72",
	  "deslocamento": "9m",
	  "ambientes": ["Nobre"],

	  "atributos": {
		"for": 10,
		"des": 14,
		"con": 18,
		"int": 14,
		"sab": 12,
		"car": 20
	  },

	  "habilidades": [
		{
		  "nome": "Pacto das Correntes",
		  "descricao": "Criaturas afetadas por suas magias têm desvantagem para escapar de efeitos de restrição."
		},
		{
		  "nome": "Resistência Mágica",
		  "descricao": "Vantagem em testes de resistência contra magia."
		}
	  ],

	  "sentidos": "Percepção passiva 11",
	  "idiomas": "Comum, Infernal",
	  "cr": 11,
	  "xp": 7200,

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza duas Rajadas Místicas ou usa uma magia."
		},
		{
		  "nome": "Rajada Mística",
		  "tipo": "à distância",
		  "ataque": "+9",
		  "alcance": "36m",
		  "alvo": "1 criatura",
		  "dano": "2d10 + 5 força",
		  "efeito": "Empurra o alvo 3m para trás"
		},
		{
		  "nome": "Correntes do Patrono",
		  "tipo": "à distância",
		  "ataque": "+8",
		  "alcance": "18m",
		  "alvo": "1 criatura",
		  "dano": "3d8 necrótico",
		  "efeito": "Alvo fica Restrained (FOR CD 16 para escapar)"
		},
		{
		  "nome": "Dominar Servos",
		  "tipo": "área",
		  "alcance": "9m",
		  "alvo": "criaturas à escolha",
		  "dano": "0",
		  "efeito": "SAB CD 16 ou fica encantado por 1 turno",
		  "recarga": "5-6"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Marca do Proprietário",
		  "descricao": "Quando uma criatura cai abaixo de 50% de vida, Darian causa +2d6 dano extra contra ela."
		},
		{
		  "nome": "Chamado do Patrono",
		  "descricao": "1x por combate, invoca 2 Guardas da Corrente Negra com metade dos PV."
		}
	  ]
	},
	{
	  "id": "mob_sahuagin_sacerdote",
	  "nome": "Sahuagin Sacerdote",
	  "tipo": "Humanoide (sahuagin)",
	  "alinhamento": "Leal maligno",
	  "ca": 15,
	  "tipo_ca": "Armadura natural",
	  "pv": 95,
	  "dados_vida": "10d8 + 40",
	  "deslocamento": "9m, nado 12m",

	  "ambientes": ["Marinho"],

	  "atributos": {
		"for": 14,
		"des": 12,
		"con": 20,
		"int": 11,
		"sab": 16,
		"car": 13
	  },

	  "resistencias": ["frio"],

	  "sentidos": "visão no escuro 36m, Percepção passiva 13",
	  "idiomas": "Sahuagin, Abissal",
	  "cr": 5,
	  "xp": 1800,

	  "habilidades": [
		{
		  "nome": "Frenesi de Sangue",
		  "descricao": "Tem vantagem em ataques corpo a corpo contra criaturas que não estejam com todos os pontos de vida."
		},
		{
		  "nome": "Anfíbio",
		  "descricao": "Pode respirar ar e água."
		},
		{
		  "nome": "Conjurador",
		  "descricao": "Conjurador de nível 5 (CD 14 para resistir às magias, +6 para atingir com ataques mágicos)."
		}
	  ],

	  "magias": {
		"cd": 14,
		"ataque_magia": "+6",
		"truques": ["Thaumaturgy", "Sacred Flame", "Toll the Dead"],
		"1_nivel": ["Guiding Bolt", "Command", "Shield of Faith"],
		"2_nivel": ["Hold Person", "Spiritual Weapon"],
		"3_nivel": ["Spirit Guardians", "Bestow Curse"]
	  },

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza dois ataques: mordida e garra."
		},
		{
		  "nome": "Mordida",
		  "tipo": "corpo a corpo",
		  "ataque": "+5",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d6 + 2 perfurante"
		},
		{
		  "nome": "Garra",
		  "tipo": "corpo a corpo",
		  "ataque": "+5",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 2 cortante"
		},
		{
		  "nome": "Chamado das Profundezas",
		  "tipo": "área",
		  "recarga": "5-6",
		  "alcance": "6m",
		  "alvo": "criaturas na área",
		  "dano": "2d8 necrótico",
		  "efeito": "CD 14 FOR ou fica caído"
		}
	  ]
	},
	{
	  "id": "mob_sahuagin_guerreiro",
	  "nome": "Sahuagin Guerreiro",
	  "tipo": "Humanoide (sahuagin)",
	  "alinhamento": "Leal maligno",
	  "ca": 17,
	  "tipo_ca": "Armadura natural + estilo de luta",
	  "pv": 110,
	  "dados_vida": "13d8 + 52",
	  "deslocamento": "9m, nado 12m",

	  "ambientes": ["Marinho"],

	  "atributos": {
		"for": 18,
		"des": 14,
		"con": 18,
		"int": 10,
		"sab": 12,
		"car": 11
	  },

	  "sentidos": "visão no escuro 36m, Percepção passiva 11",
	  "idiomas": "Sahuagin",
	  "cr": 5,
	  "xp": 1800,

	  "habilidades": [
		{
		  "nome": "Frenesi de Sangue",
		  "descricao": "Tem vantagem em ataques corpo a corpo contra criaturas que não estejam com todos os pontos de vida."
		},
		{
		  "nome": "Estilo de Luta: Defesa",
		  "descricao": "Recebe +1 na Classe de Armadura."
		},
		{
		  "nome": "Crítico Aprimorado",
		  "descricao": "Acerta crítico com 19–20."
		},
		{
		  "nome": "Segundo Fôlego",
		  "descricao": "1x por combate, recupera 1d10 + 5 pontos de vida como ação bônus."
		},
		{
		  "nome": "Surto de Ação",
		  "descricao": "1x por combate, pode realizar uma ação adicional no turno."
		}
	  ],

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza três ataques: dois com tridente e um com mordida."
		},
		{
		  "nome": "Tridente",
		  "tipo": "corpo a corpo ou à distância",
		  "ataque": "+7",
		  "alcance": "1,5m ou 6/18m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 4 perfurante (ou 1d10 + 4 se usado com duas mãos)"
		},
		{
		  "nome": "Mordida",
		  "tipo": "corpo a corpo",
		  "ataque": "+7",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d6 + 4 perfurante"
		}
	  ],

	  "reacoes": [
		{
		  "nome": "Aparar",
		  "descricao": "Reduz o dano de um ataque corpo a corpo em 1d10 + 4."
		}
	  ]
	},
	{
	  "id": "mob_sahuagin_barao",
	  "nome": "Sahuagin Barão",
	  "tipo": "Humanoide (sahuagin)",
	  "alinhamento": "Leal maligno",
	  "ca": 18,
	  "tipo_ca": "Armadura natural reforçada",
	  "pv": 210,
	  "dados_vida": "20d10 + 100",
	  "deslocamento": "9m, nado 12m",

	  "ambientes": ["Marinho"],

	  "atributos": {
		"for": 20,
		"des": 16,
		"con": 20,
		"int": 12,
		"sab": 14,
		"car": 16
	  },

	  "sentidos": "visão no escuro 36m, Percepção passiva 12",
	  "idiomas": "Sahuagin, Abissal",
	  "cr": 10,
	  "xp": 5900,

	  "habilidades": [
		{
		  "nome": "Frenesi de Sangue",
		  "descricao": "Tem vantagem em ataques corpo a corpo contra criaturas que não estejam com todos os pontos de vida."
		},
		{
		  "nome": "Crítico Aprimorado Superior",
		  "descricao": "Acerta crítico com 18–20."
		},
		{
		  "nome": "Mestre de Armas",
		  "descricao": "Pode sofrer -5 na jogada de ataque para causar +10 de dano."
		},
		{
		  "nome": "Superioridade em Combate",
		  "descricao": "Possui 4 dados de superioridade (d10). CD 16. Pode usar manobras como Ataque Desarmante, Derrubador, Preciso e Ripostar."
		},
		{
		  "nome": "Indomável",
		  "descricao": "2x por combate, pode refazer um teste de resistência que falhou."
		},
		{
		  "nome": "Presença Aterradora",
		  "descricao": "Inimigos a até 6m devem passar em um teste de Sabedoria CD 16 ou ficam amedrontados por 1 turno."
		}
	  ],

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza quatro ataques: três com lança coralina e um com mordida."
		},
		{
		  "nome": "Lança Coralina",
		  "tipo": "corpo a corpo ou à distância",
		  "ataque": "+9",
		  "alcance": "1,5m ou 6/18m",
		  "alvo": "1 criatura",
		  "dano": "1d10 + 5 perfurante"
		},
		{
		  "nome": "Mordida",
		  "tipo": "corpo a corpo",
		  "ataque": "+9",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d8 + 5 perfurante"
		},
		{
		  "nome": "Comandar a Maré",
		  "tipo": "especial",
		  "recarga": "5-6",
		  "alcance": "9m",
		  "alvo": "aliados na área",
		  "efeito": "Aliados ganham vantagem em ataques, +3m de deslocamento e +5 de dano até o final do próximo turno."
		}
	  ]
	},
	{
	  "id": "mob_bruxa_marinha_ancia",
	  "nome": "Bruxa Marinha Anciã",
	  "tipo": "Fada (hag)",
	  "alinhamento": "Caótico maligno",
	  "ca": 16,
	  "tipo_ca": "Pele arcana",
	  "pv": 136,
	  "dados_vida": "16d8 + 64",
	  "deslocamento": "9m, nado 12m",

	  "ambientes": ["Marinho"],

	  "atributos": {
		"for": 18,
		"des": 14,
		"con": 18,
		"int": 14,
		"sab": 14,
		"car": 16
	  },

	  "resistencias": [
		"psíquico",
		"necrótico"
	  ],

	  "imunidades_condicao": [
		"amedrontado"
	  ],

	  "sentidos": "visão no escuro 36m, Percepção passiva 12",
	  "idiomas": "Comum, Gigante, Aquan",
	  "cr": 8,
	  "xp": 3900,

	  "habilidades": [
		{
		  "nome": "Anfíbia",
		  "descricao": "Pode respirar ar e água."
		},
		{
		  "nome": "Magia de Coven Aprimorada",
		  "descricao": "Enquanto estiver a até 9m de pelo menos duas outras bruxas, pode conjurar Augury, Find Familiar, Identify, Locate Object, Scrying, Unseen Servant, Bestow Curse ou Lightning Bolt (CD 14). Após conjurar uma dessas magias, precisa de um descanso longo para usar novamente."
		},
		{
		  "nome": "Aparência Vil Aprimorada",
		  "descricao": "Criaturas a até 9m que a vejam devem passar em um teste de Sabedoria CD 14 ou ficam amedrontadas por 1 minuto. Podem repetir o teste ao final de cada turno. Em sucesso, ficam imunes por 24h."
		},
		{
		  "nome": "Presença Abissal",
		  "descricao": "Criaturas amedrontadas pela bruxa têm desvantagem em testes de resistência contra suas habilidades e magias."
		}
	  ],

	  "acoes": [
		{
		  "nome": "Garra",
		  "tipo": "corpo a corpo",
		  "ataque": "+7",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "2d8 + 4 cortante + 2d6 necrótico"
		},
		{
		  "nome": "Olhar da Morte",
		  "tipo": "especial",
		  "recarga": "5-6",
		  "alcance": "9m",
		  "alvo": "1 criatura amedrontada",
		  "dano": "6d8 psíquico",
		  "efeito": "CD 14 SAB; se falhar e tiver 40 PV ou menos, cai a 0 PV. Em sucesso, sofre metade do dano."
		},
		{
		  "nome": "Aparência Ilusória",
		  "tipo": "especial",
		  "descricao": "Conjura Disguise Self (CD 15) com duração de 24 horas."
		},
		{
		  "nome": "Rajada Abissal",
		  "tipo": "área",
		  "recarga": "6",
		  "alcance": "cone de 9m",
		  "alvo": "criaturas na área",
		  "dano": "8d8 necrótico",
		  "efeito": "CD 15 CON para metade do dano."
		}
	  ]
	},
	{
	  "id": "mob_marid",
	  "nome": "Marid",
	  "tipo": "Elemental (gênio)",
	  "alinhamento": "Caótico neutro",
	  "ca": 17,
	  "tipo_ca": "Forma elemental",
	  "pv": 229,
	  "dados_vida": "17d10 + 136",
	  "deslocamento": "9m, voo 18m, nado 27m",

	  "ambientes": ["Marinho"],

	  "atributos": {
		"for": 22,
		"des": 12,
		"con": 26,
		"int": 18,
		"sab": 17,
		"car": 18
	  },

	  "resistencias": [
		"ácido",
		"frio",
		"elétrico"
	  ],

	  "sentidos": "percepção às cegas 9m, visão no escuro 36m, Percepção passiva 13",
	  "idiomas": "Aquan",
	  "cr": 11,
	  "xp": 7200,

	  "habilidades": [
		{
		  "nome": "Anfíbio",
		  "descricao": "Pode respirar ar e água."
		},
		{
		  "nome": "Restauração Elemental",
		  "descricao": "Se morrer fora do Plano Elemental da Água, seu corpo se dissolve e ele reaparece em 1d4 dias no plano de origem com todos os pontos de vida."
		},
		{
		  "nome": "Desejo Instável",
		  "descricao": "Existe 30% de chance de conhecer Wish. Se possuir, pode conjurar apenas para criaturas não-gênios. Após 3 usos, não pode conjurar novamente por 1 ano."
		}
	  ],

	  "magias": {
		"cd": 16,
		"ataque_magia": "+8",
		"truques": [
		  "Create or Destroy Water",
		  "Detect Magic",
		  "Detect Evil and Good",
		  "Purify Food and Drink",
		  "Ray of Frost",
		  "Shape Water"
		],
		"3_dia": [
		  "Hold Person",
		  "Blindness/Deafness",
		  "Tidal Wave",
		  "Lightning Bolt"
		],
		"1_dia": [
		  "Control Water",
		  "Cone of Cold",
		  "Wall of Water",
		  "Invisibility",
		  "Plane Shift",
		  "Banishment",
		  "Slow"
		]
	  },

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza três ataques de Chicote Aquático."
		},
		{
		  "nome": "Chicote Aquático",
		  "tipo": "corpo a corpo",
		  "ataque": "+10",
		  "alcance": "4,5m",
		  "alvo": "1 criatura",
		  "dano": "2d8 + 6 cortante + 2d8 frio"
		},
		{
		  "nome": "Jato de Água",
		  "tipo": "linha",
		  "alcance": "18m",
		  "alvo": "criaturas na linha (3m de largura)",
		  "dano": "9d6 frio",
		  "efeito": "CD 18 DES; empurra 6m e derruba criaturas Grandes ou menores"
		},
		{
		  "nome": "Maré Esmagadora",
		  "tipo": "área",
		  "recarga": "5-6",
		  "alcance": "cone de 9m",
		  "alvo": "criaturas na área",
		  "dano": "10d8 contundente",
		  "efeito": "CD 18 FOR; falha: fica caído e restrito até o fim do próximo turno. Sucesso: metade do dano e não fica restrito."
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Véu Nebuloso",
		  "descricao": "Recarga 5-6. Conjura Fog Cloud."
		}
	  ]
	},
	{
	  "id": "mob_sahuagin",
	  "nome": "Sahuagin",
	  "tipo": "Humanoide (sahuagin)",
	  "alinhamento": "Leal maligno",
	  "ca": 12,
	  "tipo_ca": "Armadura natural",
	  "pv": 22,
	  "dados_vida": "4d8 + 4",
	  "deslocamento": "9m, nado 12m",

	  "ambientes": ["Marinho"],

	  "atributos": {
		"for": 13,
		"des": 11,
		"con": 12,
		"int": 12,
		"sab": 13,
		"car": 9
	  },

	  "resistencias": [
		"ácido",
		"frio"
	  ],

	  "sentidos": "visão no escuro 36m, Percepção passiva 15",
	  "idiomas": "Sahuagin",
	  "cr": "1/2",
	  "xp": 100,

	  "habilidades": [
		{
		  "nome": "Frenesi de Sangue",
		  "descricao": "Tem vantagem em ataques contra criaturas que não estejam com todos os pontos de vida."
		},
		{
		  "nome": "Anfíbio Limitado",
		  "descricao": "Pode respirar ar e água, mas precisa se submergir ao menos uma vez a cada 4 horas ou começa a sufocar."
		},
		{
		  "nome": "Telepatia com Tubarões",
		  "descricao": "Pode se comunicar e influenciar tubarões a até 36m de distância."
		}
	  ],

	  "acoes": [
		{
		  "nome": "Multiataque",
		  "descricao": "Realiza dois ataques de garra."
		},
		{
		  "nome": "Garra",
		  "tipo": "corpo a corpo",
		  "ataque": "+3",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "1d6 + 1 cortante"
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Carga Aquática",
		  "descricao": "Nada até seu deslocamento em linha reta em direção a um inimigo visível."
		}
	  ]
	},
	{
	  "id": "mob_cegonha_bico_de_sapato",
	  "nome": "Cegonha-Bico-de-Sapato",
	  "tipo": "Besta",
	  "alinhamento": "Neutro",
	  "ca": 13,
	  "tipo_ca": "Pele resistente",
	  "pv": 45,
	  "dados_vida": "6d10 + 12",
	  "deslocamento": "6m, voo 12m",

	  "ambientes": ["Pântano", "Floresta"],

	  "atributos": {
		"for": 16,
		"des": 12,
		"con": 14,
		"int": 3,
		"sab": 14,
		"car": 6
	  },

	  "sentidos": "Percepção passiva 14",
	  "idiomas": "-",
	  "cr": 2,
	  "xp": 450,

	  "habilidades": [
		{
		  "nome": "Caçador Imóvel",
		  "descricao": "Se permanecer imóvel por um turno completo, tem vantagem no próximo ataque."
		},
		{
		  "nome": "Olhar Perturbador",
		  "descricao": "Criaturas a até 6m que encontrem seu olhar devem passar em um teste de Sabedoria CD 12 ou ficam intimidadas (desvantagem no próximo ataque)."
		}
	  ],

	  "acoes": [
		{
		  "nome": "Bico Esmagador",
		  "tipo": "corpo a corpo",
		  "ataque": "+5",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "2d8 + 3 perfurante",
		  "efeito": "Se o alvo for Médio ou menor, deve passar em CD 13 FOR ou fica agarrado (escape CD 13)."
		},
		{
		  "nome": "Golpe Relâmpago",
		  "tipo": "corpo a corpo",
		  "recarga": "5-6",
		  "ataque": "+5",
		  "alcance": "1,5m",
		  "alvo": "1 criatura",
		  "dano": "3d8 perfurante",
		  "efeito": "Se acertar, o alvo deve passar em CD 13 CON ou fica atordoado até o fim do próximo turno."
		}
	  ],

	  "habilidades_especiais": [
		{
		  "nome": "Silêncio Predatório",
		  "descricao": "Tem vantagem em testes de Furtividade em ambientes naturais."
		}
	  ]
	},
    {
      "id": "fey_primavera_soldado",
      "nome": "Guardião do Florescer",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Caótico Neutro",
      "cr": 3,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Elfos e sátiros de armaduras leves cobertas por musgo, folhas jovens e flores vivas. Seus olhos brilham em tons esmeralda e dourado.",
      "atributos": {
        "for": 16,
        "des": 14,
        "con": 14,
        "int": 12,
        "sab": 12,
        "car": 13
      },
      "ac": 17,
      "hp": 60,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Fey Ancestry",
        "Second Wind",
        "War Magic"
      ],
      "ataques": [
        {
          "nome": "Lâmina Verdejante",
          "ataque": 6,
          "dano": "1d8+3 cortante + 1d4 radiante"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 13,
        "ataque_magico": 5,
        "preparadas": [
          "Shield",
          "Absorb Elements",
          "Magic Missile",
          "Entangle"
        ]
      },
      "descricao": "Patrulheiros rápidos e atentos, usados para conter intrusos sem destruir a beleza viva da corte."
    },
    {
      "id": "fey_primavera_capitao",
      "nome": "Capitão do Broto Dourado",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Caótico Neutro",
      "cr": 6,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Vestes de batalha verdes e douradas, coroas de ramos vivos e runas de seiva luminosa correndo pelos braços.",
      "atributos": {
        "for": 18,
        "des": 14,
        "con": 16,
        "int": 14,
        "sab": 13,
        "car": 14
      },
      "ac": 18,
      "hp": 105,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "War Magic",
        "Fey Step (1/descanso curto)"
      ],
      "ataques": [
        {
          "nome": "Espada do Primeiro Sol",
          "ataque": 8,
          "dano": "1d8+4 cortante + 2d4 radiante"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 14,
        "ataque_magico": 6,
        "preparadas": [
          "Shield",
          "Absorb Elements",
          "Misty Step",
          "Magic Weapon",
          "Web"
        ]
      },
      "descricao": "Comandam expedições de fronteira e escoltam emissários entre as terras de entremeio."
    },
    {
      "id": "fey_primavera_comandante",
      "nome": "Comandante da Aurora Verde",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Caótico Neutro",
      "cr": 10,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Armadura viva formada por galhos, pétalas e luz dourada. Cada passo faz pequenas flores nascerem sob os pés.",
      "atributos": {
        "for": 20,
        "des": 16,
        "con": 18,
        "int": 16,
        "sab": 14,
        "car": 16
      },
      "ac": 20,
      "hp": 165,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "War Magic",
        "Indomitable",
        "Fey Step"
      ],
      "ataques": [
        {
          "nome": "Lâmina do Florescer Eterno",
          "ataque": 10,
          "dano": "2d8+5 cortante + 2d6 radiante"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 16,
        "ataque_magico": 8,
        "preparadas": [
          "Shield",
          "Absorb Elements",
          "Misty Step",
          "Mirror Image",
          "Plant Growth",
          "Haste"
        ]
      },
      "descricao": "São os defensores centrais da Primavera, capazes de transformar um campo de batalha em floresta viva."
    },
	{
      "id": "fey_verao_soldado",
      "nome": "Lança do Sol Ardente",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Caótico Bom",
      "cr": 3,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Guerreiros de bronze polido, capas vermelhas e olhos brilhando como brasas.",
      "atributos": {
        "for": 17,
        "des": 13,
        "con": 14,
        "int": 12,
        "sab": 12,
        "car": 13
      },
      "ac": 18,
      "hp": 64,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Second Wind",
        "War Magic"
      ],
      "ataques": [
        {
          "nome": "Lança Solar",
          "ataque": 6,
          "dano": "1d8+3 perfurante + 1d4 fogo"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 13,
        "ataque_magico": 5,
        "preparadas": [
          "Shield",
          "Absorb Elements",
          "Burning Hands",
          "Magic Missile"
        ]
      },
      "descricao": "Infantaria disciplinada da corte, avançam como muralhas de verão."
    },
    {
      "id": "fey_verao_capitao",
      "nome": "Capitão da Chama Real",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Caótico Bom",
      "cr": 6,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Armaduras douradas marcadas por brasas vivas e mantos cor de cobre.",
      "atributos": {
        "for": 18,
        "des": 14,
        "con": 16,
        "int": 14,
        "sab": 13,
        "car": 15
      },
      "ac": 19,
      "hp": 112,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "War Magic"
      ],
      "ataques": [
        {
          "nome": "Espada do Meio-Dia",
          "ataque": 8,
          "dano": "1d8+4 cortante + 2d4 fogo"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 14,
        "ataque_magico": 6,
        "preparadas": [
          "Shield",
          "Scorching Ray",
          "Misty Step",
          "Magic Weapon"
        ]
      },
      "descricao": "Lideram formações ofensivas e mantêm o ímpeto da corte em batalhas abertas."
    },
    {
      "id": "fey_verao_comandante",
      "nome": "Comandante do Sol de Bronze",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Caótico Bom",
      "cr": 10,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Placas douradas quase incandescentes e uma coroa de fogo contido.",
      "atributos": {
        "for": 20,
        "des": 15,
        "con": 18,
        "int": 16,
        "sab": 14,
        "car": 16
      },
      "ac": 20,
      "hp": 172,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "War Magic",
        "Indomitable"
      ],
      "ataques": [
        {
          "nome": "Lâmina do Alto Sol",
          "ataque": 10,
          "dano": "2d8+5 cortante + 2d6 fogo"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 16,
        "ataque_magico": 8,
        "preparadas": [
          "Shield",
          "Misty Step",
          "Scorching Ray",
          "Fireball",
          "Haste"
        ]
      },
      "descricao": "Quando entram em batalha, parecem trazer o meio-dia consigo."
    },
	{
      "id": "fey_outono_soldado",
      "nome": "Sentinela das Folhas Mortas",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Neutro",
      "cr": 3,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Guerreiros envoltos em mantos ocres e ferrugem, usando máscaras finas de madeira rachada. Folhas secas giram ao redor de seus passos.",
      "atributos": {
        "for": 16,
        "des": 14,
        "con": 14,
        "int": 13,
        "sab": 12,
        "car": 12
      },
      "ac": 17,
      "hp": 62,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Fey Ancestry",
        "Second Wind",
        "War Magic"
      ],
      "ataques": [
        {
          "nome": "Foice das Folhas Secas",
          "ataque": 6,
          "dano": "1d8+3 cortante + 1d4 necrótico"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 13,
        "ataque_magico": 5,
        "preparadas": [
          "Shield",
          "Cause Fear",
          "Ray of Sickness",
          "Absorb Elements"
        ]
      },
      "descricao": "Guardas silenciosos usados para patrulhar florestas douradas e regiões onde a Feywild começa lentamente a apodrecer."
    },
    {
      "id": "fey_outono_capitao",
      "nome": "Capitão da Colheita Sombria",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Neutro",
      "cr": 6,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Vestes longas de guerra em tons de cobre escuro e vinho envelhecido. Seus olhos parecem lanternas âmbar brilhando sob capuzes de folhas secas.",
      "atributos": {
        "for": 18,
        "des": 14,
        "con": 16,
        "int": 14,
        "sab": 13,
        "car": 14
      },
      "ac": 18,
      "hp": 110,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "War Magic",
        "Aura da Melancolia"
      ],
      "ataques": [
        {
          "nome": "Lâmina do Crepúsculo",
          "ataque": 8,
          "dano": "1d10+4 cortante + 2d4 necrótico"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 14,
        "ataque_magico": 6,
        "preparadas": [
          "Shield",
          "Misty Step",
          "Blindness/Deafness",
          "Shadow Blade",
          "Hold Person"
        ]
      },
      "descricao": "Capitães do Outono preferem vitórias lentas e inevitáveis, enfraquecendo inimigos até que cedam ao desgaste."
    },
    {
      "id": "fey_outono_comandante",
      "nome": "Comandante da Última Colheita",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Neutro",
      "cr": 10,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Uma figura alta envolta em folhas secas eternamente giratórias, com armadura negra marcada por rachaduras douradas como madeira antiga.",
      "atributos": {
        "for": 20,
        "des": 15,
        "con": 18,
        "int": 16,
        "sab": 15,
        "car": 16
      },
      "ac": 20,
      "hp": 170,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "Indomitable",
        "War Magic",
        "Aura da Decadência"
      ],
      "ataques": [
        {
          "nome": "Espada da Folha Final",
          "ataque": 10,
          "dano": "2d8+5 cortante + 2d6 necrótico"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 16,
        "ataque_magico": 8,
        "preparadas": [
          "Shield",
          "Fear",
          "Blight",
          "Shadow Blade",
          "Misty Step",
          "Bestow Curse"
        ]
      },
      "descricao": "Comandantes do Outono carregam a inevitabilidade do fim. Campos inteiros silenciam quando eles passam."
    },
    {
      "id": "fey_inverno_soldado_controlado",
      "nome": "Sentinela da Geada",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Leal Neutro",
      "cr": 3,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Guerreiros de armaduras azul-pálidas cobertas de gelo fino. Vapor frio escapa lentamente entre as juntas metálicas.",
      "atributos": {
        "for": 16,
        "des": 13,
        "con": 15,
        "int": 12,
        "sab": 13,
        "car": 11
      },
      "ac": 18,
      "hp": 68,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Second Wind",
        "War Magic",
        "Resistência a Frio"
      ],
      "ataques": [
        {
          "nome": "Espada Congelante",
          "ataque": 6,
          "dano": "1d8+3 cortante + 1d4 frio"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 13,
        "ataque_magico": 5,
        "preparadas": [
          "Shield",
          "Absorb Elements",
          "Armor of Agathys",
          "Ice Knife"
        ]
      },
      "descricao": "Soldados disciplinados e silenciosos que defendem os domínios congelados do Inverno."
    },
    {
      "id": "fey_inverno_capitao_controlado",
      "nome": "Capitão do Véu Branco",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Leal Neutro",
      "cr": 6,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Capas longas de neve encantada arrastam pelo chão enquanto gelo cristalino cobre suas armas.",
      "atributos": {
        "for": 18,
        "des": 14,
        "con": 16,
        "int": 14,
        "sab": 14,
        "car": 12
      },
      "ac": 19,
      "hp": 118,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "War Magic",
        "Indomitable"
      ],
      "ataques": [
        {
          "nome": "Lâmina da Tempestade Pálida",
          "ataque": 8,
          "dano": "1d10+4 cortante + 2d4 frio"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 14,
        "ataque_magico": 6,
        "preparadas": [
          "Shield",
          "Misty Step",
          "Hold Person",
          "Snilloc's Snowball Swarm",
          "Mirror Image"
        ]
      },
      "descricao": "Capitães do Inverno mantêm formação impecável mesmo durante tempestades feéricas."
    },
    {
      "id": "fey_inverno_comandante_controlado",
      "nome": "Comandante da Coroa Invernal",
      "tipo": "Fey",
      "tamanho": "Médio",
      "alinhamento": "Leal Neutro",
      "cr": 10,
      "classe_base": "Fighter (Eldritch Knight)",
      "aparencia": "Uma figura envolta por neve contínua, usando armadura branca azulada com cristais de gelo crescendo como espinhos.",
      "atributos": {
        "for": 20,
        "des": 15,
        "con": 18,
        "int": 16,
        "sab": 15,
        "car": 14
      },
      "ac": 21,
      "hp": 178,
      "deslocamento": "30 ft.",
      "habilidades": [
        "Action Surge",
        "Indomitable",
        "War Magic",
        "Aura Congelante"
      ],
      "ataques": [
        {
          "nome": "Espada da Noite Glacial",
          "ataque": 10,
          "dano": "2d8+5 cortante + 2d6 frio"
        }
      ],
      "magias": {
        "atributo": "Inteligência",
        "cd": 16,
        "ataque_magico": 8,
        "preparadas": [
          "Shield",
          "Cone of Cold",
          "Hold Monster",
          "Armor of Agathys",
          "Misty Step",
          "Counterspell"
        ]
      },
      "descricao": "Os comandantes da Corte Invernal parecem carregar o próprio silêncio da neve eterna."
    }
];