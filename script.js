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
    case "encontros":
      loadEncontros();
    break;
    case "bestiario":
      loadBestiario();
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
  mainContent.innerHTML = `
      <h2>📜 NPCs</h2>
		<div class="card-grid" id="npcGrid"></div>
	  `;
  // 5. Atualiza o cache global e chama a sua função de renderização
  if (npcs && npcs.length > 0) {
      npcCache = npcs;
      renderNPCs(npcs); 
  } else {
      document.getElementById("npcGrid").innerHTML = "<p class='placeholder'>A taverna está vazia (Nenhum NPC encontrado).</p>";
  }
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

    <div id="npcPreview" class="mt-4">
      <!-- O preview do NPC gerado aparecerá aqui -->
    </div>
  `;
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

async function handleGerarNPC() {
  const raca = document.getElementById('racaSelect').value;
  const classe = document.getElementById('classeSelect').value;
  
  const preview = document.getElementById("npcPreview");
  preview.innerHTML = `<div class="loading-container">🪄 Tecendo a alma do NPC...</div>`;
  
  await gerarNPC(raca, classe);
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

async function gerarNPC(racaSelecionada = "", classeSelecionada = "") {
  const sorteio = Math.floor(Math.random() * 100);
  const sexo = (sorteio % 2 === 0) ? "Masculino" : "Feminino";
  const raca = racaSelecionada || "Humano";
  const classe = classeSelecionada || "Camponês";

  try {
    const { data, error } = await db.functions.invoke('gerar_npc_gemini', {
      body: { raca, sexo, classe }
    });

    if (error) throw error;
    console.log("%c[RETORNO IA]", "background: #222; color: #bada55", data);

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

    const origemTag = npc.metadata.id_js && npc.metadata.id_js.startsWith("GEN") ? "🧪 Gerado" : "📜 Canônico";

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

function montarUrlImagem(fileId) {
  if (!fileId || fileId.trim() === "") return "";
  return "https://lh3.googleusercontent.com/u/0/d/" + fileId + "=s400";
}

function setView(view) {
  const url = new URL(window.location);
  url.searchParams.set("view", view);
  window.history.pushState({}, "", url);
}

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

  renderLocais(DATA_LOCAIS);
}

function renderLocais(dados) {
  const grid = document.getElementById("locaisGrid");
  if (!grid) return;

  grid.innerHTML = ""; 

  dados.forEach((local) => {
    const card = document.createElement("div");
    card.className = "card local-card";

    card.innerHTML = `
      <div class="card-header">
        <span class="badge">Nível ${local.nivel || "?"}</span>
        <h3>${local.nome || "Sem Nome"}</h3>
      </div>
      <p><strong>Tipo:</strong> ${local.tipo || "Não definido"}</p>
    `;

    card.onclick = () => openGenericModal(local, "Localização");
    grid.appendChild(card);
  });
}

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

  let editSectionHtml = "";
  if (dataCompleta.raca && !dataCompleta.dano) {
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
    const metadataDecoded = JSON.parse(decodeURIComponent(metadataEncoded));
    salvarEdicaoNPC(id, metadataDecoded);
  } catch (e) {
    console.error("Erro ao processar metadados do NPC:", e);
    alert("Erro interno ao editar. Verifique o console.");
  }
}

function formatarValor(valor) {
  if (Array.isArray(valor)) {
    if (typeof valor[0] === 'object') {
      return valor.map(v => `<div class="sub-item">${formatarValor(v)}</div>`).join("");
    }
    return valor.join(", ");
  } 
  
  if (typeof valor === 'object' && valor !== null) {
    return Object.entries(valor)
      .map(([k, v]) => `<strong>${k}:</strong> ${formatarValor(v)}`)
      .join("<br>");
  }
  
  return valor || "—";
}

function section(title, content) {
  if (!content || content.trim() === "") return "";
  return `<h4>${title}</h4><p>${content}</p>`;
}

/* ------------------------ PONTOS PRINCIPAIS ------------------------ */

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

    card.innerHTML = `
      <h3>${item.faccao || "Facção sem nome"}</h3>
      <p><strong>Liderança:</strong> ${item.comandantes || "Desconhecida"}</p>
    `;

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

  const nomeFaccao = faccao.faccao || faccao["Facção"] || "Facção";
  let colunasHtml = "";

  Object.entries(faccao).forEach(([chave, valor]) => {
    if (chave.toLowerCase() === "faccao") return;

    const label = chave.charAt(0).toUpperCase() + chave.slice(1);

    colunasHtml += `
      <section class="local-col">
        <h3>${label}</h3>
        <p>${valor || "—"}</p>
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

