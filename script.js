const params = new URLSearchParams(window.location.search);
let npcGerado = null;
let npcCache = [];

const SUPABASE_URL = 'https://umiytlqphtxknhjldzgs.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nq_f9SCvJwxp9dNM5KGskw_ltD4oL45';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("npcModal");
  if (!modal) return;

  const modalContent = modal.querySelector(".modal-content");
  if (!modalContent) return;

  // Clique fora do conteúdo fecha o modal
  modal.addEventListener("click", () => {
    closeNPCModal();
  });

  // Clique dentro do modal não fecha
  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

function getViewFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("view");
}

function setActiveMenu(index) {
  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (buttons[index]) {
    buttons[index].classList.add("active");
  }
}

function loadInitialView() {
  const view = getViewFromURL();

  switch (view) {
    case "timeline":
      loadTimeline();
      break;
    case "pontos-principais":
      loadPontosPrincipais();
      break;
    case "npcs":
      loadNPCList();
      break;
    case "npc-create":
      loadNPCCreator();
      break;
    case "locais":
      loadLocais();
      break;
    case "faccoes":
      loadFaccoes();
      break;
    case "loja":
      loadLoja();
    break;
    default:
      loadDashboard();
  }
}

function loadDashboard() {
  setActiveMenu(0);
  setView("dashboard");
  document.getElementById("content").innerHTML = `<h2>📌 Sessão Atual</h2> <p>Jogadores enfrentaram Hezrol e conseguiram a vitória, mas não sem antes Eskell e Tamir ficarem inconcientes algumas vezes. Romero conseguiu concluir o ritual de purificação da água, mas o último condão de seu rosário virou luz no processo. Agora os jogadores se veem falando com um tiefling da resistência.</p>`;
}

function loadTimeline() {
  setActiveMenu(1);
  setView("timeline");

  document.getElementById("content").innerHTML = `
    <div class="timeline-vertical-wrapper">
      <h2>🕰️ Linha do Tempo</h2>
      <div id="timelineGrid"></div>
    </div>
  `;

  // Verifica se a constante existe antes de tentar renderizar
  if (typeof DATA_TIMELINE !== 'undefined') {
    renderTimeline(DATA_TIMELINE);
  } else {
    document.getElementById("timelineGrid").innerHTML = "<p class='placeholder'>Erro: Banco de dados da Timeline não encontrado.</p>";
  }
}

function renderTimeline(atos) {
  const container = document.getElementById("timelineGrid");
  if (!container) return;

  container.innerHTML = '<div class="timeline-v-line"></div>';

  Object.keys(atos).forEach((atoKey) => {
    const sessoes = atos[atoKey];

    Object.keys(sessoes).forEach((sessaoKey) => {
      const dadosSessao = sessoes[sessaoKey];
      const card = document.createElement("div");
      card.className = "timeline-v-item";

      // Cor fixa: Prata da Lua (Moonlight Silver)
      const corPrata = "#e0e0e0"; 

      card.innerHTML = `
        <div class="timeline-v-dot moonlight-glow"></div>
        <div class="timeline-v-content card">
          <h3>${sessaoKey.toUpperCase().replace("_", " ")}</h3>
        </div>
      `;

      card.onclick = () => openGenericModal(dadosSessao, sessaoKey.replace("_", " "));
      container.appendChild(card);
    });
  });
}

/* NPCs */

function loadNomesData(callback) {
  if (DATA_NOMES_CACHE) {
    callback(DATA_NOMES_CACHE);
    return;
  }
  
  google.script.run
    .withSuccessHandler(function(data) {
      DATA_NOMES_CACHE = data;
      callback(data);
    })
    .withFailureHandler(function(error) {
      console.error("Erro ao carregar nomes:", error);
      // Fallback para dados mínimos
      DATA_NOMES_CACHE = {
        "Humano": { masculinos: ["João"], femininos: ["Maria"], sobrenomes: ["Silva"] }
      };
      callback(DATA_NOMES_CACHE);
    })
    .getNomesData();
}

async function loadNPCList() {
	setActiveMenu(3);
	setView("npcs");
  const mainContent = document.getElementById("content");
  
  // 1. Feedback visual de carregamento
  mainContent.innerHTML = `
    <div class="loading-container">
      <h2>🛡️ Buscando NPCs na taverna...</h2>
    </div>
  `;

  console.log("Consultando banco de dados...");

  // 2. Busca dados no Supabase
  let { data: npcs, error } = await db
      .from('npcs')
      .select('*')
      .order('nome', { ascending: true });

  // 3. Tratamento de Erro
  if (error) {
      console.error("Erro Supabase:", error.message);
      mainContent.innerHTML = `<p style="color:red; padding:20px;">Erro ao carregar NPCs: ${error.message}</p>`;
      return;
  }

  // 4. Prepara o esqueleto da página no "content"
  // Criamos o div com ID "npcGrid" para que a função renderNPCs saiba onde desenhar
  mainContent.innerHTML = `
      <h2>📜 NPCs</h2>
		<div class="card-grid" id="npcGrid"></div>
	  `;
  // 5. Atualiza o cache global e chama a sua função de renderização
  if (npcs && npcs.length > 0) {
      npcCache = npcs;
      renderNPCs(npcs); // Aqui chamamos a sua função original!
  } else {
      document.getElementById("npcGrid").innerHTML = "<p class='placeholder'>A taverna está vazia (Nenhum NPC encontrado).</p>";
  }
}

function loadNPCCreator() {
  setActiveMenu(4);
  setView("npc-create");
  document.getElementById("content").innerHTML =
   `<div class="loja-nav">
      <h2>➕ Criar NPC</h2> 
    </div>
      <div class="npc-generator"> 
        <label for="racaSelect"></label> 
        <select id="racaSelect"> 
			<option value="">Aleatório</option> 
			<option value="Humano">Humano</option> 
			<option value="Elfo">Elfo</option> 
			<option value="Anão">Anão</option> 
			<option value="Halfling">Halfling</option> 
			<option value="Gnomo">Gnomo</option> 
			<option value="Tiefling">Tiefling</option>
			<option value="Goliath">Goliath</option>
			<option value="Orc">Orc</option>
        </select> 
        <button class="btn-loja" onclick="gerarNPC(document.getElementById('racaSelect').value)">➕ Gerar NPC</button>
		<button class="btn-loja" onclick="criarNPC()">➕ Criar NPC</button>
      </div> 
    <div id="npcPreview"></div>`;
}

function criarNPC() {
  const preview = document.getElementById("npcPreview");
  
  preview.innerHTML = `
    <div class="npc-card manual-form">
      <h3>➕ Novo NPC Canônico</h3>
      <input type="text" id="m-nome" placeholder="Nome do Personagem">
      <input type="text" id="m-raca" placeholder="Raça">
      
      <select id="m-sexo">
        <option value="Masculino">Masculino</option>
        <option value="Feminino">Feminino</option>
        <option value="Outro">Outro</option>
      </select>

      <input type="text" id="m-faccao" placeholder="Facção (ex: Punhos Flamejantes)">
      <textarea id="m-desc" placeholder="Descrição e história..."></textarea>
      
      <div class="actions">
        <button class="btn-primary" onclick="enviarManual()">Salvar NPC</button>
        <button class="btn-secondary" onclick="preview.innerHTML=''">Cancelar</button>
      </div>
    </div>
  `;
}

