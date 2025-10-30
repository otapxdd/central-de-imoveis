// ========================================
// MÓDULO DE MAPA
// Gerencia Google Maps e marcadores
// ========================================

window.googleMapsApiPronto = false
window.mapaGoogle = null
window.marcadoresAtuais = []
window.infoWindowGoogle = null
window.mostrarNotificacao = (message, type) => {
  console.log(`Notificação (${type}): ${message}`)
}
window.dadosAtuais = {
  imoveis: [
    {
      id: 1,
      nome: "Imóvel 1",
      cidade: "São Paulo",
      tipo: "Apartamento",
      valor: 500000,
      latitude: -23.55052,
      longitude: -46.633308,
      status: "aprovado",
    },
    {
      id: 2,
      nome: "Imóvel 2",
      cidade: "São Paulo",
      tipo: "Casa",
      valor: 800000,
      latitude: -23.55052,
      longitude: -46.633308,
      status: "pendente",
    },
  ],
}

window.google = window.google || {}

window.initMap = () => {
  console.log("Google Maps API está pronta.")
  window.googleMapsApiPronto = true

  const paginaMapa = document.getElementById("pagina-mapa")
  if (paginaMapa && paginaMapa.classList.contains("active")) {
    carregarMapa()
  }
}

function inicializarInstanciaDoMapa() {
  if (window.mapaGoogle) return

  const centroInicial = { lat: -23.55052, lng: -46.633308 }
  const elementoMapa = document.getElementById("visualizacaoMapa")

  if (elementoMapa && typeof window.google !== "undefined" && window.google.maps) {
    window.mapaGoogle = new window.google.maps.Map(elementoMapa, {
      zoom: 10,
      center: centroInicial,
      mapTypeId: "roadmap",
    })

    window.infoWindowGoogle = new window.google.maps.InfoWindow()
    console.log("Instância do Google Map criada com sucesso.")
  } else {
    console.error("Elemento 'visualizacaoMapa' não foi encontrado ou Google Maps não carregado.")
  }
}

function carregarMapaDoModal(lat, lng) {
  const elementoMapa = document.getElementById("mapa-no-modal")

  if (!elementoMapa) {
    console.warn("Elemento 'mapa-no-modal' não encontrado.")
    return
  }

  if (typeof window.google === "undefined" || !window.google.maps) {
    console.warn("Google Maps não está carregado.")
    return
  }

  const posicao = { lat: Number.parseFloat(lat), lng: Number.parseFloat(lng) }

  const map = new window.google.maps.Map(elementoMapa, {
    zoom: 16,
    center: posicao,
    disableDefaultUI: true,
    gestureHandling: "cooperative",
  })

  const houseSvgPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
  const iconeCasa = {
    path: houseSvgPath,
    fillColor: "#D4A843",
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 1.5,
    anchor: new window.google.maps.Point(12, 24),
  }

  new window.google.maps.Marker({
    position: posicao,
    map: map,
    icon: iconeCasa,
  })
}

async function carregarMapa() {
  if (!window.mapaGoogle) {
    if (window.googleMapsApiPronto && typeof window.google !== "undefined" && window.google.maps) {
      inicializarInstanciaDoMapa()
    } else {
      if (typeof window.mostrarNotificacao === "function") {
        window.mostrarNotificacao("Aguardando API do Google Maps...", "aviso")
      }
      return
    }
  }

  const listaImoveisMapa = document.getElementById("listaImoveisMapa")
  if (listaImoveisMapa) {
    listaImoveisMapa.innerHTML = "<p>Carregando imóveis...</p>"
  }

  try {
    const response = await fetch("api/mapa.php")
    if (!response.ok) throw new Error("Falha ao carregar dados do mapa")

    const imoveis = await response.json()
    renderizarMarcadoresMapa(imoveis)
    renderizarListaImoveisMapa(imoveis)
  } catch (error) {
    console.warn("Erro ao carregar mapa do servidor, usando fallback simulado:", error)

    if (typeof window.dadosAtuais !== "undefined" && window.dadosAtuais.imoveis) {
      const imoveis = window.dadosAtuais.imoveis
        .filter((i) => i.status === "aprovado")
        .map((imovel) => ({
          ...imovel,
          latitude: -23.55052 + (Math.random() - 0.5) * 0.1,
          longitude: -46.633308 + (Math.random() - 0.5) * 0.1,
        }))

      renderizarMarcadoresMapa(imoveis)
      renderizarListaImoveisMapa(imoveis)
    }
  }
}

