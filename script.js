/* =========================================================
 * 1. CONFIGURAÇÃO INICIAL E VARIÁVEIS GLOBAIS
 * ========================================================= */
const params = new URLSearchParams(window.location.search);
let npcGerado = null;
let npcCache = [];

const SUPABASE_URL = 'https://umiytlqphtxknhjldzgs.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nq_f9SCvJwxp9dNM5KGskw_ltD4oL45';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const IMAGES_CACHE = {
  previewHeader: "https://lh3.googleusercontent.com/u/0/d/1D3aCHtmip3VJMcHADhXqNqmafbHcFrGf=s400",
  listHeader: "https://lh3.googleusercontent.com/u/0/d/13RnNoDIeuJiv6qoLyWEiAdTBdMqF9Kp_=s400"
};

let NPC_PREVIEW_ATUAL = null;
let itemFinal = null;

// Variáveis de Combate
let currentCombat = {
  encontroId: null,
  monstros: []
};

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

window.onload = loadInitialView;

// Pré-carregamento imediato
function preloadImages() {
  Object.values(IMAGES_CACHE).forEach(url => {
    const img = new Image();
    img.src = url;
  });
}
preloadImages();

/* =========================================================
 * 2. NAVEGAÇÃO E VIEWS
 * ========================================================= */

function getViewFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("view");
}

function setView(view) {
  const url = new URL(window.location);
  url.searchParams.set("view", view);
  window.history.pushState({}, "", url);
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
    case "timeline": loadTimeline(); break;
    case "pontos-principais": loadPontosPrincipais(); break;
    case "npcs": loadNPCList(); break;
    case "npc-create": loadNPCCreator(); break;
    case "locais": loadLocais(); break;
    case "faccoes": loadFaccoes(); break;
    case "loja": loadLoja(); break;
    case "encontros": loadEncontros(); break;
    case "bestiario": loadBestiario(); break;
    default: loadDashboard();
  }
}

function loadDashboard() {
  setActiveMenu(0);
  setView("dashboard");
  document.getElementById("content").innerHTML = `<h2>📌 Arco Final</h2> <p>Jogadores seguem em busca de vingança e de seus entes queridos.</p>`;
}

/* =========================================================
 * 4. MODAIS GENÉRICOS E UTILIDADES
 * ========================================================= */

function closeNPCModal() {
  const modal = document.getElementById("npcModal");
  if (modal) modal.classList.add("hidden");
}

function formatarValor(valor) {
  if (valor === null || valor === undefined || valor === "") return "—";

  if (Array.isArray(valor)) {
    if (valor.length === 0) return "—";
    if (typeof valor[0] === 'object') {
      return `<div style="margin-top: 5px;">${valor.map(v => `<div style="padding-left: 10px; border-left: 2px solid #E69A28; margin-bottom: 5px;">${formatarValor(v)}</div>`).join('')}</div>`;
    }
    return `<ul style="margin: 5px 0; padding-left: 20px;">${valor.map(v => `<li>${formatarValor(v)}</li>`).join('')}</ul>`;
  }

  if (typeof valor === 'object') {
    return `<ul style="margin: 5px 0; padding-left: 20px;">${Object.entries(valor).map(([k, v]) => {
      const nomeChave = k.replace(/_/g, ' ').charAt(0).toUpperCase() + k.replace(/_/g, ' ').slice(1);
      return `<li><strong>${nomeChave}:</strong> ${formatarValor(v)}</li>`;
    }).join('')}</ul>`;
  }

  return valor;
}

function openGenericModal(objeto, tituloPadrao) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  var modalContent = modal.querySelector(".modal-content");

  const dataCompleta = { 
    ...objeto, 
    ...(objeto.metadata || {}) 
  };

  if (modalContent && typeof IMAGES_CACHE !== 'undefined' && IMAGES_CACHE.previewHeader) {
    modalContent.style.backgroundImage = `url('${IMAGES_CACHE.previewHeader}')`;
  }
  
  if (!modal || !body) return;

  let colunasHtml = "";
  let tituloPrincipal = dataCompleta.nome || dataCompleta.faccao_nome || dataCompleta.nome_faccao || tituloPadrao;

  const nomesFormatados = {
    raca: "Raça", faccao: "Facção", aparencia: "Aparência",
    missao: "Missão Relacionada", personalidade: "Personalidade",
    encontravel: "Onde Encontrar", ameacas: "Ameaças",
    status: "Status", observacoes: "Observações",
    segredo: "🤫 Segredo (Mestre)", desejo: "Desejo", comportamento: "Comportamento"
  };

  Object.entries(dataCompleta).forEach(([chave, valor]) => {
    const chaveLower = chave.toLowerCase();
    
    if (["id", "id_js", "bairro_id", "local_id", "created_at", "metadata", "nome", "faccao_nome", "nome_faccao"].includes(chaveLower)) return;
    if (valor === null || valor === undefined || valor === "" || valor === "—") return;
    if (Array.isArray(valor) && valor.length === 0) return;
    if (typeof valor === 'object' && Object.keys(valor).length === 0) return;

    const label = nomesFormatados[chaveLower] || chave.replace(/_/g, " ").charAt(0).toUpperCase() + chave.replace(/_/g, " ").slice(1);

    colunasHtml += `
      <div class="${chaveLower === 'segredo' ? 'secret-info' : ''}">
        <strong style="color: #E69A28; font-size: 1.1em;">${label}:</strong>
        <div style="margin-top: 5px; color: #541a7f; font-size: 0.95em;">${formatarValor(valor)}</div>
      </div>
    `;
  });

  body.innerHTML = `
    <div class="local-modal-container" style="padding: 20px;">
      <header class="local-modal-header" style="border-bottom: 2px solid #6c1fa5; padding-bottom: 10px; margin-bottom: 20px;">
        <h2 style="color: #6c1fa5; margin: 0;">${tituloPrincipal}</h2>
        ${dataCompleta.tipo ? `<span class="badge" style="background: #444; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; display: inline-block; margin-top: 10px;">${dataCompleta.tipo.toUpperCase()}</span>` : ''}
      </header>
      
      <div class="local-modal-scroll" style="max-height: 60vh; overflow-y: auto; padding-right: 10px;">
        ${colunasHtml}
      </div>
      
      <div class="modal-footer" style="margin-top: 20px; text-align: right; border-top: 1px solid #444; padding-top: 15px;">
         <button class="btn-forja" onclick="closeNPCModal()" style="padding: 8px 16px; background: #333; color: #fff; border: 1px solid #444; border-radius: 4px; cursor: pointer; font-weight: bold;">Fechar</button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

/* =========================================================
 * 6. NPCs (Lista, Criação, Supabase)
 * ========================================================= */

function loadNomesData(callback) {
  if (typeof DATA_NOMES_CACHE !== 'undefined' && DATA_NOMES_CACHE) {
    callback(DATA_NOMES_CACHE);
    return;
  }
  
  if (typeof google !== 'undefined' && google.script) {
    google.script.run
      .withSuccessHandler(function(data) {
        window.DATA_NOMES_CACHE = data;
        callback(data);
      })
      .withFailureHandler(function(error) {
        console.error("Erro ao carregar nomes:", error);
        window.DATA_NOMES_CACHE = {
          "Humano": { masculinos: ["João"], femininos: ["Maria"], sobrenomes: ["Silva"] }
        };
        callback(window.DATA_NOMES_CACHE);
      })
      .getNomesData();
  } else {
    window.DATA_NOMES_CACHE = {
      "Humano": { masculinos: ["João"], femininos: ["Maria"], sobrenomes: ["Silva"] }
    };
    callback(window.DATA_NOMES_CACHE);
  }
}

async function loadNPCList() {
  setActiveMenu(3);
  setView("npcs");
  const mainContent = document.getElementById("content");
  
  mainContent.innerHTML = `
    <div class="loading-container">
      <h2>🛡️ Buscando NPCs na taverna...</h2>
    </div>
  `;

  let { data: npcs, error } = await db
      .from('npcs')
      .select('*')
      .order('nome', { ascending: true });

  if (error) {
      console.error("Erro Supabase:", error.message);
      mainContent.innerHTML = `<p style="color:red; padding:20px;">Erro ao carregar NPCs: ${error.message}</p>`;
      return;
  }

  mainContent.innerHTML = `
      <h2>📜 NPCs</h2>
		<div class="card-grid" id="npcGrid"></div>
  `;

  if (npcs && npcs.length > 0) {
      npcCache = npcs;
      renderNPCs(npcs); 
  } else {
      document.getElementById("npcGrid").innerHTML = "<p class='placeholder'>A taverna está vazia (Nenhum NPC encontrado).</p>";
  }
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

    const origemTag = npc.metadata && npc.metadata.id_js && npc.metadata.id_js.startsWith("GEN") ? "🧪 Gerado" : "📜 Canônico";

    card.innerHTML = `
      <h3 class="npc-name">${npc.nome}</h3>
      <p class="npc-meta"><strong>${npc.raca}</strong> • ${npc.sexo || "—"}</p>
      <p class="npc-faction"><span class="label">Facção:</span> ${npc.faccao || "<em>Independente</em>"}</p>
      <span class="npc-origin">${origemTag}</span>
    `;

    card.onclick = () => openGenericModal(npc, "Ficha de NPC");
    grid.appendChild(card);
  });
}

function loadNPCCreator() {
  setActiveMenu(4);
  setView("npc-create");
  
  const content = document.getElementById("content");
  if (!content) return;

  content.innerHTML = `
    <div class="header-section">
      <h2>➕ Criar Novo Habitante</h2>
      <p>Gere NPCs únicos usando inteligência artificial ou preencha manualmente.</p>
    </div>

    <div class="npc-generator-card">
      <div class="grid-2-col">
        <div class="form-group">
          <label>🧬 Raça</label>
          <select id="racaSelect" class="input-rpg">
            <option value="">🎲 Aleatório</option>
            <option value="Humano">Humano</option>
            <option value="Elfo">Elfo</option>
            <option value="Anão">Anão</option>
            <option value="Halfling">Halfling</option>
            <option value="Gnomo">Gnomo</option>
            <option value="Tiefling">Tiefling</option>
            <option value="Goliath">Goliath</option>
            <option value="Orc">Orc</option>
            <option value="Dragonborn">Draconato</option>
          </select>
        </div>

        <div class="form-group">
          <label>🛠️ Profissão ou Classe</label>
          <select id="classeSelect" class="input-rpg">
            <option value="">🎲 Aleatório</option>
            <optgroup label="Aventureiros">
              <option value="Guerreiro">Guerreiro</option>
              <option value="Mago">Mago</option>
              <option value="Ladino">Ladino</option>
              <option value="Clérigo">Clérigo</option>
              <option value="Patrulheiro">Patrulheiro</option>
              <option value="Bárbaro">Bárbaro</option>
            </optgroup>
            <optgroup label="Civis">
              <option value="Ferreiro">Ferreiro</option>
              <option value="Taberneiro">Taberneiro</option>
              <option value="Guarda da Cidade">Guarda</option>
              <option value="Nobre">Nobre</option>
              <option value="Mercador">Mercador</option>
              <option value="Camponês">Camponês</option>
            </optgroup>
          </select>
        </div>
		
		<div class="form-group">
          <label>🛠️ Genero</label>
          <select id="genderSelect" class="input-rpg">
            <option value="">🎲 Aleatório</option>
            <optgroup label="Genero">
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="actions-row mt-4">
        <button class="btn-loja primary" onclick="handleGerarNPC()">
          ✨ Gerar com IA
        </button>
        <button class="btn-loja secondary" onclick="abrirFormularioManual()">
          ✍️ Criar Manualmente
        </button>
      </div>
    </div>

    <div id="npcPreview" class="mt-4"></div>
  `;
}

async function handleGerarNPC() {
  const raca = document.getElementById('racaSelect').value;
  const classe = document.getElementById('classeSelect').value;
  const genero = document.getElementById('genderSelect').value;
  
  const preview = document.getElementById("npcPreview");
  preview.innerHTML = `<div class="loading-container">🪄 Tecendo a alma do NPC...</div>`;
  
  await gerarNPC(raca, classe, genero);
}

async function gerarNPC(racaSelecionada = "", classeSelecionada = "", genderSelecionado = "") {
  const sexo = genderSelecionado || "Masculino";
  const raca = racaSelecionada || "Humano";
  const classe = classeSelecionada || "Camponês";

  try {
    const { data, error } = await db.functions.invoke('gerar_npc_gemini', {
      body: { raca, sexo, classe }
    });

    if (error) throw error;

    const npc = {
      id: "GEN-" + crypto.randomUUID().slice(0, 8),
      nome: data.nome, 
      raca: raca,      
      sexo: sexo,      
      status: "Vivo",
      faccao: "Independente",
      metadata: {
        aparencia: data.aparencia, 
        origem: "IA Gemini"
      }
    };

    npcGerado = npc; 
    renderNPCPreview(npc);

  } catch (err) {
    console.error("Erro:", err);
    document.getElementById("npcPreview").innerHTML = `<p style="color:red;">Erro ao gerar: ${err.message}</p>`;
  }
}

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

function abrirFormularioManual() {
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
        <button class="btn-secondary" onclick="document.getElementById('npcPreview').innerHTML=''">Cancelar</button>
      </div>
    </div>
  `;
}

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
      descricao: document.getElementById("m-desc").value, 
      origem: "Canonico" 
    }
  };

  confirmarNPC(npcManual);
}