// Função auxiliar para coletar os dados do formulário acima
function enviarManual() {
  const nome = document.getElementById("m-nome").value;
  if (!nome) return alert("O nome é obrigatório!");

  const npcManual = {
    id: "CAN-" + Date.now(),
    nome: nome,
    raca: document.getElementById("m-raca").value || "Humano",
    sexo: document.getElementById("m-sexo").value,
    status: "Ativo",
    faccao: document.getElementById("m-faccao").value,
    metadata: {
      descricao: document.getElementById("m-desc").value, // Note: usamos 'descricao' aqui
      origem: "Canonico" // Definimos que é Manual
    }
  };

  confirmarNPC(npcManual);
}

async function salvarEdicaoNPC(id, metadataAntigo) {
  const titulo = document.getElementById("editKey").value.trim();
  const conteudo = document.getElementById("editValue").value.trim();

  if (!titulo || !conteudo) {
    alert("Preencha o título e o conteúdo da nota.");
    return;
  }

  // 1. Cria o novo metadata mesclando o antigo com a nova chave
  const novoMetadata = {
    ...metadataAntigo,
    [titulo]: conteudo
  };

  try {
    // 2. Faz o update e pede para o Supabase retornar a linha atualizada (.select().single())
    const { data: npcAtualizado, error } = await db
      .from('npcs')
      .update({ metadata: novoMetadata })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    // 3. Feedback rápido de sucesso
    console.log("NPC Atualizado com sucesso:", npcAtualizado);

    // 4. A MÁGICA: Chama o modal novamente com os dados fresquinhos
    // Isso vai reconstruir o HTML do modal, limpando os campos de input
    // e mostrando a nova informação na lista de campos.
    openGenericModal(npcAtualizado, npcAtualizado.nome);

    // 5. Atualiza a lista de NPCs ao fundo para quando o usuário fechar o modal
    if (typeof loadNPCs === "function") loadNPCs();

  } catch (err) {
    console.error("Erro ao atualizar e recarregar:", err);
    alert("Erro ao salvar: " + err.message);
  }
}

async function gerarNPC(racaSelecionada = "") {
  const sorteio = Math.floor(Math.random() * 100);
  const sexo = (sorteio % 2 === 0) ? "Masculino" : "Feminino";
  const raca = racaSelecionada || "Humano";

  try {
    const { data, error } = await db.functions.invoke('gerar_npc_gemini', {
      body: { raca, sexo }
    });

    if (error) throw error;

    // LOG DE VERIFICAÇÃO (O que você pediu)
    console.log("%c[RETORNO IA]", "background: #222; color: #bada55", data);

    const npc = {
      id: "GEN-" + crypto.randomUUID().slice(0, 8),
      nome: data.nome, // Vem da IA
      raca: raca,      // Vem da sua variável
      sexo: sexo,      // Vem da sua variável
      status: "Vivo",
      faccao: "Independente",
      metadata: {
        aparencia: data.aparencia, // Vem da IA
        origem: "IA Gemini"
      }
    };

    npcGerado = npc; 
    renderNPCPreview(npc);

  } catch (err) {
    console.error("Erro:", err);
  }
}

function getGenNPCs() {
  return DATA_NOMES_CACHE || {};
}

function getDescNPCs() {
  return DESC_NPCS || {};
}

