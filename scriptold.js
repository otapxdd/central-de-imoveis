// ========================================
// DADOS SIMULADOS (MOCK DATA)
// ========================================
const dadosSimulados = {
  imoveis: [
    {
      id: 1,
      codigo: "IMV001",
      nome: "Apartamento Luxo Centro",
      proprietario: "João Silva",
      tipo: "apartamento",
      cidade: "São Paulo",
      valor: 850000,
      status: "aprovado",
      quartos: 3,
      banheiros: 2,
      area: 120,
    },
    {
      id: 2,
      codigo: "IMV002",
      nome: "Casa com Piscina",
      proprietario: "Maria Santos",
      tipo: "casa",
      cidade: "Campinas",
      valor: 1200000,
      status: "aprovado",
      quartos: 4,
      banheiros: 3,
      area: 250,
    },
    {
      id: 3,
      codigo: "IMV003",
      nome: "Terreno Comercial",
      proprietario: "Pedro Costa",
      tipo: "terreno",
      cidade: "Santos",
      valor: 450000,
      status: "pendente",
      quartos: 0,
      banheiros: 0,
      area: 500,
    },
    {
      id: 4,
      codigo: "IMV004",
      nome: "Sala Comercial",
      proprietario: "Ana Lima",
      tipo: "comercial",
      cidade: "São Paulo",
      valor: 380000,
      status: "pendente",
      quartos: 0,
      banheiros: 1,
      area: 80,
    },
    {
      id: 5,
      codigo: "IMV005",
      nome: "Cobertura Vista Mar",
      proprietario: "Carlos Mendes",
      tipo: "apartamento",
      cidade: "Santos",
      valor: 2500000,
      status: "aprovado",
      quartos: 5,
      banheiros: 4,
      area: 350,
    },
    {
      id: 6,
      codigo: "IMV006",
      nome: "Casa Condomínio Fechado",
      proprietario: "Juliana Rocha",
      tipo: "casa",
      cidade: "Campinas",
      valor: 980000,
      status: "pendente",
      quartos: 3,
      banheiros: 2,
      area: 180,
    },
    {
      id: 7,
      codigo: "IMV007",
      nome: "Apartamento Compacto",
      proprietario: "Roberto Alves",
      tipo: "apartamento",
      cidade: "São Paulo",
      valor: 420000,
      status: "aprovado",
      quartos: 2,
      banheiros: 1,
      area: 65,
    },
    {
      id: 8,
      codigo: "IMV008",
      nome: "Galpão Industrial",
      proprietario: "Empresa XYZ",
      tipo: "comercial",
      cidade: "Campinas",
      valor: 1800000,
      status: "pendente",
      quartos: 0,
      banheiros: 2,
      area: 800,
    },
    {
      id: 9,
      codigo: "IMV009",
      nome: "Chácara Recreio",
      proprietario: "Fernando Dias",
      tipo: "terreno",
      cidade: "Campinas",
      valor: 750000,
      status: "reprovado",
      quartos: 0,
      banheiros: 0,
      area: 2000,
    },
    {
      id: 10,
      codigo: "IMV010",
      nome: "Loft Moderno",
      proprietario: "Beatriz Souza",
      tipo: "apartamento",
      cidade: "São Paulo",
      valor: 650000,
      status: "pendente",
      quartos: 1,
      banheiros: 1,
      area: 85,
    },
    {
      id: 11,
      codigo: "IMV011",
      nome: "Casa Sobrado",
      proprietario: "Marcos Ferreira",
      tipo: "casa",
      cidade: "Santos",
      valor: 890000,
      status: "aprovado",
      quartos: 3,
      banheiros: 3,
      area: 200,
    },
    {
      id: 12,
      codigo: "IMV012",
      nome: "Apartamento Garden",
      proprietario: "Luciana Martins",
      tipo: "apartamento",
      cidade: "Campinas",
      valor: 720000,
      status: "pendente",
      quartos: 3,
      banheiros: 2,
      area: 140,
    },
    {
      id: 13,
      codigo: "IMV013",
      nome: "Ponto Comercial",
      proprietario: "José Oliveira",
      tipo: "comercial",
      cidade: "São Paulo",
      valor: 550000,
      status: "pendente",
      quartos: 0,
      banheiros: 1,
      area: 120,
    },
    {
      id: 14,
      codigo: "IMV014",
      nome: "Casa Térrea",
      proprietario: "Sandra Ribeiro",
      tipo: "casa",
      cidade: "Santos",
      valor: 680000,
      status: "aprovado",
      quartos: 2,
      banheiros: 2,
      area: 150,
    },
    {
      id: 15,
      codigo: "IMV015",
      nome: "Apartamento Duplex",
      proprietario: "Ricardo Gomes",
      tipo: "apartamento",
      cidade: "São Paulo",
      valor: 1100000,
      status: "pendente",
      quartos: 4,
      banheiros: 3,
      area: 180,
    },
    {
      id: 16,
      codigo: "IMV016",
      nome: "Terreno Urbano",
      proprietario: "Paula Castro",
      tipo: "terreno",
      cidade: "Campinas",
      valor: 320000,
      status: "pendente",
      quartos: 0,
      banheiros: 0,
      area: 350,
    },
    {
      id: 17,
      codigo: "IMV017",
      nome: "Studio Decorado",
      proprietario: "Thiago Barros",
      tipo: "apartamento",
      cidade: "São Paulo",
      valor: 380000,
      status: "aprovado",
      quartos: 1,
      banheiros: 1,
      area: 45,
    },
    {
      id: 18,
      codigo: "IMV018",
      nome: "Casa Colonial",
      proprietario: "Adriana Pinto",
      tipo: "casa",
      cidade: "Santos",
      valor: 1450000,
      status: "pendente",
      quartos: 5,
      banheiros: 4,
      area: 320,
    },
  ],

  usuarios: [
    { id: 1, nome: "João Silva", email: "joao@email.com", tipo: "usuario", imoveis: 3, dataCadastro: "2024-01-15" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", tipo: "corretor", imoveis: 8, dataCadastro: "2023-11-20" },
    { id: 3, nome: "Pedro Costa", email: "pedro@email.com", tipo: "usuario", imoveis: 1, dataCadastro: "2024-02-10" },
    { id: 4, nome: "Ana Lima", email: "ana@email.com", tipo: "corretor", imoveis: 5, dataCadastro: "2023-09-05" },
    {
      id: 5,
      nome: "Carlos Mendes",
      email: "carlos@email.com",
      tipo: "usuario",
      imoveis: 2,
      dataCadastro: "2024-03-01",
    },
    { id: 6, nome: "Juliana Rocha", email: "juliana@email.com", tipo: "admin", imoveis: 0, dataCadastro: "2023-06-12" },
    {
      id: 7,
      nome: "Roberto Alves",
      email: "roberto@email.com",
      tipo: "usuario",
      imoveis: 1,
      dataCadastro: "2024-01-28",
    },
  ],

  mensagens: [
    {
      id: 1,
      remetente: "João Silva",
      assunto: "Dúvida sobre imóvel",
      mensagem: "Gostaria de mais informações sobre o apartamento IMV001.",
      data: "2024-10-15 14:30",
      lida: false,
    },
    {
      id: 2,
      remetente: "Maria Santos",
      assunto: "Aprovação pendente",
      mensagem: "Quando meu imóvel será aprovado?",
      data: "2024-10-14 10:15",
      lida: false,
    },
    {
      id: 3,
      remetente: "Pedro Costa",
      assunto: "Alteração de dados",
      mensagem: "Preciso alterar o valor do meu terreno.",
      data: "2024-10-13 16:45",
      lida: true,
    },
    {
      id: 4,
      remetente: "Ana Lima",
      assunto: "Agendamento de visita",
      mensagem: "Cliente interessado em visitar a sala comercial.",
      data: "2024-10-12 09:20",
      lida: false,
    },
    {
      id: 5,
      remetente: "Carlos Mendes",
      assunto: "Documentação",
      mensagem: "Enviei os documentos solicitados por email.",
      data: "2024-10-11 11:30",
      lida: true,
    },
    {
      id: 6,
      remetente: "Juliana Rocha",
      assunto: "Proposta recebida",
      mensagem: "Recebi uma proposta para minha casa.",
      data: "2024-10-10 15:00",
      lida: false,
    },
  ],

  agendamentos: [
    {
      id: 1,
      cliente: "Lucas Ferreira",
      imovel: "Apartamento Luxo Centro",
      data: "2024-10-20",
      horario: "14:00",
      status: "confirmado",
    },
    {
      id: 2,
      cliente: "Camila Souza",
      imovel: "Casa com Piscina",
      data: "2024-10-21",
      horario: "10:30",
      status: "pendente",
    },
    {
      id: 3,
      cliente: "Rafael Oliveira",
      imovel: "Cobertura Vista Mar",
      data: "2024-10-22",
      horario: "16:00",
      status: "confirmado",
    },
    {
      id: 4,
      cliente: "Fernanda Lima",
      imovel: "Loft Moderno",
      data: "2024-10-23",
      horario: "11:00",
      status: "pendente",
    },
    {
      id: 5,
      cliente: "Bruno Costa",
      imovel: "Casa Sobrado",
      data: "2024-10-24",
      horario: "15:30",
      status: "cancelado",
    },
  ],

  categorias: [
    { id: 1, nome: "Casa", icone: "fa-home", quantidade: 5 },
    { id: 2, nome: "Apartamento", icone: "fa-building", quantidade: 8 },
    { id: 3, nome: "Terreno", icone: "fa-map", quantidade: 3 },
    { id: 4, nome: "Comercial", icone: "fa-store", quantidade: 4 },
  ],

  comissoes: [
    {
      id: 1,
      corretor: "Maria Santos",
      imovel: "Apartamento Luxo Centro",
      valor: 850000,
      comissao: 42500,
      data: "2024-10-01",
    },
    { id: 2, corretor: "Ana Lima", imovel: "Casa com Piscina", valor: 1200000, comissao: 60000, data: "2024-10-05" },
    {
      id: 3,
      corretor: "Maria Santos",
      imovel: "Cobertura Vista Mar",
      valor: 2500000,
      comissao: 125000,
      data: "2024-10-08",
    },
    { id: 4, corretor: "Ana Lima", imovel: "Apartamento Compacto", valor: 420000, comissao: 21000, data: "2024-10-12" },
  ],

  atividades: [
    {
      tipo: "novo",
      mensagem: "João Silva enviou um novo imóvel",
      tempo: "5 minutos atrás",
      icone: "fa-home",
      cor: "#D4A843",
    },
    {
      tipo: "aprovacao",
      mensagem: "Imóvel IMV007 foi aprovado",
      tempo: "1 hora atrás",
      icone: "fa-check",
      cor: "#4CAF50",
    },
    {
      tipo: "usuario",
      mensagem: "Novo usuário cadastrado: Lucas Ferreira",
      tempo: "2 horas atrás",
      icone: "fa-user",
      cor: "#2196F3",
    },
    {
      tipo: "mensagem",
      mensagem: "Nova mensagem de Maria Santos",
      tempo: "3 horas atrás",
      icone: "fa-envelope",
      cor: "#FF9800",
    },
    {
      tipo: "agendamento",
      mensagem: "Visita agendada para IMV001",
      tempo: "5 horas atrás",
      icone: "fa-calendar",
      cor: "#9C27B0",
    },
  ],
}

const dadosAtuais = {
  imoveis: [...dadosSimulados.imoveis],
  usuarios: [...dadosSimulados.usuarios],
  mensagens: [...dadosSimulados.mensagens],
  agendamentos: [...dadosSimulados.agendamentos],
  categorias: [...dadosSimulados.categorias],
}

// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================

let googleMapsApiPronto = false;

document.addEventListener("DOMContentLoaded", () => {
  inicializarAplicacao()
  configurarEventos()
  carregarDashboard()
})


function initMap() {
    console.log("Google Maps API está pronta.");
    googleMapsApiPronto = true;

    if (document.getElementById('pagina-mapa').classList.contains('active')) {
        carregarMapa();
    }
}

function inicializarInstanciaDoMapa() {
    if (mapaGoogle) return;

    const centroInicial = { lat: -23.55052, lng: -46.633308 };
    const elementoMapa = document.getElementById("visualizacaoMapa");

    if (elementoMapa) {
        mapaGoogle = new google.maps.Map(elementoMapa, {
            zoom: 10,
            center: centroInicial,
            mapTypeId: "roadmap",
        });

        infoWindowGoogle = new google.maps.InfoWindow();
        console.log("Instância do Google Map criada com sucesso.");
    } else {
        console.error("Elemento 'visualizacaoMapa' não foi encontrado. Não é possível criar o mapa.");
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

function configurarEventos() {
  // Alternar menu mobile
  const alternarMenuMobile = document.getElementById("alternarMenuMobile")
  const barraLateral = document.getElementById("barraLateral")

  if (alternarMenuMobile) {
    alternarMenuMobile.addEventListener("click", () => {
      barraLateral.classList.toggle("active")
    })
  }

  // Alternar tema
  const alternarTema = document.getElementById("alternarTema")
  alternarTema.addEventListener("click", alternarTemaEscuro)

  // Filtros de Imóveis
  document.getElementById("filtroStatus")?.addEventListener("change", filtrarImoveis)
  document.getElementById("filtroTipo")?.addEventListener("change", filtrarImoveis)
  document.getElementById("filtroCidade")?.addEventListener("change", filtrarImoveis)
  document.getElementById("buscarImovel")?.addEventListener("input", filtrarImoveis)

  // Filtros de Usuários
  document.getElementById("filtroTipoUsuario")?.addEventListener("change", filtrarUsuarios)
  document.getElementById("buscarUsuario")?.addEventListener("input", filtrarUsuarios)

  // Filtros de Mapa
  document.getElementById("filtroMapaCidade")?.addEventListener("change", filtrarImoveisMapa)
  document.getElementById("filtroMapaTipo")?.addEventListener("change", filtrarImoveisMapa)

  // Formulário de Configurações
  const formularioConfiguracoes = document.querySelector(".formulario-configuracoes")
  if (formularioConfiguracoes) {
    formularioConfiguracoes.addEventListener("submit", (e) => {
      e.preventDefault()
      mostrarNotificacao("Configurações salvas com sucesso!")
    })
  }

  // Seletor de Tema
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

// ========================================
// NAVEGAÇÃO
// ========================================
function navegarParaPagina(pagina) {
    document.querySelectorAll(".item-navegacao").forEach((item) => {
        item.classList.remove("active");
    });
    document.querySelector(`[data-pagina="${pagina}"]`).classList.add("active");

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
    };
    document.getElementById("tituloPagina").textContent = titulos[pagina];

    document.querySelectorAll(".conteudo-pagina").forEach((conteudo) => {
        conteudo.classList.remove("active");
    });
    document.getElementById(`pagina-${pagina}`).classList.add("active");

    switch (pagina) {
        case "dashboard":
            carregarDashboard();
            break;
        case "imoveis":
            carregarImoveis();
            break;
        case "aprovacao":
            carregarAprovacao();
            break;
        case "usuarios":
            carregarUsuarios();
            break;
        case "mensagens":
            carregarMensagens();
            break;
        case "mapa":
            if (googleMapsApiPronto) {
                inicializarInstanciaDoMapa();
            }           
            carregarMapa();
            break;
        case "categorias":
            carregarCategorias();
            break;
        case "agendamentos":
            carregarAgendamentos();
            break;
        case "financeiro":
            carregarFinanceiro();
            break;
    }

    document.getElementById("barraLateral").classList.remove("active");
}

function carregarDashboard() {
  carregarListaAtividades()
  criarGraficos()
}

function carregarListaAtividades() {
  const listaAtividades = document.getElementById("listaAtividades")
  listaAtividades.innerHTML = dadosSimulados.atividades
    .map(
      (atividade) => `
        <div class="item-atividade">
            <div class="icone-atividade" style="background: ${atividade.cor};">
                <i class="fas ${atividade.icone}"></i>
            </div>
            <div class="conteudo-atividade">
                <p>${atividade.mensagem}</p>
                <span class="tempo-atividade">${atividade.tempo}</span>
            </div>
        </div>
    `,
    )
    .join("")
}

function criarGraficos() {
  criarGraficoPizza("graficoTipo", ["Casa", "Apartamento", "Terreno", "Comercial"], [5, 8, 3, 4])
  criarGraficoBarras("graficoCidade", ["São Paulo", "Campinas", "Santos", "Rio de Janeiro"], [8, 5, 4, 1])
  criarGraficoLinha(
    "graficoFaturamento",
    ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    [85000, 92000, 78000, 105000, 98000, 125000],
  )
}

function criarGraficoPizza(idCanvas, rotulos, dados) {
  const canvas = document.getElementById(idCanvas)
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const cores = ["#D4A843", "#2196F3", "#4CAF50", "#FF9800"]

  canvas.width = 300
  canvas.height = 300

  const total = dados.reduce((a, b) => a + b, 0)
  let anguloAtual = -Math.PI / 2

  dados.forEach((valor, indice) => {
    const anguloFatia = (valor / total) * 2 * Math.PI

    ctx.beginPath()
    ctx.arc(150, 150, 100, anguloAtual, anguloAtual + anguloFatia)
    ctx.lineTo(150, 150)
    ctx.fillStyle = cores[indice]
    ctx.fill()

    anguloAtual += anguloFatia
  })

  let yLegenda = 20
  rotulos.forEach((rotulo, indice) => {
    ctx.fillStyle = cores[indice]
    ctx.fillRect(220, yLegenda, 15, 15)
    ctx.fillStyle = "#333"
    ctx.font = "12px Inter"
    ctx.fillText(`${rotulo}: ${dados[indice]}`, 240, yLegenda + 12)
    yLegenda += 25
  })
}

function criarGraficoBarras(idCanvas, rotulos, dados) {
  const canvas = document.getElementById(idCanvas)
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  canvas.width = 400
  canvas.height = 300

  const larguraBarra = 60
  const valorMaximo = Math.max(...dados)
  const alturaGrafico = 200
  const inicioX = 50
  const inicioY = 250

  dados.forEach((valor, indice) => {
    const alturaBarra = (valor / valorMaximo) * alturaGrafico
    const x = inicioX + indice * (larguraBarra + 20)
    const y = inicioY - alturaBarra

    ctx.fillStyle = "#D4A843"
    ctx.fillRect(x, y, larguraBarra, alturaBarra)

    ctx.fillStyle = "#333"
    ctx.font = "12px Inter"
    ctx.fillText(rotulos[indice], x, inicioY + 20)
    ctx.fillText(valor.toString(), x + 20, y - 5)
  })
}

function criarGraficoLinha(idCanvas, rotulos, dados) {
  const canvas = document.getElementById(idCanvas)
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  canvas.width = 600
  canvas.height = 300

  const valorMaximo = Math.max(...dados)
  const alturaGrafico = 200
  const larguraGrafico = 500
  const inicioX = 50
  const inicioY = 250
  const espacamentoPontos = larguraGrafico / (dados.length - 1)

  // Desenhar linha
  ctx.beginPath()
  ctx.strokeStyle = "#D4A843"
  ctx.lineWidth = 3

  dados.forEach((valor, indice) => {
    const x = inicioX + indice * espacamentoPontos
    const y = inicioY - (valor / valorMaximo) * alturaGrafico

    if (indice === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  })

  ctx.stroke()

  dados.forEach((valor, indice) => {
    const x = inicioX + indice * espacamentoPontos
    const y = inicioY - (valor / valorMaximo) * alturaGrafico

    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2 * Math.PI)
    ctx.fillStyle = "#D4A843"
    ctx.fill()

    ctx.fillStyle = "#333"
    ctx.font = "12px Inter"
    ctx.fillText(rotulos[indice], x - 15, inicioY + 20)
    ctx.fillText(`R$ ${(valor / 1000).toFixed(0)}k`, x - 20, y - 10)
  })
}

function carregarImoveis() {
  renderizarTabelaImoveis(dadosAtuais.imoveis)
}

function renderizarTabelaImoveis(imoveis) {
  const tbody = document.getElementById("corpoTabelaImoveis")
  tbody.innerHTML = imoveis
    .map(
      (imovel) => `
        <tr>
            <td><strong>${imovel.codigo}</strong></td>
            <td>${imovel.nome}</td>
            <td>${imovel.proprietario}</td>
            <td><span class="badge badge-info">${imovel.tipo}</span></td>
            <td>${imovel.cidade}</td>
            <td><strong>R$ ${imovel.valor.toLocaleString("pt-BR")}</strong></td>
            <td>
                <span class="badge badge-${obterClasseBadgeStatus(imovel.status)}">
                    ${imovel.status}
                </span>
            </td>
            <td>
                <button class="btn btn-icone btn-secundario" onclick="visualizarImovel(${imovel.id})" title="Ver Detalhes">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-icone btn-secundario" onclick="editarImovel(${imovel.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                ${
                  imovel.status === "pendente"
                    ? `
                    <button class="btn btn-icone btn-sucesso" onclick="aprovarImovel(${imovel.id})" title="Aprovar">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-icone btn-perigo" onclick="reprovarImovel(${imovel.id})" title="Reprovar">
                        <i class="fas fa-times"></i>
                    </button>
                `
                    : ""
                }
            </td>
        </tr>
    `,
    )
    .join("")
}

function filtrarImoveis() {
  const status = document.getElementById("filtroStatus").value
  const tipo = document.getElementById("filtroTipo").value
  const cidade = document.getElementById("filtroCidade").value
  const busca = document.getElementById("buscarImovel").value.toLowerCase()

  let filtrados = dadosAtuais.imoveis

  if (status) filtrados = filtrados.filter((i) => i.status === status)
  if (tipo) filtrados = filtrados.filter((i) => i.tipo === tipo)
  if (cidade) filtrados = filtrados.filter((i) => i.cidade === cidade)
  if (busca)
    filtrados = filtrados.filter((i) => i.nome.toLowerCase().includes(busca) || i.codigo.toLowerCase().includes(busca))

  renderizarTabelaImoveis(filtrados)
}

function visualizarImovel(id) {
  const imovel = dadosAtuais.imoveis.find((i) => i.id === id)
  if (!imovel) return

  const corpoModal = document.getElementById("corpoModal")
  corpoModal.innerHTML = `
        <div class="galeria-modal">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-apartment-hrfqzahgWa5AFm3VkF1rEis2OYGpd5.png" alt="Foto 1">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cozy-apartment-living-room-sXcUNc9zMUdDSNsXLlOW2VJ99gInjt.png" alt="Foto 2">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cozy-apartment-bedroom-TvdujOP0yk6SlaDhVOkXxeNHE9XzCf.png" alt="Foto 3">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modern-apartment-kitchen-LDsvfi1lvnahvHCwPVkyIialdldNXa.png" alt="Foto 4">
        </div>
        
        <div class="info-modal">
            <div class="item-info-modal">
                <span class="label-info-modal">Código:</span>
                <span class="valor-info-modal">${imovel.codigo}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Nome:</span>
                <span class="valor-info-modal">${imovel.nome}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Proprietário:</span>
                <span class="valor-info-modal">${imovel.proprietario}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Tipo:</span>
                <span class="valor-info-modal">${imovel.tipo}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Cidade:</span>
                <span class="valor-info-modal">${imovel.cidade}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Valor:</span>
                <span class="valor-info-modal"><strong>R$ ${imovel.valor.toLocaleString("pt-BR")}</strong></span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Quartos:</span>
                <span class="valor-info-modal">${imovel.quartos}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Banheiros:</span>
                <span class="valor-info-modal">${imovel.banheiros}</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Área:</span>
                <span class="valor-info-modal">${imovel.area}m²</span>
            </div>
            <div class="item-info-modal">
                <span class="label-info-modal">Status:</span>
                <span class="badge badge-${obterClasseBadgeStatus(imovel.status)}">${imovel.status}</span>
            </div>
        </div>
        
        <div style="margin-top: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Descrição</h4>
            <p style="color: var(--texto-secundario); line-height: 1.6;">
                ${obterDescricaoImovel(imovel)}
            </p>
        </div>
        
        <div style="margin-top: 1.5rem;">
            <h4 style="margin-bottom: 0.75rem;">Localização</h4>
            <div style="background: var(--fundo-secundario); padding: 1rem; border-radius: 8px; text-align: center;">
                <i class="fas fa-map-marker-alt" style="font-size: 2rem; color: var(--cor-primaria);"></i>
                <p style="margin-top: 0.5rem; color: var(--texto-secundario);">${imovel.cidade}, SP</p>
            </div>
        </div>
    `

  document.getElementById("tituloModal").textContent = imovel.nome
  abrirModal("modalImovel")
}

function obterDescricaoImovel(imovel) {
  const descricoes = {
    apartamento:
      "Apartamento moderno e bem localizado, com acabamento de primeira qualidade. Próximo a comércios, escolas e transporte público. Condomínio com área de lazer completa.",
    casa: "Casa espaçosa em excelente localização. Amplo quintal, garagem para múltiplos veículos. Perfeita para famílias que buscam conforto e tranquilidade.",
    terreno:
      "Terreno plano e regular, ideal para construção. Localização privilegiada com fácil acesso. Documentação em dia.",
    comercial:
      "Imóvel comercial em ponto estratégico, com grande fluxo de pessoas. Ideal para diversos tipos de negócio. Infraestrutura completa.",
  }
  return descricoes[imovel.tipo] || "Excelente imóvel com ótima localização e infraestrutura completa."
}

function editarImovel(id) {
  mostrarNotificacao("Função de edição em desenvolvimento")
}

function aprovarImovel(id) {
  mostrarModalConfirmacao("Aprovar Imóvel", "Tem certeza que deseja aprovar este imóvel?", () => {
    const imovel = dadosAtuais.imoveis.find((i) => i.id === id)
    if (imovel) {
      imovel.status = "aprovado"
      carregarImoveis()
      mostrarNotificacao("Imóvel aprovado com sucesso!")
    }
  })
}

function reprovarImovel(id) {
  mostrarModalConfirmacao(
    "Reprovar Imóvel",
    "Tem certeza que deseja reprovar este imóvel? Esta ação pode ser revertida posteriormente.",
    () => {
      const imovel = dadosAtuais.imoveis.find((i) => i.id === id)
      if (imovel) {
        imovel.status = "reprovado"
        carregarImoveis()
        mostrarNotificacao("Imóvel reprovado", "aviso")
      }
    },
  )
}

document.addEventListener("DOMContentLoaded", () => {
  carregarDadosIniciais(); 
  
  configurarEventos();
});

async function carregarDadosIniciais() {
    try {
        const responseImoveis = await fetch('api/imoveis.php');
        if (!responseImoveis.ok) throw new Error('Falha ao carregar imóveis');
        
        const imoveisReais = await responseImoveis.json();
        
        dadosAtuais.imoveis = imoveisReais;

        
        carregarDashboard();
        carregarImoveis();
        carregarAprovacao();

    } catch (error) {
        console.error("Erro ao carregar dados iniciais:", error);
        mostrarNotificacao("Erro ao carregar dados do servidor", "erro");
    }
}


function inicializarAplicacao() {
  const itensNavegacao = document.querySelectorAll(".item-navegacao");
  itensNavegacao.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const pagina = this.getAttribute("data-pagina");
      navegarParaPagina(pagina);
    });
  });
}