async function confirmarNPC(npc) {
  if (!npc) return;

  const preview = document.getElementById("npcPreview");
  preview.innerHTML = "<p class='placeholder'>💾 Gravando na Grande Biblioteca...</p>";

  try {
    const descricaoFinal = npc.metadata.aparencia || npc.metadata.descricao || "Sem descrição.";
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

function prepararEdicaoNPC(id, metadataEncoded) {
  try {
    const metadataDecoded = JSON.parse(decodeURIComponent(metadataEncoded));
    salvarEdicaoNPC(id, metadataDecoded);
  } catch (e) {
    console.error("Erro ao processar metadados do NPC:", e);
    alert("Erro interno ao editar. Verifique o console.");
  }
}

async function salvarEdicaoNPC(id, metadataAntigo) {
  const titulo = document.getElementById("editKey").value.trim();
  const conteudo = document.getElementById("editValue").value.trim();

  if (!titulo || !conteudo) {
    alert("Preencha o título e o conteúdo da nota.");
    return;
  }

  const novoMetadata = {
    ...metadataAntigo,
    [titulo]: conteudo
  };

  try {
    const { data: npcAtualizado, error } = await db
      .from('npcs')
      .update({ metadata: novoMetadata })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    console.log("NPC Atualizado com sucesso:", npcAtualizado);
    openGenericModal(npcAtualizado, npcAtualizado.nome);

    if (typeof loadNPCs === "function") loadNPCs();

  } catch (err) {
    console.error("Erro ao atualizar e recarregar:", err);
    alert("Erro ao salvar: " + err.message);
  }
}

/* =========================================================
 * 7. LOCAIS E BAIRROS
 * ========================================================= */

function loadLocais() {
  setActiveMenu(5);
  setView("locais");

  const content = document.getElementById("content");
  if (!content) return;

  if (typeof DATA_LOCAIS === 'undefined' || !DATA_LOCAIS.pontos_interesse) {
    content.innerHTML = `
      <div class="header-section">
        <h2>🏰 Locais e Bairros</h2>
        <p class="placeholder">Banco de dados de locais não encontrado.</p>
      </div>
    `;
    return;
  }

  const bairrosSet = new Set();
  if (DATA_LOCAIS.pontos_interesse) DATA_LOCAIS.pontos_interesse.forEach(p => p.local_id && bairrosSet.add(p.local_id));
  if (DATA_LOCAIS.eventos) DATA_LOCAIS.eventos.forEach(e => e.local_id && bairrosSet.add(e.local_id));
  if (DATA_LOCAIS.npcs) DATA_LOCAIS.npcs.forEach(n => n.local_id && bairrosSet.add(n.local_id));

  const bairros = Array.from(bairrosSet);

  let options = `<option value="">-- Selecione uma Região --</option>`;
  bairros.forEach(b => {
    const nomeFormatado = b.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    options += `<option value="${b}">${nomeFormatado}</option>`;
  });

  content.innerHTML = `
    <div class="header-section">
      <h2>🏰 Locais e Bairros</h2>
      <p>Selecione um distrito ou bairro para visualizar os pontos de interesse, moradores e eventos ativos.</p>
    </div>
    
    <div class="filter-bar" style="margin-bottom: 20px; display: flex; gap: 10px;">
      <select id="bairroSelect" onchange="renderBairroView(this.value)" style="flex: 1; max-width: 400px; padding: 10px; background: #222; border: 1px solid #E69A28; color: #fff; border-radius: 4px; font-size: 1.1em;">
        ${options}
      </select>
    </div>

    <div id="bairroContentArea">
      <div class="card-grid" id="locaisGrid">
        <p class="placeholder" style="grid-column: 1 / -1;">Selecione uma região acima para investigar.</p>
      </div>
    </div>
  `;
}

function renderBairroView(bairroId) {
  const area = document.getElementById("bairroContentArea");
  if (!area) return;

  if (!bairroId) {
    area.innerHTML = '<div class="card-grid"><p class="placeholder" style="grid-column: 1 / -1;">Selecione uma região acima para investigar.</p></div>';
    return;
  }

  area.innerHTML = ""; 

  const pois = DATA_LOCAIS.pontos_interesse ? DATA_LOCAIS.pontos_interesse.filter(p => p.local_id === bairroId) : [];
  const eventos = DATA_LOCAIS.eventos ? DATA_LOCAIS.eventos.filter(e => e.local_id === bairroId) : [];
  const npcs = DATA_LOCAIS.npcs ? DATA_LOCAIS.npcs.filter(n => n.local_id === bairroId) : [];

  if (pois.length > 0) {
    const tituloPoi = document.createElement("h3");
    tituloPoi.style.cssText = "color: #E69A28; margin-top: 20px; margin-bottom: 15px; border-bottom: 1px solid #444; padding-bottom: 5px;";
    tituloPoi.innerText = "📍 Pontos de Interesse";
    area.appendChild(tituloPoi);

    const gridPoi = document.createElement("div");
    gridPoi.className = "card-grid";
    gridPoi.style.marginBottom = "30px";

    pois.forEach(p => {
      const card = document.createElement("div");
      card.className = "card local-card";
      card.style.cursor = "pointer";
      
      let tagsHtml = p.tags ? `<div style="display: flex; gap: 5px; flex-wrap: wrap; margin-top: 10px;">${p.tags.map(t => `<span style="background: #333; padding: 2px 6px; border-radius: 4px; font-size: 0.8em; color: #E69A28;">#${t}</span>`).join('')}</div>` : '';

      card.innerHTML = `
        <div class="card-header">
          <span class="badge" style="background: #444; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.8em;">${p.tipo.toUpperCase()}</span>
          <h3 style="margin: 5px 0;">${p.nome}</h3>
        </div>
        <p style="font-size: 0.9em; color: #aaa;">${p.descricao}</p>
        ${tagsHtml}
      `;
      card.onclick = () => openGenericModal(p, "Ponto de Interesse");
      gridPoi.appendChild(card);
    });
    area.appendChild(gridPoi);
  }

  if (eventos.length > 0) {
    const tituloEvt = document.createElement("h3");
    tituloEvt.style.cssText = "color: #E69A28; margin-top: 20px; margin-bottom: 15px; border-bottom: 1px solid #444; padding-bottom: 5px;";
    tituloEvt.innerText = "🎭 Eventos e Rumores";
    area.appendChild(tituloEvt);

    const gridEvt = document.createElement("div");
    gridEvt.className = "card-grid";
    gridEvt.style.marginBottom = "30px";

    eventos.forEach(e => {
      const card = document.createElement("div");
      card.className = "card encounter-card";
      card.style.cursor = "pointer";
      card.style.borderLeft = "3px solid #9c27b0";

      card.innerHTML = `
        <div class="card-header">
          <h3 style="margin: 0;">${e.nome}</h3>
          <span style="font-size: 0.8em; color: #aaa; display: block; margin-top: 2px;">Frequência: ${e.frequencia}</span>
        </div>
        <p style="font-size: 0.9em; color: #aaa; margin-top: 10px;">${e.descricao}</p>
      `;
      card.onclick = () => openGenericModal(e, "Evento Local");
      gridEvt.appendChild(card);
    });
    area.appendChild(gridEvt);
  }

  if (npcs.length > 0) {
    const tituloNpc = document.createElement("h3");
    tituloNpc.style.cssText = "color: #E69A28; margin-top: 20px; margin-bottom: 15px; border-bottom: 1px solid #444; padding-bottom: 5px;";
    tituloNpc.innerText = "👤 Habitantes Locais";
    area.appendChild(tituloNpc);

    const gridNpc = document.createElement("div");
    gridNpc.className = "card-grid";
    gridNpc.style.marginBottom = "30px";

    npcs.forEach(n => {
      const card = document.createElement("div");
      card.className = "card npc-card";
      card.style.cursor = "pointer";
      card.style.borderLeft = "3px solid #2196f3";

      card.innerHTML = `
        <h3 class="npc-name" style="margin: 0; color: #E69A28;">${n.nome}</h3>
        <p class="npc-meta" style="margin: 5px 0;"><strong>${n.raca}</strong> • ${n.funcao}</p>
        <p style="font-size: 0.85em; color: #aaa;">${n.descricao}</p>
      `;
      card.onclick = () => openGenericModal(n, "Ficha do Habitante");
      gridNpc.appendChild(card);
    });
    area.appendChild(gridNpc);
  }

  if (area.innerHTML === '') {
    area.innerHTML = '<p class="placeholder">Nenhuma atividade registrada para esta região.</p>';
  }
}

/* =========================================================
 * 8. PONTOS PRINCIPAIS
 * ========================================================= */

function loadPontosPrincipais() {
  setActiveMenu(2);
  setView("pontos-principais");

  document.getElementById("content").innerHTML = `
    <h2>⭐ Pontos Principais</h2>
    <div class="card-grid" id="ppGrid"></div>
  `;

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

    card.innerHTML = `
      <h3>${p["nome"] || "Local sem Nome"}</h3>
      <h5 class="muted">Quem controla <p>${p["quem controla"] || "Sem dono"} · ${p["regiao"] || "Desconhecida"}</p></h5>
    `;

    card.onclick = () => openPontoPrincipalModal(p);
    
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
      <h2>${local["Nome"] || local["nome"]}</h2>
      <p class="local-meta">
        <span><strong>Tipo:</strong> ${local["Tipo"] || local["tipo"]}</span>
      </p>
    </header>
    <div class="local-modal-scroll">
      <div class="local-modal-grid">
        <section class="local-col">
          <h3>Aparência</h3>
          <p>${local["Aparência"] || local["aparencia"] || "—"}</p>
        </section>
        <section class="local-col">
          <h3>Descrição</h3>
          <p>${local["Descrição"] || local["descricao"] || "—"}</p>
        </section>
        <section class="local-col">
          <h3>NPCs Envolvidos</h3>
          <p>${local["NPCs Envolvidos"] || local["npcs_envolvidos"] || "—"}</p>
        </section>
        <section class="local-col">
          <h3>Conflitos</h3>
          <p>${local["Conflitos"] || local["conflitos"] || "—"}</p>
        </section>
        <section class="local-col">
          <h3>Itens / Relíquias</h3>
          <p>${local["Itens / Relíquias"] || local["itens_reliquias"] || "—"}</p>
        </section>
        <section class="local-col">
          <h3>Consequências</h3>
          <p>${local["Consequências"] || local["consequencias"] || "—"}</p>
        </section>
      </div>
    </div>
  </div>
`;

  modal.classList.remove("hidden");
}

/* =========================================================
 * 9. FACÇÕES
 * ========================================================= */

function loadFaccoes() {
  setActiveMenu(6);
  setView("faccoes");

  document.getElementById("content").innerHTML = `
    <h2>⚔️ Facções</h2>
    <p class="muted">Facções conhecidas e ocultas.</p>
    <div class="card-grid" id="faccaoGrid"></div>
  `;

  if (typeof DATA_FACCOES !== 'undefined') {
    renderFaccoes(DATA_FACCOES);
  }
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

    card.innerHTML = `
      <h3>${item.nome || "Facção sem nome"}</h3>
      <p><strong>Liderança:</strong> ${item.comandante ? item.comandante.nome : "Desconhecida"}</p>
    `;

    card.onclick = () => openFaccaoModal(item);
    
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

  const nomeFaccao = faccao.faccao || faccao["Facção"] || faccao.nome || "Facção";
  let colunasHtml = "";

  Object.entries(faccao).forEach(([chave, valor]) => {
    if (chave.toLowerCase() === "faccao" || chave.toLowerCase() === "nome") return;

    const label = chave.charAt(0).toUpperCase() + chave.slice(1);

    colunasHtml += `
      <section class="local-col">
        <h3>${label}</h3>
        <p>${typeof valor === 'object' ? JSON.stringify(valor) : (valor || "—")}</p>
      </section>
    `;
  });

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

/* =========================================================
 * 10. LOJA E ITENS
 * ========================================================= */

function loadLoja() {
  setActiveMenu(8);
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

function setupPrecosView() {
  document.getElementById("lojaFiltros").classList.remove("hidden");
  document.getElementById("lojaGrid").innerHTML = "<p class='placeholder'>Escolha uma categoria para ver os preços.</p>";
}

function filtrarLoja(categoria) {
  const grid = document.getElementById("lojaGrid");
  grid.innerHTML = "";

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

  if (typeof DATA_LOJA === 'undefined') return;
  const dadosTipo = DATA_LOJA[tipo];

  if (!dadosTipo || !dadosTipo.categorias) {
    subContainer.innerHTML = "<small>Em breve: Novos estoques!</small>";
    return;
  }

  dadosTipo.categorias.forEach(sub => {
    const btn = document.createElement("button");
    btn.className = "btn-sub-filter";
    btn.innerText = sub.categoria;
    
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
    
    let infoSecundaria = "";

    switch (tipo) {
      case 'Weapon':
        infoSecundaria = `<p class="item-meta"><strong>Dano:</strong> ${item.dano}</p>`;
        break;
      case 'Armor':
        infoSecundaria = `<p class="item-meta"><strong>CA:</strong> ${item.classeArmadura}</p>`;
        break;
      case 'Gear':
      case 'Tool':
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

    card.onclick = () => {
      openGenericModal(item, item.nome);
      ativarEdicaoItem(item); // Ativa controles de forja no modal
    };
    grid.appendChild(card);
  });
}

function ativarEdicaoItem(item) {
  const container = document.getElementById("modalFields") || document.getElementById("npcModalBody");
  if(!document.getElementById("modalFields")) {
    const forgeDiv = document.createElement("div");
    forgeDiv.id = "modalFields";
    forgeDiv.style.marginTop = "20px";
    forgeDiv.style.borderTop = "1px solid #444";
    forgeDiv.style.paddingTop = "15px";
    container.appendChild(forgeDiv);
  }
  const forgeContainer = document.getElementById("modalFields");
  const btnSalvar = document.getElementById("btnSalvarForja");
  
  if (btnSalvar) btnSalvar.style.display = "block";

  const isArma = !!item.dano;
  const isArmadura = !!item.classeArmadura;

  let htmlForja = `
    <h3 style="color: #E69A28;">⚒️ Forja Mágica</h3>
    <div class="forja-field">
      <label>Nome do Item Especial</label>
      <input type="text" id="editNome" value="${item.nome}" style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;">
    </div>
    <div class="forja-field" style="margin-top: 10px;">
      <label>Bônus Mágico (+1 a +3)</label>
      <select id="editBonus" style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;">
        <option value="0">Normal</option>
        <option value="1">Incomum +1</option>
        <option value="2">Raro +2</option>
        <option value="3">Lendário +3</option>
      </select>
    </div>
    <div class="forja-field" style="margin-top: 10px;">
      <label>Encantamento!</label>
      <select id="editSpell" style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;">
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

  if (isArma) {
    htmlForja += `
      <div class="forja-field" style="margin-top: 10px;">
        <label>Dano Adicional (Elemental/Extra)</label>
        <select id="editDanoExtra" style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;">
          <option value="">Nenhum</option>
          <option value="+1d4">+1d4 (Incomum)</option>
          <option value="+1d6">+1d6 (Raro)</option>
          <option value="+1d8">+1d8 (Muito Raro)</option>
          <option value="+1d10">+1d10 (Lendário)</option>
        </select>
      </div>
      <div class="forja-field" style="margin-top: 10px;">
        <label>📜 Informações pertinentes</label>
        <textarea id="solicita" class="textarea-forja" placeholder="Ex: Dano de fogo, a magia é _, efeito visual..." style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;"></textarea>
      </div>
    `;
  }

  if (isArmadura) {
    htmlForja += `
      <div class="forja-field" style="margin-top: 10px;">
        <label>Propriedade de Armadura</label>
        <select id="editEfeitoDefesa" style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;">
          <option value="">Nenhuma</option>
          <option value="Resistência">Resistência a Dano</option>
          <option value="Adamante">Adamante (Anula Críticos)</option>
          <option value="Furtiva">Furtiva (Remove Desvantagem)</option>
          <option value="Vigilante">Vigilante (+Bônus Iniciativa)</option>
        </select>
      </div>
      <div class="forja-field" style="margin-top: 10px;">
        <label>📜 Informações pertinentes</label>
        <textarea id="solicita" class="textarea-forja" placeholder="Ex: Dano de fogo, a magia é _, efeito visual..." style="width: 100%; padding: 8px; background: #111; color: #fff; border: 1px solid #444; border-radius: 4px;"></textarea>
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

  forgeContainer.innerHTML = htmlForja;
}

function salvarItemCustomizado(custoBase) {
  const nome = document.getElementById("editNome").value;
  const bonus = parseInt(document.getElementById("editBonus").value);
  const spellLevel = document.getElementById("editSpell").value;
  const solicita = document.getElementById("solicita") ? document.getElementById("solicita").value : "";
  
  const PRECO_BONUS = { 0: 0, 1: 400, 2: 4000, 3: 40000 };
  const PRECO_SPELL = {
    "nenhuma": 0, "cantrip": 30, "nível 1": 50, "nível 2": 200, 
    "nível 3": 300, "nível 4": 2000, "nível 5": 3000, "nível 6": 20000
  };
  
  const danoExtra = document.getElementById("editDanoExtra")?.value || "";
  const PRECO_DANO = { "": 0, "+1d4": 300, "+1d6": 1000, "+1d8": 1500, "+1d10": 10000 };
  
  const efeitoDefesa = document.getElementById("editEfeitoDefesa")?.value || "";
  const PRECO_DEFESA = { "": 0, "Resistência": 1500, "Adamante": 1000, "Furtiva": 800, "Vigilante": 800 };

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

  const container = document.getElementById("modalFields");
  
  const linhasRecibo = [
    { label: "Item Base", valor: custoBase },
    { label: `Bônus Mágico (+${bonus})`, valor: PRECO_BONUS[bonus] > 0 ? `${PRECO_BONUS[bonus].toLocaleString('pt-BR')} GP` : null },
    { label: `Inscrição: ${spellLevel}`, valor: PRECO_SPELL[spellLevel] > 0 ? `${PRECO_SPELL[spellLevel].toLocaleString('pt-BR')} GP` : null },
    { label: `Adicional: ${danoExtra || efeitoDefesa}`, valor: (PRECO_DANO[danoExtra] || PRECO_DEFESA[efeitoDefesa]) > 0 ? `${(PRECO_DANO[danoExtra] || PRECO_DEFESA[efeitoDefesa]).toLocaleString('pt-BR')} GP` : null }
  ];

  const htmlLinhas = linhasRecibo
    .filter(linha => linha.valor !== null)
    .map(linha => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px; border-bottom: 1px dashed #444;">
        <span>${linha.label}</span>
        <span>${linha.valor}</span>
      </div>
    `).join('');

  container.innerHTML = `
    <div class="recibo-antigo" style="grid-column: span 2; background: #1a1a1a; padding: 20px; border: 1px solid #E69A28; border-radius: 8px;">
      <h2 style="color: #E69A28; text-align: center; margin-top: 0;">📜 RECIBO DE FORJA</h2>
      <p style="text-align: center; color: #aaa;">Mercador - Itens Especiais</p>
      
      <div style="margin-bottom: 20px;">
        <strong style="font-size: 1.1em; color: #fff;">PRODUTO: ${nome} ${bonus > 0 ? '+' + bonus : ''}</strong>
      </div>

      <div class="detalhes-precos" style="margin-bottom: 20px; color: #ddd;">
        ${htmlLinhas}
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 1.4em; font-weight: bold; border-top: 2px solid #444; padding-top: 10px; color: #E69A28;">
        <span>TOTAL:</span>
        <span>💰 ${precoTotal.toLocaleString('pt-BR')} GP</span>
      </div>

      ${solicita ? `
        <div style="margin-top: 15px; color: #aaa;">
          <small>NOTAS DO CLIENTE:</small>
          <span style="font-style: italic; font-size: 0.9em; display: block;">"${solicita}"</span>
        </div>
      ` : ""}
      
      <div style="margin-top: 30px; text-align: center;">
        <p style="font-size: 0.8em; color: #888; margin-bottom: 10px;">Deseja confirmar o pedido?</p>
        <button id="btnConfirmarEnvio" style="padding: 10px 20px; background: #00ff00; color: #000; border: none; font-weight: bold; cursor: pointer; border-radius: 4px;" onclick="enviarItem(itemFinal)">
          ✅ Confirmar e Enviar ao Mestre
        </button>
      </div>
      <p style="text-align: center; font-size: 0.7em; margin-top: 30px; letter-spacing: 2px; color: #666;">*** QUE OS DEUSES TE PROTEJAM ***</p>
    </div>
  `;
}

function enviarItem(item) {
  const container = document.getElementById("modalFields");
  const btn = document.getElementById("btnConfirmarEnvio");

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = "⌛ Processando Pedido...";
    btn.style.opacity = "0.7";
  }

  if(typeof google !== 'undefined' && google.script) {
    google.script.run
      .withSuccessHandler(function(res) {
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
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = "❌ Erro ao enviar. Tentar novamente?";
          btn.style.background = "#ff4444";
        }
        alert("Houve um erro mágico ao contatar a forja. Verifique o console.");
        console.error("Erro ao salvar:", err);
      })
      .salvarItemNoGoogle(item);
  } else {
    // Fallback if google.script is not available
    setTimeout(() => {
      container.innerHTML = `
          <div class="recibo-antigo" style="grid-column: span 2; text-align: center; padding: 40px 20px; animation: fadeIn 0.5s;">
            <div style="font-size: 50px; margin-bottom: 20px;">⚒️</div>
            <h2 style="color: #E69A28; margin-bottom: 10px;">Pedido Simulado (Offline)</h2>
            <p style="color: #E69A28; font-style: italic;">"O script do Google não está disponível. Simulação concluída."</p>
            <hr style="border: 0; border-top: 1px solid #444; margin: 20px 0;">
            <button onclick="closeNPCModal()" style="padding: 10px 20px; background: transparent; border: 1px solid #E69A28; color: #E69A28; cursor: pointer; border-radius: 4px;">
              Fechar Forja
            </button>
          </div>
        `;
    }, 1000);
  }
}