function gerarDescricaoNPC(raca, sexo) {
  const lista = DESC_NPCS?.[raca]?.[sexo];

  if (!Array.isArray(lista) || !lista.length) {
    return "Uma figura comum em Faerûn.";
  }

  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function renderNPCs(npcs) {
  const grid = document.getElementById("npcGrid");
  if (!grid || !npcs.length) {
    if (grid) grid.innerHTML = "<p class='placeholder'>Nenhum NPC encontrado.</p>";
    return;
  }

  grid.innerHTML = "";

  npcs.forEach(npc => {
    const card = document.createElement("div");
    card.className = "card npc-card";

    // Mantemos a lógica visual rápida do card
    const origemTag = npc.metadata.id_js && npc.metadata.id_js.startsWith("GEN") ? "🧪 Gerado" : "📜 Canônico";

    card.innerHTML = `
      <h3 class="npc-name">${npc.nome}</h3>
      <p class="npc-meta"><strong>${npc.raca}</strong> • ${npc.sexo || "—"}</p>
      <p class="npc-faction"><span class="label">Facção:</span> ${npc.faccao || "<em>Independente</em>"}</p>
      <span class="npc-origin">${origemTag}</span>
    `;

    // Agora usa a função genérica!
    card.onclick = () => openGenericModal(npc, "Ficha de NPC");
    grid.appendChild(card);
  });
}

function closeNPCModal() {
  document.getElementById("npcModal").classList.add("hidden");
}

function getFullDriveUrl(id) {
  if (!id) return "#";
  return "https://drive.google.com/uc?export=view&id=" + id;
}

const IMAGES_CACHE = {
  previewHeader: "https://lh3.googleusercontent.com/u/0/d/1D3aCHtmip3VJMcHADhXqNqmafbHcFrGf=s400",
  listHeader: "https://lh3.googleusercontent.com/u/0/d/13RnNoDIeuJiv6qoLyWEiAdTBdMqF9Kp_=s400"
};

// Pré-carregamento imediato
function preloadImages() {
  Object.values(IMAGES_CACHE).forEach(url => {
    const img = new Image();
    img.src = url;
  });
}
preloadImages();

let NPC_PREVIEW_ATUAL = null;

function renderNPCPreview(npc) {
  NPC_PREVIEW_ATUAL = npc;

  const previewDiv = document.getElementById("npcPreview");

  previewDiv.innerHTML = `
    <div class="npc-preview-card card" style="background-image: url('${IMAGES_CACHE.previewHeader}')">
      <div class="npc-preview-info">
        <h3>${npc.nome}</h3>
        <p><strong>${npc.raca}</strong> • ${npc.sexo}</p>
        <p><strong>Status:</strong> ${npc.status}</p>
        <p><strong>Descrição:</strong> ${npc.metadata.aparencia}</p>
        <div class="npc-preview-actions">
          <button onclick="gerarNPC(document.getElementById('racaSelect').value)">Gerar Outro</button>
          <button onclick='confirmarNPC(${JSON.stringify(npc)})'>Confirmar</button>
        </div>
      </div>
    </div>
  `;
}

function descartarNPC() {
  document.getElementById("npcPreview").innerHTML = "";
  window.npcTemp = null;
  npcGerado = null;
}

async function confirmarNPC(npc) {
  if (!npc) return;

  const preview = document.getElementById("npcPreview");
  preview.innerHTML = "<p class='placeholder'>💾 Gravando na Grande Biblioteca...</p>";

  try {
    // 1. Resolvemos a descrição (pode vir como 'aparencia' na IA ou 'descricao' no manual)
    const descricaoFinal = npc.metadata.aparencia || npc.metadata.descricao || "Sem descrição.";
    
    // 2. Resolvemos a origem (se não houver uma definida, assume IA Gemini)
    const origemFinal = npc.metadata.origem || "IA Gemini";

    const { data, error } = await db
      .from('npcs')
      .insert([
        {
          nome: npc.nome,
          raca: npc.raca,
          status: npc.status || 'Ativo',
          metadata: {
            sexo: npc.sexo,
            faccao: npc.faccao || 'Independente',
            descricao: descricaoFinal,
            origem: origemFinal,
            id_js: npc.id 
          }
        }
      ]);

    if (error) throw error;

    preview.innerHTML = `
      <div class="placeholder success">
        <p>✅ <strong>${npc.nome}</strong> foi imortalizado!</p>
      </div>
    `;

  } catch (err) {
    console.error("Erro ao salvar no Supabase:", err);
    preview.innerHTML = `
      <div class="placeholder error">
        <p>Erro ao salvar: ${err.message}</p>
        <button onclick='confirmarNPC(${JSON.stringify(npc)})' class="btn-secondary">Tentar Novamente</button>
      </div>
    `;
  }
}

function montarUrlImagem(fileId) {
  if (!fileId || fileId.trim() === "") return "";
  return "https://lh3.googleusercontent.com/u/0/d/" + fileId + "=s400";
}
/* ----------- VIEW PRINCIPAL (NÃO EXCLUIR) ----------*/

function setView(view) {
  const url = new URL(window.location);
  url.searchParams.set("view", view);
  window.history.pushState({}, "", url);
}

/*--------- OUTRAS VIEWS ------*/

function openModal(title, content) {
  document.getElementById("modal-body").innerHTML = `<h3>${title}</h3> <p>${content}</p>`;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/*-------------------LOCAIS------------------*/

function loadLocais() {
  setActiveMenu(5);
  setView("locais");

  document.getElementById("content").innerHTML = `
    <h2>🏰 Pontos de Interesse</h2>
    <div class="card-grid" id="locaisGrid"></div>
  `;

  // Chamamos a função de renderizar passando nossa constante local
  renderLocais(DATA_LOCAIS);
}

function renderLocais(dados) {
  const grid = document.getElementById("locaisGrid");
  if (!grid) return;

  grid.innerHTML = ""; // Limpa o grid

  dados.forEach((local) => {
    const card = document.createElement("div");
    card.className = "card local-card";

    // Mostramos apenas o essencial no card
    card.innerHTML = `
      <div class="card-header">
        <span class="badge">Nível ${local.nivel || "?"}</span>
        <h3>${local.nome || "Sem Nome"}</h3>
      </div>
      <p><strong>Tipo:</strong> ${local.tipo || "Não definido"}</p>
    `;

    // Ao clicar, abre o modal enviando o objeto completo
    card.onclick = () => openGenericModal(local, "Localização");
    
    grid.appendChild(card);
  });
}


/* ----------- MODAL GENÉRICO ------------*/

function openGenericModal(objeto, tituloPadrao) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  var modalContent = modal.querySelector(".modal-content");

  const dataCompleta = { 
    ...objeto, 
    ...(objeto.metadata || {}) 
  };

  if (modalContent && typeof IMAGES_CACHE !== 'undefined') {
    modalContent.style.backgroundImage = "url('" + IMAGES_CACHE.previewHeader + "')";
  }
  if (!modal || !body) return;

  let colunasHtml = "";
  let tituloPrincipal = tituloPadrao;

  const nomesFormatados = {
    id: "",
    raca: "Raça",
    faccao: "Facção",
    aparencia: "Aparência",
    missao: "Missão Relacionada",
    personalidade: "Personalidade",
    encontravel: "Onde Encontrar",
    ameacas: "Ameaças",
    status: "Status",
    observacoes: "Observações",
    segredo: "🤫 Segredo (Mestre)",
    desejo: "Desejo",
    comportamento: "Comportamento"
  };

  Object.entries(dataCompleta).forEach(([chave, valor]) => {
    const chaveLower = chave.toLowerCase();
    if (chaveLower === "metadata" || chaveLower === "created_at" || chaveLower === "id") return;

    if (chaveLower === "nome" || chaveLower === "faccao_nome" || chaveLower === "nome_faccao") {
      tituloPrincipal = valor;
      return;
    }

    if (chaveLower === "id_js") return;
    if (!valor || valor === "—") return;

    const label = nomesFormatados[chaveLower] || 
                  chave.replace(/_/g, " ").charAt(0).toUpperCase() + chave.slice(1);

    colunasHtml += `
      <section class="local-col ${chaveLower === 'segredo' ? 'secret-info' : ''}">
        <h3>${label}</h3>
        <p>${typeof formatarValor === 'function' ? formatarValor(valor) : valor}</p>
      </section>
    `;
  });

  // --- SEÇÃO DE EDIÇÃO (Apenas para NPCs) ---
  // Identificamos se é NPC pela presença de 'raca' e ausência de atributos de itens
  let editSectionHtml = "";
  if (dataCompleta.raca && !dataCompleta.dano) {
    // Codificamos o metadata para não quebrar o HTML com aspas
    const metadataString = encodeURIComponent(JSON.stringify(objeto.metadata || {}));

    editSectionHtml = `
      <div class="npc-edit-box">
        <h4>📝 Adicionar Anotação Técnica</h4>
        <div class="edit-inputs">
          <input type="text" id="editKey" placeholder="Título da Nota (ex: Itens, Fraqueza...)">
          <textarea id="editValue" placeholder="Conteúdo da anotação..."></textarea>
          <button class="btn-update-npc" 
                  onclick="prepararEdicaoNPC('${objeto.id}', '${metadataString}')">
            💾 Salvar Alteração
          </button>
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <div class="local-modal-container">
      <header class="local-modal-header">
        <h2>${tituloPrincipal}</h2>
      </header>
      <div class="local-modal-scroll">
        <div class="local-modal-grid" id="modalFields">
          ${colunasHtml}
        </div>
        ${editSectionHtml} 
      </div>
      <div id="modalFooter" class="modal-footer"></div>
    </div>
  `;

  const footer = document.getElementById("modalFooter");
  footer.innerHTML = ""; 

  if (dataCompleta.dano || dataCompleta.classeArmadura) {
    footer.innerHTML = `
      <button class="btn-forja" onclick='ativarEdicaoItem(${JSON.stringify(dataCompleta)})'>
        ⚒️ Abrir na Forja
      </button>
    `;
  }

  modal.classList.remove("hidden");
}

function prepararEdicaoNPC(id, metadataEncoded) {
  try {
    // Decodifica o que o HTML "escondeu"
    const metadataDecoded = JSON.parse(decodeURIComponent(metadataEncoded));
    
    // Chama a função de salvamento (a que você já tem ou a debaixo)
    salvarEdicaoNPC(id, metadataDecoded);
  } catch (e) {
    console.error("Erro ao processar metadados do NPC:", e);
    alert("Erro interno ao editar. Verifique o console.");
  }
}

function formatarValor(valor) {
  if (Array.isArray(valor)) {
    // Se for array de objetos (como exploracao_locais_acampamento)
    if (typeof valor[0] === 'object') {
      return valor.map(v => `<div class="sub-item">${formatarValor(v)}</div>`).join("");
    }
    return valor.join(", ");
  } 
  
  if (typeof valor === 'object' && valor !== null) {
    // Se for um objeto (como npc_principal), transforma em lista de strings
    return Object.entries(valor)
      .map(([k, v]) => `<strong>${k}:</strong> ${formatarValor(v)}`)
      .join("<br>");
  }
  
  return valor || "—";
}

/*-------------------------------------*/

function section(title, content) {
  if (!content || content.trim() === "") return "";
  return `<h4>${title}</h4><p>${content}</p>`;
}

/* ------------------------ PONTOS PRINCIPAIS ------------------------ */

function loadPontosPrincipais() {
  setActiveMenu(2);
  setView("pontos-principais");

  // Prepara o container principal
  document.getElementById("content").innerHTML = `
    <h2>⭐ Pontos Principais</h2>
    <div class="card-grid" id="ppGrid"></div>
  `;

  // Chama a renderização usando sua constante de dados locais
  // Nota: Certifique-se de que o nome da constante seja DATA_PONTOS_PRINCIPAIS (ou o que você definiu)
  if (typeof DATA_PONTOS_PRINCIPAIS !== 'undefined') {
    renderPontosPrincipais(DATA_PONTOS_PRINCIPAIS);
  } else {
    console.error("Erro: DATA_PONTOS_PRINCIPAIS não encontrado.");
    document.getElementById("ppGrid").innerHTML = 
      "<p class='placeholder'>Erro ao carregar os dados locais.</p>";
  }
}

function renderPontosPrincipais(pontos) {
  const grid = document.getElementById("ppGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!pontos || !pontos.length) {
    grid.innerHTML = "<p class='placeholder'>Nenhum ponto principal registrado.</p>";
    return;
  }

  pontos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card local-card";

    // Mostramos apenas o essencial: Nome, Tipo e Região
    card.innerHTML = `
      <h3>${p["nome"] || "Local sem Nome"}</h3>
      <h5 class="muted">Quem controla <p>${p["quem controla"] || "Sem dono"} · ${p["regiao"] || "Desconhecida"}</p></h5>
    `;

    // Conectando ao modal genérico
    card.onclick = () => openGenericModal(p, "Ponto de Interesse");
    
    grid.appendChild(card);
  });
}