function carregarImoveis() {
  renderizarTabelaImoveis(dadosAtuais.imoveis);
}

function carregarAprovacao() {
  const pendentes = dadosAtuais.imoveis.filter((i) => i.status === "pendente");
  document.getElementById("contagemPendentes").textContent = `${pendentes.length} Pendentes`;

  const grade = document.getElementById("gradeAprovacao");
  grade.innerHTML = pendentes
    .map(
      (imovel) => `
        <div class="cartao-imovel">
            <img src="/--imovel-tipo-.jpg" alt="${imovel.nome}" class="imagem-imovel">
            <div class="conteudo-imovel">
                <div class="cabecalho-imovel">
                    <div>
                        <h3 class="titulo-imovel">${imovel.nome}</h3>
                        <p class="localizacao-imovel">
                            <i class="fas fa-map-marker-alt"></i>
                            ${imovel.cidade}
                        </p>
                    </div>
                    <span class="badge badge-info">${imovel.tipo}</span>
                </div>
                
                <p class="preco-imovel">R$ ${Number(imovel.valor).toLocaleString("pt-BR")}</p>
                
                <div class="detalhes-imovel">
                    ${
                      imovel.quartos > 0
                        ? `
                        <div class="detalhe-imovel">
                            <i class="fas fa-bed"></i>
                            <span>${imovel.quartos} quartos</span>
                        </div>
                    `
                        : ""
                    }
                    ${
                      imovel.banheiros > 0
                        ? `
                        <div class="detalhe-imovel">
                            <i class="fas fa-bath"></i>
                            <span>${imovel.banheiros} banheiros</span>
                        </div>
                    `
                        : ""
                    }
                    <div class="detalhe-imovel">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${imovel.area}m²</span>
                    </div>
                </div>
                
                <div class="acoes-imovel">
                    <button class="btn btn-secundario btn-detalhes" onclick="visualizarImovel(${imovel.id})">
                        <i class="fas fa-eye"></i> Ver Detalhes
                    </button>
                    <div class="acao-grupo">
                        <button class="btn btn-sucesso" onclick="aprovarImovel(${imovel.id})">
                            <i class="fas fa-check"></i>
                        </button>
                        <button class="btn btn-perigo" onclick="reprovarImovel(${imovel.id})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}
// ========================================
// FUNÇÕES DE USUÁRIOS
// ========================================
function carregarUsuarios() {
  renderizarTabelaUsuarios(dadosAtuais.usuarios)
}

function renderizarTabelaUsuarios(usuarios) {
  const tbody = document.getElementById("corpoTabelaUsuarios")
  tbody.innerHTML = usuarios
    .map(
      (usuario) => `
        <tr>
            <td><strong>${usuario.nome}</strong></td>
            <td>${usuario.email}</td>
            <td><span class="badge badge-${obterClasseBadgeTipo(usuario.tipo)}">${usuario.tipo}</span></td>
            <td>${usuario.imoveis}</td>
            <td>${formatarData(usuario.dataCadastro)}</td>
            <td>
                <button class="btn btn-icone btn-secundario" title="Ver Imóveis">
                    <i class="fas fa-home"></i>
                </button>
                <button class="btn btn-icone btn-secundario" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-icone btn-perigo" title="Bloquear">
                    <i class="fas fa-ban"></i>
                </button>
            </td>
        </tr>
    `,
    )
    .join("")
}

function filtrarUsuarios() {
  const tipo = document.getElementById("filtroTipoUsuario").value
  const busca = document.getElementById("buscarUsuario").value.toLowerCase()

  let filtrados = dadosAtuais.usuarios

  if (tipo) filtrados = filtrados.filter((u) => u.tipo === tipo)
  if (busca)
    filtrados = filtrados.filter((u) => u.nome.toLowerCase().includes(busca) || u.email.toLowerCase().includes(busca))

  renderizarTabelaUsuarios(filtrados)
}

// ========================================
// FUNÇÕES DE MENSAGENS
// ========================================
function carregarMensagens() {
  const naoLidas = dadosAtuais.mensagens.filter((m) => !m.lida).length
  document.getElementById("contagemNaoLidas").textContent = `${naoLidas} Não Lidas`

  const listaMensagens = document.getElementById("listaMensagens")
  listaMensagens.innerHTML = dadosAtuais.mensagens
    .map(
      (msg) => `
        <div class="item-mensagem ${!msg.lida ? "nao-lida" : ""}" onclick="visualizarMensagem(${msg.id})">
            <div class="avatar-mensagem">${msg.remetente.charAt(0)}</div>
            <div class="conteudo-mensagem">
                <div class="cabecalho-mensagem">
                    <span class="remetente-mensagem">${msg.remetente}</span>
                    <span class="data-mensagem">${msg.data}</span>
                </div>
                <div class="assunto-mensagem">${msg.assunto}</div>
                <div class="preview-mensagem">${msg.mensagem}</div>
            </div>
        </div>
    `,
    )
    .join("")
}

function visualizarMensagem(id) {
  const msg = dadosAtuais.mensagens.find((m) => m.id === id)
  if (!msg) return

  msg.lida = true

  document.getElementById("tituloModalMensagem").textContent = msg.assunto
  document.getElementById("corpoModalMensagem").innerHTML = `
        <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--cor-borda);">
            <strong>De:</strong> ${msg.remetente}<br>
            <strong>Data:</strong> ${msg.data}
        </div>
        <p style="line-height: 1.6; color: var(--texto-primario);">${msg.mensagem}</p>
    `

  abrirModal("modalMensagem")
  carregarMensagens()
}

// ========================================
// FUNÇÕES DE MAPA
// ========================================
let mapaGoogle;
let marcadoresAtuais = []; 
let infoWindowGoogle; 


function initMap() {
  const centroInicial = { lat: -23.55052, lng: -46.633308 };

  const elementoMapa = document.getElementById("visualizacaoMapa");
  if (!elementoMapa) {
    console.warn("Elemento 'visualizacaoMapa' não encontrado. O mapa não será inicializado.");
    return;
  }
  
  mapaGoogle = new google.maps.Map(elementoMapa, {
    zoom: 10,
    center: centroInicial,
    mapTypeId: "roadmap",
  });
  
  infoWindowGoogle = new google.maps.InfoWindow();

}

async function carregarMapa() {
    if (!mapaGoogle) {
        if (googleMapsApiPronto) {
            console.error("A API do Google está pronta, mas a instância do mapa (mapaGoogle) é nula.");
            mostrarNotificacao("Não foi possível carregar o mapa. Tente recarregar a página.", "erro");
        } else {
            mostrarNotificacao("Aguardando API do Google Maps...", "aviso");
        }
        return;
    }

    document.getElementById("listaImoveisMapa").innerHTML = "<p>Carregando imóveis...</p>";

    try {
        const response = await fetch('api/mapa.php');
        if (!response.ok) throw new Error('Falha ao carregar dados do mapa');

        const imoveis = await response.json();

        renderizarMarcadoresMapa(imoveis);
        renderizarListaImoveisMapa(imoveis);

    } catch (error) {
        console.error("Erro ao carregar mapa:", error);
        document.getElementById("listaImoveisMapa").innerHTML = "<p>Erro ao carregar imóveis.</p>";
        mostrarNotificacao("Erro ao carregar imóveis do mapa", "erro");
    }
}

function renderizarMarcadoresMapa(imoveis) {
    marcadoresAtuais.forEach(marker => marker.setMap(null));
    marcadoresAtuais = [];

    const bounds = new google.maps.LatLngBounds();

    const houseSvgPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z";

    const iconeCasa = {
        path: houseSvgPath,
        fillColor: "#D4A843",
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 1.5,
        anchor: new google.maps.Point(12, 24)
    };

  imoveis.forEach((imovel) => {
    const posicao = {
      lat: parseFloat(imovel.latitude),
      lng: parseFloat(imovel.longitude)
    };
    
    if (isNaN(posicao.lat) || isNaN(posicao.lng)) return;

    const marker = new google.maps.Marker({
      position: posicao,
      map: mapaGoogle,
      title: imovel.nome,
      animation: google.maps.Animation.DROP,
      icon: iconeCasa,
    });

    const conteudoPopup = `
      <div style="font-family: 'Inter', sans-serif; padding: 5px;">
        <strong style="font-size: 1.1em;">${imovel.nome}</strong>
        <p>${imovel.cidade}</p>
        <p style="color: var(--cor-primaria); font-weight: 700; font-size: 1.1em; margin: 5px 0 0 0;">
          R$ ${Number(imovel.valor).toLocaleString("pt-BR")}
        </p>
      </div>
    `;

    marker.addListener("click", () => {
      infoWindowGoogle.setContent(conteudoPopup);
      infoWindowGoogle.open(mapaGoogle, marker);
      mapaGoogle.panTo(posicao);
    });

    marcadoresAtuais.push(marker);
    bounds.extend(posicao);
  });
  
  if (marcadoresAtuais.length > 0) {
      mapaGoogle.fitBounds(bounds);
  }
  
  if (marcadoresAtuais.length === 1) {
      mapaGoogle.setZoom(15);
  }
}

function renderizarListaImoveisMapa(imoveis) {
  const lista = document.getElementById("listaImoveisMapa");
  
  if(imoveis.length === 0) {
      lista.innerHTML = "<p>Nenhum imóvel encontrado com estes filtros.</p>";
      return;
  }
  
  lista.innerHTML = imoveis
    .map(
      (imovel) => `
        <div class="cartao-imovel" style="cursor: pointer;" onclick="focarNoMapa(${imovel.latitude}, ${imovel.longitude})">
            <img src="/--imovel-tipo-.jpg" alt="${imovel.nome}" class="imagem-imovel" style="height: 150px;">
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
    .join("");
}

