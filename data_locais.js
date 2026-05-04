
const DATA_LOCAIS = [
  {
    "id": "poi_biblioteca_grande_sala",
    "bairro": "bairro_central",
    "nome": "Grande Sala dos Ecos Antigos",
    "tipo": "biblioteca",
    "localizacao": "Interior da Biblioteca Central",
    "descricao": "Uma nave alta de pedra clara e colunas rúnicas sustenta centenas de estantes verticais. Lanternas flutuantes percorrem corredores silenciosos enquanto escribas registram pedidos em mesas de carvalho escurecido.",
    "encontravel": [
      "Eruditos visitantes",
      "Copistas",
      "Estudantes dos sete clãs",
      "Pesquisadores independentes"
    ],
    "informacoes_encontradas": [
      "Crônicas da fundação de Waterdeep",
      "Mapas antigos da expansão urbana",
      "Registros diplomáticos entre os clãs",
      "Relatos fragmentados de expedições extraplanares"
    ],
    "testes": {
      "investigacao": 13,
      "historia": 12,
      "persuasao": 11
    },
    "segredo": "Uma das estantes do setor oeste possui livros falsos que escondem um pequeno cofre de pergaminhos selados do conselho."
  },
  {
    "id": "poi_biblioteca_arquivo_restrito",
    "bairro": "bairro_central",
    "nome": "Arquivo das Portas Seladas",
    "tipo": "biblioteca",
    "localizacao": "Subnível da Biblioteca Central",
    "descricao": "Escadas estreitas descem até corredores frios de pedra antiga. Portas de bronze marcadas por runas de contenção guardam documentos, grimórios e registros que não circulam entre estudantes comuns.",
    "encontravel": [
      "Arquivistas veteranos",
      "Guardas neutros",
      "Membros autorizados do conselho"
    ],
    "informacoes_encontradas": [
      "Tratados antigos sobre magia proibida",
      "Registros de crises arcanas passadas",
      "Relatórios de investigações sigilosas",
      "Mapas incompletos de túneis sob a cidade"
    ],
    "testes": {
      "investigacao": 16,
      "arcanismo": 15,
      "furtividade": 15
    },
    "segredo": "Um corredor lateral foi murado séculos atrás. Atrás dele existe uma câmara muito anterior à fundação oficial da biblioteca."
  },
  {
    "id": "poi_jardim_sabios",
    "bairro": "bairro_central",
    "nome": "Jardim dos Sábios",
    "tipo": "praca",
    "localizacao": "Praça externa da Biblioteca Central",
    "descricao": "Um pátio arborizado circunda a biblioteca. Pequenas fontes, bancos de pedra e estátuas de antigos arcanistas fazem deste lugar um ponto de encontro para debates discretos e observação cuidadosa.",
    "encontravel": [
      "Mensageiros",
      "Estudantes",
      "Aventureiros contratáveis",
      "Informantes ocasionais"
    ],
    "informacoes_encontradas": [
      "Rumores recentes vindos dos bairros arcanos",
      "Debates públicos sobre decisões do conselho",
      "Anúncios de expedições e trabalhos acadêmicos",
      "Comentários sobre visitantes incomuns na cidade"
    ],
    "testes": {
      "percepcao": 12,
      "intuicao": 13,
      "persuasao": 12
    },
    "segredo": "Uma das estátuas possui uma base oca usada para troca discreta de mensagens."
  },
  {
    "id": "poi_sala_cadeiras",
    "bairro": "bairro_central",
    "nome": "Salão das Cadeiras",
    "tipo": "conselho",
    "localizacao": "Ala leste do distrito central",
    "descricao": "Um salão circular com teto abobadado abriga as cadeiras dos sete clãs. O piso de mármore traz círculos arcanos antigos que silenciam magia agressiva durante reuniões formais.",
    "encontravel": [
      "Delegados",
      "Escribas oficiais",
      "Mensageiros políticos",
      "Guardas neutros"
    ],
    "informacoes_encontradas": [
      "Disputas recentes entre escolas",
      "Votações e decisões públicas",
      "Alianças temporárias entre clãs",
      "Pedidos de investigação e sanções"
    ],
    "testes": {
      "historia": 13,
      "intuicao": 14,
      "persuasao": 14
    },
    "segredo": "As pedras sob a cadeira central guardam um antigo mecanismo de contenção arcana acionado apenas em crises maiores."
  },
  {
    "id": "poi_rua_copistas",
    "bairro": "bairro_central",
    "nome": "Rua dos Copistas",
    "tipo": "mercado",
    "localizacao": "Quadra sul da Biblioteca Central",
    "descricao": "Uma rua estreita de oficinas, bancas de pergaminho e pequenos encadernadores. O ar cheira a tinta, couro e papel antigo. Muito conhecimento passa por aqui antes de chegar às mãos certas.",
    "encontravel": [
      "Copistas independentes",
      "Mercadores de mapas",
      "Colecionadores",
      "Estudantes em busca de material raro"
    ],
    "informacoes_encontradas": [
      "Venda de mapas antigos e cópias raras",
      "Rumores sobre documentos desaparecidos",
      "Identidade de compradores incomuns",
      "Movimentação recente de colecionadores privados"
    ],
    "testes": {
      "investigacao": 12,
      "persuasao": 13,
      "intuicao": 12
    },
    "segredo": "Um encadernador discreto mantém acesso a catálogos que não aparecem nos registros públicos da biblioteca."
  },
  {
    "id": "evento_procissao_ultima_luz",
    "bairro": "bairro_conclave",
    "nome": "Procissão da Última Luz",
    "tipo": "evento",
    "descricao": "Ao cair da noite, sacerdotes e aprendizes percorrem a Cidade dos Mortos conduzindo lanternas pálidas entre os mausoléus. Nomes dos falecidos são recitados em voz baixa enquanto famílias deixam oferendas simples diante dos túmulos.",
    "frequencia": "Semanal",
    "participantes": [
      "Sacerdotes do Conclave",
      "Familiares dos mortos",
      "Acólitos",
      "Visitantes silenciosos"
    ],
    "informacoes_encontradas": [
      "Mortes recentes na cidade",
      "Movimentação de famílias nobres",
      "Rumores vindos de outros bairros",
      "Presença discreta de observadores do conselho"
    ],
    "testes": {
      "religiao": 12,
      "intuicao": 13,
      "percepcao": 12
    },
    "segredo": "Nem todos os nomes pronunciados pertencem aos mortos. Alguns são usados como mensagens codificadas entre membros ocultos do clã."
  },
  {
    "id": "evento_vigilia_veus",
    "bairro": "bairro_conclave",
    "nome": "Vigília dos Véus",
    "tipo": "evento",
    "descricao": "Durante noites de lua nova, o distrito entra em contemplação silenciosa. Velas azul-escuras são acesas nos pátios internos enquanto estudiosos debatem a relação entre memória, perda e o tecido da Trama.",
    "frequencia": "Lua nova",
    "participantes": [
      "Estudiosos do Conclave",
      "Monges visitantes",
      "Sacerdotes estrangeiros"
    ],
    "informacoes_encontradas": [
      "Relatos de fenômenos espirituais",
      "Rumores vindos de outras regiões de Faerûn",
      "Debates teológicos sobre magia e divindade"
    ],
    "testes": {
      "religiao": 14,
      "historia": 13,
      "arcanismo": 14
    },
    "segredo": "Nas câmaras internas, alguns dos estudantes mais promissores são observados por mestres que procuram sinais de afinidade com Shar."
  },
  {
    "id": "evento_julgamento_silencioso",
    "bairro": "bairro_conclave",
    "nome": "Julgamento Silencioso",
    "tipo": "evento_secreto",
    "descricao": "Cerimônia reservada em que estudantes avançados enfrentam provas de fé, memória e vontade. Apenas membros autorizados conhecem a verdadeira natureza do ritual.",
    "frequencia": "Irregular",
    "participantes": [
      "Mestres do círculo interno",
      "Estudantes selecionados"
    ],
    "informacoes_encontradas": [
      "Desaparecimento temporário de aprendizes",
      "Mudanças repentinas de comportamento",
      "Ascensão silenciosa de novos agentes do clã"
    ],
    "testes": {
      "investigacao": 16,
      "intuicao": 15,
      "furtividade": 15
    },
    "segredo": "Os aprovados são secretamente apresentados aos mistérios de Shar e tornam-se servidores ocultos da deusa."
  },
  {
    "id": "poi_sala_ritos_finais",
    "bairro": "bairro_conclave",
    "nome": "Salão dos Ritos Finais",
    "tipo": "templo",
    "localizacao": "Cidade dos Mortos",
    "descricao": "Um edifício de pedra branca e vitrais escurecidos onde os mortos são preparados antes do descanso. O ar carrega cheiro de incenso, cera e ervas preservativas.",
    "encontravel": [
      "Sacerdotes",
      "Preparadores funerários",
      "Famílias enlutadas"
    ],
    "informacoes_encontradas": [
      "Registros de mortes recentes",
      "Nomes de famílias influentes",
      "Rumores sobre incidentes incomuns"
    ],
    "testes": {
      "religiao": 11,
      "investigacao": 13,
      "persuasao": 12
    },
    "segredo": "Alguns corpos de interesse arcano são discretamente desviados antes de serem oficialmente sepultados."
  },
  {
    "id": "poi_claustro_trama",
    "bairro": "bairro_conclave",
    "nome": "Claustro da Trama",
    "tipo": "academia",
    "localizacao": "Distrito interno do Conclave",
    "descricao": "Pátios fechados, corredores silenciosos e salas de estudo onde magia arcana e liturgia são ensinadas lado a lado.",
    "encontravel": [
      "Aprendizes",
      "Mestres",
      "Visitantes religiosos"
    ],
    "informacoes_encontradas": [
      "Estudos sobre fusão entre fé e magia",
      "Textos litúrgicos de várias regiões de Faerûn",
      "Debates filosóficos sobre divindade e Trama"
    ],
    "testes": {
      "arcanismo": 13,
      "religiao": 14,
      "historia": 12
    },
    "segredo": "Alguns manuscritos possuem páginas falsas. As versões completas ficam em arquivos reservados ao círculo interno."
  },
  {
    "id": "poi_cripta_setimo_veu",
    "bairro": "bairro_conclave",
    "nome": "Cripta do Sétimo Véu",
    "tipo": "cripta",
    "localizacao": "Subsolo da Cidade dos Mortos",
    "descricao": "Uma cripta antiga, mais velha que boa parte do distrito. O local é frio, abafado e marcado por inscrições apagadas pelo tempo.",
    "encontravel": [
      "Guardas silenciosos",
      "Acólitos veteranos",
      "Visitantes raros autorizados"
    ],
    "informacoes_encontradas": [
      "Sepulturas de antigos mestres",
      "Relíquias funerárias",
      "Inscrições arcanas de eras passadas"
    ],
    "testes": {
      "percepcao": 14,
      "investigacao": 15,
      "religiao": 15
    },
    "segredo": "Uma porta de pedra oculta conduz a um santuário subterrâneo dedicado secretamente a Shar."
  },
  {
    "id": "poi_arquivo_peregrinos",
    "bairro": "bairro_conclave",
    "nome": "Arquivo dos Peregrinos",
    "tipo": "arquivo",
    "localizacao": "Ala norte do distrito",
    "descricao": "Prateleiras de pergaminhos e códices guardam relatos, cartas e registros trazidos por sacerdotes e viajantes de diversas partes de Faerûn.",
    "encontravel": [
      "Escribas",
      "Mensageiros religiosos",
      "Pesquisadores"
    ],
    "informacoes_encontradas": [
      "Rumores regionais",
      "Movimentação de cultos e ordens",
      "Relatos de crises espirituais e fenômenos divinos"
    ],
    "testes": {
      "investigacao": 13,
      "historia": 13,
      "persuasao": 11
    },
    "segredo": "O arquivo mantém uma coleção separada de correspondências codificadas que circulam apenas entre os iniciados do círculo oculto."
  },
  {
    "id": "poi_jardim_memoria",
    "bairro": "bairro_conclave",
    "nome": "Jardim da Memória",
    "tipo": "praca_sagrada",
    "localizacao": "Centro da Cidade dos Mortos",
    "descricao": "Caminhos de pedra cercam árvores antigas e pequenos espelhos d’água. O lugar é usado para oração silenciosa, meditação e despedidas discretas.",
    "encontravel": [
      "Visitantes",
      "Acólitos",
      "Monges contemplativos"
    ],
    "informacoes_encontradas": [
      "Conversas privadas",
      "Rumores sobre desaparecimentos",
      "Observação de visitantes incomuns"
    ],
    "testes": {
      "percepcao": 12,
      "intuicao": 13,
      "furtividade": 12
    },
    "segredo": "Durante certas noites, sombras parecem se mover entre as árvores mesmo quando não há vento."
  },
  {
	  "bairro_ecos": {
		"id": "bairro_ecos",
		"nome": "North Ward dos Ecos",
		"escola": "Os Ecos",
		"tipo": "bairro",
		"descricao": "A ala norte de Waterdeep pulsa com ruas cheias, mercados lotados e residências empilhadas em becos vivos. É o distrito mais populoso da cidade e também onde a influência dos Ecos se espalha com maior naturalidade. A escola aceita estudantes de origens diversas, formando magos, escribas, investigadores e agentes comunitários.",
		"influenza": "popular",
		"informacoes_encontradas": [
		  "Rumores de toda a cidade chegam primeiro ao North Ward.",
		  "Os Ecos mantêm redes de estudantes, mensageiros e observadores entre tavernas, mercados e guildas.",
		  "A opinião popular sobre o conselho arcano costuma nascer neste distrito.",
		  "Nos últimos meses, alguns membros dos Ecos desapareceram após investigarem o Conclave da Noite Velada.",
		  "Os líderes dos Ecos acreditam que o Conclave da Noite Velada e o Conclave dos Descendentes podem estar ligados."
		]
	  },
	  "pontos_de_interesse": [
		{
		  "id": "patio_das_vozes",
		  "nome": "Pátio das Vozes",
		  "tipo": "praça",
		  "descricao": "Praça pública onde estudantes, oradores e cronistas discutem acontecimentos recentes diante da população.",
		  "informacoes": [
			"É aqui que a opinião pública do North Ward costuma tomar forma.",
			"Discursos contra membros do conselho podem rapidamente se espalhar por toda Waterdeep.",
			"Agentes dos Ecos observam discretamente quem tenta manipular rumores."
		  ]
		},
		{
		  "id": "casa_dos_ecos_profundos",
		  "nome": "Casa dos Ecos Profundos",
		  "tipo": "academia",
		  "descricao": "Principal sede dos Ecos. Um edifício amplo com corredores repletos de estudantes, arquivos e salas de observação arcana.",
		  "informacoes": [
			"A escola registra movimentações sociais, mágicas e políticas em toda a cidade.",
			"Parte dos registros recentes aponta padrões estranhos ligados ao Conclave da Noite Velada.",
			"Alguns relatórios foram removidos dos arquivos antes de chegarem aos mestres."
		  ]
		},
		{
		  "id": "mercado_dos_murmurios",
		  "nome": "Mercado dos Murmúrios",
		  "tipo": "mercado",
		  "descricao": "Mercado popular onde notícias, boatos e pequenos segredos circulam quase tão rápido quanto moedas.",
		  "informacoes": [
			"Mercadores juram ter visto figuras encapuzadas comprando reagentes funerários em grande quantidade.",
			"Mensageiros desaparecidos costumavam cruzar esta região antes de sumirem."
		  ]
		},
		{
		  "id": "arquivo_dos_desaparecidos",
		  "nome": "Arquivo dos Desaparecidos",
		  "tipo": "arquivo",
		  "descricao": "Pequena ala reservada da escola onde são reunidos relatórios de pessoas, agentes e estudantes que desapareceram.",
		  "informacoes": [
			"Ao menos cinco investigadores dos Ecos sumiram nos últimos meses.",
			"Todos investigavam conexões financeiras e religiosas ligadas ao Conclave da Noite Velada.",
			"Um símbolo recorrente aparece em vários registros: uma lua negra fragmentada."
		  ]
		},
		{
		  "id": "estalagem_ultima_palavra",
		  "nome": "Estalagem Última Palavra",
		  "tipo": "taverna",
		  "descricao": "Taverna frequentada por estudantes, escribas, mensageiros e informantes ocasionais.",
		  "informacoes": [
			"Informações úteis costumam aparecer entre discussões acadêmicas e apostas.",
			"Rumores sugerem que membros do Conclave dos Descendentes usam intermediários locais para observar os Ecos."
		  ]
		}
	  ],
	  "eventos": [
		{
		  "id": "ecos_rastro_dos_descendentes",
		  "nome": "Rastro dos Descendentes",
		  "tipo": "investigacao",
		  "descricao": "Um estudante pede ajuda aos aventureiros após o desaparecimento de sua mentora, que investigava o Conclave da Noite Velada.",
		  "gatilho": "Os personagens visitam a Casa dos Ecos Profundos ou o Arquivo dos Desaparecidos.",
		  "descobertas": [
			"Os relatórios indicam encontros secretos entre membros do Conclave da Noite Velada e figuras públicas aparentemente sem ligação entre si.",
			"Pagamentos cifrados aparecem em registros de comerciantes, sacerdotes e funcionários menores.",
			"Uma nota incompleta menciona o nome 'Conclave dos Descendentes'."
		  ],
		  "teste": {
			"tipo": "Investigacao",
			"cd": 15
		  },
		  "recompensa": "Acesso restrito a arquivos internos e favor político dos Ecos."
		}
	  ]
	}
];
