const DATA_LOCAIS = {
	"pontos_interesse": [
		{
			"id": "biblioteca_grande_atrio",
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
			  "Antigas famílias ligadas aos Ecos mantêm conexões com outros bairro_ids.",
			  "Há referências fragmentadas a um grupo chamado Descendentes."
			],
			"testes": {
			  "investigacao": 14,
			  "historia": 13
			},
			"segredo": "Parte do acervo foi adulterada. Alguém removeu deliberadamente menções a um antigo mestre que mais tarde fundou uma célula secreta do Conclave dos Descendentes."
		},
		{
			"id": "poi_patio_das_lancas",
			"tipo": "ponto_interesse",
			"nome": "Pátio das Lanças",
			"categoria_local": "quartel",
			"descricao": "Um amplo pátio de pedra marcado por círculos de treino, suportes de armas e estandartes de campanhas passadas. Durante o dia, recrutas treinam sob a supervisão rigorosa de veteranos.",
			"tags": [
			  "treinamento",
			  "guarda",
			  "soldados"
			],
			"informacoes_encontradas": [
			  "Novos recrutas estão sendo preparados em número incomum.",
			  "Capitães discutem reforço de patrulhas em North Ward e Cidade dos Mortos.",
			  "Relatórios recentes mencionam movimentações subterrâneas perto das muralhas antigas."
			],
			"testes": {
			  "atletismo": 12,
			  "percepcao": 13,
			  "intuicao": 12
			},
			"segredo": "Alguns veteranos acreditam que a mobilização atual não responde apenas a ameaças externas, mas a um conflito interno ainda não revelado."
		},
		{
			"id": "poi_sala_das_vigias",
			"tipo": "ponto_interesse",
			"nome": "Sala das Vigias",
			"categoria_local": "torre",
			"descricao": "Uma torre central onde mapas vivos, runas de alerta e registros de patrulha são atualizados diariamente por escribas militares e magos de observação.",
			"tags": [
			  "vigilancia",
			  "mapas",
			  "inteligencia"
			],
			"informacoes_encontradas": [
			  "Mapas apontam áreas de atividade incomum em túneis antigos sob a cidade.",
			  "Patrulhas desapareceram brevemente perto de criptas abandonadas.",
			  "Oficiais registraram sinais mágicos anômalos vindos da ala norte."
			],
			"testes": {
			  "investigacao": 14,
			  "arcana": 13
			},
			"segredo": "Parte dos registros foi selada por ordem superior após mencionar símbolos ligados a Shar e a um círculo de conspiradores ainda sem nome oficial."
		},
		{
			"id": "poi_portico_das_passagens",
			"tipo": "ponto_interesse",
			"nome": "Pórtico das Passagens",
			"categoria_local": "portal",
			"descricao": "Uma galeria de arcos rúnicos conectada a plataformas de embarque, depósitos e escritórios de despacho. Mercadores, mensageiros e magos de trânsito circulam constantemente pelo local.",
			"tags": [
			  "portal",
			  "transito",
			  "comercio"
			],
			"informacoes_encontradas": [
			  "Rotas comerciais internas e externas da cidade.",
			  "Chegadas recentes de carregamentos vindos de Baldur's Gate e Neverwinter.",
			  "Movimentação incomum de caixas lacradas durante a madrugada."
			],
			"testes": {
			  "investigacao": 13,
			  "percepcao": 12,
			  "arcana": 12
			},
			"segredo": "Algumas cargas usam selos legítimos, mas percorrem trajetos que não aparecem nos registros públicos."
		},
		{
			"id": "poi_casa_dos_contratos_velados",
			"tipo": "ponto_interesse",
			"nome": "Casa dos Contratos Velados",
			"categoria_local": "casa mercantil",
			"descricao": "Um edifício elegante de pedra clara e vitrais escuros onde acordos comerciais, direitos de passagem e garantias de transporte são negociados em salas privadas.",
			"tags": [
			  "contratos",
			  "mercadores",
			  "negociacao"
			],
			"informacoes_encontradas": [
			  "Algumas casas nobres possuem participação indireta nas rotas do Véu Astral.",
			  "Certos contratos garantem prioridade de trânsito em tempos de emergência.",
			  "Há cláusulas incomuns ligadas a depósitos subterrâneos."
			],
			"testes": {
			  "persuasao": 13,
			  "investigacao": 14,
			  "intuicao": 13
			},
			"segredo": "Um contrato recente autoriza transporte sigiloso para criptas antigas, assinado por um intermediário de identidade falsa."
		},
		{
			"id": "poi_quadro_dos_sete_ventos",
			"tipo": "ponto_interesse",
			"nome": "Quadro dos Sete Ventos",
			"categoria_local": "praca",
			"descricao": "Um grande mural de madeira negra protegido por vidro encantado. Avisos, recompensas, pedidos de investigação e mensagens codificadas aparecem e desaparecem ao longo do dia.",
			"tags": [
			  "missoes",
			  "rumores",
			  "aventura"
			],
			"informacoes_encontradas": [
			  "Pedidos recentes de patrulha em criptas antigas e túneis sob a cidade.",
			  "Desaparecimento de um mensageiro que levava relatórios vindos da Cidade dos Mortos.",
			  "Movimentações incomuns de grupos religiosos em horários noturnos."
			],
			"testes": {
			  "investigacao": 12,
			  "percepcao": 13,
			  "intuicao": 12
			},
			"segredo": "Alguns avisos aparentemente banais usam códigos lunares que apenas membros do clã sabem interpretar."
		},
		{
			"id": "poi_observatorio_do_arco_prateado",
			"tipo": "ponto_interesse",
			"nome": "Observatório do Arco Prateado",
			"categoria_local": "observatorio",
			"descricao": "Uma torre circular de pedra clara com lunetas arcanas, mapas celestes e mesas cobertas de anotações de campo. Dali, vigias observam a estrada sul e acompanham sinais vindos de fora da cidade.",
			"tags": [
			  "observacao",
			  "exploracao",
			  "arcana"
			],
			"informacoes_encontradas": [
			  "Relatórios de viajantes vindos do interior de Faerûn.",
			  "Padrões de entrada e saída de visitantes incomuns.",
			  "Registros de pequenas anomalias arcanas em diferentes pontos da cidade."
			],
			"testes": {
			  "arcana": 13,
			  "investigacao": 14
			},
			"segredo": "Os registros recentes mostram atividade coordenada em locais distantes entre si, como se algo estivesse mapeando a cidade por dentro."
		}
	],
	"eventos": [
		{
			"id": "evento_assembleia_dos_estudiosos",
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
		},
		{
			"id": "evento_toque_do_bronze",
			"tipo": "evento",
			"nome": "Toque do Bronze",
			"categoria_local": "quartel",
			"descricao": "Sempre que a cidade percebe sinais de perigo, sinos graves ecoam de Castle Ward. Guardas, mensageiros e magos de campo se reúnem rapidamente para distribuir ordens e estabelecer posições.",
			"frequencia": "Condicional",
			"participantes": [
			  "Capitães da guarda",
			  "Magos militares",
			  "Mensageiros",
			  "Patrulheiros"
			],
			"informacoes_encontradas": [
			  "Protocolos de defesa para crises urbanas.",
			  "Reforços enviados a pontos sensíveis da cidade.",
			  "Rumores de que algo se move sob as fundações de Waterdeep."
			],
			"testes": {
			  "percepcao": 12,
			  "intuicao": 14,
			  "persuasao": 13
			},
			"segredo": "Em meio à mobilização, um oficial veterano menciona que a última vez que esse protocolo foi ativado coincidiu com desaparecimentos ligados a uma sociedade arcana clandestina."
		},
		{
			"id": "evento_julgamento_da_guarda",
			"tipo": "evento",
			"nome": "Julgamento da Guarda",
			"categoria_local": "fortaleza",
			"descricao": "Oficiais, conselheiros e testemunhas se reúnem para julgar falhas graves de patrulha, deserção ou suspeitas de corrupção interna.",
			"frequencia": "Ocasional",
			"participantes": [
			  "Oficiais superiores",
			  "Guardas",
			  "Escribas",
			  "Representantes do conselho"
			],
			"informacoes_encontradas": [
			  "Alguns patrulheiros desapareceram durante rondas subterrâneas.",
			  "Há registros contraditórios sobre ordens vindas de fora da cadeia militar.",
			  "Uma investigação discreta foi aberta sobre infiltração política."
			],
			"testes": {
			  "intuicao": 14,
			  "investigacao": 15
			},
			"segredo": "Um guarda condenado tentou avisar que viu agentes usando insígnias falsas da guarda enquanto transportavam caixas para criptas antigas."
		},
		{
			"id": "evento_feira_das_rotas",
			"tipo": "evento",
			"nome": "Feira das Rotas",
			"categoria_local": "mercado",
			"descricao": "Uma vez por tenday, capitães de caravanas, mestres de navio, cambistas e magos do Véu Astral se reúnem para negociar novas rotas, seguros e direitos de passagem.",
			"frequencia": "A cada dez dias",
			"participantes": [
			  "Mercadores",
			  "Capitães de caravanas",
			  "Magos de transporte",
			  "Representantes de casas comerciais"
			],
			"informacoes_encontradas": [
			  "Mudanças recentes nas rotas terrestres e marítimas.",
			  "Mercadorias valiosas aguardadas nos próximos dias.",
			  "Boatos sobre um aumento de escoltas discretas em trajetos específicos."
			],
			"testes": {
			  "persuasao": 12,
			  "intuicao": 13,
			  "investigacao": 12
			},
			"segredo": "Um mercador embriagado comenta que certas cargas nunca chegam aos armazéns declarados, desaparecendo sob a cidade."
		},
		{
			"id": "evento_nevoa_de_transito",
			"tipo": "evento",
			"nome": "Névoa de Trânsito",
			"categoria_local": "portal",
			"descricao": "Em noites raras, uma interferência astral cobre o Pórtico das Passagens com névoa azulada e distorce por alguns minutos a malha de teleporte local.",
			"frequencia": "Ocasional",
			"participantes": [
			  "Magos do Véu Astral",
			  "Guardas mercantis",
			  "Despachantes"
			],
			"informacoes_encontradas": [
			  "Portais registram destinos não catalogados.",
			  "Uma rota breve parece apontar para câmaras subterrâneas antigas.",
			  "Mensageiros evitam comentar o ocorrido em voz alta."
			],
			"testes": {
			  "arcana": 14,
			  "investigacao": 15,
			  "percepcao": 13
			},
			"segredo": "Durante a distorção, um fragmento de coordenadas arcanas revela uma passagem oculta usada por agentes do Conclave dos Descendentes."
		},
		{
			"id": "evento_partida_dos_luminares",
			"tipo": "evento",
			"nome": "Partida dos Luminares",
			"categoria_local": "portao",
			"descricao": "Ao amanhecer, grupos de exploradores, estudiosos e aventureiros se reúnem no portão sul para receber tarefas, mapas e instruções antes de partirem.",
			"frequencia": "Diário",
			"participantes": [
			  "Aventureiros",
			  "Exploradores",
			  "Escribas do Círculo",
			  "Mensageiros"
			],
			"informacoes_encontradas": [
			  "Missões em ruínas próximas e estradas comerciais.",
			  "Pedidos de observação discreta em bairro_ids específicos.",
			  "Relatos fragmentados de atividades subterrâneas."
			],
			"testes": {
			  "persuasao": 12,
			  "investigacao": 12,
			  "intuicao": 13
			},
			"segredo": "Algumas missões oficiais escondem objetivos secundários ligados à investigação do Conclave da Noite Velada."
		},
		{
			"id": "evento_reuniao_da_lua_velada",
			"tipo": "evento",
			"nome": "Reunião da Lua Velada",
			"categoria_local": "arquivo",
			"descricao": "Em noites de lua nova, investigadores veteranos e observadores de campo compartilham descobertas recentes em uma sala reservada sob o observatório.",
			"frequencia": "Mensal",
			"participantes": [
			  "Investigadores",
			  "Observadores",
			  "Escribas",
			  "Agentes de campo"
			],
			"informacoes_encontradas": [
			  "Relatórios sobre movimentação silenciosa na Cidade dos Mortos.",
			  "Notas sobre símbolos associados a Shar.",
			  "Registros de encontros entre intermediários não identificados."
			],
			"testes": {
			  "investigacao": 14,
			  "religiao": 13,
			  "intuicao": 14
			},
			"segredo": "Um mapa parcial sugere que agentes do Conclave da Noite Velada utilizam rotas de acesso por criptas esquecidas e corredores abaixo da cidade."
		}
	],
	"npcs": [
		{
			"id": "npc_eloran_thess",
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
			"Costuma registrar boatos vindos de todos os bairro_ids de Waterdeep.",
			"Possui excelente memória para nomes, datas e pequenas contradições.",
			"Às vezes troca informações por acesso a documentos raros."
			]
		},
		{
			"id": "npc_selvar_ioren",
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
			  "Tem contato com informantes em outros bairro_ids."
			],
			"interacao": {
			  "persuasao": 14,
			  "historia": 13,
			  "intuicao": 14
			},
			"segredo": "Descobriu que parte do Conclave e parte dos Ecos pertencem à mesma estrutura oculta: o Conclave dos Descendentes."
		},
		{
			"id": "npc_braen_halvar",
			"tipo": "npc",
			"nome": "Braen Halvar",
			"raca": "Humano",
			"funcao": "Capitão da guarda",
			"descricao": "Homem robusto de barba curta e postura rígida, vestindo armadura de placas bronzeadas com capa vermelha escura e manoplas marcadas pelo uso.",
			"tags": [
			  "capitao",
			  "guarda",
			  "autoridade"
			],
			"informacoes": [
			  "Coordena patrulhas em Castle Ward.",
			  "Desconfia de movimentações fora do padrão entre alguns oficiais.",
			  "Mantém relatórios sigilosos sobre túneis antigos."
			],
			"interacao": {
			  "persuasao": 14,
			  "intuicao": 12
			},
			"segredo": "Acredita que a ameaça atual não é apenas criminal e procura aliados discretos fora da cadeia de comando."
		},
		{
			"id": "npc_seris_valen",
			"tipo": "npc",
			"nome": "Seris Valen",
			"raca": "Elfa",
			"funcao": "Magistra de vigilância arcana",
			"descricao": "Elfa de cabelos escuros presos em trança curta, vestindo túnica militar azul profunda sob peitoral de bronze gravado com runas de observação.",
			"tags": [
			  "arcana",
			  "vigilancia",
			  "investigacao"
			],
			"informacoes": [
			  "Analisa anomalias mágicas nos mapas de vigilância.",
			  "Notou padrões de atividade subterrânea em regiões distantes entre si.",
			  "Mantém comunicação reservada com estudiosos de outros clãs."
			],
			"interacao": {
			  "arcana": 14,
			  "investigacao": 14,
			  "persuasao": 13
			},
			"segredo": "Suspeita que as ocorrências recentes formam um desenho geométrico ritual sob a cidade, mas ainda não conseguiu provar."
		},
		{
			"id": "evento_feira_das_rotas",
			"tipo": "evento",
			"nome": "Feira das Rotas",
			"categoria_local": "mercado",
			"descricao": "Uma vez por tenday, capitães de caravanas, mestres de navio, cambistas e magos do Véu Astral se reúnem para negociar novas rotas, seguros e direitos de passagem.",
			"frequencia": "A cada dez dias",
			"participantes": [
			  "Mercadores",
			  "Capitães de caravanas",
			  "Magos de transporte",
			  "Representantes de casas comerciais"
			],
			"informacoes_encontradas": [
			  "Mudanças recentes nas rotas terrestres e marítimas.",
			  "Mercadorias valiosas aguardadas nos próximos dias.",
			  "Boatos sobre um aumento de escoltas discretas em trajetos específicos."
			],
			"testes": {
			  "persuasao": 12,
			  "intuicao": 13,
			  "investigacao": 12
			},
			"segredo": "Um mercador embriagado comenta que certas cargas nunca chegam aos armazéns declarados, desaparecendo sob a cidade."
		},
		{
			"id": "evento_nevoa_de_transito",
			"tipo": "evento",
			"nome": "Névoa de Trânsito",
			"categoria_local": "portal",
			"descricao": "Em noites raras, uma interferência astral cobre o Pórtico das Passagens com névoa azulada e distorce por alguns minutos a malha de teleporte local.",
			"frequencia": "Ocasional",
			"participantes": [
			  "Magos do Véu Astral",
			  "Guardas mercantis",
			  "Despachantes"
			],
			"informacoes_encontradas": [
			  "Portais registram destinos não catalogados.",
			  "Uma rota breve parece apontar para câmaras subterrâneas antigas.",
			  "Mensageiros evitam comentar o ocorrido em voz alta."
			],
			"testes": {
			  "arcana": 14,
			  "investigacao": 15,
			  "percepcao": 13
			},
			"segredo": "Durante a distorção, um fragmento de coordenadas arcanas revela uma passagem oculta usada por agentes do Conclave dos Descendentes."
		},
		{
			"id": "npc_miraen_thalos",
			"tipo": "npc",
			"nome": "Miraen Thalos",
			"raca": "Humana",
			"funcao": "Mestra dos avisos",
			"descricao": "Mulher de olhar perspicaz e cabelos castanhos presos em nó simples, vestindo manto cinza-azulado com broches de prata em forma de meia-lua.",
			"tags": [
			  "informacao",
			  "avisos",
			  "contatos"
			],
			"informacoes": [
			  "Organiza contratos e pedidos públicos de investigação.",
			  "Reconhece padrões em rumores espalhados pela cidade.",
			  "Mantém contato frequente com mensageiros e exploradores."
			],
			"interacao": {
			  "persuasao": 13,
			  "intuicao": 14
			},
			"segredo": "Sabe que três investigadores desapareceram enquanto seguiam pistas ligadas ao Conclave da Noite Velada."
		},
		{
			"id": "npc_caelen_oris",
			"tipo": "npc",
			"nome": "Caelen Oris",
			"raca": "Elfo",
			"funcao": "Investigador de campo",
			"descricao": "Elfo magro de cabelos escuros curtos, vestindo capa de viagem verde-acinzentada sobre gibão leve de couro e botas marcadas pela estrada.",
			"tags": [
			  "investigacao",
			  "campo",
			  "segredos"
			],
			"informacoes": [
			  "Retornou recentemente de uma missão na Cidade dos Mortos.",
			  "Observou encontros discretos entre acólitos e mensageiros noturnos.",
			  "Carrega anotações incompletas sobre símbolos e trajetos subterrâneos."
			],
			"interacao": {
			  "investigacao": 14,
			  "persuasao": 12,
			  "intuicao": 13
			},
			"segredo": "Acredita que o Conclave da Noite Velada não opera sozinho e que alguém no conselho ajuda a encobrir suas movimentações."
		}
	]
};