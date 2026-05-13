const DATA_LOJA = {
  Weapon: {
    categorias: [
      {
        categoria: "Armas Simples Corpo a Corpo",
        itens: [
          { nome: "Clava", dano: "1d4 Concussão", propriedades: "Leve", maestria: "Lento", custo: "1 SP", raridade: "Comum" },
          { nome: "Adaga", dano: "1d4 Perfurante", propriedades: "Acuidade, Leve, Arremesso (20/60)", maestria: "Ágil", custo: "2 GP", raridade: "Comum" },
          { nome: "Clava Grande", dano: "1d8 Concussão", propriedades: "Duas Mãos", maestria: "Empurrar", custo: "2 SP", raridade: "Comum" },
          { nome: "Machadinha", dano: "1d6 Cortante", propriedades: "Leve, Arremesso (20/60)", maestria: "Provocar", custo: "5 GP", raridade: "Comum" },
          { nome: "Azagaia", dano: "1d6 Perfurante", propriedades: "Arremesso (30/120)", maestria: "Lento", custo: "5 SP", raridade: "Comum" },
          { nome: "Martelo Leve", dano: "1d4 Concussão", propriedades: "Leve, Arremesso (20/60)", maestria: "Ágil", custo: "2 GP", raridade: "Comum" },
          { nome: "Maça", dano: "1d6 Concussão", propriedades: "—", maestria: "Aturdir", custo: "5 GP", raridade: "Comum" },
          { nome: "Bordão", dano: "1d6 Concussão", propriedades: "Versátil (1d8)", maestria: "Derrubar", custo: "2 SP", raridade: "Comum" },
          { nome: "Foice", dano: "1d4 Cortante", propriedades: "Leve", maestria: "Ágil", custo: "1 GP", raridade: "Comum" },
          { nome: "Lança", dano: "1d6 Perfurante", propriedades: "Arremesso (20/60), Versátil (1d8)", maestria: "Aturdir", custo: "1 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Armas Simples à Distância",
        itens: [
          { nome: "Dardo", dano: "1d4 Perfurante", propriedades: "Acuidade, Arremesso (20/60)", maestria: "Provocar", custo: "5 CP", raridade: "Comum" },
          { nome: "Besta Leve", dano: "1d8 Perfurante", propriedades: "Munição (80/320; Virola), Recarga, Duas Mãos", maestria: "Lento", custo: "25 GP", raridade: "Comum" },
          { nome: "Arco Curto", dano: "1d6 Perfurante", propriedades: "Munição (80/320; Flecha), Duas Mãos", maestria: "Provocar", custo: "25 GP", raridade: "Comum" },
          { nome: "Funda", dano: "1d4 Concussão", propriedades: "Munição (30/120; Bala)", maestria: "Lento", custo: "1 SP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Armas Marciais Corpo a Corpo",
        itens: [
          { nome: "Machado de Batalha", dano: "1d8 Cortante", propriedades: "Versátil (1d10)", maestria: "Derrubar", custo: "10 GP", raridade: "Comum" },
          { nome: "Espada Longa", dano: "1d8 Cortante", propriedades: "Versátil (1d10)", maestria: "Aturdir", custo: "15 GP", raridade: "Comum" },
          { nome: "Espada Grande", dano: "2d6 Cortante", propriedades: "Pesada, Duas Mãos", maestria: "Rasante", custo: "50 GP", raridade: "Comum" },
          { nome: "Rapieira", dano: "1d8 Perfurante", propriedades: "Acuidade", maestria: "Provocar", custo: "25 GP", raridade: "Comum" },
          { nome: "Martelo de Guerra", dano: "1d8 Concussão", propriedades: "Versátil (1d10)", maestria: "Empurrar", custo: "15 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Armas Marciais à Distância",
        itens: [
          { nome: "Arco Longo", dano: "1d8 Perfurante", propriedades: "Munição (150/600; Flecha), Pesada, Duas Mãos", maestria: "Lento", custo: "50 GP", raridade: "Comum" },
          { nome: "Besta de Mão", dano: "1d6 Perfurante", propriedades: "Munição (30/120; Virola), Leve, Recarga", maestria: "Provocar", custo: "75 GP", raridade: "Comum" },
          { nome: "Besta Pesada", dano: "1d10 Perfurante", propriedades: "Munição (100/400; Virola), Pesada, Recarga, Duas Mãos", maestria: "Empurrar", custo: "50 GP", raridade: "Comum" },
          { nome: "Mosquete", dano: "1d12 Perfurante", propriedades: "Munição (40/120; Bala), Recarga, Duas Mãos", maestria: "Lento", custo: "500 GP", raridade: "Comum" },
          { nome: "Pistola", dano: "1d10 Perfurante", propriedades: "Munição (30/90; Bala), Recarga", maestria: "Provocar", custo: "250 GP", raridade: "Comum" }
        ]
      }
    ]
  },

  Armor: {
    categorias: [
      {
        categoria: "Armaduras Leves",
        itens: [
          { nome: "Acolchoada", classeArmadura: "11 + Mod. Destreza", forcaMinima: "—", furtividade: "Desvantagem", peso: "8 lb", custo: "5 GP", raridade: "Comum" },
          { nome: "Couro", classeArmadura: "11 + Mod. Destreza", forcaMinima: "—", furtividade: "—", peso: "10 lb", custo: "10 GP", raridade: "Comum" },
          { nome: "Couro Batido", classeArmadura: "12 + Mod. Destreza", forcaMinima: "—", furtividade: "—", peso: "13 lb", custo: "45 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Armaduras Médias",
        itens: [
          { nome: "Camisão de Malha", classeArmadura: "13 + Mod. Destreza (máx. +2)", forcaMinima: "—", furtividade: "—", peso: "20 lb", custo: "50 GP", raridade: "Comum" },
          { nome: "Peitoral", classeArmadura: "14 + Mod. Destreza (máx. +2)", forcaMinima: "—", furtividade: "—", peso: "20 lb", custo: "400 GP", raridade: "Comum" },
          { nome: "Meia-Armadura", classeArmadura: "15 + Mod. Destreza (máx. +2)", forcaMinima: "—", furtividade: "Desvantagem", peso: "40 lb", custo: "750 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Armaduras Pesadas",
        itens: [
          { nome: "Cota de Malha", classeArmadura: "16", forcaMinima: "13", furtividade: "Desvantagem", peso: "55 lb", custo: "75 GP", raridade: "Comum" },
          { nome: "Armadura Completa", classeArmadura: "18", forcaMinima: "15", furtividade: "Desvantagem", peso: "65 lb", custo: "1.500 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Escudos",
        itens: [
          { nome: "Escudo", classeArmadura: "+2 CA", forcaMinima: "—", furtividade: "—", peso: "6 lb", custo: "10 GP", raridade: "Comum" }
        ]
      }
    ]
  },

  Tools: {
    categorias: [
      {
        categoria: "Ferramentas de Artesão",
        itens: [
          { nome: "Ferramentas de Ferreiro", peso: "8 lb", custo: "20 GP", raridade: "Comum" },
          { nome: "Ferramentas de Carpinteiro", peso: "6 lb", custo: "8 GP", raridade: "Comum" },
          { nome: "Ferramentas de Coureiro", peso: "5 lb", custo: "5 GP", raridade: "Comum" },
          { nome: "Ferramentas de Alquimista", peso: "8 lb", custo: "50 GP", raridade: "Comum" },
          { nome: "Ferramentas de Ladrão", peso: "1 lb", custo: "25 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Instrumentos Musicais",
        itens: [
          { nome: "Alaúde", peso: "2 lb", custo: "35 GP", raridade: "Comum" },
          { nome: "Flauta", peso: "1 lb", custo: "2 GP", raridade: "Comum" },
          { nome: "Tambor", peso: "3 lb", custo: "6 GP", raridade: "Comum" },
          { nome: "Lira", peso: "2 lb", custo: "30 GP", raridade: "Comum" }
        ]
      },
      {
        categoria: "Jogos e Kits",
        itens: [
          { nome: "Kit de Disfarce", peso: "3 lb", custo: "25 GP", raridade: "Comum" },
          { nome: "Kit de Falsificação", peso: "5 lb", custo: "15 GP", raridade: "Comum" },
          { nome: "Kit de Herbalismo", peso: "3 lb", custo: "5 GP", raridade: "Comum" },
          { nome: "Kit de Venefício", peso: "2 lb", custo: "50 GP", raridade: "Comum" }
        ]
      }
  ]},
  
  Gear: {
  categorias: [
    {
      categoria: "Equipamentos Gerais",
      itens: [
        { nome: "Mochila", peso: "5 lb", custo: "2 GP", raridade: "Comum" },
        { nome: "Corda de Cânhamo (15m)", peso: "10 lb", custo: "1 GP", raridade: "Comum" },
        { nome: "Corda de Seda (15m)", peso: "5 lb", custo: "10 GP", raridade: "Comum" },
        { nome: "Tocha", peso: "1 lb", custo: "1 CP", raridade: "Comum" },
        { nome: "Ração (1 dia)", peso: "2 lb", custo: "5 SP", raridade: "Comum" },
        { nome: "Saco de Dormir", peso: "7 lb", custo: "1 GP", raridade: "Comum" },
        { nome: "Cantíl", peso: "5 lb", custo: "2 SP", raridade: "Comum" },
        { nome: "Pé de Cabra", peso: "5 lb", custo: "2 GP", raridade: "Comum" },
        { nome: "Kit de Escalada", peso: "12 lb", custo: "25 GP", raridade: "Comum" },
        { nome: "Lanterna Furta-Fogo", peso: "2 lb", custo: "10 GP", raridade: "Comum" },
		{ nome: "Ração simples", peso: "2 lb", custo: "5 PP", raridade: "Comum" },
		{ nome: "Lembas", peso: "2 lb", custo: "2 GP", raridade: "Raro" }
      ]
    }
  ]},
  SpellScrolls: {
	  categorias: [
		{
		  categoria: "Cantrip",
		  itens: [
			{ nome: "Pergaminho de Truque", peso: "-", custo: "15 GP", raridade: "Comum" }
		  ]
		},
		{
		  categoria: "Nível 1",
		  itens: [
			{ nome: "Pergaminho de Magia de 1º Nível", peso: "-", custo: "50 GP", raridade: "Comum" }
		  ]
		},
		{
		  categoria: "Nível 2",
		  itens: [
			{ nome: "Pergaminho de Magia de 2º Nível", peso: "-", custo: "150 GP", raridade: "Incomum" }
		  ]
		},
		{
		  categoria: "Nível 3",
		  itens: [
			{ nome: "Pergaminho de Magia de 3º Nível", peso: "-", custo: "300 GP", raridade: "Incomum" }
		  ]
		},
		{
		  categoria: "Nível 4",
		  itens: [
			{ nome: "Pergaminho de Magia de 4º Nível", peso: "-", custo: "1000 GP", raridade: "Raro" }
		  ]
		},
		{
		  categoria: "Nível 5",
		  itens: [
			{ nome: "Pergaminho de Magia de 5º Nível", peso: "-", custo: "1500 GP", raridade: "Raro" }
		  ]
		},
		{
		  categoria: "Nível 6",
		  itens: [
			{ nome: "Pergaminho de Magia de 6º Nível", peso: "-", custo: "10000 GP", raridade: "Muito Raro" }
		  ]
		},
		{
		  categoria: "Nível 7",
		  itens: [
			{ nome: "Pergaminho de Magia de 7º Nível", peso: "-", custo: "12500 GP", raridade: "Muito Raro" }
		  ]
		},
		{
		  categoria: "Nível 8",
		  itens: [
			{ nome: "Pergaminho de Magia de 8º Nível", peso: "-", custo: "15000 GP", raridade: "Lendário" }
		  ]
		},
		{
		  categoria: "Nível 9",
		  itens: [
			{ nome: "Pergaminho de Magia de 9º Nível", peso: "-", custo: "50000 GP", raridade: "Lendário" }
		  ]
		}
	  ]
	},
	WaterdeepArcano: {
	  categorias: [
		{
		  categoria: "Poções",
		  itens: [
			{ nome: "Poção de Cura", peso: "0.5 lb", custo: "50 GP", raridade: "Comum" },
			{ nome: "Poção de Cura Maior", peso: "0.5 lb", custo: "150 GP", raridade: "Incomum" },
			{ nome: "Poção de Cura Superior", peso: "0.5 lb", custo: "450 GP", raridade: "Raro" },
			{ nome: "Poção de Cura Suprema", peso: "0.5 lb", custo: "1350 GP", raridade: "Muito Raro" },
			{ nome: "Poção de Escalada", peso: "0.5 lb", custo: "180 GP", raridade: "Incomum" },
			{ nome: "Poção de Respiração Aquática", peso: "0.5 lb", custo: "220 GP", raridade: "Incomum" },
			{ nome: "Poção de Invisibilidade", peso: "0.5 lb", custo: "900 GP", raridade: "Muito Raro" },
			{ nome: "Poção de Velocidade", peso: "0.5 lb", custo: "1000 GP", raridade: "Muito Raro" }
		  ]
		},
		{
		  categoria: "Componentes Mágicos",
		  itens: [
			{ nome: "Pó de Prata (por 10 GP)", peso: "-", custo: "10 GP", raridade: "Comum" },
			{ nome: "Incenso Ritual", peso: "-", custo: "5 GP", raridade: "Comum" },
			{ nome: "Pérola polida para Identificar", peso: "-", custo: "100 GP", raridade: "Comum" },
			{ nome: "Diamante pequeno", peso: "-", custo: "300 GP", raridade: "Incomum" },
			{ nome: "Diamante refinado", peso: "-", custo: "500 GP", raridade: "Raro" },
			{ nome: "Diamante consagrado", peso: "-", custo: "1000 GP", raridade: "Raro" },
			{ nome: "Cristal focal arcano", peso: "1 lb", custo: "50 GP", raridade: "Comum" },
			{ nome: "Essência elemental selada", peso: "0.5 lb", custo: "250 GP", raridade: "Raro" },
			{ nome: "Tinta arcana para grimório", peso: "-", custo: "10 GP", raridade: "Comum" },
			{ nome: "Pergaminho alquímico em branco", peso: "-", custo: "25 GP", raridade: "Comum" }
		  ]
		},
		{
		  categoria: "Serviços Arcanos",
		  itens: [
			{ nome: "Identificar item mágico", peso: "-", custo: "20 GP", raridade: "Comum" },
			{ nome: "Lançar magia de 1º nível", peso: "-", custo: "25 GP", raridade: "Comum" },
			{ nome: "Lançar magia de 2º nível", peso: "-", custo: "60 GP", raridade: "Incomum" },
			{ nome: "Lançar magia de 3º nível", peso: "-", custo: "120 GP", raridade: "Incomum" },
			{ nome: "Lançar magia de 4º nível", peso: "-", custo: "250 GP", raridade: "Raro" },
			{ nome: "Lançar magia de 5º nível", peso: "-", custo: "500 GP", raridade: "Raro" },
			{ nome: "Remover maldição", peso: "-", custo: "150 GP", raridade: "Incomum" },
			{ nome: "Restauração menor", peso: "-", custo: "75 GP", raridade: "Comum" },
			{ nome: "Restauração maior", peso: "-", custo: "450 GP", raridade: "Raro" },
			{ nome: "Teleporte urbano dentro de Waterdeep", peso: "-", custo: "80 GP", raridade: "Incomum" },
			{ nome: "Consulta oracular ou adivinhação", peso: "-", custo: "200 GP", raridade: "Raro" },
			{ nome: "Vincular familiar ou espírito menor", peso: "-", custo: "120 GP", raridade: "Incomum" }
		  ]
		}
	  ]
	}
};
