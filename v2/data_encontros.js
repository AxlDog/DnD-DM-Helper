/* =========================================================
 * SCHEMA: DATA_ENCONTROS
 * =========================================================
 * Array de objetos contendo a configuração de encontros e combates.
 * 
 * DATA_ENCONTROS = [{
 *   id: String,
 *   nome: String,
 *   tipo: String,
 *   nivel_recomendado: Number | String (opcional),
 *   dificuldade: String (opcional),
 *   descricao: String,
 *   bioma: String (opcional),
 *   contexto: { local: String, hora: String } (opcional),
 *   detecao: { passiva: Number, ativa: String, sucesso: String, falha: String } (opcional),
 *   inimigos: [{
 *     id: String,
 *     quantidade: Number,
 *     posicao_inicial: String (opcional),
 *     cr: Number (opcional),
 *     funcao: String (opcional)
 *   }],
 *   terreno: {
 *     descricao: String,
 *     dificuldade_movimento: Boolean,
 *     cobertura: [{ tipo: String, descricao: String }]
 *   } (opcional),
 *   ambiente: {
 *     terreno: [String],
 *     efeitos: [{ nome: String, descricao: String }]
 *   } (opcional),
 *   elementos_interativos: [{
 *     nome: String,
 *     tipo: String,
 *     descricao: String,
 *     interacoes: [String]
 *   }] (opcional),
 *   armadilhas: [{
 *     nome: String,
 *     descricao: String,
 *     cd_percepcao: Number,
 *     cd_desarme: Number,
 *     efeito: String
 *   }] (opcional),
 *   objetivos: [{ tipo: String, descricao: String }] (opcional),
 *   taticas / taticas_inimigos: [String] (opcional),
 *   habilidades_especiais: [{ nome: String, descricao: String }] (opcional),
 *   condicoes_especiais: [String] (opcional),
 *   segredo: String (opcional),
 *   recompensas: { xp: Number, itens: [String], ouro: { PO: Number, PP: Number, PC: Number } } | [String] (opcional),
 *   item_especial: { nome: String, descricao: String } (opcional)
 * }]
 * ========================================================= */

const DATA_ENCONTROS = [
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
          "id": "air-elemental",
          "nome": "Espírito do Vento",
          "quantidade": 2,
          "posicao_inicial": "chega dos céus junto com o elemental"
        },
        {
          "id": "djinni",
          "nome": "Avatar da Tempestade",
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
          "id": "lich",
          "nome": "Senhor dos Ossos",
          "quantidade": 1,
          "posicao_inicial": "centro do campo"
        },
        {
          "id": "wight",
          "nome": "Guardião do Túmulo",
          "quantidade": 4,
          "posicao_inicial": "enterrados ao redor"
        },
        {
          "id": "specter",
          "nome": "Espírito Inquieto",
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
          "id": "wight",
          "nome": "Guardião do Túmulo",
          "quantidade": 2,
          "posicao_inicial": "enterrados próximos aos jogadores"
        },
        {
          "id": "specter",
          "nome": "Espírito Inquieto",
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
          "id": "wraith",
          "nome": "A Noiva (Aparição)",
          "quantidade": 1,
          "posicao_inicial": "centro da névoa"
        },
        {
          "id": "specter",
          "nome": "Vulto da Névoa",
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
          "id": "dryad",
          "nome": "Dryad Feérica Guardiã",
          "quantidade": "5",
          "cr": 1,
          "funcao": "Controladora"
        },
        {
          "id": "treant",
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
          { "id": "green-hag", "nome": "Morvakka", "quantidade": 1 },
          { "id": "wyvern", "nome": "Wyvern Putrefato", "quantidade": 1 }
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
        "descricao": "Fios dourados atravessam o ar como teias invisíveis enquanto olhos observam de todas as direções. Uma figura encapuzada costura linhas brilhantes diante de uma aberração flutuante.",
        "inimigos": [
          { "id": "night-hag", "nome": "Elyndra (Bruxa do Destino)", "quantidade": 1 },
          { "id": "aboleth", "nome": "Vigilante Oracular (Aberração)", "quantidade": 1 }
        ],
        "taticas": [
          "Elyndra força rerrolagens, manipula iniciativa e enfraquece alvos prioritários.",
          "A aberração mantém distância enquanto cobre corredores e áreas abertas.",
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
          { "id": "night-hag", "nome": "Nyssara", "quantidade": 1 },
          { "id": "young-black-dragon", "nome": "Dragão Umbral", "quantidade": 1 }
        ],
        "taticas": [
          "Nyssara utiliza escuridão mágica e magia psíquica para quebrar formação.",
          "O dragão caça alvos isolados nas sombras.",
          "A bruxa tenta incapacitar antes de causar dano massivo."
        ],
        "segredo": "Nyssara possui fragmentos de memórias roubadas de arquifadas desaparecidas."
    }
];