async function filtrarImoveisMapa() {
  const cidade = document.getElementById("filtroMapaCidade").value;
  const tipo = document.getElementById("filtroMapaTipo").value;
  
  const params = new URLSearchParams();
  if (cidade) params.append('cidade', cidade);
  if (tipo) params.append('tipo', tipo);

  const url = `api_mapa.php?${params.toString()}`;
  
  document.getElementById("listaImoveisMapa").innerHTML = "<p>Filtrando...</p>";
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Falha ao filtrar dados');
    
    const imoveisFiltrados = await response.json();
    
    renderizarMarcadoresMapa(imoveisFiltrados);
    renderizarListaImoveisMapa(imoveisFiltrados);
    
  } catch (error) {
    console.error("Erro ao filtrar mapa:", error);
    mostrarNotificacao("Erro ao aplicar filtros", "erro");
  }
}

function focarNoMapa(lat, lng) {
    if (!mapaGoogle) return;

    const posicao = { lat: parseFloat(lat), lng: parseFloat(lng) };
    mapaGoogle.panTo(posicao);
    mapaGoogle.setZoom(16);
    
    const marcadorClicado = marcadoresAtuais.find(marker => 
        Math.abs(marker.getPosition().lat() - posicao.lat) < 0.00001 &&
        Math.abs(marker.getPosition().lng() - posicao.lng) < 0.00001
    );
    
    if(marcadorClicado) {
        new google.maps.event.trigger(marcadorClicado, 'click');
    }
}
// ========================================
// FUNÇÕES DE CATEGORIAS
// ========================================
function carregarCategorias() {
  const grade = document.getElementById("gradeCategorias")
  grade.innerHTML = dadosAtuais.categorias
    .map(
      (cat) => `
        <div class="cartao-categoria">
            <div class="cabecalho-categoria">
                <div class="icone-categoria">
                    <i class="fas ${cat.icone}"></i>
                </div>
                <div class="acoes-categoria">
                    <button class="btn btn-icone btn-secundario" onclick="editarCategoria(${cat.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-icone btn-perigo" onclick="excluirCategoria(${cat.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <h4 class="nome-categoria">${cat.nome}</h4>
            <p class="contagem-categoria">${cat.quantidade} imóveis</p>
        </div>
    `,
    )
    .join("")
}

