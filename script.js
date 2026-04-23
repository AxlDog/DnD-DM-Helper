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
  document.getElementById("content").innerHTML = `<h2>📌 Arco Ash</h2> <p>Jogadores encontraram Frieren, uma poderosa maga, e ajudaram a derrotar demonios que haviam colocado uma recompensa em sua cabeça.</p>`;
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

/**
 * Captura os valores da UI e chama a geração
 */
async function handleGerarNPC() {
  const raca = document.getElementById('racaSelect').value;
  const classe = document.getElementById('classeSelect').value;
  
  // Feedback visual de carregamento
  const preview = document.getElementById("npcPreview");
  preview.innerHTML = `<div class="loading-container">🪄 Tecendo a alma do NPC...</div>`;
  
  await gerarNPC(raca, classe);
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

const SENHA_MESTRE = "sensei"; // Senha para liberar TUDO
const SENHA_JOGADOR = "lindos"; // Senha para liberar apenas o básico

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

function loadEncontros() {
  setActiveMenu(7); 
  setView("encontros");

  const content = document.getElementById("content");
  if (!content) return;

  // Cabeçalho da seção de encontros
  content.innerHTML = `
    <div class="header-section">
      <h2>⚔️ Encontros Táticos</h2>
      <p>Gestão de combates, táticas inimigas e objetivos de cena.</p>
      <button class="btn-loja" onclick="openCustomEncounterModal()" style="margin-top: 10px; background: #E69A28; color: #000; font-weight: bold;">
        ➕ Criar Encontro Rápido
      </button>
    </div>
    <div class="card-grid" id="encontrosGrid">
      <div class="loading-spinner">A carregar planos de batalha...</div>
    </div>
  `;

  if (typeof DATA_ENCONTROS !== 'undefined') {
    renderEncontros(DATA_ENCONTROS);
  }
}

/**
 * =========================================================
 * ENCONTRO RÁPIDO (AD-HOC) COM FILTROS
 * Permite selecionar monstros com filtros de ambiente e nome
 * =========================================================
 */
function openCustomEncounterModal() {
  if (typeof DATA_MONSTROS === 'undefined' || DATA_MONSTROS.length === 0) {
    alert("O bestiário ainda não foi carregado ou está vazio.");
    return;
  }

  // Extrair todos os ambientes únicos para o filtro
  const todosAmbientes = new Set();
  DATA_MONSTROS.forEach(m => {
    if (m.ambientes && Array.isArray(m.ambientes)) {
      m.ambientes.forEach(amb => todosAmbientes.add(amb));
    }
  });

  // Criação do Overlay no DOM
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

      <!-- BARRA DE FILTROS -->
      <div class="filter-bar" style="display: flex; gap: 10px; margin-bottom: 15px; flex-shrink: 0;">
        <input type="text" id="filterName" placeholder="Buscar por nome..." oninput="filterQuickMonsters()" 
          style="flex: 2; padding: 8px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
        
        <select id="filterEnvironment" onchange="filterQuickMonsters()" 
          style="flex: 1; padding: 8px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px;">
          <option value="">🌍 Todos Ambientes</option>
          ${Array.from(todosAmbientes).sort().map(amb => `<option value="${amb}">${amb.charAt(0).toUpperCase() + amb.slice(1)}</option>`).join('')}
        </select>
      </div>
      
      <!-- Lista de monstros (Container dinâmico) -->
      <div id="quickMonsterList" class="quick-monster-body" style="overflow-y: auto; flex-grow: 1; padding-right: 10px;">
        <!-- Renderizado via JS -->
      </div>

      <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #444; flex-shrink: 0;">
        <button class="btn-loja" onclick="startCustomEncounter()" style="width: 100%; padding: 12px; font-size: 1.1em; background: #cda434; color: #000; font-weight: bold; cursor: pointer;">
          ⚔️ Iniciar Combate
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  filterQuickMonsters(); // Inicializa a lista
}

/**
 * Filtra a lista de monstros no modal baseado nos inputs
 */
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

/**
 * Mantém as quantidades selecionadas mesmo ao filtrar
 */
function updateTempQuantity(id, val) {
  if (!window.tempSelectedQuantities) window.tempSelectedQuantities = {};
  window.tempSelectedQuantities[id] = parseInt(val) || 0;
}

/**
 * Coleta os monstros selecionados e inicia o combate
 */
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

  // Limpa o estado temporário e remove modal
  window.tempSelectedQuantities = {};
  document.getElementById('customEncounterModal').remove();
  
  openEncounterModal(encontroAdHoc);
}