function parseMoedaParaGP(custoString) {
  if (!custoString) return 0;
  const valorLimpo = custoString.replace(/\./g, '').replace(',', '.');
  const numero = parseFloat(valorLimpo);
  const unidade = custoString.toUpperCase();

  if (unidade.includes("SP")) return numero * 0.1;
  if (unidade.includes("CP")) return numero * 0.01;
  return numero;
}

/* =========================================================
 * 11. ENCONTROS TÁTICOS
 * ========================================================= */

async function loadEncontros() {
  if (typeof setActiveMenu === 'function') setActiveMenu(7); 
  if (typeof setView === 'function') setView("encontros");

  const content = document.getElementById("content");
  if (!content) return;

  // Renderiza a interface vazia e o spinner de loading primeiro
  content.innerHTML = `
    <div class="header-section">
      <h2>⚔️ Encontros Táticos</h2>
      <p>Gestão de combates, táticas inimigas e objetivos de cena.</p>
      <button class="btn-loja" onclick="openCustomEncounterModal()" style="margin-top: 10px; background: #E69A28; color: #000; font-weight: bold;">
        ➕ Criar Encontro Rápido
      </button>
    </div>
    <div class="card-grid" id="encontrosGrid">
      <div class="loading-spinner" style="text-align: center; grid-column: 1 / -1; padding: 40px; color: #E69A28;">
        Preparando o campo de batalha e rastreando inimigos... ⚔️
      </div>
    </div>
  `;

  // O PULO DO GATO: Se os monstros não estiverem na memória, puxa do Supabase agora!
  if (typeof DATA_MONSTROS === 'undefined' || DATA_MONSTROS.length === 0) {
    await fetchMonstrosDoSupabase();
  }

  // Agora que temos certeza que os monstros existem, renderizamos os encontros
  if (typeof DATA_ENCONTROS !== 'undefined' && DATA_ENCONTROS.length > 0) {
    renderEncontros(DATA_ENCONTROS);
  } else {
    const grid = document.getElementById("encontrosGrid");
    if (grid) grid.innerHTML = '<p class="text-gray-500 text-center py-4" style="grid-column: 1 / -1;">Nenhum encontro cadastrado (DATA_ENCONTROS vazio).</p>';
  }
}

