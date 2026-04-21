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
	"ambientes": ["Urbano", "Floresta", "Campos"],
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
	  "ambientes": ["Marinho", "Floresta", "Urbano","Campo"],

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
	  "ambientes": ["Urbano"],

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
	  "ambientes": ["Infernal"],

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
	  "ambientes": ["Floresta"],

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
	  "ambientes": ["Infernal"],

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
	  "ambientes": ["Urbano", "Marinho"],

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
	  "ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		  "ambientes": ["Marinho", "Urbano"],

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
		  "ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],

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
		"ambientes": ["Marinho", "Urbano"],
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
		"ambientes": ["Marinho", "Urbano"],
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
		"ambientes": ["Marinho", "Urbano"],
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
		"ambientes": ["Marinho", "Urbano"],
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
		"ambientes": ["Marinho", "Urbano"],
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
		"ambientes": ["Marinho", "Urbano"],
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
	  "ambientes": ["Marinho"],

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
	  "ambientes": ["Marinho"],

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
	  "ambientes": ["Marinho"],

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
	  "ambientes": ["Marinho", "Floresta"],

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
	  "ambientes": ["Marinho", "Floresta"],

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
	  "ambientes": ["Urbano", "Campo", "Floresta", "Morto-vivo"],

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
	  "ambientes": ["Urbano", "Campo", "Floresta", "Morto-vivo"],

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
	  "ambientes": ["Urbano", "Campo", "Floresta", "Morto-vivo"],

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
	  "ambientes": ["Urbano", "Campo", "Floresta", "Morto-vivo"],

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
	  "ambientes": ["Urbano"],

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
	  "ambientes": ["Urbano"],

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
	  "ambientes": ["Urbano"],

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
	  "ambientes": ["Urbano"],

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
	}
];