function abrirModalAdicionarCategoria() {
  mostrarNotificacao("Função de adicionar categoria em desenvolvimento")
}

function editarCategoria(id) {
  mostrarNotificacao("Função de editar categoria em desenvolvimento")
}

function excluirCategoria(id) {
  mostrarModalConfirmacao("Excluir Categoria", "Tem certeza que deseja excluir esta categoria?", () => {
    dadosAtuais.categorias = dadosAtuais.categorias.filter((c) => c.id !== id)
    carregarCategorias()
    mostrarNotificacao("Categoria excluída com sucesso!")
  })
}

// ========================================
// FUNÇÕES DE AGENDAMENTOS
// ========================================
function carregarAgendamentos() {
  const tbody = document.getElementById("corpoTabelaAgendamentos")
  tbody.innerHTML = dadosAtuais.agendamentos
    .map(
      (ag) => `
        <tr>
            <td><strong>${ag.cliente}</strong></td>
            <td>${ag.imovel}</td>
            <td>${formatarData(ag.data)}</td>
            <td>${ag.horario}</td>
            <td><span class="badge badge-${obterClasseBadgeStatusAgendamento(ag.status)}">${ag.status}</span></td>
            <td>
                ${
                  ag.status === "pendente"
                    ? `
                    <button class="btn btn-icone btn-sucesso" onclick="confirmarAgendamento(${ag.id})" title="Confirmar">
                        <i class="fas fa-check"></i>
                    </button>
                `
                    : ""
                }
                <button class="btn btn-icone btn-perigo" onclick="cancelarAgendamento(${ag.id})" title="Cancelar">
                    <i class="fas fa-times"></i>
                </button>
            </td>
        </tr>
    `,
    )
    .join("")
}

