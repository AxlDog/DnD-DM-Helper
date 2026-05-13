/* =========================================================
 * SCHEMA: DATA_FACCOES
 * =========================================================
 * Array de objetos com informações de guildas, escolas e organizações.
 * 
 * DATA_FACCOES = [{
 *   id: String,
 *   nome: String,
 *   tipo: String,
 *   bairro_id: String | null,
 *   status: String,
 *   descricao: String,
 *   influencia: {
 *     nobreza: String,
 *     populacao: String,
 *     conselho: String
 *   },
 *   comandante: {
 *     nome: String,
 *     titulo: String,
 *     publico: Boolean,
 *     descricao: String
 *   },
 *   representante_publico: {
 *     nome: String,
 *     titulo: String,
 *     publico: Boolean,
 *     descricao: String
 *   } (opcional),
 *   membros_conhecidos: [String] (opcional),
 *   vantagem_politica: String,
 *   objetivos: [String],
 *   relacoes: {
 *     aliados: [String],
 *     rivais: [String],
 *     desconfianca: [String]
 *   },
 *   segredo: String
 * }]
 * ========================================================= */

const DATA_FACCOES = [
  {
      "id": "faccao_sete_runas",
      "nome": "As 7 Runas",
      "tipo": "clã arcano",
      "bairro_id": "bairro_sete_runas",
      "status": "ativo",
      "descricao": "A escola de maior prestígio entre os nobres de Waterdeep. Seus magos concentram pesquisa aplicada, inovação arcana e desenvolvimento de novos métodos mágicos para uso civil, militar e comercial.",
      "influencia": {
        "nobreza": "alta",
        "populacao": "media",
        "conselho": "alta"
      },
	  "comandante": {
        "nome": "Arthen Vaelor",
        "titulo": "Arquimago das Sete Runas",
        "publico": true,
        "descricao": "Humano de idade avançada, vestindo mantos azul-escuros bordados com fios dourados. Conhecido por sua precisão intelectual e pela habilidade de conduzir debates do conselho com calma cirúrgica."
      },
      "vantagem_politica": "Possui o voto de minerva em casos de empate no conselho mágico.",
      "objetivos": [
        "Preservar a liderança tecnológica e mágica da cidade",
        "Controlar patentes arcanas e novas descobertas",
        "Manter sua posição dominante no conselho"
      ],
      "relacoes": {
        "aliados": [
          "faccao_veu_astral"
        ],
        "rivais": [
          "faccao_ecos"
        ],
        "desconfianca": [
          "faccao_conclave"
        ]
      },
      "segredo": "Parte dos magos mais antigos suspeita que pesquisas recentes vêm sendo observadas por agentes externos infiltrados entre escribas e estudantes."
    },
    {
      "id": "faccao_ecos",
      "nome": "Os Ecos",
      "tipo": "clã arcano",
      "bairro_id": "bairro_ecos",
      "status": "ativo",
	  "comandante": {
        "nome": "Vael Tharion",
        "titulo": "Mestre dos Ecos Profundos",
        "publico": true,
        "descricao": "Humano de cabelos escuros e traços austeros, vestindo túnica negra com discretos bordados prateados. Necromante erudito, mantém influência ampla entre estudantes e estudiosos."
      },
      "descricao": "A maior escola em número de estudantes. Popular entre a população comum, mantém forte presença em North Ward e influência social ampla.",
      "influencia": {
        "nobreza": "media",
        "populacao": "alta",
        "conselho": "alta"
      },
      "vantagem_politica": "Seu apoio popular pesa diretamente na legitimidade do conselho.",
      "objetivos": [
        "Expandir acesso à educação arcana",
        "Preservar apoio popular",
        "Investigar atividades ocultas dentro do Conclave"
      ],
      "relacoes": {
        "aliados": [
          "faccao_circulo_da_lua"
        ],
        "rivais": [
          "faccao_sete_runas"
        ],
        "desconfianca": [
          "faccao_conclave"
        ]
      },
      "segredo": "Parte dos membros mais antigos descobriu fragmentos de registros apontando que uma antiga dissidência dos Ecos ajudou a formar o Conclave dos Descendentes."
    },
    {
      "id": "faccao_soldados_de_bronze",
      "nome": "Soldados de Bronze",
      "tipo": "clã militar arcano",
      "bairro_id": "bairro_soldados_bronze",
      "status": "ativo",
	  "comandante": {
        "nome": "Daram Voss",
        "titulo": "Marechal de Bronze",
        "publico": true,
        "descricao": "Anão robusto de barba curta presa em anéis de cobre, trajando armadura de bronze gravada com runas militares. Veterano respeitado, lidera a guarda da cidade e a defesa arcana de Waterdeep."
      },
      "descricao": "Clã militarizado responsável pela defesa de Waterdeep. Controla a guarda da cidade e mantém presença constante em Castle Ward.",
      "influencia": {
        "nobreza": "media",
        "populacao": "media",
        "conselho": "alta"
      },
      "vantagem_politica": "Em tempos de crise, sua autoridade e influência aumentam drasticamente.",
      "objetivos": [
        "Defender Waterdeep de ameaças externas e internas",
        "Monitorar atividade subterrânea e mágica anômala",
        "Manter estabilidade política"
      ],
      "relacoes": {
        "aliados": [
          "faccao_sete_runas"
        ],
        "rivais": [],
        "desconfianca": [
          "faccao_conclave",
          "faccao_ecos"
        ]
      },
      "segredo": "Oficiais veteranos sabem que patrulhas desapareceram em túneis antigos sob a cidade, mas os relatórios completos foram selados."
    },
    {
      "id": "faccao_veu_astral",
      "nome": "Véu Astral",
      "tipo": "clã arcano mercantil",
      "bairro_id": "bairro_veu_astral",
      "status": "ativo",
	  "comandante": {
        "nome": "Ilyra Sorn",
        "titulo": "Mestra das Passagens",
        "publico": true,
        "descricao": "Elfa de postura elegante, cabelos prateados presos em trança longa, vestindo mantos violetas e adornos de cristal. Reconhecida por sua habilidade em negociações e redes de transporte arcano."
      },
      "descricao": "Especialistas em transporte mágico, portais e logística arcana. O clã mais rico de Waterdeep e principal parceiro das casas mercantis.",
      "influencia": {
        "nobreza": "alta",
        "populacao": "media",
        "conselho": "alta"
      },
      "vantagem_politica": "Controla rotas estratégicas e infraestrutura de deslocamento mágico.",
      "objetivos": [
        "Expandir redes de transporte",
        "Controlar contratos de trânsito e passagem",
        "Preservar monopólios comerciais"
      ],
      "relacoes": {
        "aliados": [
          "faccao_sete_runas"
        ],
        "rivais": [],
        "desconfianca": [
          "faccao_circulo_da_lua"
        ]
      },
      "segredo": "Alguns contratos ocultam movimentação de cargas que desaparecem em rotas subterrâneas fora dos registros públicos."
    },
    {
      "id": "faccao_circulo_da_lua",
      "nome": "Círculo da Lua",
      "tipo": "clã arcano investigativo",
      "bairro_id": "bairro_circulo_lua",
      "status": "ativo",
	  "comandante": {
        "nome": "Lyris Vaen",
        "titulo": "Guardiã do Quadro dos Sete Ventos",
        "publico": true,
        "descricao": "Tiefling de olhar atento e movimentos silenciosos, usando capa cinza-azulada sobre roupas leves de viagem. Coordena agentes de campo, informantes e expedições discretas."
      },
      "descricao": "Responsáveis pela inteligência da cidade, exploração e coleta de informações. Mantêm observatórios, arquivos de campo e o quadro de avisos de Waterdeep.",
      "influencia": {
        "nobreza": "media",
        "populacao": "media",
        "conselho": "media"
      },
      "vantagem_politica": "Possui acesso privilegiado a informações de dentro e fora da cidade.",
      "objetivos": [
        "Monitorar acontecimentos em Waterdeep e Faerûn",
        "Enviar aventureiros em missões discretas",
        "Investigar o Conclave da Noite Velada"
      ],
      "relacoes": {
        "aliados": [
          "faccao_ecos"
        ],
        "rivais": [],
        "desconfianca": [
          "faccao_conclave"
        ]
      },
      "segredo": "Investigadores veteranos acreditam que atividades subterrâneas recentes formam um padrão geométrico ritual sob a cidade."
    },
    {
      "id": "faccao_conclave",
      "nome": "O Conclave",
      "tipo": "clã arcano religioso",
      "bairro_id": "bairro_conclave",
      "status": "ativo",
	  "comandante": {
        "nome": "Sered Malovar",
        "titulo": "Voz do Véu Sagrado",
        "publico": false,
        "descricao": "Humano de traços severos, sempre envolto em mantos negros e cinzentos. Paladino de Shar que conduz o verdadeiro núcleo oculto do Conclave longe dos olhos do conselho."
      },
	  "representante_publico": {
        "nome": "Elaris Thenn",
        "titulo": "Magíster Litúrgico",
        "publico": true,
        "descricao": "Elfo de cabelos claros e fala serena, conhecido por representar oficialmente o clã em cerimônias, assembleias e debates públicos."
      },
      "descricao": "Clã dedicado à fusão entre magia da Trama e tradições religiosas. Instalado na Cidade dos Mortos, mantém influência discreta em várias regiões de Faerûn.",
      "influencia": {
        "nobreza": "baixa",
        "populacao": "media",
        "conselho": "media"
      },
      "vantagem_politica": "Sua rede de vínculos religiosos fornece informação distribuída e influência silenciosa.",
      "objetivos": [
        "Estudar magia ritual e religiosa",
        "Manter presença discreta além de Waterdeep",
        "Preservar sua autonomia política"
      ],
      "relacoes": {
        "aliados": [],
        "rivais": [],
        "desconfianca": [
          "faccao_ecos",
          "faccao_circulo_da_lua"
        ]
      },
      "segredo": "Secretamente reverencia Shar. Estudantes promissores são testados e gradualmente convertidos em servidores da deusa."
    },
    {
      "id": "faccao_biblioteca_central",
      "nome": "Biblioteca Central",
      "tipo": "instituicao neutra",
      "bairro_id": "bairro_biblioteca",
      "status": "ativo",
      "descricao": "Centro neutro de conhecimento e preservação histórica. Local de encontro entre estudiosos, escribas e representantes de todos os clãs.",
      "influencia": {
        "nobreza": "media",
        "populacao": "media",
        "conselho": "media"
      },
      "vantagem_politica": "Território neutro onde disputas abertas são desencorajadas.",
      "objetivos": [
        "Preservar registros e arquivos",
        "Manter neutralidade institucional",
        "Proteger conhecimento histórico"
      ],
      "relacoes": {
        "aliados": [],
        "rivais": [],
        "desconfianca": []
      },
      "segredo": "Registros vêm sendo alterados silenciosamente para alimentar desconfiança entre os clãs e mapear suas prioridades."
    },
    {
      "id": "faccao_conclave_descendentes",
      "nome": "Conclave dos Descendentes",
      "tipo": "organizacao secreta",
      "bairro_id": null,
      "status": "oculto",
      "descricao": "Uma organização clandestina que opera sob múltiplas identidades dentro de Waterdeep. Mantém células infiltradas entre escolas, arquivos e redes políticas.",
      "influencia": {
        "nobreza": "oculta",
        "populacao": "oculta",
        "conselho": "oculta"
      },
	  "comandante": {
        "nome": "Maeron Dhal",
        "titulo": "Primeiro Eco",
        "publico": false,
        "descricao": "Humano de voz baixa e expressão impenetrável, trajando mantos negros sem insígnias. Pouquíssimos conhecem sua identidade, e menos ainda compreendem a extensão de sua rede."
      },
      "membros_conhecidos": [
        "Vael Tharion",
        "Sered Malovar",
        "Daram Voss",
        "Lyris Vaen",
        "Maeron Dhal"
      ],
      "vantagem_politica": "Atua por infiltração, manipulação de registros e informação fragmentada.",
      "objetivos": [
        "Expandir influência silenciosa sobre o conselho",
        "Provocar tensão controlada entre facções",
        "Ocultar sua verdadeira estrutura e liderança"
      ],
      "relacoes": {
        "aliados": [],
        "rivais": [
          "faccao_circulo_da_lua",
          "faccao_ecos"
        ],
        "desconfianca": []
      },
      "segredo": "Parte do Conclave e parte dos Ecos possuem vínculos históricos com a fundação da organização."
    }
];