function renderEncontros(dados) {
  const grid = document.getElementById("encontrosGrid");
  if (!grid) return;

  grid.innerHTML = ""; 

  if (!dados || dados.length === 0) {
    grid.innerHTML = '<p class="text-gray-500 text-center py-4">Nenhum encontro cadastrado.</p>';
    return;
  }

  dados.forEach((encontro) => {
    const card = document.createElement("div");
    card.className = "card encounter-card"; 

    card.innerHTML = `
      <div class="card-header">
        <h3>${encontro.nome || "Sem Nome"}</h3>
      </div>
      <p class="line-clamp-1">${encontro.descricao || "Sem descrição definida."}</p>
    `;

    card.onclick = () => openEncounterModal(encontro);
    grid.appendChild(card);
  });
}

function openCustomEncounterModal() {
  if (typeof DATA_MONSTROS === 'undefined' || DATA_MONSTROS.length === 0) {
    alert("O bestiário ainda não foi carregado ou está vazio.");
    return;
  }

  const todosAmbientes = new Set();
  DATA_MONSTROS.forEach(m => {
    if (m.ambientes && Array.isArray(m.ambientes)) {
      m.ambientes.forEach(amb => todosAmbientes.add(amb));
    }
  });

  const overlay = document.createElement('div');
  overlay.className = 'quick-monster-overlay';
  overlay.id = 'customEncounterModal';
  overlay.onclick = (e) => {
    if (e.target === overlay) document.body.removeChild(overlay);
  };

  overlay.innerHTML = `
    <div class="quick-monster-content" style="max-width: 600px; max-height: 90vh; display: flex; flex-direction: column; background: #1a1a1a; padding: 20px; border: 1px solid #cda434; border-radius: 8px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; box-shadow: 0 0 30px rgba(0,0,0,0.7);">
      <header class="quick-monster-header" style="flex-shrink: 0; display: flex; justify-content: space-between; border-bottom: 1px solid #444; padding-bottom: 15px; margin-bottom: 15px;">
        <div>
          <h3 style="color: #cda434; margin: 0;">➕ Encontro Rápido</h3>
          <span style="font-size: 0.85em; color: #aaa;">Selecione os inimigos para o combate</span>
        </div>
        <button onclick="document.getElementById('customEncounterModal').remove()" style="background: none; border: none; color: #fff; font-size: 1.5em; cursor: pointer;">✖</button>
      </header>
      <div class="filter-bar" style="display: flex; gap: 10px; margin-bottom: 15px; flex-shrink: 0;">
        <input type="text" id="filterName" placeholder="Buscar por nome..." oninput="filterQuickMonsters()" style="flex: 2; padding: 8px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
        <select id="filterEnvironment" onchange="filterQuickMonsters()" style="flex: 1; padding: 8px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
          <option value="">🌍 Todos Ambientes</option>
          ${Array.from(todosAmbientes).sort().map(amb => `<option value="${amb}">${amb.charAt(0).toUpperCase() + amb.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div id="quickMonsterList" class="quick-monster-body" style="overflow-y: auto; flex-grow: 1; padding-right: 10px;"></div>
      <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #444; flex-shrink: 0;">
        <button class="btn-loja" onclick="startCustomEncounter()" style="width: 100%; padding: 12px; font-size: 1.1em; background: #cda434; color: #000; font-weight: bold; cursor: pointer;">
          ⚔️ Iniciar Combate
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  filterQuickMonsters(); 
}

function filterQuickMonsters() {
  const container = document.getElementById("quickMonsterList");
  const nameQuery = document.getElementById("filterName").value.toLowerCase();
  const envQuery = document.getElementById("filterEnvironment").value;

  if (!container) return;

  const filtrados = DATA_MONSTROS.filter(m => {
    const matchName = m.nome.toLowerCase().includes(nameQuery);
    const matchEnv = !envQuery || (m.ambientes && m.ambientes.includes(envQuery));
    return matchName && matchEnv;
  });

  container.innerHTML = filtrados.length > 0 ? filtrados.map(m => `
    <div class="monster-selection-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #333; transition: background 0.2s;">
      <div>
        <strong style="color: #cda434; font-size: 1.05em;">${m.nome}</strong> 
        <div style="color: #aaa; font-size: 0.85em;">
          ${m.tipo} | CR ${m.cr || '?'}
          <br>
          <span style="color: #666; font-style: italic;">${m.ambientes ? m.ambientes.join(', ') : 'Sem ambiente'}</span>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <input type="number" id="custom_qty_${m.id}" min="0" value="${window.tempSelectedQuantities?.[m.id] || 0}" 
          onchange="updateTempQuantity('${m.id}', this.value)"
          style="width: 60px; padding: 8px; background: #222; color: #fff; border: 1px solid #E69A28; text-align: center; border-radius: 4px;">
      </div>
    </div>
  `).join('') : `<p style="text-align: center; color: #666; padding: 20px;">Nenhum monstro encontrado.</p>`;
}

function updateTempQuantity(id, val) {
  if (!window.tempSelectedQuantities) window.tempSelectedQuantities = {};
  window.tempSelectedQuantities[id] = parseInt(val) || 0;
}

function startCustomEncounter() {
  const inimigosSelecionados = [];
  const quantities = window.tempSelectedQuantities || {};

  Object.entries(quantities).forEach(([id, qty]) => {
    if (qty > 0) {
      inimigosSelecionados.push({ id: id, quantidade: qty });
    }
  });

  if (inimigosSelecionados.length === 0) {
    alert("Selecione pelo menos um monstro para continuar.");
    return;
  }

  const encontroAdHoc = {
    id: `custom_enc_${Date.now()}`,
    nome: "Encontro Imprevisto",
    descricao: "Um combate gerado rapidamente.",
    dificuldade: "Personalizada",
    inimigos: inimigosSelecionados,
    taticas_inimigos: ["O mestre decide as táticas."],
    terreno: { descricao: "Local atual." }
  };

  window.tempSelectedQuantities = {};
  document.getElementById('customEncounterModal').remove();
  openEncounterModal(encontroAdHoc);
}

function openEncounterModal(encontro) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  const modalContent = modal.querySelector(".modal-content");
  
  if (!modal || !body) return;

  if (modalContent && typeof IMAGES_CACHE !== 'undefined') {
    modalContent.style.backgroundImage = "url('" + IMAGES_CACHE.previewHeader + "')";
  }

  if (currentCombat.encontroId !== encontro.id) {
    currentCombat.encontroId = encontro.id;
    currentCombat.monstros = [];
    
    if (encontro.inimigos && Array.isArray(encontro.inimigos)) {
      encontro.inimigos.forEach(mGroup => {
        const template = typeof DATA_MONSTROS !== 'undefined' ? DATA_MONSTROS.find(m => m.id === mGroup.id) : null;
        if (template) {
          const qtd = parseInt(mGroup.quantidade) || 1;
          for (let i = 0; i < qtd; i++) {
            currentCombat.monstros.push({
              instanceId: `mob_${mGroup.id}_${Date.now()}_${i}`,
              mobId: mGroup.id,
              nome: qtd > 1 ? `${template.nome} #${i + 1}` : template.nome,
              hpMax: parseInt(template.pv) || 0,
              iniciativa: 0,
              ca: template.ca || "?",
              modificadores: [], 
              ativo: true
            });
          }
        }
      });
    }
  }

  renderEncounterModalContent(encontro);
  modal.classList.remove("hidden");
}