function confirmarAgendamento(id) {
  const ag = dadosAtuais.agendamentos.find((a) => a.id === id)
  if (ag) {
    ag.status = "confirmado"
    carregarAgendamentos()
    mostrarNotificacao("Agendamento confirmado!")
  }
}

function cancelarAgendamento(id) {
  mostrarModalConfirmacao("Cancelar Agendamento", "Tem certeza que deseja cancelar este agendamento?", () => {
    const ag = dadosAtuais.agendamentos.find((a) => a.id === id)
    if (ag) {
      ag.status = "cancelado"
      carregarAgendamentos()
      mostrarNotificacao("Agendamento cancelado", "aviso")
    }
  })
}

// ========================================
// FUNÇÕES FINANCEIRAS
// ========================================
function carregarFinanceiro() {
  const tbody = document.getElementById("corpoTabelaComissoes")
  tbody.innerHTML = dadosSimulados.comissoes
    .map(
      (com) => `
        <tr>
            <td><strong>${com.corretor}</strong></td>
            <td>${com.imovel}</td>
            <td>R$ ${com.valor.toLocaleString("pt-BR")}</td>
            <td><strong style="color: var(--cor-sucesso);">R$ ${com.comissao.toLocaleString("pt-BR")}</strong></td>
            <td>${formatarData(com.data)}</td>
        </tr>
    `,
    )
    .join("")
}

