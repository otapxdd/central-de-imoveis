// ========================================
// MÓDULO DE API
// Gerencia requisições ao backend
// ========================================

// Usa utilitários e dados definidos em outros módulos

/**
 * Carrega todos os dados iniciais da aplicação
 * Faz requisições paralelas para melhor performance
 */
async function carregarDadosIniciais() {
  const endpoints = [
    { key: "imoveis", url: "api/imoveis.php", mensagem: "Carregando imóveis..." },
    { key: "usuarios", url: "api/usuarios.php", mensagem: "Carregando usuários..." },
    { key: "mensagens", url: "api/mensagens.php", mensagem: "Carregando mensagens..." },
    { key: "categorias", url: "api/categorias.php", mensagem: "Carregando categorias..." },
  ]

  mostrarLoading("Carregando dados da aplicação...")

  try {
    const promises = endpoints.map((ep) =>
      fetch(ep.url)
        .then((r) => ({ ep, r }))
        .catch((err) => ({ ep, err })),
    )

    const results = await Promise.all(promises)

    const processamentoPromises = results.map(async ({ ep, r, err }) => {
      if (err) {
        console.warn(`Não foi possível acessar ${ep.url}:`, err)
        return
      }

      if (!r.ok) {
        console.warn(`Requisição a ${ep.url} retornou status ${r.status}`)
        return
      }

      try {
        const data = await r.json()

        if (Array.isArray(data)) {
          dadosAtuais[ep.key] = data
        } else if (data && typeof data === "object") {
          if (Array.isArray(data.items)) {
            dadosAtuais[ep.key] = data.items
          }
        }
      } catch (e) {
        console.warn(`Erro ao parsear JSON de ${ep.url}:`, e)
      }
    })

    await Promise.all(processamentoPromises)

    // Aguarda um pouco para garantir que os dados foram processados
    setTimeout(() => {
      carregarDashboard()
      carregarImoveis()
      carregarAprovacao()
      // carregarUsuarios()
      carregarMensagens()
      ocultarLoading()
    }, 200)
  } catch (error) {
    console.error("Erro ao carregar dados iniciais:", error)
    mostrarNotificacao("Erro ao carregar dados. Usando dados locais.", "erro")

    carregarDashboard()
    carregarImoveis()
    carregarAprovacao()
    carregarUsuarios()
    carregarMensagens()
    ocultarLoading()
  }
}

/**
 * @param {string} 
 * @param {object} 
 * @param {string} 
 * @returns {Promise<object>}
 */
async function requisicaoAPI(url, opcoes = {}, mensagemLoading = null) {
  try {
    if (mensagemLoading) {
      mostrarLoading(mensagemLoading)
    }

    const resposta = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...opcoes.headers,
      },
      ...opcoes,
    })

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`)
    }

    const dados = await resposta.json()
    return { sucesso: true, dados }
  } catch (erro) {
    console.error(`Erro na requisição para ${url}:`, erro)
    return { sucesso: false, erro: erro.message }
  } finally {
    if (mensagemLoading) {
      ocultarLoading()
    }
  }
}

/**
 * @param {string} 
 * @param {object} 
 * @param {string} 
 * @returns {Promise<boolean>}
 */
async function salvarDados(url, dados, mensagemSucesso = "Dados salvos com sucesso!") {
  const resultado = await requisicaoAPI(
    url,
    {
      method: "POST",
      body: JSON.stringify(dados),
    },
    "Salvando...",
  )

  if (resultado.sucesso) {
    mostrarNotificacao(mensagemSucesso, "sucesso")
    return true
  } else {
    mostrarNotificacao("Erro ao salvar dados", "erro")
    return false
  }
}

/**
 * @param {string} 
 * @param {string} 
 * @returns {Promise<boolean>}
 */
async function deletarDados(url, mensagemSucesso = "Dados deletados com sucesso!") {
  const resultado = await requisicaoAPI(
    url,
    {
      method: "DELETE",
    },
    "Deletando...",
  )

  if (resultado.sucesso) {
    mostrarNotificacao(mensagemSucesso, "sucesso")
    return true
  } else {
    mostrarNotificacao("Erro ao deletar dados", "erro")
    return false
  }
}

async function sincronizarImoveisDoServidor(opcoes = {}) {
  const { mostrarFeedback = false } = opcoes

  try {
    if (mostrarFeedback) {
      mostrarLoading("Atualizando imóveis...")
    }

    const response = await fetch("api/imoveis.php", { cache: "no-store" })

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`)
    }

    const imoveisAtualizados = await response.json()

    if (!Array.isArray(imoveisAtualizados)) {
      throw new Error("Formato de dados inesperado ao atualizar imóveis.")
    }

    dadosAtuais.imoveis = imoveisAtualizados

    if (typeof atualizarVisoesDeImoveis === "function") {
      atualizarVisoesDeImoveis()
    } else if (typeof carregarImoveis === "function") {
      carregarImoveis()
      if (typeof carregarAprovacao === "function") {
        carregarAprovacao()
      }
      if (typeof carregarDashboard === "function") {
        carregarDashboard()
      }
    }
  } catch (error) {
    console.error("Erro ao sincronizar imóveis do servidor:", error)
    if (typeof mostrarNotificacao === "function") {
      mostrarNotificacao(`Não foi possível atualizar a lista de imóveis: ${error.message}`, "erro")
    }
  } finally {
    if (mostrarFeedback) {
      ocultarLoading()
    }
  }
}