function openPontoPrincipalModal(local) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.style.backgroundImage = `url('${IMAGES_CACHE.previewHeader}')`;

  body.innerHTML = `
  <div class="local-modal-container">

    <header class="local-modal-header">
      <h2>${local["Nome"]}</h2>
      <p class="local-meta">
        <span><strong>Tipo:</strong> ${local["Tipo"]}</span>
      </p>
    </header>

    <div class="local-modal-scroll">

      <div class="local-modal-grid">

        <section class="local-col">
          <h3>Aparência</h3>
          <p>${local["Aparência"] || "—"}</p>
        </section>

        <section class="local-col">
          <h3>Descrição</h3>
          <p>${local["Descrição"] || "—"}</p>
        </section>

        <section class="local-col">
          <h3>NPCs Envolvidos</h3>
          <p>${local["NPCs Envolvidos"] || "—"}</p>
        </section>

        <section class="local-col">
          <h3>Conflitos</h3>
          <p>${local["Conflitos"] || "—"}</p>
        </section>

        <section class="local-col">
          <h3>Itens / Relíquias</h3>
          <p>${local["Itens / Relíquias"] || "—"}</p>
        </section>

        <section class="local-col">
          <h3>Consequências</h3>
          <p>${local["Consequências"] || "—"}</p>
        </section>

      </div>
    </div>

  </div>
`;

  modal.classList.remove("hidden");
}

function loadFaccoes() {
  setActiveMenu(6);
  setView("faccoes");

  document.getElementById("content").innerHTML = `
    <h2>⚔️ Facções</h2>
    <p class="muted">Facções conhecidas e ocultas.</p>
    <div class="card-grid" id="faccaoGrid"></div>
  `;

  renderFaccoes(DATA_FACCOES);
}

function renderFaccoes(faccoes) {
  const grid = document.getElementById("faccaoGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!faccoes || !faccoes.length) {
    grid.innerHTML = "<p class='placeholder'>Nenhuma facção registrada.</p>";
    return;
  }

  faccoes.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card faccao-card";

    // Mantemos o card minimalista como você pediu
    card.innerHTML = `
      <h3>${item.faccao || "Facção sem nome"}</h3>
      <p><strong>Liderança:</strong> ${item.comandantes || "Desconhecida"}</p>
    `;

    // AGORA USANDO O MODAL GENÉRICO
    // Passamos o 'item' e um título padrão caso o objeto não tenha a chave 'faccao'
    card.onclick = () => openGenericModal(item, "Detalhes da Facção");
    
    grid.appendChild(card);
  });
}

