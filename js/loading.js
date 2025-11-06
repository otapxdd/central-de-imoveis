// ========================================
// MÓDULO DE LOADING
// Gerencia indicadores de carregamento
// ========================================

let contadorLoading = 0

/**
 * @param {string} 
 */
function mostrarLoading(mensagem = "Carregando...") {
  contadorLoading++
  
  let loading = document.getElementById("loadingGlobal")

  if (!loading) {
    loading = document.createElement("div")
    loading.id = "loadingGlobal"
    loading.className = "loading-overlay"
    loading.innerHTML = `
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">${mensagem}</p>
      </div>
    `
    document.body.appendChild(loading)
  } else {
    const loadingText = loading.querySelector(".loading-text")
    if (loadingText) {
      loadingText.textContent = mensagem
    }
  }

  loading.classList.add("active")
}

function ocultarLoading() {
  contadorLoading = Math.max(0, contadorLoading - 1)
  
  // Só oculta se não houver mais requisições em andamento
  if (contadorLoading === 0) {
    const loading = document.getElementById("loadingGlobal")
    if (loading) {
      loading.classList.remove("active")
    }
  }
}

/**
 * @param {string} 
 * @param {string} 
 */
function mostrarLoadingElemento(elementoId, mensagem = "Carregando...") {
  const elemento = document.getElementById(elementoId)
  if (!elemento) return

  const loadingHtml = `
    <div class="loading-elemento">
      <div class="loading-spinner-pequeno"></div>
      <p>${mensagem}</p>
    </div>
  `

  elemento.innerHTML = loadingHtml
}

/**
 * @param {string} 
 * @param {object} 
 * @param {string}
 * @returns {Promise}
 */
async function fetchComLoading(url, opcoes = {}, mensagemLoading = "Carregando...") {
  try {
    mostrarLoading(mensagemLoading)
    const resposta = await fetch(url, opcoes)
    return resposta
  } catch (erro) {
    console.error("Erro na requisição:", erro)
    throw erro
  } finally {
    ocultarLoading()
  }
}

/**
 * Wrapper para fetch que automaticamente mostra/oculta loading
 * @param {string} url
 * @param {object} opcoes
 * @param {string} mensagemLoading
 * @returns {Promise<Response>}
 */
async function fetchComLoadingAuto(url, opcoes = {}, mensagemLoading = "Carregando...") {
  return fetchComLoading(url, opcoes, mensagemLoading)
}
