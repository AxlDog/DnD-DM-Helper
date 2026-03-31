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
  }
];