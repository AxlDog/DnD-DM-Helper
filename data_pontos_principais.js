const DATA_PONTOS_PRINCIPAIS = [
	{
		"id": "bairro_sete_runas",
		"nome": "Distrito das Sete Runas",
		"escola": "As 7 Runas",
		"tipo": "bairro",
		"descricao": "Torres elegantes, oficinas arcanas e salões de demonstração mágica dominam as ruas largas deste distrito. Aqui a magia é tratada como ferramenta de inovação, prestígio e progresso urbano.",
		"influencia": {
		  "politica": "Alta",
		  "economica": "Alta",
		  "militar": "Média",
		  "popular": "Média"
		},
		"vantagem_no_conselho": "Possuem voto de minerva em caso de empate no conselho mágico.",
		"relacoes": [
		  "Fortes laços com famílias nobres",
		  "Parcerias com artesãos e inventores",
		  "Rivalidade intelectual com os Ecos"
		],
		"informacoes_encontradas": [
		  "Novas pesquisas de encantamentos urbanos",
		  "Protótipos de itens mágicos em fase de testes",
		  "Debates políticos entre nobres e arcanistas",
		  "Patrocínio secreto de expedições e estudos extraplanares"
		],
		"lugares_notaveis": [
		  "Torre das Sete Inscrições",
		  "Galeria das Invenções",
		  "Salão do Conselho Arcano"
		],
		"rumores": [
		  "Algumas experiências recentes vêm causando distorções mágicas discretas nos arredores",
		  "Nem toda inovação apresentada ao público chega inteira aos registros oficiais"
		]
	},
	{
		"id": "bairro_ecos",
		"nome": "Bairro dos Ecos",
		"escola": "Os Ecos",
		"tipo": "bairro",
		"descricao": "Um distrito vivo e movimentado, tomado por estudantes, escribas, pequenos observatórios e escolas menores. É o centro acadêmico mais populoso de Waterdeep.",
		"influencia": {
		  "politica": "Alta",
		  "economica": "Média",
		  "militar": "Baixa",
		  "popular": "Muito Alta"
		},
		"vantagem_no_conselho": "Sua influência sobre a população dá grande peso às suas posições no conselho.",
		"relacoes": [
		  "Apoio popular",
		  "Grande número de estudantes",
		  "Atritos ocasionais com as Sete Runas"
		],
		"informacoes_encontradas": [
		  "Opiniões públicas e rumores urbanos",
		  "Movimentação de estudantes e mestres visitantes",
		  "Debates sobre decisões recentes do conselho",
		  "Grupos de estudo, círculos de discussão e pequenos cultos acadêmicos"
		],
		"lugares_notaveis": [
		  "Salas de Aprendizado Comum",
		  "Pátio das Vozes",
		  "Arquivo dos Ecos"
		],
		"rumores": [
		  "Uma opinião negativa bem espalhada pode custar cadeiras no conselho",
		  "Alguns mestres dos Ecos estão estudando fenômenos estranhos vindos dos subterrâneos"
		]
	},
	{
		"id": "bairro_bronze",
		"nome": "Distrito de Bronze",
		"escola": "Soldados de Bronze",
		"tipo": "bairro",
		"descricao": "Fortificações de pedra, pátios de treinamento e torres de vigilância compõem um distrito disciplinado e marcial. A magia aqui serve à ordem, defesa e combate.",
		"influencia": {
		  "politica": "Alta",
		  "economica": "Média",
		  "militar": "Muito Alta",
		  "popular": "Média"
		},
		"vantagem_no_conselho": "Em tempos de ameaça, sua autoridade e influência aumentam rapidamente.",
		"relacoes": [
		  "Controle da guarda da cidade",
		  "Respeito cauteloso entre os demais clãs",
		  "Contato constante com patrulhas e vigias"
		],
		"informacoes_encontradas": [
		  "Relatórios de patrulha",
		  "Registros de incidentes urbanos",
		  "Rotas de guarda e pontos vulneráveis da cidade",
		  "Treinamento de soldados arcanos"
		],
		"lugares_notaveis": [
		  "Fortaleza de Bronze",
		  "Pátio das Lâminas",
		  "Torre da Vigília"
		],
		"rumores": [
		  "Os Soldados de Bronze mantêm protocolos secretos para situações extraplanares",
		  "Há celas especiais para conter conjuradores perigosos"
		]
	},
	{
		"id": "bairro_veu_astral",
		"nome": "Véu Astral",
		"escola": "Véu Astral",
		"tipo": "bairro",
		"descricao": "Arcos de portal, casas de câmbio, entrepostos e torres mercantis fazem deste distrito o coração comercial do transporte mágico de Waterdeep.",
		"influencia": {
		  "politica": "Alta",
		  "economica": "Muito Alta",
		  "militar": "Baixa",
		  "popular": "Média"
		},
		"vantagem_no_conselho": "Sua riqueza permite financiar projetos, alianças e influência política.",
		"relacoes": [
		  "Aliança próxima com mercadores",
		  "Contato com caravanas e navegadores",
		  "Interesses constantes em rotas e portais"
		],
		"informacoes_encontradas": [
		  "Movimentação comercial e cargas raras",
		  "Chegada de viajantes e emissários",
		  "Informações sobre portais e rotas extraplanares",
		  "Flutuação de preços e escassez de materiais mágicos"
		],
		"lugares_notaveis": [
		  "Mercado dos Portais",
		  "Casa das Rotas Distantes",
		  "Arco de Travessia"
		],
		"rumores": [
		  "Nem todo portal licenciado leva exatamente ao destino anunciado",
		  "Alguns mercadores financiam discretamente expedições proibidas"
		]
	},
	{
		"id": "bairro_lua",
		"nome": "Círculo da Lua",
		"escola": "Círculo da Lua",
		"tipo": "bairro",
		"descricao": "Vielas silenciosas, observatórios altos e salões discretos escondem o clã mais aventureiro e bem informado da cidade.",
		"influencia": {
		  "politica": "Média",
		  "economica": "Média",
		  "militar": "Baixa",
		  "popular": "Alta"
		},
		"vantagem_no_conselho": "Controlam boa parte da informação que circula dentro e fora da cidade.",
		"relacoes": [
		  "Contato com aventureiros",
		  "Rede de informantes",
		  "Observação constante de ameaças internas"
		],
		"informacoes_encontradas": [
		  "Quadros de missão",
		  "Relatos de viajantes",
		  "Mapas de ruínas e locais perigosos",
		  "Rumores sobre facções e conspirações"
		],
		"lugares_notaveis": [
		  "Observatório Lunar",
		  "Salão dos Avisos",
		  "Arquivo das Rotas Perdidas"
		],
		"rumores": [
		  "O clã está investigando o Conclave da Noite Velada",
		  "Seus agentes sabem mais do que costumam admitir"
		]
	},
	{
		"id": "bairro_conclave",
		"nome": "Distrito do Conclave",
		"escola": "O Conclave",
		"tipo": "bairro",
		"descricao": "Templos, pátios cerimoniais e bibliotecas litúrgicas formam um distrito onde fé e magia caminham lado a lado.",
		"influencia": {
		  "politica": "Média",
		  "economica": "Baixa",
		  "militar": "Baixa",
		  "popular": "Alta"
		},
		"vantagem_no_conselho": "Possuem influência difusa em muitas regiões de Faerûn através de redes religiosas.",
		"relacoes": [
		  "Contato com diversos cultos e ordens religiosas",
		  "Diplomacia regional",
		  "Acesso a informações espirituais e históricas"
		],
		"informacoes_encontradas": [
		  "Relatos vindos de outras regiões",
		  "Movimentações de sacerdotes e emissários",
		  "Registros de fenômenos divinos",
		  "Estudos sobre a união entre magia e fé"
		],
		"lugares_notaveis": [
		  "Salão das Vozes Sagradas",
		  "Claustro da Trama",
		  "Arquivo dos Peregrinos"
		],
		"rumores": [
		  "Algumas ordens externas procuram apoio político em Waterdeep",
		  "Textos antigos sugerem rituais que antecedem a fundação da cidade"
		]
	},
	{
		"id": "bairro_noite_velada",
		"nome": "Conclave da Noite Velada",
		"escola": "Conclave da Noite Velada",
		"tipo": "bairro",
		"descricao": "Ruas estreitas, fachadas discretas e torres fechadas ao público fazem deste distrito um lugar de silêncio, reserva e influência velada.",
		"influencia": {
		  "politica": "Média",
		  "economica": "Média",
		  "militar": "Baixa",
		  "popular": "Baixa"
		},
		"vantagem_no_conselho": "Sua força está na discrição, nos pactos privados e no conhecimento oculto.",
		"relacoes": [
		  "Pouca abertura pública",
		  "Relações discretas com nobres e arcanistas",
		  "Monitorado pelo Círculo da Lua"
		],
		"informacoes_encontradas": [
		  "Movimentações discretas de estudiosos",
		  "Bibliotecas restritas",
		  "Pesquisas sobre magia proibida e segredos históricos",
		  "Visitantes que entram mais do que saem"
		],
		"lugares_notaveis": [
		  "Casa do Véu Interior",
		  "Torre do Silêncio",
		  "Arquivo Fechado"
		],
		"rumores": [
		  "O distrito está sob investigação silenciosa",
		  "Alguns acreditam que há alianças ocultas dentro do conselho"
		]
	},
	{
		"id": "bairro_central",
		"nome": "Biblioteca Central",
		"escola": "Neutro",
		"tipo": "bairro",
		"descricao": "No coração de Waterdeep ergue-se o distrito neutro da cidade. Seus jardins, pátios de pedra e corredores silenciosos cercam a maior biblioteca pública da região.",
		"influencia": {
		  "politica": "Neutra",
		  "economica": "Média",
		  "militar": "Baixa",
		  "popular": "Alta"
		},
		"vantagem_no_conselho": "Território neutro onde reuniões oficiais e debates públicos costumam ocorrer.",
		"relacoes": [
		  "Acesso permitido a todas as escolas",
		  "Administradores neutros",
		  "Proteção diplomática"
		],
		"informacoes_encontradas": [
		  "Registros históricos da cidade",
		  "Mapas antigos",
		  "Documentos de fundação dos clãs",
		  "Crônicas de expedições e relatos de eras passadas"
		],
		"lugares_notaveis": [
		  "Grande Biblioteca de Waterdeep",
		  "Jardim dos Sábios",
		  "Salão das Cadeiras"
		],
		"rumores": [
		  "Existem arquivos selados acessíveis apenas ao conselho",
		  "Há corredores subterrâneos mais antigos que a própria biblioteca"
		]
	}
];
