
const DATA_LOCAIS = [
  {
  "pontos_interesse": [
    {
      "id": "biblioteca_grande_atrio",
      "bairro_id": "bairro_biblioteca",
      "nome": "Grande Átrio da Biblioteca",
      "tipo": "biblioteca",
      "descricao": "Uma vasta nave circular de pedra clara, com galerias suspensas e escadarias curvas que conduzem a salões de leitura e arquivos centrais.",
      "tags": [
        "conhecimento",
        "publico",
        "arquivos"
      ],
      "informacoes": [
        "Mapas antigos de Waterdeep podem ser consultados com autorização.",
        "Estudiosos de todos os clãs costumam circular pelo átrio.",
        "Rumores políticos frequentemente chegam aqui antes do conselho."
      ]
    },
    {
      "id": "biblioteca_sala_dos_catalogos",
      "bairro_id": "bairro_biblioteca",
      "nome": "Sala dos Catálogos",
      "tipo": "arquivo",
      "descricao": "Uma sala silenciosa repleta de armários de madeira escura, gavetas numeradas e registros encantados que respondem a palavras-chave.",
      "tags": [
        "pesquisa",
        "referencia",
        "indices"
      ],
      "informacoes": [
        "Permite localizar rapidamente tratados, crônicas e registros históricos.",
        "Alguns volumes marcados como restritos exigem autorização do curador.",
        "Registros desaparecidos costumam deixar lacunas perceptíveis nos índices."
      ]
    },
    {
      "id": "biblioteca_jardim_das_lamparas",
      "bairro_id": "bairro_biblioteca",
      "nome": "Jardim das Lâmpadas",
      "tipo": "jardim",
      "descricao": "Um pequeno pátio interno cercado por colunatas, onde lâmpadas encantadas permanecem acesas durante toda a noite.",
      "tags": [
        "encontros",
        "discreto",
        "estudiosos"
      ],
      "informacoes": [
        "É um local comum para encontros discretos entre estudiosos e mensageiros.",
        "Visitantes atentos percebem trocas frequentes de pequenas notas e pergaminhos.",
        "Algumas conversas importantes acontecem ali após o fechamento da biblioteca."
      ]
    }
  ],
  "eventos": [
    {
      "id": "evento_assembleia_dos_estudiosos",
      "bairro_id": "bairro_biblioteca",
      "local_id": "biblioteca_grande_atrio",
      "nome": "Assembleia dos Estudiosos",
      "tipo": "evento",
      "descricao": "Pesquisadores, aprendizes e escribas apresentam descobertas recentes e debatem temas arcanos, históricos e políticos diante de visitantes de toda a cidade.",
      "frequencia": "Quinzenal",
      "tags": [
        "debate",
        "academico",
        "politica"
      ],
      "participantes": [
        "Escribas",
        "Estudiosos",
        "Aprendizes",
        "Visitantes"
      ],
      "informacoes_encontradas": [
        "Tensões recentes entre escolas mágicas",
        "Expedições planejadas para ruínas próximas",
        "Rumores sobre atividades discretas do conselho"
      ],
      "testes": {
        "historia": 12,
        "persuasao": 13,
        "intuicao": 12
      },
      "segredo": "Alguns debates públicos são usados para medir discretamente quais visitantes demonstram curiosidade excessiva sobre certos assuntos."
    },
    {
      "id": "evento_noite_dos_manuscritos",
      "bairro_id": "bairro_biblioteca",
      "local_id": "biblioteca_sala_dos_catalogos",
      "nome": "Noite dos Manuscritos",
      "tipo": "evento",
      "descricao": "Em noites selecionadas, manuscritos raros são trazidos aos estudiosos para leitura supervisionada sob luz arcana controlada.",
      "frequencia": "Mensal",
      "tags": [
        "pesquisa",
        "raro",
        "investigacao"
      ],
      "participantes": [
        "Curadores",
        "Escribas",
        "Pesquisadores autorizados"
      ],
      "informacoes_encontradas": [
        "Referências a antigas fundações da cidade",
        "Nomes de famílias nobres esquecidas",
        "Mapas incompletos de estruturas subterrâneas"
      ],
      "testes": {
        "investigacao": 14,
        "historia": 14,
        "arcanismo": 13
      },
      "segredo": "Entre os manuscritos, alguns trechos foram removidos com precisão cirúrgica ao longo dos anos."
    }
  ],
  "npcs": [
    {
      "id": "npc_eloran_thess",
      "bairro_id": "bairro_biblioteca",
      "local_id": "biblioteca_sala_dos_catalogos",
      "nome": "Eloran Thess",
      "tipo": "npc",
      "raca": "Humano",
      "status": "ativo",
      "funcao": "Curador dos índices",
      "descricao": "Homem de meia-idade de postura rígida, vestindo longas vestes cinzentas com fios dourados e luvas finas de couro escuro.",
      "tags": [
        "curador",
        "indices",
        "biblioteca"
      ],
      "informacoes": [
        "Conhece a localização de praticamente qualquer volume do acervo.",
        "Evita falar sobre registros retirados ou volumes desaparecidos.",
        "Reconhece imediatamente visitantes que retornam buscando os mesmos temas."
      ]
    },
    {
      "id": "npc_maelis_varn",
      "bairro_id": "bairro_biblioteca",
      "local_id": "biblioteca_jardim_das_lamparas",
      "nome": "Maelis Varn",
      "tipo": "npc",
      "raca": "Elfo",
      "status": "ativo",
      "funcao": "Cronista errante",
      "descricao": "Uma elfa de cabelos escuros presos por fios de prata, vestindo manto azul profundo sobre roupas leves de viagem.",
      "tags": [
        "cronista",
        "rumores",
        "informante"
      ],
      "informacoes": [
        "Costuma registrar boatos vindos de todos os bairros de Waterdeep.",
        "Possui excelente memória para nomes, datas e pequenas contradições.",
        "Às vezes troca informações por acesso a documentos raros."
      ]
    }
  ]
}
];