function openFaccaoModal(faccao) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  const modalContent = modal.querySelector(".modal-content");

  if (!modal || !body) return;

  if (modalContent) {
    modalContent.style.backgroundImage = `url('${IMAGES_CACHE.previewHeader}')`;
  }

  // 1. Pegamos o nome da facção para o Header
  // O || serve para aceitar tanto "faccao" quanto "Facção"
  const nomeFaccao = faccao.faccao || faccao["Facção"] || "Facção";

  // 2. Geramos as colunas dinamicamente para o restante dos dados
  let colunasHtml = "";

  Object.entries(faccao).forEach(([chave, valor]) => {
    // Pulamos a chave do nome da facção, pois ela já vai no <h2> do header
    if (chave.toLowerCase() === "faccao") return;

    // Formatamos o nome da chave (ex: "comandantes" vira "Comandantes")
    const label = chave.charAt(0).toUpperCase() + chave.slice(1);

    colunasHtml += `
      <section class="local-col">
        <h3>${label}</h3>
        <p>${valor || "—"}</p>
      </section>
    `;
  });

  // 3. Montamos o HTML final
  body.innerHTML = `
    <div class="local-modal-container">
      <header class="local-modal-header">
        <h2>${nomeFaccao}</h2>
      </header>

      <div class="local-modal-scroll">
        <div class="local-modal-grid">
          ${colunasHtml}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

let GEN_NPCS = [];  // Planilha

function mergeNPCs(genNPCs) {
  return [...DATA_NPCS, ...genNPCs];
}

// Função para salvar NPC gerado
function salvarNPCGerado(npc) {
  const npcParaSalvar = {
    nome: npc.nome,
    status: npc.status || "usando",
    raca: npc.raca,
    vicio: npc.observacoes || ""
  };

  google.script.run
    .withSuccessHandler(function() {
      alert("NPC salvo com sucesso!");
    })
    .withFailureHandler(function(error) {
      alert("Erro ao salvar NPC: " + error.message);
    })
    .salvarNPC(npcParaSalvar);
}

//----------------- LOJA -------------------

function loadLoja() {
  setActiveMenu(7);
  setView("loja");

  document.getElementById("content").innerHTML = `
    <div class="loja-container">
      <h2>⚖️ Mercado</h2>
      
      <div class="loja-nav">
        <button class="btn-loja" onclick="setupPrecosView()">📜 Ver Preços</button>
      </div>

      <div id="lojaFiltros" class="loja-filtros hidden">
        <button class="btn-filter" onclick="showSubFilters('Weapon')">⚔️ Armas</button>
        <button class="btn-filter" onclick="showSubFilters('Armor')">🛡️ Armaduras</button>
        <button class="btn-filter" onclick="showSubFilters('Tools')">🎻 Ferramentas</button>
        <button class="btn-filter" onclick="showSubFilters('Gear')">🧭 Genéricos</button>
      </div>

      <div id="subFiltrosContainer" class="loja-filtros hidden sub-nav"></div>

      <div class="card-grid" id="lojaGrid">
        <p class="placeholder">Selecione uma categoria para negociar.</p>
      </div>
    </div>
  `;
}

// Prepara a tela para mostrar os preços e ativa os filtros
function setupPrecosView() {
  document.getElementById("lojaFiltros").classList.remove("hidden");
  document.getElementById("lojaGrid").innerHTML = "<p class='placeholder'>Escolha uma categoria para ver os preços.</p>";
}

function filtrarLoja(categoria) {
  const grid = document.getElementById("lojaGrid");
  grid.innerHTML = "";

  // Supondo que você terá um DATA_LOJA
  if (typeof DATA_LOJA === 'undefined') {
    grid.innerHTML = "<p class='placeholder'>Erro: Banco de dados da loja não encontrado.</p>";
    return;
  }

  const itensFiltrados = DATA_LOJA.filter(item => item.categoria === categoria);

  if (itensFiltrados.length === 0) {
    grid.innerHTML = `<p class='placeholder'>Nenhum item em ${categoria} disponível.</p>`;
    return;
  }

  itensFiltrados.forEach(item => {
    const card = document.createElement("div");
    card.className = "card item-card";
    
    card.innerHTML = `
      <div class="item-header">
        <h3>${item.nome}</h3>
        <span class="price-tag">💰 ${item.preco || "Consultar"}</span>
      </div>
      <p class="muted">${item.peso || "—"} | ${item.propriedades || "Comum"}</p>
    `;

    card.onclick = () => openGenericModal(item, "Detalhes do Item");
    grid.appendChild(card);
  });
}

function showSubFilters(tipo) {
  const subContainer = document.getElementById("subFiltrosContainer");
  const grid = document.getElementById("lojaGrid");
  
  subContainer.innerHTML = ""; 

  const dadosTipo = DATA_LOJA[tipo];

  if (!dadosTipo || !dadosTipo.categorias) {
    subContainer.innerHTML = "<small>Em breve: Novos estoques!</small>";
    return;
  }

  // Cria botões para cada subcategoria (ex: "Armas Simples Corpo a Corpo")
  dadosTipo.categorias.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "btn-sub-filter";
    btn.innerText = sub.categoria;
    
    // Passamos o tipo (Weapon) e o nome da subcategoria para renderizar
    btn.onclick = () => renderItensLoja(tipo, sub.categoria);
    subContainer.appendChild(btn);
  });

  subContainer.classList.remove("hidden");
}

function renderItensLoja(tipo, subNome) {
  const grid = document.getElementById("lojaGrid");
  grid.innerHTML = "";

  const subCat = DATA_LOJA[tipo].categorias.find(c => c.categoria === subNome);
  if (!subCat) return;

  subCat.itens.forEach(item => {
    const card = document.createElement("div");
    card.className = "card item-card";
    
    // Lógica expandida para múltiplos tipos
    let infoSecundaria = "";

    switch (tipo) {
      case 'Weapon':
        infoSecundaria = `<p class="item-meta"><strong>Dano:</strong> ${item.dano}</p>`;
        break;
      case 'Armor':
        infoSecundaria = `<p class="item-meta"><strong>CA:</strong> ${item.classeArmadura}</p>`;
        break;
      case 'Gear':
        infoSecundaria = item.peso ? `<p class="item-meta"><strong>Peso:</strong> ${item.peso}</p>` : "";
        break;
      case 'Tool':
        // Gear e Tools geralmente focam no peso ou tipo, mas podemos deixar vazio
        // ou exibir o peso se você tiver essa chave no banco.
        infoSecundaria = item.peso ? `<p class="item-meta"><strong>Peso:</strong> ${item.peso}</p>` : "";
        break;
      default:
        infoSecundaria = ""; 
    }

    card.innerHTML = `
      <div class="item-header">
        <h3>${item.nome}</h3>
        <span class="price-tag">💰 ${item.custo}</span>
      </div>
      <div class="item-details">
        ${infoSecundaria}
        <p class="item-meta"><strong>Raridade:</strong> ${item.raridade || "Comum"}</p>
      </div>
    `;

    card.onclick = () => openGenericModal(item, item.nome);
    grid.appendChild(card);
  });
}

function ativarEdicaoItem(item) {
  const container = document.getElementById("modalFields");
  const btnSalvar = document.getElementById("btnSalvarForja");
  
  // Mostra o botão salvar que estava escondido
  if (btnSalvar) btnSalvar.style.display = "block";

  // Identifica o tipo de item
  const isArma = !!item.dano;
  const isArmadura = !!item.classeArmadura;

  // Parte comum: Nome do Item
  let htmlForja = `
    <div class="forja-field">
      <label>Nome do Item Especial</label>
      <input type="text" id="editNome" value="${item.nome}">
    </div>
    <div class="forja-field">
      <label>Bônus Mágico (+1 a +3)</label>
      <select id="editBonus">
        <option value="0">Normal</option>
        <option value="1">Incomum +1</option>
        <option value="2">Raro +2</option>
        <option value="3">Lendário +3</option>
      </select>
    </div>
    <div class="forja-field">
      <label>Encantamento!</label>
      <select id="editSpell">
        <option value="nenhuma">Nenhum</option>
        <option value="cantrip">Cantrip</option>
        <option value="nível 1">Nível 1</option>
        <option value="nível 2">Nível 2</option>
        <option value="nível 3">Nível 3</option>
        <option value="nível 4">Nível 4</option>
        <option value="nível 5">Nível 5</option>
        <option value="nível 6">Nível 6</option>
      </select>
    </div>
  `;

  // Parte Específica: ARMAS (Dano Extra)
  if (isArma) {
    htmlForja += `
      <div class="forja-field">
        <label>Dano Adicional (Elemental/Extra)</label>
        <select id="editDanoExtra">
          <option value="">Nenhum</option>
          <option value="+1d4">+1d4 (Incomum)</option>
          <option value="+1d6">+1d6 (Raro)</option>
          <option value="+1d8">+1d8 (Muito Raro)</option>
          <option value="+1d10">+1d10 (Lendário)</option>
        </select>
      </div>
      <div class="forja-field">
        <h3>📜 Informações pertinentes</h3>
        <textarea id="solicita" class="textarea-forja" placeholder="Ex: Dano de fogo, a magia é _, efeito visual..."></textarea>
      </div>
    `;
  }

  // Parte Específica: ARMADURAS (Propriedades Defensivas)
  if (isArmadura) {
    htmlForja += `
      <div class="forja-field">
        <label>Propriedade de Armadura</label>
        <select id="editEfeitoDefesa">
          <option value="">Nenhuma</option>
          <option value="Resistência">Resistência a Dano</option>
          <option value="Adamante">Adamante (Anula Críticos)</option>
          <option value="Furtiva">Furtiva (Remove Desvantagem)</option>
          <option value="Vigilante">Vigilante (+Bônus Iniciativa)</option>
        </select>
      </div>
      <div class="forja-field">
        <h3>📜 Informações pertinentes</h3>
        <textarea id="solicita" class="textarea-forja" placeholder="Ex: Dano de fogo, a magia é _, efeito visual..."></textarea>
      </div>
    `;
  }

  htmlForja += `
  <div class="campos-forja">
    <button class="btn-forjar-agora" onclick="salvarItemCustomizado('${item.custo}')" 
      style="width: 100%; margin-top: 20px; padding: 12px; background: #E69A28; color: black; font-weight: bold; border: none; border-radius: 5px; cursor: pointer;">
      ⚒️ Calcular e Gerar Recibo
    </button>
  </div>
  `;

  container.innerHTML = htmlForja;
}

let itemFinal = null;

function salvarItemCustomizado(custoBase) {
  // 1. Captura os valores dos inputs
  const nome = document.getElementById("editNome").value;
  const bonus = parseInt(document.getElementById("editBonus").value);
  const spellLevel = document.getElementById("editSpell").value;
  const solicita = document.getElementById("solicita").value;
  
  // 2. Tabelas de Preços (Modificadores)
  const PRECO_BONUS = { 0: 0, 1: 400, 2: 4000, 3: 40000 };
  const PRECO_SPELL = {
    "nenhuma": 0, "cantrip": 30, "nível 1": 50, "nível 2": 200, 
    "nível 3": 300, "nível 4": 2000, "nível 5": 3000, "nível 6": 20000
  };
  
  // Preços para Dano Extra (Armas) ou Propriedades (Armaduras)
  const danoExtra = document.getElementById("editDanoExtra")?.value || "";
  const PRECO_DANO = { "": 0, "+1d4": 300, "+1d6": 1000, "+1d8": 1500, "+1d10": 10000 };
  
  const efeitoDefesa = document.getElementById("editEfeitoDefesa")?.value || "";
  const PRECO_DEFESA = { "": 0, "Resistência": 1500, "Adamante": 1000, "Furtiva": 800, "Vigilante": 800 };

  // 3. Cálculo do Preço Total
  const valorBaseNumerico = parseMoedaParaGP(custoBase);
  const custoEncantamento = PRECO_BONUS[bonus] + PRECO_SPELL[spellLevel] + PRECO_DANO[danoExtra] + PRECO_DEFESA[efeitoDefesa];
  const precoTotal = valorBaseNumerico + custoEncantamento;

  itemFinal = {
    itemBase: custoBase,
    nomeNovo: nome,
    bonus: bonus,
    magia: spellLevel,
    adicional: danoExtra || efeitoDefesa || "Nenhum",
    precoFinal: precoTotal,
    solicitacao: solicita
  };

  // 4. Renderizar o "Resultado Final" no Modal
  const container = document.getElementById("modalFields");
  
  // 1. Preparar as linhas do recibo (Só aparecem se tiverem valor)
  const linhasRecibo = [
    { label: "Item Base", valor: custoBase },
    { label: `Bônus Mágico (+${bonus})`, valor: PRECO_BONUS[bonus] > 0 ? `${PRECO_BONUS[bonus].toLocaleString('pt-BR')} GP` : null },
    { label: `Inscrição: ${spellLevel}`, valor: PRECO_SPELL[spellLevel] > 0 ? `${PRECO_SPELL[spellLevel].toLocaleString('pt-BR')} GP` : null },
    { label: `Adicional: ${danoExtra || efeitoDefesa}`, valor: (PRECO_DANO[danoExtra] || PRECO_DEFESA[efeitoDefesa]) > 0 ? `${(PRECO_DANO[danoExtra] || PRECO_DEFESA[efeitoDefesa]).toLocaleString('pt-BR')} GP` : null }
  ];

  // Filtra apenas o que não é nulo para não encher o recibo de zeros
  const htmlLinhas = linhasRecibo
    .filter(linha => linha.valor !== null)
    .map(linha => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px; border-bottom: 1px dashed #444;">
        <span>${linha.label}</span>
        <span>${linha.valor}</span>
      </div>
    `).join('');

  // 2. Renderizar o Recibo Final 
  container.innerHTML = `
    <div class="recibo-antigo" style="grid-column: span 2;">
      <h2>📜 RECIBO DE FORJA</h2>
      <p>Mercador - Itens Especiais</p>
      
      <div style="margin-bottom: 20px;">
        <strong style="font-size: 1.1em;">PRODUTO: ${nome} ${bonus > 0 ? '+' + bonus : ''}</strong>
      </div>

      <div class="detalhes-precos" style="margin-bottom: 20px;">
        ${htmlLinhas}
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 1.4em; font-weight: bold; border-top: 2px solid #444; padding-top: 10px;">
        <span>TOTAL:</span>
        <span>💰 ${precoTotal.toLocaleString('pt-BR')} GP</span>
      </div>

      ${solicita ? `
        <div>
          <small>NOTAS DO CLIENTE:</small>
          <span style="font-style: italic; font-size: 0.9em;">"${solicita}"</span>
        </div>
      ` : ""}
      
      <div style="margin-top: 30px; text-align: center;">
        <p style="font-size: 0.8em; color: #888; margin-bottom: 10px;">Deseja confirmar o pedido?</p>
        <button id="btnConfirmarEnvio" style="padding: 10px 20px; background: #00ff00; color: #000; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;" onclick="enviarItem(itemFinal)">
          ✅ Confirmar e Enviar ao Mestre
        </button>
      </div>
      <p style="text-align: center; font-size: 0.7em; margin-top: 30px; letter-spacing: 2px;">*** QUE OS DEUSES TE PROTEJAM ***</p>
    </div>
  `;
}

