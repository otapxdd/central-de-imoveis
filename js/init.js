// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================

const dadosAtuais = {}

async function carregarDadosIniciais() {
  const endpoints = [
    { key: "imoveis", url: "api/imoveis.php" },
    { key: "usuarios", url: "api/usuarios.php" },
    { key: "mensagens", url: "api/mensagens.php" },
    { key: "categorias", url: "api/categorias.php" },
  ]

  try {
    const promises = endpoints.map((ep) =>
      fetch(ep.url)
        .then((r) => ({ ep, r }))
        .catch((err) => ({ ep, err })),
    )
    const results = await Promise.all(promises)

    results.forEach(({ ep, r, err }) => {
      if (err) {
        console.warn(`Não foi possível acessar ${ep.url}:`, err)
        return
      }

      if (!r.ok) {
        console.warn(`Requisição a ${ep.url} retornou status ${r.status}`)
        return
      }

      r.json()
        .then((data) => {
          if (Array.isArray(data)) {
            dadosAtuais[ep.key] = data
            console.info(`Dados carregados: ${ep.key} (${data.length})`)
          } else if (data && typeof data === "object") {
            if (Array.isArray(data.items)) dadosAtuais[ep.key] = data.items
          }
        })
        .catch((e) => console.warn(`Erro ao parsear JSON de ${ep.url}:`, e))
    })

    setTimeout(() => {
      carregarDashboard()
      carregarImoveis()
      carregarAprovacao()
      carregarUsuarios()
      carregarMensagens()
    }, 200)
  } catch (error) {
    console.error("Erro ao carregar dados iniciais:", error)
    carregarDashboard()
    carregarImoveis()
    carregarAprovacao()
  }
}

function carregarDashboard() {
  console.log("Carregando dashboard...")
}

function carregarImoveis() {
  console.log("Carregando imóveis...")
}

function carregarAprovacao() {
  console.log("Carregando aprovação...")
}

function carregarUsuarios() {
  console.log("Carregando usuários...")
}

function carregarMensagens() {
  console.log("Carregando mensagens...")
}

function inicializarAplicacao() {
  const itensNavegacao = document.querySelectorAll(".item-navegacao")
  itensNavegacao.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault()
      const pagina = this.getAttribute("data-pagina")
      navegarParaPagina(pagina)
    })
  })
}

function navegarParaPagina(pagina) {
  console.log(`Navegando para a página: ${pagina}`)
}

function configurarEventos() {
  const alternarMenuMobile = document.getElementById("alternarMenuMobile")
  const barraLateral = document.getElementById("barraLateral")

  if (alternarMenuMobile) {
    alternarMenuMobile.addEventListener("click", () => {
      barraLateral.classList.toggle("active")
    })
  }

  const alternarTema = document.getElementById("alternarTema")
  alternarTema.addEventListener("click", alternarTemaEscuro)

  document.getElementById("filtroStatus")?.addEventListener("change", filtrarImoveis)
  document.getElementById("filtroTipo")?.addEventListener("change", filtrarImoveis)
  document.getElementById("filtroCidade")?.addEventListener("change", filtrarImoveis)
  document.getElementById("buscarImovel")?.addEventListener("input", filtrarImoveis)

  document.getElementById("filtroTipoUsuario")?.addEventListener("change", filtrarUsuarios)
  document.getElementById("buscarUsuario")?.addEventListener("input", filtrarUsuarios)

  document.getElementById("filtroMapaCidade")?.addEventListener("change", filtrarImoveisMapa)
  document.getElementById("filtroMapaTipo")?.addEventListener("change", filtrarImoveisMapa)

  const formularioConfiguracoes = document.querySelector(".formulario-configuracoes")
  if (formularioConfiguracoes) {
    formularioConfiguracoes.addEventListener("submit", (e) => {
      e.preventDefault()
      mostrarNotificacao("Configurações salvas com sucesso!")
    })
  }

  const opcoesTema = document.querySelectorAll('input[name="tema"]')
  opcoesTema.forEach((opcao) => {
    opcao.addEventListener("change", function () {
      if (this.value === "escuro") {
        document.body.classList.add("tema-escuro")
      } else {
        document.body.classList.remove("tema-escuro")
      }
    })
  })
}

function alternarTemaEscuro() {
  console.log("Alternando tema para escuro...")
}

function filtrarImoveis() {
  console.log("Filtrando imóveis...")
}

function filtrarUsuarios() {
  console.log("Filtrando usuários...")
}

function filtrarImoveisMapa() {
  console.log("Filtrando imóveis no mapa...")
}

function mostrarNotificacao(mensagem) {
  console.log(`Mostrando notificação: ${mensagem}`)
}

function inicializarUploadImagens() {
  console.log("Inicializando upload de imagens...")
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarUploadImagens()
  inicializarAplicacao()
  configurarEventos()
  carregarDadosIniciais()
})
