function navegarParaPagina(pagina) {
  document.querySelectorAll(".item-navegacao").forEach((item) => {
    item.classList.remove("active")
  })

  const itemAtivo = document.querySelector(`[data-pagina="${pagina}"]`)
  if (itemAtivo) {
    itemAtivo.classList.add("active")
  }

  const titulos = {
    dashboard: "Dashboard",
    imoveis: "Gestão de Imóveis",
    aprovacao: "Aprovação de Imóveis",
    usuarios: "Usuários",
    mensagens: "Mensagens",
    mapa: "Mapa",
    categorias: "Categorias",
    agendamentos: "Agendamentos",
    financeiro: "Financeiro",
    configuracoes: "Configurações",
  }

  const tituloPagina = document.getElementById("tituloPagina")
  if (tituloPagina) {
    tituloPagina.textContent = titulos[pagina] || "Dashboard"
  }

  document.querySelectorAll(".conteudo-pagina").forEach((conteudo) => {
    conteudo.classList.remove("active")
  })

  const paginaElemento = document.getElementById(`pagina-${pagina}`)
  if (paginaElemento) {
    paginaElemento.classList.add("active")
  }

  switch (pagina) {
    case "dashboard":
      if (typeof carregarDashboard === "function") carregarDashboard()
      break
    case "imoveis":
      if (typeof carregarImoveis === "function") carregarImoveis()
      break
    case "aprovacao":
      if (typeof carregarAprovacao === "function") carregarAprovacao()
      break
    case "usuarios":
      if (typeof carregarUsuarios === "function") carregarUsuarios()
      break
    case "mensagens":
      if (typeof carregarMensagens === "function") carregarMensagens()
      break
    case "mapa":
      if (typeof window.googleMapsApiPronto !== "undefined" && window.googleMapsApiPronto) {
        if (typeof inicializarInstanciaDoMapa === "function") inicializarInstanciaDoMapa()
      }
      if (typeof carregarMapa === "function") carregarMapa()
      break
    case "categorias":
      if (typeof carregarCategorias === "function") carregarCategorias()
      break
    case "agendamentos":
      if (typeof carregarAgendamentos === "function") carregarAgendamentos()
      break
    case "financeiro":
      if (typeof carregarFinanceiro === "function") carregarFinanceiro()
      break
  }

  const barraLateral = document.getElementById("barraLateral")
  if (barraLateral) {
    barraLateral.classList.remove("active")
  }
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

// Configura eventos básicos da UI (menu mobile e tema)
function configurarEventos() {
  const alternarMenuMobile = document.getElementById("alternarMenuMobile")
  const barraLateral = document.getElementById("barraLateral")

  if (alternarMenuMobile && barraLateral) {
    alternarMenuMobile.addEventListener("click", () => {
      barraLateral.classList.toggle("active")
    })
  }

  const alternarTema = document.getElementById("alternarTema")
  if (alternarTema && typeof alternarTemaEscuro === "function") {
    alternarTema.addEventListener("click", alternarTemaEscuro)
  }

  // Configurar eventos dos filtros de imóveis
  configurarFiltrosImoveis()
}

function configurarFiltrosImoveis() {
  const filtroStatus = document.getElementById("filtroStatus")
  const filtroTipo = document.getElementById("filtroTipo")
  const filtroCidade = document.getElementById("filtroCidade")
  const buscarImovel = document.getElementById("buscarImovel")

  if (filtroStatus && typeof filtrarImoveis === "function") {
    filtroStatus.addEventListener("change", filtrarImoveis)
  }

  if (filtroTipo && typeof filtrarImoveis === "function") {
    filtroTipo.addEventListener("change", filtrarImoveis)
  }

  if (filtroCidade && typeof filtrarImoveis === "function") {
    filtroCidade.addEventListener("change", filtrarImoveis)
  }

  if (buscarImovel && typeof filtrarImoveis === "function") {
    buscarImovel.addEventListener("input", filtrarImoveis)
  }
}