function enviarItem(item) {
  const container = document.getElementById("modalFields");
  const originalHTML = container.innerHTML; // Guarda o recibo caso dê erro

  // Feedback visual imediato no botão
  const btn = document.getElementById("btnConfirmarEnvio");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = "⌛ Processando Pedido...";
    btn.style.opacity = "0.7";
  }

  google.script.run
    .withSuccessHandler(function(res) {
      // SUBSTITUI O CONTEÚDO DO MODAL POR UMA MENSAGEM DE SUCESSO
      container.innerHTML = `
        <div class="recibo-antigo" style="grid-column: span 2; text-align: center; padding: 40px 20px; animation: fadeIn 0.5s;">
          <div style="font-size: 50px; margin-bottom: 20px;">⚒️</div>
          <h2 style="color: #E69A28; margin-bottom: 10px;">Pedido Entregue!</h2>
          <p style="color: #E69A28; font-style: italic;">"O mestre ferreiro já recebeu suas instruções. Seu item será forjado com a perícia de Elturel."</p>
          <hr style="border: 0; border-top: 1px solid #444; margin: 20px 0;">
          <button onclick="closeNPCModal()" style="padding: 10px 20px; background: transparent; border: 1px solid #E69A28; color: #E69A28; cursor: pointer; border-radius: 4px;">
            Fechar Forja
          </button>
        </div>
      `;
      console.log("Salvo com sucesso na planilha!");
    })
    .withFailureHandler(function(err) {
      // SE DER ERRO, VOLTA O BOTÃO AO NORMAL E AVISA
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = "❌ Erro ao enviar. Tentar novamente?";
        btn.style.background = "#ff4444";
      }
      alert("Houve um erro mágico ao contatar a forja. Verifique o console.");
      console.error("Erro ao salvar:", err);
    })
    .salvarItemNoGoogle(item);
}