function renderEncounterModalContent(encontro) {
  const body = document.getElementById("npcModalBody");
  if (!body) return;
  
  const mobIds = [...new Set((encontro.inimigos || []).map(m => m.id))];
  const monstrosTemplates = typeof DATA_MONSTROS !== 'undefined' 
    ? DATA_MONSTROS.filter(m => mobIds.includes(m.id)) 
    : [];

  const calculateHP = (m) => {
    const totalMod = m.modificadores.reduce((acc, val) => acc + val, 0);
    const atual = m.hpMax + totalMod;
    return Math.min(m.hpMax, Math.max(0, atual));
  };

  const monstrosAtivos = currentCombat.monstros.filter(m => m.ativo);

  body.innerHTML = `
    <div class="local-modal-container">
      <header class="local-modal-header">
        <h2>${encontro.nome || "Registro de Combate"}</h2>
        <p style="color: rgba(255,255,255,0.7); font-size: 0.9em; margin-top: 5px;">
          ${getDificuldadeLabel(encontro.dificuldade || 'Desconhecida')} | Nível ${encontro.nivel_recomendado || '?'}
        </p>
      </header>
      
      <div style="display: flex; gap: 10px; padding: 10px 20px; background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(255,255,255,0.1);">
        <button class="tab-btn active" id="btn-tab-tracker" onclick="switchEncounterTab('tracker')" style="padding: 8px 16px; border-radius: 4px; border: none; background: #e69a28; color: #000; font-weight: bold; cursor: pointer;">⚔️ Tracker</button>
        <button class="tab-btn" id="btn-tab-info" onclick="switchEncounterTab('info-monstros')" style="padding: 8px 16px; border-radius: 4px; border: 1px solid #444; background: #222; color: #fff; cursor: pointer;">📖 Bestiário</button>
        <button class="tab-btn" id="btn-tab-taticas" onclick="switchEncounterTab('taticas')" style="padding: 8px 16px; border-radius: 4px; border: 1px solid #444; background: #222; color: #fff; cursor: pointer;">🗺️ Táticas</button>
      </div>

      <div class="local-modal-scroll" style="padding: 20px;">
        
        <div id="tab-tracker" class="tab-content active">
          <table style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="border-bottom: 2px solid #444; color: #e69a28;">
                <th style="padding: 10px;">Inic.</th>
                <th style="padding: 10px;">Inimigo</th>
                <th style="padding: 10px;">HP / Vida</th>
                <th style="padding: 10px;">Controles</th>
              </tr>
            </thead>
            <tbody>
              ${monstrosAtivos.map(m => {
                const hpAtual = calculateHP(m);
                const percent = m.hpMax > 0 ? (hpAtual / m.hpMax) * 100 : 0;
                const isDead = hpAtual <= 0;
                
                return `
                  <tr style="border-bottom: 1px solid #333; background: ${isDead ? 'rgba(255,0,0,0.1)' : 'transparent'}">
                    <td style="padding: 10px;">
                      <input type="number" value="${m.iniciativa}" onchange="updateInic('${m.instanceId}', this.value)" style="width: 50px; background: #111; color: #fff; border: 1px solid #444; text-align: center; border-radius: 4px; padding: 4px;">
                    </td>
                    <td style="padding: 10px;">
                      <div style="cursor: pointer; text-decoration: underline; color: ${isDead ? '#888' : '#aaa'};" onclick="openMonsterDetails(event, '${m.mobId}')" title="Ver Ficha Rápida">
                        <strong>${m.nome}</strong> ℹ️
                      </div>
                      <small style="color: #aaa;">CA: ${m.ca} | HP Máx: ${m.hpMax}</small>
                    </td>
                    <td style="padding: 10px; min-width: 120px;">
                      <div style="display: flex; justify-content: space-between; font-size: 0.85em; margin-bottom: 4px;">
                        <span>${hpAtual} / ${m.hpMax}</span>
                      </div>
                      <div style="width: 100%; height: 8px; background: #222; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${percent}%; height: 100%; background: ${percent < 25 ? '#ef4444' : '#22c55e'}; transition: width 0.3s;"></div>
                      </div>
                    </td>
                    <td style="padding: 10px;">
                      <div style="display: flex; gap: 5px;">
                        <input type="number" id="input-hp-${m.instanceId}" placeholder="0" style="width: 50px; background: #111; color: #fff; border: 1px solid #444; text-align: center; border-radius: 4px;">
                        <button onclick="applyHPModifier('${m.instanceId}', 'dano')" style="background: #441111; color: #fff; border: none; padding: 4px 8px; cursor: pointer; border-radius: 4px;" title="Causar Dano">💥</button>
                        <button onclick="applyHPModifier('${m.instanceId}', 'cura')" style="background: #114411; color: #fff; border: none; padding: 4px 8px; cursor: pointer; border-radius: 4px;" title="Curar Vida">💚</button>
                        <button onclick="removeMobFromCombat('${m.instanceId}')" style="background: #333; color: #fff; border: none; padding: 4px 8px; cursor: pointer; border-radius: 4px;" title="Remover Combate">✖</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
          <div style="margin-top: 15px;">
            <button onclick="sortCombat()" style="background: #222; color: #e69a28; border: 1px solid #e69a28; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
              Reordenar Iniciativa ⏱️
            </button>
          </div>
        </div>

        <div id="tab-info-monstros" class="tab-content" style="display:none;">
          ${monstrosTemplates.map(m => `
            <div style="margin-bottom: 20px; padding: 15px; background: rgba(0,0,0,0.2); border-left: 3px solid #e69a28; border-radius: 4px;">
              <h3 style="color: #e69a28; margin-top: 0;">${m.nome}</h3>
              <p><strong>CA:</strong> ${m.ca} (${m.tipo_ca || '-'}) | <strong>PV:</strong> ${m.pv} | <strong>Velocidade:</strong> ${m.deslocamento || '9m'}</p>
              <p style="color: #aaa; font-style: italic; font-size: 0.9em;">${m.tipo} | ${m.alinhamento}</p>
              
              <div style="margin-top: 10px;">
                <strong style="color: #ddd;">Ações Principais:</strong>
                <ul style="padding-left: 20px; margin-top: 5px; font-size: 0.95em;">
                  ${m.acoes ? m.acoes.map(a => `<li style="margin-bottom: 4px;"><strong>${a.nome}:</strong> ${a.descricao || `${a.ataque} / ${a.dano}`}</li>`).join('') : "<li>Sem ações detalhadas.</li>"}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <div id="tab-taticas" class="tab-content" style="display:none;">
          <h3 style="color: #e69a28; margin-top: 0;">📋 Plano de Ação (Mestre)</h3>
          <ul style="padding-left: 20px;">
            ${(encontro.taticas_inimigos || []).map(t => `<li style="margin-bottom: 8px;">${t}</li>`).join('') || "<li>Nenhuma tática específica definida para este encontro. Improviso é a chave!</li>"}
          </ul>
          <h3 style="color: #e69a28; margin-top: 20px;">🏔️ Notas de Terreno</h3>
          <p>${encontro.terreno?.descricao || "Terreno padrão. Sem efeitos ou perigos climáticos registrados."}</p>
        </div>

      </div>

      <div id="modalFooter" class="modal-footer" style="padding: 20px; border-top: 1px solid #444; text-align: right;">
        <button class="btn-forja" onclick="document.getElementById('npcModal').classList.add('hidden')" style="padding: 8px 16px; background: #333; color: #fff; border: 1px solid #444; border-radius: 4px; cursor: pointer; font-weight: bold;">
          Fechar Registro
        </button>
      </div>
    </div>
  `;
}

function applyHPModifier(instanceId, tipo) {
  const monstro = currentCombat.monstros.find(m => m.instanceId === instanceId);
  const input = document.getElementById(`input-hp-${instanceId}`);
  if (!monstro || !input) return;

  const val = parseInt(input.value) || 0;
  if (val <= 0) return;

  const modifier = tipo === 'dano' ? -val : val;
  monstro.modificadores.push(modifier);
  
  input.value = "";
  refreshEncounterUI();
}

function updateInic(instanceId, val) {
  const monstro = currentCombat.monstros.find(m => m.instanceId === instanceId);
  if (monstro) monstro.iniciativa = parseInt(val) || 0;
}

function removeMobFromCombat(instanceId) {
  const monstro = currentCombat.monstros.find(m => m.instanceId === instanceId);
  if (monstro) {
    monstro.ativo = false;
    refreshEncounterUI();
  }
}

function sortCombat() {
  currentCombat.monstros.sort((a, b) => b.iniciativa - a.iniciativa);
  refreshEncounterUI();
}

function refreshEncounterUI() {
  const encontroOriginal = typeof DATA_ENCONTROS !== 'undefined' 
    ? DATA_ENCONTROS.find(e => e.id === currentCombat.encontroId) 
    : null;

  const baseData = encontroOriginal || {
    id: currentCombat.encontroId,
    nome: "Combate Ativo",
    inimigos: currentCombat.monstros.map(m => ({ id: m.mobId, quantidade: 1 }))
  };
  
  renderEncounterModalContent(baseData);
}

function switchEncounterTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
  
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.style.background = '#222';
    b.style.color = '#fff';
    b.style.border = '1px solid #444';
  });
  
  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) targetTab.style.display = 'block';

  const tabBtnMap = { 'tracker': 'btn-tab-tracker', 'info-monstros': 'btn-tab-info', 'taticas': 'btn-tab-taticas' };
  const activeBtn = document.getElementById(tabBtnMap[tabName]);
  if (activeBtn) {
    activeBtn.style.background = '#e69a28';
    activeBtn.style.color = '#000';
    activeBtn.style.border = 'none';
  }
}