// ========================================
// FUNÇÕES UTILITÁRIAS
// ========================================
function obterClasseBadgeStatus(status) {
  const badges = {
    aprovado: "sucesso",
    pendente: "aviso",
    reprovado: "perigo",
  }
  return badges[status] || "info"
}

function obterClasseBadgeTipo(tipo) {
  const badges = {
    admin: "perigo",
    corretor: "primario",
    usuario: "info",
  }
  return badges[tipo] || "info"
}

function obterClasseBadgeStatusAgendamento(status) {
  const badges = {
    confirmado: "sucesso",
    pendente: "aviso",
    cancelado: "perigo",
  }
  return badges[status] || "info"
}

function formatarData(dataString) {
  const data = new Date(dataString)
  return data.toLocaleDateString("pt-BR")
}

function alternarTemaEscuro() {
  document.body.classList.toggle("tema-escuro")
  const icone = document.querySelector("#alternarTema i")

  if (document.body.classList.contains("tema-escuro")) {
    icone.classList.remove("fa-moon")
    icone.classList.add("fa-sun")
  } else {
    icone.classList.remove("fa-sun")
    icone.classList.add("fa-moon")
  }
}

// ========================================
// FUNÇÕES DE MODAL
// ========================================
function abrirModal(idModal) {
  document.getElementById(idModal).classList.add("active")
}

