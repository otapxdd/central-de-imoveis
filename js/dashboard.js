// ========================================
// MÓDULO DE DASHBOARD
// Gerencia estatísticas e gráficos do painel administrativo
// ========================================

const graficosAtivos = {
  graficoTipo: null,
  graficoCidade: null,
}

async function carregarDashboard() {
  try {
    const response = await fetchComLoading("api/imoveis.php", {}, "Carregando dashboard...")
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`)
    }
    const imoveis = await response.json()

    const stats = {
      total: imoveis.length,
      pendentes: 0,
      aprovados: 0,
      reprovados: 0,
    }

    const agregados = {
      tipos: {},
      cidades: {},
    }

    for (const imovel of imoveis) {
      switch (imovel.status) {
        case "pendente":
          stats.pendentes++
          break
        case "aprovado":
          stats.aprovados++
          break
        case "reprovado":
          stats.reprovados++
          break
      }

      if (imovel.tipo) {
        agregados.tipos[imovel.tipo] = (agregados.tipos[imovel.tipo] || 0) + 1
      }

      if (imovel.cidade) {
        agregados.cidades[imovel.cidade] = (agregados.cidades[imovel.cidade] || 0) + 1
      }
    }

    const statTotal = document.getElementById("stat-total")
    const statPendentes = document.getElementById("stat-pendentes")
    const statAprovados = document.getElementById("stat-aprovados")
    const statReprovados = document.getElementById("stat-reprovados")

    if (statTotal) statTotal.textContent = stats.total
    if (statPendentes) statPendentes.textContent = stats.pendentes
    if (statAprovados) statAprovados.textContent = stats.aprovados
    if (statReprovados) statReprovados.textContent = stats.reprovados

    criarGraficos(agregados.tipos, agregados.cidades)
    carregarListaAtividades()
  } catch (error) {
    console.error("Erro ao carregar o dashboard:", error)
    const paginaDashboard = document.getElementById("pagina-dashboard")
    if (paginaDashboard) {
      paginaDashboard.innerHTML = `<p style="color: red;">Não foi possível carregar os dados do dashboard. Verifique o console para mais detalhes.</p>`
    }
  }
}

function carregarListaAtividades() {
  const listaAtividades = document.getElementById("listaAtividades")
  if (listaAtividades) {
    listaAtividades.innerHTML = "<p>Nenhuma atividade recente registrada.</p>"
  }
}

function criarGraficos(dadosTipos, dadosCidades) {
  const labelsTipo = Object.keys(dadosTipos)
  const dataTipo = Object.values(dadosTipos)
  criarGraficoPizza("graficoTipo", labelsTipo, dataTipo)

  const labelsCidade = Object.keys(dadosCidades)
  const dataCidade = Object.values(dadosCidades)
  criarGraficoBarras("graficoCidade", labelsCidade, dataCidade)
}

function criarGraficoPizza(canvasId, labels, data) {
  if (typeof Chart === "undefined") {
    console.error("Chart.js não está carregado. Adicione o script do Chart.js no HTML antes dos módulos.")
    return
  }

  if (graficosAtivos[canvasId]) {
    graficosAtivos[canvasId].destroy()
  }

  const elemento = document.getElementById(canvasId)
  if (!elemento) {
    console.warn(`Elemento canvas com id "${canvasId}" não encontrado.`)
    return
  }

  const ctx = elemento.getContext("2d")
  if (!ctx) return

  graficosAtivos[canvasId] = new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Imóveis por Tipo",
          data: data,
          backgroundColor: ["#D4A843", "#FF9800", "#4CAF50", "#ff0000", "#36A2EB", "#FFCE56", "#9966FF"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  })
}

function criarGraficoBarras(canvasId, labels, data) {
  if (typeof Chart === "undefined") {
    console.error("Chart.js não está carregado. Adicione o script do Chart.js no HTML antes dos módulos.")
    return
  }

  if (graficosAtivos[canvasId]) {
    graficosAtivos[canvasId].destroy()
  }

  const elemento = document.getElementById(canvasId)
  if (!elemento) {
    console.warn(`Elemento canvas com id "${canvasId}" não encontrado.`)
    return
  }

  const ctx = elemento.getContext("2d")
  if (!ctx) return

  graficosAtivos[canvasId] = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Imóveis por Cidade",
          data: data,
          backgroundColor: ["#D4A843", "#FF9800", "#4CAF50", "#ff0000", "#36A2EB", "#FFCE56", "#9966FF"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  })
}