function getDificuldadeLabel(slug) {
  const mapa = { 'facil': 'Fácil', 'medio': 'Médio', 'dificil': 'Difícil', 'dificil_alto': 'Difícil (Alto)', 'mortal': 'Mortal' };
  return mapa[slug] || slug;
}

/* =========================================================
 * 12. BESTIÁRIO
 * ========================================================= */

// Variável global para armazenar os monstros na memória após puxar do banco
let DATA_MONSTROS = [];

// Função auxiliar para traduzir as ações do inglês para o seu formato
function mapearAcoes(listaOriginal) {
  if (!listaOriginal || !Array.isArray(listaOriginal)) return null;
  return listaOriginal.map(item => ({
    nome: item.name,
    descricao: item.desc
  }));
}

async function fetchMonstrosDoSupabase() {
  try {
    // Busca todos os monstros ordenados por nome
    const { data: dbMonstros, error } = await db
      .from('monsters')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;

    // Traduz o JSONB (Inglês) para o seu objeto esperado (Português)
    DATA_MONSTROS = dbMonstros.map(row => {
      const f = row.data; // A ficha em inglês
      
      return {
        id: row.index,
        nome: f.name,
        tipo: f.type,
        alinhamento: f.alignment,
        ca: f.armor_class,
        tipo_ca: f.armor_desc || '',
        pv: f.hit_points,
        dados_vida: f.hit_dice,
        cr: row.challenge_rating, // Pega o número real (ex: 0.25)
        xp: f.xp || '?',
        // O deslocamento vem como objeto {"walk": 30, "fly": 50}, transformamos em string
        deslocamento: Object.entries(f.speed || {}).map(([k,v]) => `${k} ${v}ft`).join(', '),
        atributos: {
          'for': f.strength,
          'des': f.dexterity,
          'con': f.constitution,
          'int': f.intelligence,
          'sab': f.wisdom,
          'car': f.charisma
        },
        // O Open5e às vezes manda resistências como texto direto, tratamos isso
        resistencias: f.damage_resistances ? [f.damage_resistances] : null,
        imunidades: f.damage_immunities ? [f.damage_immunities] : null,
        sentidos: f.senses,
        idiomas: f.languages,
        // Mapeando as ações
        habilidades_especiais: mapearAcoes(f.special_abilities),
        acoes: mapearAcoes(f.actions),
        acoes_bonus: mapearAcoes(f.bonus_actions),
        reacoes: mapearAcoes(f.reactions),
        acoes_lendarias: mapearAcoes(f.legendary_actions)
      };
    });

    return true;
  } catch (error) {
    console.error("Erro ao puxar bestiário do Supabase:", error);
    return false;
  }
}

