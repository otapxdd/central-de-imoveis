// ========================================
// MÓDULO DE LOADING
// Gerencia indicadores de carregamento
// ========================================

/**
 * @param {string} 
 */
function mostrarLoading(mensagem = "Carregando...") {
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
  const loading = document.getElementById("loadingGlobal")
  if (loading) {
    loading.classList.remove("active")
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