// Estado global para não perder os HPs e iniciativas ao trocar de aba
let currentCombat = {
  encontroId: null,
  monstros: [] // { instanceId, mobId, nome, hpMax, iniciativa, modificadores: [], ca, ativo: true }
};

/**
 * Abre o modal de encontro e inicializa as instâncias de combate
 */
function openEncounterModal(encontro) {
  const modal = document.getElementById("npcModal");
  const body = document.getElementById("npcModalBody");
  const modalContent = modal.querySelector(".modal-content");
  
  if (!modal || !body) return;

  // Carrega a imagem de cabeçalho, se existir
  if (modalContent && typeof IMAGES_CACHE !== 'undefined') {
    modalContent.style.backgroundImage = "url('" + IMAGES_CACHE.previewHeader + "')";
  }

  // Inicializa o combate se for um encontro diferente do atual
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
              modificadores: [], // Vetor: valores negativos (dano) e positivos (cura)
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

/**
 * Renderiza o conteúdo dinâmico do modal com sistema de ABAS
 */
function renderEncounterModalContent(encontro) {
  const body = document.getElementById("npcModalBody");
  if (!body) return;
  
  const mobIds = [...new Set((encontro.inimigos || []).map(m => m.id))];
  const monstrosTemplates = typeof DATA_MONSTROS !== 'undefined' 
    ? DATA_MONSTROS.filter(m => mobIds.includes(m.id)) 
    : [];

  // Função para calcular o HP atual com base no vetor de danos e curas
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

      <div id="modalFooter" class="modal-footer">
        <button class="btn-forja" onclick="document.getElementById('npcModal').classList.add('hidden')">
          Fechar Registro
        </button>
      </div>
    </div>
  `;
}

/**
 * Funções Auxiliares do Tracker de Combate
 */
function applyHPModifier(instanceId, tipo) {
  const monstro = currentCombat.monstros.find(m => m.instanceId === instanceId);
  const input = document.getElementById(`input-hp-${instanceId}`);
  if (!monstro || !input) return;

  const val = parseInt(input.value) || 0;
  if (val <= 0) return;

  // Dano entra negativo, cura entra positivo
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

  // Renderiza mantendo os dados caso seja um encontro Ad-Hoc
  const baseData = encontroOriginal || {
    id: currentCombat.encontroId,
    nome: "Combate Ativo",
    inimigos: currentCombat.monstros.map(m => ({ id: m.mobId, quantidade: 1 }))
  };
  
  renderEncounterModalContent(baseData);
}

function switchEncounterTab(tabName) {
  // Esconde todas as abas
  document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
  
  // Reseta os botões
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.style.background = '#222';
    b.style.color = '#fff';
    b.style.border = '1px solid #444';
  });
  
  // Mostra a aba correta
  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) targetTab.style.display = 'block';

  // Destaca o botão correto
  const tabBtnMap = { 'tracker': 'btn-tab-tracker', 'info-monstros': 'btn-tab-info', 'taticas': 'btn-tab-taticas' };
  const activeBtn = document.getElementById(tabBtnMap[tabName]);
  if (activeBtn) {
    activeBtn.style.background = '#e69a28';
    activeBtn.style.color = '#000';
    activeBtn.style.border = 'none';
  }
}

/*
 * =========================================================
 * FICHA RÁPIDA DE MONSTRO
 * Estrutura segura com processamento dinâmico de ações
 * =========================================================
 */
function openMonsterDetails(event, monstroId) {
  if (event) event.stopPropagation();
  if (!monstroId || typeof DATA_MONSTROS === 'undefined') return;

  const monstro = DATA_MONSTROS.find(m => m.id === monstroId);
  if (!monstro) return;

  // Monta Atributos - Previne erros no parser e garante valor 10 de fallback se nulo
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

  // DICIONÁRIO DINÂMICO DE AÇÕES (Mais direto e anti-erros)
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
    
    // Verifica se a categoria existe e se o array não está vazio
    if (lista && Array.isArray(lista) && lista.length > 0) {
      sessoesDinamicasHtml += `<h4 class="quick-title">${titulo}</h4><ul class="quick-list">`;
      
      const itensMapeados = lista.map(item => {
        if (typeof item === 'string') return `<li>${item}</li>`; // Trata strings puras (ex: magias)
        
        const nome = item.nome ? `<strong>${item.nome}:</strong> ` : '';
        let desc = item.descricao || '';
        
        // Fallback rápido se não houver 'descricao' mas houver status de ataque
        if (!desc && item.ataque) {
          desc = `<em>Ataque:</em> ${item.ataque} | <em>Dano:</em> ${item.dano || '-'}`;
        } else if (!desc && item.dano) {
          desc = `<em>Dano:</em> ${item.dano}`;
        }

        return `<li>${nome}${desc}</li>`;
      }).join(''); // 'join' no array evita aparecimento de vírgulas (,) espúrias no HTML final

      sessoesDinamicasHtml += `${itensMapeados}</ul>`;
    }
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
          <span class="quick-subtitle">${monstro.tipo || 'Desconhecido'} | ${monstro.alinhamento || 'Neutro'}</span>
        </div>
        <button class="btn-close-quick" onclick="document.getElementById('quickMonsterModal').remove()">✖</button>
      </header>
      
      <div class="quick-monster-body">
        <p><strong>🛡️ CA:</strong> ${monstro.ca} <small>(${monstro.tipo_ca || '-'})</small></p>
        <p><strong>❤️ PV:</strong> ${monstro.pv} <small>(${monstro.dados_vida || '-'})</small></p>
        <p><strong>🏃 Deslocamento:</strong> ${monstro.deslocamento || '9m'}</p>
        ${attrHtml}
        <div class="quick-divider"></div>
        ${sessoesDinamicasHtml}
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

function getDificuldadeLabel(slug) {
  const mapa = { 'facil': 'Fácil', 'medio': 'Médio', 'dificil': 'Difícil', 'dificil_alto': 'Difícil (Alto)', 'mortal': 'Mortal' };
  return mapa[slug] || slug;
}

/*
 * =========================================================
 * BESTIÁRIO (Lista de Monstros)
 * Renderização da página principal de visualização de criaturas
 * =========================================================
 */

function loadBestiario() {
  // Defina o índice correto do seu menu para o Bestiário (Ex: 9)
  if (typeof setActiveMenu === 'function') setActiveMenu(9); 
  if (typeof setView === 'function') setView("bestiario");

  const content = document.getElementById("content");
  if (!content) return;

  // Estrutura base da página com a barra de filtros
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

/**
 * Preenche dinamicamente os menus de seleção (Tipo e CR) 
 * com base nos dados que existem de fato no DATA_MONSTROS
 */
function preencherFiltrosBestiario() {
  const tipos = new Set();
  const crs = new Set();

  // Extrai valores únicos
  DATA_MONSTROS.forEach(m => {
    if (m.tipo) tipos.add(m.tipo.trim());
    if (m.cr !== undefined) crs.add(m.cr);
  });

  // Preenche filtro de Tipo
  const selectTipo = document.getElementById("filtroTipo");
  Array.from(tipos).sort().forEach(t => {
    selectTipo.innerHTML += `<option value="${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</option>`;
  });

  // Preenche filtro de CR (Ordenando logicamente números e frações como 1/4)
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

/**
 * Função responsável por ler os filtros e atualizar o grid
 */
function filterBestiario() {
  const nameQuery = document.getElementById("buscaMonstro").value.toLowerCase();
  const tipoQuery = document.getElementById("filtroTipo").value;
  const crQuery = document.getElementById("filtroCR").value;

  const filtrados = DATA_MONSTROS.filter(m => {
    const matchName = !nameQuery || m.nome.toLowerCase().includes(nameQuery);
    const matchTipo = !tipoQuery || (m.tipo && m.tipo.trim() === tipoQuery);
    const matchCR = !crQuery || m.cr == crQuery; // Usa == para comparar "1" com 1, se necessário
    
    return matchName && matchTipo && matchCR;
  });

  renderBestiario(filtrados);
}

/**
 * Renderiza os cards dos monstros no grid da tela
 */
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
    card.className = "card monstro-card"; // Reaproveita o estilo das suas outras páginas
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

    // Conectando ao Modal de Ficha Rápida que criamos na etapa anterior
    card.onclick = (e) => openMonsterDetails(e, m.id);
    
    grid.appendChild(card);
  });
}

window.onload = loadInitialView;