let GEN_NPCS = [];  

function mergeNPCs(genNPCs) {
  return [...DATA_NPCS, ...genNPCs];
}

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

    card.onclick = () => openGenericModal(item, item.nome);
    grid.appendChild(card);
  });
}

function ativarEdicaoItem(item) {
  const container = document.getElementById("modalFields");
  const btnSalvar = document.getElementById("btnSalvarForja");
  
  if (btnSalvar) btnSalvar.style.display = "block";

  const isArma = !!item.dano;
  const isArmadura = !!item.classeArmadura;

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
  const nome = document.getElementById("editNome").value;
  const bonus = parseInt(document.getElementById("editBonus").value);
  const spellLevel = document.getElementById("editSpell").value;
  const solicita = document.getElementById("solicita").value;
  
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
  const btn = document.getElementById("btnConfirmarEnvio");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = "⌛ Processando Pedido...";
    btn.style.opacity = "0.7";
  }

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
    })
    .withFailureHandler(function(err) {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = "❌ Erro ao enviar. Tentar novamente?";
        btn.style.background = "#ff4444";
      }
      alert("Houve um erro mágico ao contatar a forja. Verifique o console.");
    })
    .salvarItemNoGoogle(item);
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

const SENHA_MESTRE = "sensei"; 
const SENHA_JOGADOR = "lindos"; 

