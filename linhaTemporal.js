
const DATA_TIMELINE = {
  "ato_1": {
    "Sessao 1": {
      "Localizacao inicial": "Baldur's Gate",
      "evento inicial": {
        "descricao": "Wyll faz discurso e despacha os jogadores para Elturel na companhia de um guia.",
        "npc principal": {
          "nome": "Wyll",
          "titulo": "Lâmina das Fronteiras",
          "discursos": [
            "Aventureiros. Estranhos de terras distantes...",
            "Seja qual for o caminho que os trouxe até aqui, ele os trouxe no momento certo..."
          ]
        }
      },
      "NPC em Perigo": "Ash e Tamir salvam uma Tiefling que estava fugindo de Elturel."
    },
    "sessao_2": {
      "chegada_novos_personagens": [
        {
          "nome": "Helga",
          "descricao": "Jogadora nova que chega trazendo Pimby.",
          "npc_companheiro": {
            "nome": "Pimby",
            "raca": "Halfling",
            "funcao": "Comercializa suprimentos com jogadores"
          }
        }
      ],
      "exploracao_locais_acampamento": [
        {
          "local": "Margem do Chiontar em um penhasco",
          "evento": "Portal para Avernus é descoberto",
          "acao_jogador": "Atira flecha no portal",
          "consequencia": "Beholder surge e jogadores precisam fugir"
        },
        {
          "local": "Último local indicado pelo guia",
          "evento": "Drentches atacando jovem Tiefling",
          "acao_jogador": "Jogadores matam os Drentches e salvam a jovem",
          "npc_salvo": {
            "nome": "Desconhecida",
            "raca": "Tiefling"
          }
        }
      ]
    },
    "sessao_3": {
      "entrada_cidade": "Jogadores encontram Romero e Eskell no High Hall",
      "conflito_templo": "Liberam templo tomado por cultistas de Asmodeus",
      "descanso": "Taça Rubra"
    }
  }
};