function parseMoedaParaGP(custoString) {
  if (!custoString) return 0;

  // Remove pontos de milhar (ex: 1.500 vira 1500) e troca vírgula por ponto
  const valorLimpo = custoString.replace(/\./g, '').replace(',', '.');
  const numero = parseFloat(valorLimpo);
  const unidade = custoString.toUpperCase();

  if (unidade.includes("SP")) return numero * 0.1;
  if (unidade.includes("CP")) return numero * 0.01;
  return numero; // Assume GP por padrão
}

function verificarAcesso() {
  const senhaDigitada = document.getElementById("inputSenha").value;
  const erro = document.getElementById("erroSenha");
  const lock = document.getElementById("lockscreen");

  if (senhaDigitada === SENHA_MESTRE) {
    lock.style.display = "none"; // Remove a tela de bloqueio
    configurarVisibilidadeJogadores();
  } else {
    erro.style.display = "block";
    document.getElementById("inputSenha").value = "";
  }
}

function configurarVisibilidadeJogadores() {
  // Aqui escondemos os botões/seções que eles NÃO devem ver
  // Supondo que seus botões de menu tenham IDs ou classes:
  
  const sessoesEscondidas = ["aba-npcs-secretos", "aba-mapas-mestre", "aba-lore-proibida"];
  
  sessoesEscondidas.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  console.log("Acesso concedido: Sessão Atual, Linha do Tempo e Mercado liberados.");
}

const SENHA_MESTRE = "MESTRELULU"; // Senha para liberar TUDO
const SENHA_JOGADOR = "PARTY"; // Senha para liberar apenas o básico

function verificarAcesso() {
  const senha = document.getElementById("inputSenha").value;
  const lockscreen = document.getElementById("lockscreen");

  if (senha === SENHA_MESTRE) {
    // Mestre: Libera as abas extras
    lockscreen.style.display = "none";
    liberarAbasMestre(true);
    localStorage.setItem("acesso", senha);
  } else if (senha === SENHA_JOGADOR) {
    // Jogador: Abre o site, mas mantém abas escondidas
    lockscreen.style.display = "none";
    liberarAbasMestre(false);
    localStorage.setItem("acesso", senha);
  } else {
    document.getElementById("erroSenha").style.display = "block";
  }
}

// Coloque isso logo abaixo da sua função verificarAcesso
document.addEventListener("DOMContentLoaded", function() {
  const campoSenha = document.getElementById("inputSenha");
  
  if (campoSenha) {
    campoSenha.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Evita que a página recarregue
        verificarAcesso();      // Chama a sua função
      }
    });
  }
});

function liberarAbasMestre(revelar) {
  const itensMestre = document.querySelectorAll('.mestre-only');
  itensMestre.forEach(el => {
    if (revelar) {
      el.classList.add('show-mestre');
    } else {
      el.classList.remove('show-mestre');
    }
  });
}