function fecharModal(idModal) {
  document.getElementById(idModal).classList.remove("active")
}

function mostrarModalConfirmacao(titulo, mensagem, aoConfirmar) {
  document.getElementById("tituloModalConfirmacao").textContent = titulo
  document.getElementById("corpoModalConfirmacao").innerHTML = `<p>${mensagem}</p>`

  const btnConfirmar = document.getElementById("btnModalConfirmacao")
  btnConfirmar.onclick = () => {
    aoConfirmar()
    fecharModal("modalConfirmacao")
  }

  abrirModal("modalConfirmacao")
}

// ========================================
// FUNÇÕES DE NOTIFICAÇÃO
// ========================================
function mostrarNotificacao(mensagem, tipo = "sucesso") {
  const notificacao = document.getElementById("notificacao")
  const mensagemNotificacao = document.getElementById("mensagemNotificacao")
  const icone = notificacao.querySelector("i")

  mensagemNotificacao.textContent = mensagem

  // Atualizar ícone e cor baseado no tipo
  if (tipo === "aviso") {
    notificacao.style.background = "var(--cor-aviso)"
    icone.className = "fas fa-exclamation-triangle"
  } else if (tipo === "erro") {
    notificacao.style.background = "var(--cor-perigo)"
    icone.className = "fas fa-times-circle"
  } else {
    notificacao.style.background = "var(--cor-sucesso)"
    icone.className = "fas fa-check-circle"
  }

  notificacao.classList.add("active")

  setTimeout(() => {
    notificacao.classList.remove("active")
  }, 3000)
}

function abrirModalAdicionarImovel() {
  mostrarNotificacao("Função de adicionar imóvel em desenvolvimento")
}

// Fechar modais ao clicar fora
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active")
  }
})