function verificarAcesso() {
  const senha = document.getElementById("inputSenha") ? document.getElementById("inputSenha").value : "";
  const lockscreen = document.getElementById("lockscreen");

  if (senha === SENHA_MESTRE) {
    if (lockscreen) lockscreen.style.display = "none";
    liberarAbasMestre(true);
    localStorage.setItem("acesso", senha);
  } else if (senha === SENHA_JOGADOR) {
    if (lockscreen) lockscreen.style.display = "none";
    liberarAbasMestre(false);
    localStorage.setItem("acesso", senha);
  } else {
    const erroSenha = document.getElementById("erroSenha");
    if (erroSenha) erroSenha.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const campoSenha = document.getElementById("inputSenha");
  
  if (campoSenha) {
    campoSenha.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault(); 
        verificarAcesso();      
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
  if (typeof setActiveMenu === 'function') setActiveMenu(7);
  if (typeof setView === 'function') setView("encontros");

  const contentArea = document.getElementById("content");
  if (!contentArea) return;

  contentArea.innerHTML = `
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">⚔️ Encontros e Combates</h2>
    </div>
    <div class="card-grid" id="encontrosGrid"></div>
  `;

  if (typeof DATA_ENCONTROS !== 'undefined') {
    renderEncontros(DATA_ENCONTROS);
  } else {
    document.getElementById("encontrosGrid").innerHTML = '<p class="text-gray-500">Nenhum dado de encontro disponível.</p>';
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

      return Array.from({ length: ref.quantidade }, (_, i) => {
        const sufixo = ref.quantidade > 1 ? ` #${i + 1}` : "";
        const uniqueId = `${ref.id}_${i}`; 
        
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
  inputEl.value = ''; 

  if (currentHp <= 0) {
    cardEl.classList.add('monster-dead');
  } else {
    cardEl.classList.remove('monster-dead');
  }
}

/*
 * =========================================================
 * BESTIÁRIO (Lista de Monstros)
 * Renderização da página principal de visualização de criaturas
 * =========================================================
 */

function loadBestiario() {
  if (typeof setActiveMenu === 'function') setActiveMenu(9); 
  if (typeof setView === 'function') setView("bestiario");

  const content = document.getElementById("content");
  if (!content) return;

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
      <div class="loading-spinner">Consultando os antigos tomos...</div>
    </div>
  `;

  if (typeof DATA_MONSTROS !== 'undefined' && DATA_MONSTROS.length > 0) {
    preencherFiltrosBestiario();
    renderBestiario(DATA_MONSTROS);
  } else {
    document.getElementById("bestiarioGrid").innerHTML = "<p class='placeholder'>O bestiário está vazio ou não foi carregado.</p>";
  }
}

function preencherFiltrosBestiario() {
  const tipos = new Set();
  const crs = new Set();

  DATA_MONSTROS.forEach(m => {
    if (m.tipo) tipos.add(m.tipo.trim());
    if (m.cr !== undefined) crs.add(m.cr);
  });

  const selectTipo = document.getElementById("filtroTipo");
  Array.from(tipos).sort().forEach(t => {
    selectTipo.innerHTML += `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</option>`;
  });

  const selectCR = document.getElementById("filtroCR");
  const sortedCRs = Array.from(crs).sort((a, b) => {
    const valA = (typeof a === 'string' && a.includes('/')) ? (a.split('/')[0] / a.split('/')[1]) : parseFloat(a) || 0;
    const valB = (typeof b === 'string' && b.includes('/')) ? (b.split('/')[0] / b.split('/')[1]) : parseFloat(b) || 0;
    return valA - valB;
  });

  sortedCRs.forEach(cr => {
    selectCR.innerHTML += `<option value="${cr}">ND ${cr}</option>`;
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

/*
 * =========================================================
 * FICHA RÁPIDA DE MONSTRO & APRIMORAMENTO IA
 * =========================================================
 */
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

  const categoriasPossiveis = {
    habilidades: "Habilidades",
    habilidades_especiais: "Características Especiais",
    acoes: "Ações",
    acoes_bonus: "Ações Bônus",
    reacoes: "Reações",
    acoes_lendarias: "Ações Lendárias",
    magias: "Magias"
  };

  let sessoesDinamicasHtml = '';

  for (const [chave, titulo] of Object.entries(categoriasPossiveis)) {
    const lista = monstro[chave];
    
    if (lista && Array.isArray(lista) && lista.length > 0) {
      sessoesDinamicasHtml += `<h4 class="quick-title">${titulo}</h4><ul class="quick-list">`;
      
      const itensMapeados = lista.map(item => {
        if (typeof item === 'string') return `<li>${item}</li>`; 
        
        const nome = item.nome ? `<strong>${item.nome}:</strong> ` : '';
        let desc = item.descricao || '';
        
        if (!desc && item.ataque) {
          desc = `<em>Ataque:</em> ${item.ataque} | <em>Dano:</em> ${item.dano || '-'}`;
        } else if (!desc && item.dano) {
          desc = `<em>Dano:</em> ${item.dano}`;
        }

        return `<li>${nome}${desc}</li>`;
      }).join(''); 

      sessoesDinamicasHtml += `${itensMapeados}</ul>`;
    }
  }

  const overlay = document.createElement('div');
  overlay.className = 'quick-monster-overlay';
  overlay.id = 'quickMonsterModal';
  overlay.onclick = (e) => {
    if (e.target === overlay) document.body.removeChild(overlay); 
  };

  overlay.innerHTML = `
    <div class="quick-monster-content">
      <header class="quick-monster-header">
        <div>
          <h3>${monstro.nome}</h3>
          <span class="quick-subtitle">${monstro.tipo || 'Desconhecido'} | ${monstro.alinhamento || 'Neutro'}</span>
        </div>
        <button class="btn-close-quick" onclick="document.getElementById('quickMonsterModal').remove()">✖</button>
      </header>
      
      <div class="quick-monster-body" id="quickMonsterBodyArea">
        <p><strong>🛡️ CA:</strong> ${monstro.ca} <small>(${monstro.tipo_ca || '-'})</small></p>
        <p><strong>❤️ PV:</strong> ${monstro.pv} <small>(${monstro.dados_vida || '-'})</small></p>
        <p><strong>🏃 Deslocamento:</strong> ${monstro.deslocamento || '9m'}</p>
        ${attrHtml}
        <div class="quick-divider"></div>
        ${sessoesDinamicasHtml}
        
        <div class="quick-divider" style="margin: 15px 0; border-top: 1px dashed #444;"></div>
        <button class="btn-loja" onclick="abrirAprimoramento('${monstro.id}')" style="width: 100%; padding: 10px; background: #2a113a; color: #e69a28; font-weight: bold; border: 1px solid #5a2e7a; cursor: pointer; border-radius: 4px;">
          ✨ Aprimorar com Classe (IA)
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

/**
 * Interface para aprimorar um monstro
 */
function abrirAprimoramento(monstroId) {
  const bodyArea = document.getElementById('quickMonsterBodyArea');
  if (!bodyArea) return;
  
  bodyArea.innerHTML = `
    <h3 style="color: #E69A28; margin-top: 0;">✨ Aprimorar Criatura</h3>
    <p style="font-size: 0.9em; color: #aaa;">Infundir as habilidades de uma classe neste monstro base. A IA ajustará os atributos, CA, PV e adicionará as novas ações.</p>
    
    <div style="margin-bottom: 15px; margin-top: 15px;">
      <label style="display: block; margin-bottom: 5px; color: #ddd;">Classe ou Profissão</label>
      <select id="aprimorarClasse" style="width: 100%; padding: 10px; background: #222; border: 1px solid #E69A28; color: #fff; border-radius: 4px;">
        <option value="Guerreiro">Guerreiro</option>
        <option value="Mago">Mago</option>
        <option value="Ladino">Ladino</option>
        <option value="Clérigo">Clérigo</option>
        <option value="Paladino">Paladino</option>
        <option value="Bárbaro">Bárbaro</option>
        <option value="Bruxo">Bruxo</option>
        <option value="Assassino">Assassino (NPC)</option>
        <option value="Comandante">Comandante (NPC)</option>
      </select>
    </div>

    <div style="margin-bottom: 20px;">
      <label style="display: block; margin-bottom: 5px; color: #ddd;">Incremento de ND (CR)</label>
      <input type="number" id="aprimorarCR" value="1" min="1" max="10" style="width: 100%; padding: 10px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
      <small style="color: #888;">Quantos níveis de desafio adicionar.</small>
    </div>

    <button onclick="solicitarAprimoramento('${monstroId}')" style="width: 100%; padding: 12px; background: #E69A28; color: #000; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 10px;">
      🔮 Forjar Evolução
    </button>
    <button onclick="document.getElementById('quickMonsterModal').remove(); openMonsterDetails(null, '${monstroId}');" style="width: 100%; padding: 10px; background: transparent; color: #aaa; border: 1px solid #444; border-radius: 4px; cursor: pointer;">
      Cancelar
    </button>
  `;
}

/**
 * Solicitação para a Edge Function no Supabase para gerar a evolução
 */
async function solicitarAprimoramento(monstroId) {
  const classe = document.getElementById("aprimorarClasse").value;
  const incrementoCR = parseInt(document.getElementById("aprimorarCR").value) || 1;
  const monstroOriginal = typeof DATA_MONSTROS !== 'undefined' ? DATA_MONSTROS.find(m => m.id === monstroId) : null;

  if (!monstroOriginal) return alert("Monstro base não encontrado.");

  const bodyArea = document.getElementById('quickMonsterBodyArea');
  bodyArea.innerHTML = `
    <div style="text-align: center; padding: 40px 20px;">
      <div style="font-size: 40px; margin-bottom: 20px; animation: pulse 1.5s infinite;">🔮</div>
      <h3 style="color: #E69A28;">Aprimorando com IA...</h3>
      <p style="color: #aaa; font-size: 0.9em;">Reescrevendo a biologia e infundindo conhecimento de ${classe}...</p>
    </div>
  `;

  try {
    const { data, error } = await db.functions.invoke('aprimorar_monstro_gemini', {
      body: { 
        monstro: monstroOriginal, 
        classe: classe, 
        incremento_cr: incrementoCR 
      }
    });

    if (error) throw error;

    console.log("[Monstro Aprimorado IA]", data);

    const crOriginal = parseFloat(monstroOriginal.cr) || 0;
    
    // Constrói o novo objeto do Monstro baseando-se na resposta da IA
    const novoMonstro = {
      ...data,
      id: "MOB-UPG-" + Date.now(),
      nome: data.nome || `${monstroOriginal.nome} (${classe})`,
      cr: crOriginal + incrementoCR
    };

    // Adiciona o monstro aos dados da sessão atual
    if (typeof DATA_MONSTROS !== 'undefined') {
      DATA_MONSTROS.push(novoMonstro);
    }

    // Se estivermos na tela do Bestiário, atualiza a lista no fundo
    if (document.getElementById("bestiarioGrid")) {
       filterBestiario(); 
    }

    // Recarrega a ficha com a nova versão
    const overlay = document.getElementById('quickMonsterModal');
    if (overlay) overlay.remove();
    openMonsterDetails(null, novoMonstro.id);

  } catch (err) {
    console.error("Erro na IA ao aprimorar:", err);
    bodyArea.innerHTML = `
      <div style="text-align: center; padding: 30px 20px;">
        <p style="color: #ef4444; margin-bottom: 20px;">❌ Falha de comunicação com os planos arcanos: ${err.message}</p>
        <button onclick="document.getElementById('quickMonsterModal').remove(); openMonsterDetails(null, '${monstroId}');" style="padding: 10px 20px; background: #444; color: #fff; border: none; border-radius: 4px; cursor: pointer;">
          Voltar à Ficha Original
        </button>
      </div>
    `;
  }
}

function getDificuldadeLabel(slug) {
  const mapa = { 'facil': 'Fácil', 'medio': 'Médio', 'dificil': 'Difícil', 'dificil_alto': 'Difícil (Alto)', 'mortal': 'Mortal' };
  return mapa[slug] || slug;
}

window.onload = loadInitialView;