function openMonsterDetails(event, monstroId) {
  if (event) event.stopPropagation();
  if (!monstroId || typeof DATA_MONSTROS === 'undefined') return;

  const monstro = DATA_MONSTROS.find(m => m.id === monstroId);
  if (!monstro) return;

  const attrs = monstro.atributos || {'for':10, 'des':10, 'con':10, 'int':10, 'sab':10, 'car':10};
  const attrHtml = `
    <div class="quick-attr-grid">
      <div><strong>FOR</strong><br>${attrs['for'] || 10}</div>
      <div><strong>DES</strong><br>${attrs.des || 10}</div>
      <div><strong>CON</strong><br>${attrs.con || 10}</div>
      <div><strong>INT</strong><br>${attrs.int || 10}</div>
      <div><strong>SAB</strong><br>${attrs.sab || 10}</div>
      <div><strong>CAR</strong><br>${attrs.car || 10}</div>
    </div>
  `;

  const extrasHtml = `
    ${monstro.resistencias ? `<p style="margin: 5px 0; font-size: 0.9em;"><strong>🛡️ Resistências:</strong> ${monstro.resistencias.join(', ')}</p>` : ''}
    ${monstro.imunidades ? `<p style="margin: 5px 0; font-size: 0.9em;"><strong>🚫 Imunidades:</strong> ${monstro.imunidades.join(', ')}</p>` : ''}
    ${monstro.sentidos ? `<p style="margin: 5px 0; font-size: 0.9em;"><strong>👁️ Sentidos:</strong> ${monstro.sentidos}</p>` : ''}
    ${monstro.idiomas ? `<p style="margin: 5px 0; font-size: 0.9em;"><strong>🗣️ Idiomas:</strong> ${monstro.idiomas}</p>` : ''}
  `;

  const categoriasPossiveis = {
    habilidades: "Habilidades",
    habilidades_especiais: "Características Especiais",
    acoes: "Ações",
    acoes_bonus: "Ações Bônus",
    reacoes: "Reações",
    acoes_lendarias: "Ações Lendárias",
    magias: "Magias",
    raios_oculares: "Raios Oculares"
  };

  let sessoesDinamicasHtml = '';

  for (const [chave, titulo] of Object.entries(categoriasPossiveis)) {
    const lista = monstro[chave];
    if (!lista) continue;

    sessoesDinamicasHtml += `<h4 class="quick-title">${titulo}</h4><ul class="quick-list">`;

    if (Array.isArray(lista) && lista.length > 0) {
      sessoesDinamicasHtml += lista.map(item => {
        if (typeof item === 'string') return `<li>${item}</li>`;
        
        const nome = item.nome ? `<strong>${item.nome}:</strong> ` : '';
        let desc = item.descricao || '';
        
        if (!desc) {
          let detalhes = [];
          if (item.ataque) detalhes.push(`<em>Ataque:</em> ${item.ataque}`);
          if (item.alcance) detalhes.push(`<em>Alcance:</em> ${item.alcance}`);
          if (item.alvo) detalhes.push(`<em>Alvo:</em> ${item.alvo}`);
          if (item.dano) detalhes.push(`<em>Dano:</em> ${item.dano}`);
          if (item.efeito) detalhes.push(`<em>Efeito:</em> ${item.efeito}`);
          desc = detalhes.join(' | ');
        }

        return `<li>${nome}${desc}</li>`;
      }).join('');
    } else if (typeof lista === 'object' && !Array.isArray(lista)) {
      for (const [subchave, subvalor] of Object.entries(lista)) {
        let chaveFormatada = subchave.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        if (subchave.match(/^\d+_dia$/)) chaveFormatada = subchave.replace('_dia', '/dia');

        if (Array.isArray(subvalor)) {
          sessoesDinamicasHtml += `<li><strong>${chaveFormatada}:</strong> ${subvalor.join(', ')}</li>`;
        } else {
          sessoesDinamicasHtml += `<li><strong>${chaveFormatada}:</strong> ${subvalor}</li>`;
        }
      }
    }

    sessoesDinamicasHtml += `</ul>`;
  }

  const overlay = document.createElement('div');
  overlay.className = 'quick-monster-overlay';
  overlay.id = 'quickMonsterModal';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  overlay.innerHTML = `
    <div class="quick-monster-content">
      <header class="quick-monster-header">
        <div>
          <h3>${monstro.nome}</h3>
          <span class="quick-subtitle">${monstro.tipo} | ND ${monstro.cr} (${monstro.xp || '?'} XP)</span>
        </div>
        <button class="btn-close-quick" onclick="document.getElementById('quickMonsterModal').remove()">✖</button>
      </header>
      
      <div class="quick-monster-body" id="quickMonsterBodyArea">
        <p><strong>🛡️ CA:</strong> ${monstro.ca} <small>(${monstro.tipo_ca || '-'})</small></p>
        <p><strong>❤️ PV:</strong> ${monstro.pv} <small>(${monstro.dados_vida || '-'})</small></p>
        <p><strong>🏃 Deslocamento:</strong> ${monstro.deslocamento || '9m'}</p>
        ${extrasHtml}
        ${attrHtml}
        <div class="quick-divider"></div>
        ${sessoesDinamicasHtml}
        
        <div class="quick-divider" style="margin: 15px 0; border-top: 1px dashed #444;"></div>
        <button class="btn-loja" onclick="abrirAprimoramento('${monstro.id}')" style="width: 100%; padding: 10px; background: #2a113a; color: #e69a28; font-weight: bold; border: 1px solid #5a2e7a; cursor: pointer; border-radius: 4px;">
          ✨ Aprimorar com Classe (IA Gemini)
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

function abrirAprimoramento(monstroId) {
  const bodyArea = document.getElementById('quickMonsterBodyArea');
  if (!bodyArea) return;
  
  bodyArea.innerHTML = `
    <h3 style="color: #E69A28; margin-top: 0;">✨ Aprimorar Criatura</h3>
    <p style="font-size: 0.9em; color: #aaa;">Escolha uma classe para fundir com este monstro.</p>
    
    <div style="margin: 15px 0;">
      <label style="display: block; color: #ddd;">Classe Desejada</label>
      <select id="aprimorarClasse" style="width: 100%; padding: 10px; background: #222; border: 1px solid #E69A28; color: #fff;">
        <option value="Guerreiro">Guerreiro</option>
		<option value="Bruxo">Bruxo</option>
        <option value="Mago">Mago</option>
        <option value="Ladino">Ladino</option>
        <option value="Clérigo">Clérigo</option>
        <option value="Paladino">Paladino</option>
        <option value="Bárbaro">Bárbaro</option>
      </select>
    </div>

    <div style="margin-bottom: 20px;">
      <label style="display: block; color: #ddd;">Incremento de ND (CR)</label>
      <input type="number" id="aprimorarCR" value="1" min="1" max="10" style="width: 100%; padding: 10px; background: #222; border: 1px solid #444; color: #fff;">
    </div>

    <button onclick="solicitarAprimoramento('${monstroId}')" style="width: 100%; padding: 12px; background: #E69A28; color: #000; font-weight: bold; border: none; cursor: pointer;">
      🔮 Gerar Evolução
    </button>
  `;
}

async function solicitarAprimoramento(monstroId) {
  const classe = document.getElementById("aprimorarClasse").value;
  const incrementoCR = parseInt(document.getElementById("aprimorarCR").value) || 1;
  const monstroOriginal = DATA_MONSTROS.find(m => m.id === monstroId);

  const bodyArea = document.getElementById('quickMonsterBodyArea');
  bodyArea.innerHTML = `<div style="text-align: center; padding: 40px;">🔮 Tecendo novos poderes...</div>`;

  try {
    const { data, error } = await db.functions.invoke('rapid-handler', {
      body: { monstro: monstroOriginal, classe: classe, incremento_cr: incrementoCR }
    });

    if (error) throw error;

    const novoMonstro = {
      ...data,
      id: "UPG-" + Date.now(),
      cr: (parseFloat(monstroOriginal.cr) || 0) + incrementoCR
    };

    DATA_MONSTROS.push(novoMonstro);
    document.getElementById('quickMonsterModal').remove();
    openMonsterDetails(null, novoMonstro.id);
    if (typeof loadBestiario === 'function') loadBestiario();

  } catch (err) {
    bodyArea.innerHTML = `<p style="color:red;">Erro: ${err.message}</p>`;
  }
}

async function loadBestiario() {
  if (typeof setActiveMenu === 'function') setActiveMenu(9); 
  if (typeof setView === 'function') setView("bestiario");

  const content = document.getElementById("content");
  if (!content) return;

  // Desenha a interface básica e a barra de busca
  content.innerHTML = `
    <div class="header-section">
      <h2>🐉 Bestiário</h2>
      <p>Catálogo completo de criaturas, adversários e bestas do mundo.</p>
    </div>

    <div class="filter-bar" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
      <input type="text" id="buscaMonstro" placeholder="Buscar por nome..." oninput="filterBestiario()" 
        style="flex: 2; min-width: 200px; padding: 10px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
      
      <select id="filtroTipo" onchange="filterBestiario()" 
        style="flex: 1; min-width: 150px; padding: 10px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
        <option value="">Todos os Tipos</option>
      </select>

      <select id="filtroCR" onchange="filterBestiario()" 
        style="flex: 1; min-width: 120px; padding: 10px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
        <option value="">Qualquer ND (CR)</option>
      </select>
    </div>

    <div class="card-grid" id="bestiarioGrid">
      <div class="loading-spinner" style="text-align: center; grid-column: 1 / -1; padding: 40px; color: #E69A28;">
        Consultando os antigos tomos (Conectando ao Supabase)... 🔮
      </div>
    </div>
  `;

  // Se for a primeira vez que abre, vai no banco de dados
  if (DATA_MONSTROS.length === 0) {
    await fetchMonstrosDoSupabase();
  }

  // Agora renderiza os cards
  if (DATA_MONSTROS.length > 0) {
    preencherFiltrosBestiario();
    renderBestiario(DATA_MONSTROS);
  } else {
    document.getElementById("bestiarioGrid").innerHTML = "<p class='placeholder' style='grid-column: 1 / -1; text-align: center;'>O bestiário está vazio ou falhou ao carregar.</p>";
  }
}

function preencherFiltrosBestiario() {
  const tipos = new Set();
  const crs = new Set();

  DATA_MONSTROS.forEach(m => {
    if (m.tipo) tipos.add(m.tipo.trim());
    if (m.cr !== undefined && m.cr !== null) crs.add(m.cr);
  });

  const selectTipo = document.getElementById("filtroTipo");
  Array.from(tipos).sort().forEach(t => {
    selectTipo.innerHTML += `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</option>`;
  });

  const selectCR = document.getElementById("filtroCR");
  // Como cr agora é número (ex: 0.25, 1, 2), a ordenação é direta!
  const sortedCRs = Array.from(crs).sort((a, b) => a - b);

  sortedCRs.forEach(cr => {
    // Transforma 0.25 de volta em 1/4 visualmente
    let displayCR = cr;
    if (cr === 0.125) displayCR = "1/8";
    if (cr === 0.25) displayCR = "1/4";
    if (cr === 0.5) displayCR = "1/2";
    
    selectCR.innerHTML += `<option value="${cr}">ND ${displayCR}</option>`;
  });
}

function filterBestiario() {
  const nameQuery = document.getElementById("buscaMonstro").value.toLowerCase();
  const tipoQuery = document.getElementById("filtroTipo").value;
  const crQuery = document.getElementById("filtroCR").value;

  const filtrados = DATA_MONSTROS.filter(m => {
    const matchName = !nameQuery || m.nome.toLowerCase().includes(nameQuery);
    const matchTipo = !tipoQuery || (m.tipo && m.tipo.trim() === tipoQuery);
    const matchCR = !crQuery || m.cr == crQuery; 
    
    return matchName && matchTipo && matchCR;
  });

  renderBestiario(filtrados);
}

function renderBestiario(monstros) {
  const grid = document.getElementById("bestiarioGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (monstros.length === 0) {
    grid.innerHTML = "<p class='placeholder' style='grid-column: 1 / -1; text-align: center;'>Nenhuma criatura atende a estes critérios.</p>";
    return;
  }

  monstros.forEach(m => {
    const card = document.createElement("div");
    card.className = "card monstro-card"; 
    card.style.cursor = "pointer";

    card.innerHTML = `
      <div class="card-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: flex-start;">
        <h3 style="color: #E69A28; margin: 0; font-size: 1.2em;">${m.nome}</h3>
        <span class="badge" style="background: #441111; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; white-space: nowrap;">ND ${m.cr || '?'}</span>
      </div>
      <div class="card-body">
        <p style="margin: 0 0 8px 0; color: #aaa; font-size: 0.9em; font-style: italic;">
          ${m.tipo || 'Desconhecido'} | ${m.alinhamento || 'Neutro'}
        </p>
        <div style="display: flex; gap: 15px; font-size: 0.95em;">
          <span><strong>🛡️ CA:</strong> ${m.ca}</span>
          <span><strong>❤️ PV:</strong> ${m.pv}</span>
        </div>
      </div>
    `;

    card.onclick = (e) => openMonsterDetails(e, m.id);
    
    grid.appendChild(card);
  });
}

/* =========================================================
 * 13. IMPORTAÇÃO DE MONSTROS DO SRD
 * ========================================================= */

async function devImportarMonstros() {
    console.log("Iniciando download dos monstros da Open5e...");
    
    try {
        // limit=100 faz com que peguemos 100 monstros por vez, acelerando o processo
        let nextUrl = 'https://api.open5e.com/v1/monsters/?limit=100'; 
        let salvos = 0;
        let total = "Desconhecido";

        while (nextUrl) {
            console.log(`Buscando dados na página: ${nextUrl}`);
            const resposta = await fetch(nextUrl);
            const dados = await resposta.json();
            
            // Pega o total apenas na primeira rodada
            if (total === "Desconhecido") {
                total = dados.count;
                console.log(`Encontrados ${total} monstros. Iniciando injeção em lotes no Supabase...`);
            }

            // Prepara os 100 monstros da página atual para salvar de uma vez só
            const monstrosParaSalvar = dados.results.map(ficha => {
                
                // Transforma "1/4" em 0.25 para o Supabase não reclamar do tipo de dado
                let crNum = 0;
                if (ficha.challenge_rating) {
                    if (ficha.challenge_rating.includes('/')) {
                        const [numerador, denominador] = ficha.challenge_rating.split('/');
                        crNum = parseInt(numerador) / parseInt(denominador);
                    } else {
                        crNum = parseFloat(ficha.challenge_rating);
                    }
                }

                return {
                    index: ficha.slug, // A Open5e usa slug em vez de index
                    name: ficha.name,
                    challenge_rating: crNum,
                    data: ficha // A ficha inteira vai para o JSONB
                };
            });

            // Insere o lote inteiro no banco (muito mais rápido que salvar 1 por 1)
            const { error } = await db
                .from('monsters')
                .upsert(monstrosParaSalvar, { onConflict: 'index' });

            if (error) {
                console.error("Erro ao salvar o lote:", error);
                break; // Para o loop se der erro no banco
            } else {
                salvos += monstrosParaSalvar.length;
                console.log(`Progresso: ${salvos} de ${total} salvos no banco...`);
            }

            // Define a próxima página (quando for a última, nextUrl será null e o loop acaba)
            nextUrl = dados.next; 
        }

        console.log("✅ IMPORTAÇÃO CONCLUÍDA! Banco de dados recheado com sucesso.");
    } catch (erro) {
        console.error("❌ Erro crítico na importação:", erro);
    }
}