function renderizarMarcadoresMapa(imoveis) {
  if (!window.mapaGoogle || typeof window.google === "undefined" || !window.google.maps) return

  window.marcadoresAtuais.forEach((marker) => marker.setMap(null))
  window.marcadoresAtuais = []

  const bounds = new window.google.maps.LatLngBounds()

  const houseSvgPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"

  const iconeCasa = {
    path: houseSvgPath,
    fillColor: "#D4A843",
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 1.5,
    anchor: new window.google.maps.Point(12, 24),
  }

  imoveis.forEach((imovel) => {
    const posicao = {
      lat: Number.parseFloat(imovel.latitude),
      lng: Number.parseFloat(imovel.longitude),
    }

    if (isNaN(posicao.lat) || isNaN(posicao.lng)) return

    const marker = new window.google.maps.Marker({
      position: posicao,
      map: window.mapaGoogle,
      title: imovel.nome,
      animation: window.google.maps.Animation.DROP,
      icon: iconeCasa,
    })

    const conteudoPopup = `
      <div style="font-family: 'Inter', sans-serif; padding: 5px;">
        <strong style="font-size: 1.1em;">${imovel.nome}</strong>
        <p>${imovel.cidade}</p>
        <p style="color: var(--cor-primaria); font-weight: 700; font-size: 1.1em; margin: 5px 0 0 0;">
          R$ ${Number(imovel.valor).toLocaleString("pt-BR")}
        </p>
      </div>
    `

    marker.addListener("click", () => {
      window.infoWindowGoogle.setContent(conteudoPopup)
      window.infoWindowGoogle.open(window.mapaGoogle, marker)
      window.mapaGoogle.panTo(posicao)
    })

    window.marcadoresAtuais.push(marker)
    bounds.extend(posicao)
  })

  if (window.marcadoresAtuais.length > 0) {
    window.mapaGoogle.fitBounds(bounds)
  }

  if (window.marcadoresAtuais.length === 1) {
    window.mapaGoogle.setZoom(15)
  }
}

function renderizarListaImoveisMapa(imoveis) {
  const lista = document.getElementById("listaImoveisMapa")
  if (!lista) return

  if (imoveis.length === 0) {
    lista.innerHTML = "<p>Nenhum imóvel encontrado com estes filtros.</p>"
    return
  }

  lista.innerHTML = imoveis
    .map(
      (imovel) => `
        <div class="cartao-imovel" style="cursor: pointer;" onclick="focarNoMapa(${imovel.latitude}, ${imovel.longitude})">
            <img src="/placeholder.svg?height=150&width=280" alt="${imovel.nome}" class="imagem-imovel" style="height: 150px;">
            <div class="conteudo-imovel">
                <h4 class="titulo-imovel" style="font-size: 1rem;">${imovel.nome}</h4>
                <p class="localizacao-imovel">
                    <i class="fas fa-map-marker-alt"></i>
                    ${imovel.cidade}
                </p>
                <p class="preco-imovel" style="font-size: 1.125rem;">R$ ${Number(imovel.valor).toLocaleString("pt-BR")}</p>
                
                <button class="btn btn-secundario" style="padding: 5px 10px; font-size: 0.8rem; margin-top: 5px;" 
                        onclick="event.stopPropagation(); visualizarImovel(${imovel.id})">
                    Ver Detalhes
                </button>
            </div>
        </div>
    `,
    )
    .join("")
}

async function filtrarImoveisMapa() {
  const filtroCidade = document.getElementById("filtroMapaCidade")
  const filtroTipo = document.getElementById("filtroMapaTipo")

  const cidade = filtroCidade ? filtroCidade.value : ""
  const tipo = filtroTipo ? filtroTipo.value : ""

  const params = new URLSearchParams()
  if (cidade) params.append("cidade", cidade)
  if (tipo) params.append("tipo", tipo)

  const listaImoveisMapa = document.getElementById("listaImoveisMapa")
  if (listaImoveisMapa) {
    listaImoveisMapa.innerHTML = "<p>Filtrando...</p>"
  }

  try {
    const response = await fetch(`api/mapa.php?${params}`)
    if (!response.ok) throw new Error("Falha ao filtrar dados")

    const imoveisFiltrados = await response.json()

    renderizarMarcadoresMapa(imoveisFiltrados)
    renderizarListaImoveisMapa(imoveisFiltrados)
  } catch (error) {
    console.warn("Erro ao filtrar mapa no servidor, usando fallback local:", error)

    if (typeof window.dadosAtuais !== "undefined" && window.dadosAtuais.imoveis) {
      let filtrados = window.dadosAtuais.imoveis.filter((i) => i.status === "aprovado")
      if (cidade) filtrados = filtrados.filter((i) => i.cidade === cidade)
      if (tipo) filtrados = filtrados.filter((i) => i.tipo === tipo)

      const imoveisComCoordenadas = filtrados.map((imovel) => ({
        ...imovel,
        latitude: -23.55052 + (Math.random() - 0.5) * 0.1,
        longitude: -46.633308 + (Math.random() - 0.5) * 0.1,
      }))

      renderizarMarcadoresMapa(imoveisComCoordenadas)
      renderizarListaImoveisMapa(imoveisComCoordenadas)
    }
  }
}

function focarNoMapa(lat, lng) {
  if (!window.mapaGoogle) return

  const posicao = { lat: Number.parseFloat(lat), lng: Number.parseFloat(lng) }
  window.mapaGoogle.panTo(posicao)
  window.mapaGoogle.setZoom(16)

  const marcadorClicado = window.marcadoresAtuais.find(
    (marker) =>
      Math.abs(marker.getPosition().lat() - posicao.lat) < 0.00001 &&
      Math.abs(marker.getPosition().lng() - posicao.lng) < 0.00001,
  )

  if (marcadorClicado && window.google && window.google.maps) {
    window.google.maps.event.trigger(marcadorClicado, "click")
  }
}