function loadEncontros() {
  // Define o item do menu ativo (ajuste o índice conforme necessário, usei 6 como exemplo)
  if (typeof setActiveMenu === 'function') setActiveMenu(7);
  
  // Define a visualização ativa para controle de navegação/CSS
  if (typeof setView === 'function') setView("encontros");

  const contentArea = document.getElementById("content");
  if (!contentArea) return;

  // Injeta a estrutura básica da página de encontros
  contentArea.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">⚔️ Encontros e Combates</h2>
    </div>
    <div class="card-grid" id="encontrosGrid"></div>
  `;

  // Chama a função de renderização passando a constante global DATA_ENCONTROS
  // Certifique-se de que DATA_ENCONTROS esteja acessível neste escopo
  if (typeof DATA_ENCONTROS !== 'undefined') {
    renderEncontros(DATA_ENCONTROS);
  } else {
    console.warn("A constante DATA_ENCONTROS não foi encontrada.");
    document.getElementById("encontrosGrid").innerHTML = '<p class="text-gray-500">Nenhum dado de encontro disponível.</p>';
  }
}

function renderEncontros(dados) {
  const grid = document.getElementById("encontrosGrid");
  if (!grid) return;

  grid.innerHTML = ""; // Limpa o grid

  if (!dados || dados.length === 0) {
    grid.innerHTML = '<p class="text-gray-500 text-center py-4">Nenhum encontro cadastrado.</p>';
    return;
  }

  dados.forEach((encontro) => {
    const card = document.createElement("div");
    card.className = "card encounter-card"; // Seguindo o padrão de classes do projeto

    // Mostramos apenas o essencial no card seguindo o padrão visual de renderLocais
    card.innerHTML = `
      <div class="card-header">
        <h3>${encontro.nome || "Sem Nome"}</h3>
      </div>
      <p class="line-clamp-1">${encontro.descricao || "Sem descrição definida."}</p>
    `;

    // Ao clicar, abre o modal enviando o objeto completo seguindo o padrão openGenericModal
    card.onclick = () => openEncounterModal(encontro);
    
    grid.appendChild(card);
  });
}

/**
 * Abre o modal focado nos monstros do encontro, com controles de HP e Iniciativa.
 */
function openEncounterModal(encontro) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  const modalContent = modal.querySelector(".modal-content");

  if (!modal || !body) return;

  if (modalContent && typeof IMAGES_CACHE !== 'undefined') {
    modalContent.style.backgroundImage = "url('" + IMAGES_CACHE.previewHeader + "')";
  }

  let inimigosHtml = "";
  
  if (encontro.inimigos && Array.isArray(encontro.inimigos)) {
    inimigosHtml = encontro.inimigos.map(ref => {
      const monstro = typeof DATA_MONSTROS !== 'undefined' ? DATA_MONSTROS.find(m => m.id === ref.id) : null;
      const nomeBase = monstro ? monstro.nome : ref.id;
      const monstroId = monstro ? monstro.id : null;
      const cr = monstro ? `ND ${monstro.cr}` : "ND ?";
      const pv = monstro ? parseInt(monstro.pv) || 0 : 0;
      const ca = monstro ? monstro.ca : "?";

      // Cria cards individuais
      return Array.from({ length: ref.quantidade }, (_, i) => {
        const sufixo = ref.quantidade > 1 ? ` #${i + 1}` : "";
        const uniqueId = `${ref.id}_${i}`; // ID único para controle de HP no DOM
        
        return `
          <div class="monster-card-unit" id="monster-card-${uniqueId}">
            <div class="monster-card-header">
              <span class="monster-tag">${cr}</span>
              <span class="monster-name clickable-name" onclick="openMonsterDetails(event, '${monstroId}')" title="Ver Ficha Rápida">
                ${nomeBase}${sufixo} ℹ️
              </span>
            </div>

            <div class="monster-combat-controls">
              <div class="init-control" title="Iniciativa">
                <span>⏱️</span>
                <input type="number" class="combat-input init-input" placeholder="0" />
              </div>

              <div class="monster-stats-row">
                <span>🛡️ CA: ${ca}</span>
                <span>❤️ <span id="hp-val-${uniqueId}">${pv}</span> / ${pv}</span>
              </div>
            </div>

            <div class="hp-control-panel">
              <input type="number" id="hp-input-${uniqueId}" class="combat-input dmg-input" placeholder="Qtd" min="0">
              <button class="btn-combat btn-heal" onclick="applyDamage(event, '${uniqueId}', false)" title="Curar Vida">💚</button>
              <button class="btn-combat btn-dmg" onclick="applyDamage(event, '${uniqueId}', true)" title="Causar Dano">💥</button>
            </div>

            <div class="monster-card-footer">
              📍 ${ref.posicao_inicial}
            </div>
          </div>
        `;
      }).join('');
    }).join('');
  }

  body.innerHTML = `
    <div class="local-modal-container">
      <header class="local-modal-header">
        <h2>${encontro.nome || "Registro de Combate"}</h2>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9em; margin-top: 5px;">
          ${getDificuldadeLabel(encontro.dificuldade)} | Nível ${encontro.nivel_recomendado || '?'}
        </p>
      </header>
      
      <div class="local-modal-scroll">
        <div class="monster-section">
          <h3 class="section-title">Iniciativa e Inimigos</h3>
          <div class="monster-unit-grid">
            ${inimigosHtml || '<p>Nenhum monstro registrado.</p>'}
          </div>
        </div>
      </div>

      <div id="modalFooter" class="modal-footer">
        <button class="btn-forja" onclick="document.getElementById('npcModal').classList.add('hidden')">
          Fechar Registro
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

/**
 * Aplica dano ou cura na interface do card do monstro específico.
 */
function applyDamage(event, uniqueId, isDamage) {
  if (event) event.stopPropagation();

  const valDisplay = document.getElementById(`hp-val-${uniqueId}`);
  const inputEl = document.getElementById(`hp-input-${uniqueId}`);
  const cardEl = document.getElementById(`monster-card-${uniqueId}`);

  if (!valDisplay || !inputEl) return;

  const amount = parseInt(inputEl.value) || 0;
  if (amount === 0) return;

  let currentHp = parseInt(valDisplay.innerText) || 0;

  if (isDamage) {
    currentHp -= amount;
  } else {
    currentHp += amount;
  }

  valDisplay.innerText = currentHp;
  inputEl.value = ''; // Limpa o input após aplicar

  // Feedback visual para monstro abatido
  if (currentHp*5 == 0) {
    cardEl.classList.add('monster-dead');
  } else {
    cardEl.classList.remove('monster-dead');
  }
}

/**
 * Abre um modal sobreposto com a Ficha Rápida do Monstro.
 */
function openMonsterDetails(event, monstroId) {
  if (event) event.stopPropagation();
  if (!monstroId || typeof DATA_MONSTROS === 'undefined') return;

  const monstro = DATA_MONSTROS.find(m => m.id === monstroId);
  if (!monstro) return;

  // Monta Atributos - O uso de 'for' como string literal previne erros no parser
  const attrs = monstro.atributos || {'for':10, 'des':10, 'con':10, 'int':10, 'sab':10, 'car':10};
  const attrHtml = `
    <div class="quick-attr-grid">
      <div><strong>FOR</strong><br>${attrs['for']}</div>
      <div><strong>DES</strong><br>${attrs.des}</div>
      <div><strong>CON</strong><br>${attrs.con}</div>
      <div><strong>INT</strong><br>${attrs.int}</div>
      <div><strong>SAB</strong><br>${attrs.sab}</div>
      <div><strong>CAR</strong><br>${attrs.car}</div>
    </div>
  `;

  // Monta Ações e Habilidades convertendo array puramente em string para evitar erro de Token
  let acoesHtml = '';
  if (monstro.acoes && monstro.acoes.length > 0) {
    const listaAcoes = monstro.acoes.map(a => `<li><strong>${a.nome}:</strong> ${a.descricao}</li>`).join('');
    acoesHtml = `<h4 class="quick-title">Ações</h4><ul class="quick-list">${listaAcoes}</ul>`;
  }
  
  let habilidadesHtml = '';
  if (monstro.habilidades && monstro.habilidades.length > 0) {
    const listaHab = monstro.habilidades.map(h => `<li><strong>${h.nome}:</strong> ${h.descricao}</li>`).join('');
    habilidadesHtml = `<h4 class="quick-title">Habilidades</h4><ul class="quick-list">${listaHab}</ul>`;
  }

  // Criação do Overlay no DOM
  const overlay = document.createElement('div');
  overlay.className = 'quick-monster-overlay';
  overlay.id = 'quickMonsterModal';
  overlay.onclick = (e) => {
    if (e.target === overlay) document.body.removeChild(overlay); // Fecha ao clicar fora
  };

  overlay.innerHTML = `
    <div class="quick-monster-content">
      <header class="quick-monster-header">
        <div>
          <h3>${monstro.nome}</h3>
          <span class="quick-subtitle">${monstro.tipo} | ${monstro.alinhamento}</span>
        </div>
        <button class="btn-close-quick" onclick="document.getElementById('quickMonsterModal').remove()">✖</button>
      </header>
      
      <div class="quick-monster-body">
        <p><strong>🛡️ CA:</strong> ${monstro.ca} <small>(${monstro.tipo_ca || '-'})</small></p>
        <p><strong>❤️ PV:</strong> ${monstro.pv} <small>(${monstro.dados_vida || '-'})</small></p>
        <p><strong>🏃 Deslocamento:</strong> ${monstro.deslocamento || '9m'}</p>
        ${attrHtml}
        <div class="quick-divider"></div>
        ${habilidadesHtml}
        ${acoesHtml}
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

function getDificuldadeLabel(slug) {
  const mapa = { 'facil': 'Fácil', 'medio': 'Médio', 'dificil': 'Difícil', 'dificil_alto': 'Difícil (Alto)', 'mortal': 'Mortal' };
  return mapa[slug] || slug;
}

window.onload = loadInitialView;