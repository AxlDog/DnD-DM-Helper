const DATA_LOCAIS = {
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
		},
		{
			"id": "poi_patio_das_vozes",
			"tipo": "ponto_interesse",
			"bairro": "bairro_ecos",
			"nome": "Pátio das Vozes",
			"categoria_local": "campus",
			"descricao": "Um grande pátio central onde estudantes debatem filosofia arcana, política e notícias da cidade. Pequenos círculos de discussão se formam a qualquer hora do dia.",
			"tags": [
			  "debate",
			  "estudantes",
			  "rumores"
			],
			"informacoes_encontradas": [
			  "Boatos sobre desaparecimentos recentes de pesquisadores.",
			  "Discussões sobre a influência excessiva das Sete Runas no conselho.",
			  "Comentários de que observadores do Conclave circulam pela ala norte."
			],
			"testes": {
			  "persuasao": 12,
			  "intuicao": 13,
			  "investigacao": 12
			},
			"segredo": "Um pequeno grupo de estudantes reuniu evidências de que mensagens cifradas circulam entre membros infiltrados do Conclave dos Descendentes."
		  },
		  {
			"id": "poi_arquivo_dos_primeiros_nom es",
			"tipo": "ponto_interesse",
			"bairro": "bairro_ecos",
			"nome": "Arquivo dos Primeiros Nomes",
			"categoria_local": "arquivo",
			"descricao": "Salas de pedra repletas de registros de admissão, genealogias e tratados acadêmicos antigos. Muitos dos primeiros fundadores dos Ecos estão documentados aqui.",
			"tags": [
			  "arquivo",
			  "historia",
			  "documentos"
			],
			"informacoes_encontradas": [
			  "Alguns nomes desapareceram de registros oficiais.",
			  "Antigas famílias ligadas aos Ecos mantêm conexões com outros bairros.",
			  "Há referências fragmentadas a um grupo chamado Descendentes."
			],
			"testes": {
			  "investigacao": 14,
			  "historia": 13
			},
			"segredo": "Parte do acervo foi adulterada. Alguém removeu deliberadamente menções a um antigo mestre que mais tarde fundou uma célula secreta do Conclave dos Descendentes."
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
		},
		{
			"id": "evento_sussurros_do_catalogo",
			"bairro_id": "bairro_biblioteca",
			"local_id": "biblioteca_sala_dos_catalogos",
			"nome": "Sussurros do Catálogo",
			"tipo": "evento",
			"descricao": "Nas últimas semanas, estudiosos perceberam pequenas alterações em registros, empréstimos e índices da biblioteca. Nada desapareceu abertamente, mas referências cruzadas passaram a apontar para lugares errados, nomes foram omitidos e páginas inteiras mudaram de posição durante a noite.",
			"frequencia": "Irregular",
			"tags": [
				"politica",
				"intriga",
				"investigacao",
				"clãs"
			],
			"participantes": [
				"Curadores",
				"Escribas",
				"Representantes dos sete clãs",
				"Aprendizes"
			],
			"informacoes_encontradas": [
				"As 7 Runas suspeitam que alguém esteja manipulando registros de patentes arcanas.",
				"Os Ecos acreditam que alterações recentes escondem movimentações políticas internas.",
				"Os Soldados de Bronze passaram a manter observadores discretos no Grande Átrio.",
				"O Véu Astral registrou desaparecimento de rotas e mapas de transporte arcano.",
				"O Círculo da Lua investiga padrões de alterações que parecem deliberadamente coordenados.",
				"O Conclave afirma neutralidade, mas alguns documentos religiosos também foram movidos.",
				"Nenhum dos clãs deseja acusar outro abertamente dentro da biblioteca."
			],
			"testes": {
				"investigacao": 14,
				"intuicao": 13,
				"historia": 12
			},
			"segredo": "As alterações foram feitas por um pequeno grupo de agentes externos que pretende alimentar desconfiança entre os clãs e observar quais arquivos cada facção tenta proteger primeiro."
		},
		{
			"id": "evento_forum_das_cadeiras_abertas",
			"tipo": "evento",
			"bairro": "bairro_ecos",
			"nome": "Fórum das Cadeiras Abertas",
			"categoria_local": "auditorio",
			"descricao": "Semanalmente professores e estudantes se reúnem em um auditório aberto para discutir decisões do conselho mágico e apresentar críticas públicas.",
			"frequencia": "Semanal",
			"participantes": [
			  "Professores",
			  "Estudantes",
			  "Moradores de North Ward",
			  "Observadores de outros clãs"
			],
			"informacoes_encontradas": [
			  "Mudanças recentes na política do conselho.",
			  "Insatisfação crescente com o silêncio do Conclave.",
			  "Discussões sobre o desaparecimento de um pesquisador dos Ecos."
			],
			"testes": {
			  "persuasao": 13,
			  "intuicao": 14,
			  "percepcao": 12
			},
			"segredo": "Durante o evento, um professor nervoso menciona que rastros de comunicações secretas levam até criptas esquecidas na Cidade dos Mortos."
		},
		{
			"id": "evento_sombras_no_arquivo",
			"tipo": "evento",
			"bairro": "bairro_ecos",
			"nome": "Sombras no Arquivo",
			"categoria_local": "arquivo",
			"descricao": "Em uma noite silenciosa, guardiões percebem movimentação entre as estantes seladas do Arquivo dos Primeiros Nomes.",
			"frequencia": "Ocasional",
			"participantes": [
			  "Arquivistas",
			  "Guardas acadêmicos",
			  "Estudantes curiosos"
			],
			"informacoes_encontradas": [
			  "Páginas arrancadas de registros antigos.",
			  "Símbolos discretos de Shar gravados sob uma mesa de pedra.",
			  "Um mapa incompleto indicando túneis abaixo da Cidade dos Mortos."
			],
			"testes": {
			  "furtividade": 13,
			  "investigacao": 15,
			  "religiao": 14
			},
			"segredo": "O mapa aponta para um mausoléu abandonado que funciona como uma entrada secundária para uma base do Conclave dos Descendentes."
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
		},
		{
			"id": "npc_selvar_ioren",
			"bairro_id": "bairro_biblioteca",
			"local_id": "biblioteca_grande_atrio",
			"nome": "Selvar Ioren",
			"tipo": "npc",
			"raca": "Humano",
			"status": "ativo",
			"funcao": "Mediador do Conselho",
			"descricao": "Um homem magro de cabelos grisalhos presos atrás da nuca, vestindo túnica azul-escura bordada com sete linhas prateadas.",
			"tags": [
				"conselho",
				"mediador",
				"politica"
			],
			"informacoes": [
				"Coordena encontros neutros entre representantes das escolas.",
				"Tem percebido aumento de tensão silenciosa entre os clãs.",
				"Evita permitir que disputas políticas se tornem públicas dentro da biblioteca."
			]
		},
		{
			"id": "npc_elyra_voss",
			"tipo": "npc",
			"bairro": "bairro_ecos",
			"nome": "Elyra Voss",
			"raca": "Humana",
			"funcao": "Arquivista dos Ecos",
			"descricao": "Mulher de cabelos curtos e olhar atento, vestindo manto azul-escuro simples e luvas de couro manchadas de tinta.",
			"tags": [
			  "arquivo",
			  "investigacao",
			  "aliada"
			],
			"informacoes": [
			  "Percebeu que documentos foram alterados.",
			  "Tem suspeitas discretas sobre o Conclave.",
			  "Conhece nomes de estudantes desaparecidos."
			],
			"interacao": {
			  "persuasao": 13,
			  "intuicao": 12
			},
			"segredo": "Guarda uma chave de bronze que abre um compartimento oculto no Arquivo dos Primeiros Nomes."
		},
		{
			"id": "npc_taeron_fell",
			"tipo": "npc",
			"bairro": "bairro_ecos",
			"nome": "Taeron Fell",
			"raca": "Tiefling",
			"funcao": "Professor de história arcana",
			"descricao": "Tiefling alto de chifres curtos, vestindo sobretudo cinza com bordados discretos e um colar de prata com runas antigas.",
			"tags": [
			  "professor",
			  "politica",
			  "segredos"
			],
			"informacoes": [
			  "Participa de debates públicos no Fórum.",
			  "Investiga discretamente ligações entre o Conclave e antigos registros apagados.",
			  "Tem contato com informantes em outros bairros."
			],
			"interacao": {
			  "persuasao": 14,
			  "historia": 13,
			  "intuicao": 14
			},
			"segredo": "Descobriu que parte do Conclave e parte dos Ecos pertencem à mesma estrutura oculta: o Conclave dos Descendentes."
		}
	]
};