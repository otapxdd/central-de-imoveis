// ========================================
// MÓDULO DE IMÓVEIS
// Gerencia listagem, aprovação e visualização de imóveis
// ========================================

// utilitários e UI já fornecem helpers (obterClasseBadgeStatus, mostrarNotificacao, abrirModal, etc.)

function carregarImoveis() {
  if (!dadosAtuais || !Array.isArray(dadosAtuais.imoveis)) {
    console.warn("dadosAtuais.imoveis não está disponível ainda")
    return
  }
  renderizarTabelaImoveis(dadosAtuais.imoveis)
  popularFiltros()
}

function renderizarTabelaImoveis(imoveis) {
  const tbody = document.getElementById("corpoTabelaImoveis")
  tbody.innerHTML = imoveis
    .map(
      (imovel) => `
        <tr>
            <td><strong>${imovel.id}</strong></td>
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
                ${imovel.status === "pendente"
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

async function popularFiltros() {
  await popularFiltroTipo()
  // popularFiltroCidade() será chamado após carregar cidades da API
}

async function popularFiltroTipo() {
  const filtroTipo = document.getElementById("filtroTipo")
  if (!filtroTipo) return

  try {
    const response = await fetchComLoading("api/categorias.php", {}, "Carregando tipos...")
    if (!response.ok) {
      console.warn("Erro ao carregar categorias para filtro")
      return
    }

    const categorias = await response.json()
    
    if (!Array.isArray(categorias)) {
      console.warn("Formato de categorias inválido")
      return
    }

    // Salva o valor atual se houver
    const valorAtual = filtroTipo.value

    // Limpa opções exceto a primeira (Todos os Tipos)
    filtroTipo.innerHTML = '<option value="">Todos os Tipos</option>'

    // Adiciona as categorias do banco
    categorias.forEach((categoria) => {
      const option = document.createElement("option")
      option.value = categoria.nome // Usa o nome exato do banco
      option.textContent = categoria.nome
      option.dataset.id = categoria.id
      filtroTipo.appendChild(option)
    })

    // Restaura o valor anterior se ainda existir
    if (valorAtual) {
      const opcaoExistente = Array.from(filtroTipo.options).find(
        (opt) => opt.value === valorAtual
      )
      if (opcaoExistente) {
        filtroTipo.value = valorAtual
      }
    }
  } catch (error) {
    console.error("Erro ao popular filtro de tipos:", error)
  }
}

async function popularFiltrosCidade() {
  // Popular filtro de cidades da página de imóveis
  await popularFiltroCidade()
  
  // Popular filtro de cidades do mapa
  await popularFiltroMapaCidade()
}

async function popularFiltroCidade() {
  const filtroCidade = document.getElementById("filtroCidade")
  if (!filtroCidade) return

  try {
    // Tenta usar cidades da API primeiro
    if (dadosAtuais.cidades && Array.isArray(dadosAtuais.cidades) && dadosAtuais.cidades.length > 0) {
      const valorAtual = filtroCidade.value
      filtroCidade.innerHTML = '<option value="">Todas as Cidades</option>'

      dadosAtuais.cidades.forEach((cidade) => {
        const option = document.createElement("option")
        option.value = cidade.nome
        option.textContent = cidade.nome
        option.dataset.id = cidade.id
        filtroCidade.appendChild(option)
      })

      if (valorAtual) {
        const opcaoExistente = Array.from(filtroCidade.options).find(
          (opt) => opt.value === valorAtual
        )
        if (opcaoExistente) {
          filtroCidade.value = valorAtual
        }
      }
      return
    }

    // Fallback: extrai cidades dos imóveis se a API não estiver disponível
    if (dadosAtuais.imoveis && Array.isArray(dadosAtuais.imoveis)) {
      const valorAtual = filtroCidade.value
      const cidades = [...new Set(dadosAtuais.imoveis.map((i) => i.cidade).filter(Boolean))].sort()

      filtroCidade.innerHTML = '<option value="">Todas as Cidades</option>'

      cidades.forEach((cidade) => {
        const option = document.createElement("option")
        option.value = cidade
        option.textContent = cidade
        filtroCidade.appendChild(option)
      })

      if (valorAtual) {
        const opcaoExistente = Array.from(filtroCidade.options).find(
          (opt) => opt.value === valorAtual
        )
        if (opcaoExistente) {
          filtroCidade.value = valorAtual
        }
      }
    }
  } catch (error) {
    console.error("Erro ao popular filtro de cidade:", error)
  }
}

async function popularFiltroMapaCidade() {
  const filtroMapaCidade = document.getElementById("filtroMapaCidade")
  if (!filtroMapaCidade) return

  try {
    // Tenta usar cidades da API primeiro
    if (dadosAtuais.cidades && Array.isArray(dadosAtuais.cidades) && dadosAtuais.cidades.length > 0) {
      const valorAtual = filtroMapaCidade.value
      filtroMapaCidade.innerHTML = '<option value="">Todas as Cidades</option>'

      dadosAtuais.cidades.forEach((cidade) => {
        const option = document.createElement("option")
        option.value = cidade.nome
        option.textContent = cidade.nome
        option.dataset.id = cidade.id
        filtroMapaCidade.appendChild(option)
      })

      if (valorAtual) {
        const opcaoExistente = Array.from(filtroMapaCidade.options).find(
          (opt) => opt.value === valorAtual
        )
        if (opcaoExistente) {
          filtroMapaCidade.value = valorAtual
        }
      }
      return
    }

    // Fallback: extrai cidades dos imóveis se a API não estiver disponível
    if (dadosAtuais.imoveis && Array.isArray(dadosAtuais.imoveis)) {
      const valorAtual = filtroMapaCidade.value
      const cidades = [...new Set(dadosAtuais.imoveis.map((i) => i.cidade).filter(Boolean))].sort()

      filtroMapaCidade.innerHTML = '<option value="">Todas as Cidades</option>'

      cidades.forEach((cidade) => {
        const option = document.createElement("option")
        option.value = cidade
        option.textContent = cidade
        filtroMapaCidade.appendChild(option)
      })

      if (valorAtual) {
        const opcaoExistente = Array.from(filtroMapaCidade.options).find(
          (opt) => opt.value === valorAtual
        )
        if (opcaoExistente) {
          filtroMapaCidade.value = valorAtual
        }
      }
    }
  } catch (error) {
    console.error("Erro ao popular filtro de cidade do mapa:", error)
  }
}

function filtrarImoveis() {
  if (!dadosAtuais || !Array.isArray(dadosAtuais.imoveis)) {
    console.warn("dadosAtuais.imoveis não está disponível ainda")
    return
  }
  
  const status = document.getElementById("filtroStatus").value
  const tipo = document.getElementById("filtroTipo").value
  const cidade = document.getElementById("filtroCidade").value
  const busca = document.getElementById("buscarImovel").value.toLowerCase()

  let filtrados = dadosAtuais.imoveis

  if (status) filtrados = filtrados.filter((i) => i.status === status)
  if (tipo) {
    // Compara o tipo do imóvel com o valor do filtro (case-insensitive para flexibilidade)
    filtrados = filtrados.filter((i) => 
      i.tipo && i.tipo.toLowerCase().trim() === tipo.toLowerCase().trim()
    )
  }
  if (cidade) filtrados = filtrados.filter((i) => i.cidade === cidade)
  if (busca) {
    const somenteNumeros = /^\d+$/.test(busca)
    filtrados = filtrados.filter((i) => {
      const nomeMatch = i.nome && i.nome.toLowerCase().includes(busca)
      const idMatch = String(i.id).includes(busca)
      return somenteNumeros ? String(i.id) === busca : nomeMatch || idMatch
    })
  }

  renderizarTabelaImoveis(filtrados)
}

function atualizarImovelLocalmente(id, novosDados = {}) {
  if (!dadosAtuais || !Array.isArray(dadosAtuais.imoveis)) {
    return false
  }

  const indice = dadosAtuais.imoveis.findIndex((imovel) => Number(imovel.id) === Number(id))

  if (indice === -1) {
    console.warn(`Imóvel com id ${id} não encontrado para atualização local.`)
    return false
  }

  dadosAtuais.imoveis[indice] = {
    ...dadosAtuais.imoveis[indice],
    ...novosDados,
  }

  return true
}

function atualizarVisoesDeImoveis() {
  // Atualiza os filtros de cidade quando os imóveis mudam
  if (typeof popularFiltrosCidade === "function") {
    popularFiltrosCidade()
  }
  
  if (typeof filtrarImoveis === "function") {
    filtrarImoveis()
  } else if (typeof carregarImoveis === "function") {
    carregarImoveis()
  }

  if (typeof carregarAprovacao === "function") {
    carregarAprovacao()
  }

  if (typeof carregarDashboard === "function") {
    carregarDashboard()
  }

  const paginaMapa = document.getElementById("pagina-mapa")
  if (paginaMapa && paginaMapa.classList.contains("active") && typeof carregarMapa === "function") {
    carregarMapa()
  }
}

function mudarSlide(botao, direcao) {
  const container = botao.closest(".imagem-slider-container")
  if (!container) {
    console.error("Não foi possível encontrar o .imagem-slider-container")
    return
  }

  const trilho = container.querySelector(".slider-trilho")
  if (!trilho) {
    console.error("Não foi possível encontrar o .slider-trilho")
    return
  }

  const totalImagens = Number.parseInt(container.dataset.totalImagens || 1)
  let indiceAtual = Number.parseInt(trilho.dataset.indiceAtual || 0)

  indiceAtual += direcao

  if (indiceAtual < 0) indiceAtual = 0
  if (indiceAtual >= totalImagens) indiceAtual = totalImagens - 1

  trilho.dataset.indiceAtual = indiceAtual
  trilho.style.transform = `translateX(-${indiceAtual * 100}%)`

  const setaEsquerda = container.querySelector(".slider-seta.esquerda")
  const setaDireita = container.querySelector(".slider-seta.direita")

  if (setaEsquerda) {
    setaEsquerda.disabled = indiceAtual === 0
  }
  if (setaDireita) {
    setaDireita.disabled = indiceAtual === totalImagens - 1
  }
}

function carregarAprovacao() {
  if (!dadosAtuais || !Array.isArray(dadosAtuais.imoveis)) {
    console.warn("dadosAtuais.imoveis não está disponível ainda")
    return
  }
  const pendentes = dadosAtuais.imoveis.filter((i) => i.status === "pendente")
  document.getElementById("contagemPendentes").textContent = `${pendentes.length} Pendentes`

  const grade = document.getElementById("gradeAprovacao")
  grade.innerHTML = pendentes
    .map((imovel) => {
      let sliderHtml = ""
      const totalImagens = imovel.fotos?.length || 0

      if (totalImagens > 0) {
        const imagensHtml = imovel.fotos
          .map(
            (urlFoto) => `
            <img src="${urlFoto}" alt="${imovel.nome}" class="slider-imagem">
          `,
          )
          .join("")

        sliderHtml = `
          <div class="imagem-slider-container" data-total-imagens="${totalImagens}">
            <div class="slider-trilho" id="trilho-imovel-${imovel.id}" data-indice-atual="0">
              ${imagensHtml}
            </div>
            ${totalImagens > 1
            ? `
            <button class="slider-seta esquerda" onclick="mudarSlide(this, -1)" disabled>
              &#10094;
            </button>
            <button class="slider-seta direita" onclick="mudarSlide(this, 1)">
              &#10095;
            </button>
            `
            : ""
          }
          </div>
          `
      } else {
        sliderHtml = `
          <div class="imagem-slider-container">
            <img src="/placeholder.svg?height=200&width=400" alt="Sem foto" class="slider-imagem">
          </div>
          `
      }

      return `
        <div class="cartao-imovel">
          ${sliderHtml}
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
              ${imovel.quartos > 0
          ? `
                <div class="detalhe-imovel">
                  <i class="fas fa-bed"></i>
                  <span>${imovel.quartos} quartos</span>
                </div>
              `
          : ""
        }
              ${imovel.banheiros > 0
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
        `
    })
    .join("")
}

function visualizarImovel(id) {
  if (!dadosAtuais || !Array.isArray(dadosAtuais.imoveis)) {
    mostrarNotificacao("Dados não disponíveis. Aguarde o carregamento.", "erro");
    return;
  }
  
  const imovel = dadosAtuais.imoveis.find((i) => i.id == id);

  if (!imovel) {
    mostrarNotificacao("ERRO: Imóvel não encontrado (ID: " + id + ")", "erro");
    return;
  }

  const lat = Number.parseFloat(imovel.latitude);
  const lng = Number.parseFloat(imovel.longitude);
  const temCoordenadasValidas = !isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90;

  let htmlLocalizacao = "";

  if (temCoordenadasValidas) {
    htmlLocalizacao = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.75rem;">Localização</h4>
        <div id="mapa-no-modal" style="height: 300px; width: 100%; border-radius: 8px; background: #f0f0f0;"></div>
      </div>
    `;
  } else {
    htmlLocalizacao = `
      <div style="margin-top: 1.5rem;">
        <h4 style="margin-bottom: 0.75rem;">Localização</h4>
        <div style="background: var(--fundo-secundario); padding: 1rem; border-radius: 8px; text-align: center;">
          <i class="fas fa-map-marker-alt" style="font-size: 2rem; color: var(--cor-primaria);"></i>
          <p style="margin-top: 0.5rem; color: var(--texto-secundario);">${imovel.cidade}</p>
        </div>
      </div>
    `;
  }
  let htmlGaleria = "";


  if (imovel.fotos && imovel.fotos.length > 0) {

    const tagsImagens = imovel.fotos.map((caminhoFoto, index) => {

      const URL_BASE_PROJETO = "/central-de-imoveisadmin/";

      const urlCompleta = `${URL_BASE_PROJETO}${caminhoFoto}`;

      return `
                <a href="${urlCompleta}" 
                    data-fancybox="galeria-${imovel.id}" 
                    data-caption="${imovel.nome} - Foto ${index + 1} de ${imovel.fotos.length}">
                    <img src="${urlCompleta}" alt="Foto ${index + 1} do Imóvel">
                </a>
            `;
    }).join('');

    htmlGaleria = `
            <div class="galeria-modal">
                ${tagsImagens}
            </div>
        `;
  } else {
    htmlGaleria = `
            <div class="galeria-modal">
                <img src="https://centraldeimoveisrp.com.br/portal/imagem/img_default/img_default.jpg" alt="Imóvel sem fotos">
            </div>
        `;
  }


  const corpoModal = document.getElementById("corpoModal");
  corpoModal.innerHTML = `
    
    ${htmlGaleria} <div class="info-modal">
      <div class="item-info-modal">
        <span class="label-info-modal">Código:</span>
        <span class="valor-info-modal">${imovel.id}</span>
      </div>
      <div class="item-info-modal">
        <span class="label-info-modal">Nome:</span>
        <span class="valor-info-modal">${imovel.nome}</span>
      </div>
      <div class="item-info-modal">
        <span class="label-info-modal">Locador:</span>
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
        <span class="valor-info-modal"><strong>R$ ${Number(imovel.valor).toLocaleString("pt-BR")}</strong></span>
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
        ${imovel.descricao || obterDescricaoImovel(imovel)}
      </p>
    </div>

    ${htmlLocalizacao}
  `;

  document.getElementById("tituloModal").textContent = imovel.nome;
  abrirModal("modalImovel");

  if (temCoordenadasValidas) {
    setTimeout(() => {
      carregarMapaDoModal(lat, lng);
    }, 150);
  }
}
function aprovarImovel(id) {
  mostrarModalConfirmacao("Aprovar Imóvel", "Tem certeza que deseja aprovar este imóvel?", async () => {
    try {
      const response = await fetchComLoading("api/aprovarImovel.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }, "Aprovando imóvel...")

      const resultado = await response.json()

      if (!response.ok) {
        throw new Error(resultado.erro || "Erro ao conectar com o servidor.")
      }
      const atualizouLocal = atualizarImovelLocalmente(id, { status: "aprovado" })

      if (atualizouLocal) {
        atualizarVisoesDeImoveis()
      } else if (typeof sincronizarImoveisDoServidor === "function") {
        sincronizarImoveisDoServidor()
      }

      const mensagemSucesso = resultado.mensagem || "Imóvel aprovado com sucesso!"
      mostrarNotificacao(mensagemSucesso)
    } catch (error) {
      console.error("Erro ao aprovar imóvel:", error)
      mostrarNotificacao(`Erro ao aprovar: ${error.message}`, "erro")
    }
  })
}

function reprovarImovel(id) {
const mensagemHtml = `
    <p>Tem certeza que deseja reprovar este imóvel? Esta ação pode ser revertida posteriormente.</p>
    
    <div class="form-group-motivo">
        <label for="motivoReprovacaoInput">Motivo da Reprovação:</label>
        <textarea id="motivoReprovacaoInput" rows="3" placeholder="Digite o motivo..."></textarea>
    </div>
  `
  
  const callbackConfirmacao = async () => {
    const motivoInput = document.getElementById("motivoReprovacaoInput")
    const motivo = motivoInput ? motivoInput.value.trim() : ""

    if (!motivo) {
      mostrarNotificacao("O motivo da reprovação é obrigatório.", "erro") 
      if (motivoInput) motivoInput.focus()
      return
    }

    try {
      const response = await fetchComLoading(
        "api/reprovarImovel.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            id: id, 
            motivo: motivo
          }), 
        },
        "Reprovando imóvel...",
      )

      const resultado = await response.json()

      if (!response.ok) {
        throw new Error(resultado.erro || "Erro ao conectar com o servidor.")
      }
      
      fecharModal("modalConfirmacao")

      const atualizouLocal = atualizarImovelLocalmente(id, {
        status: "reprovado",
      })

      if (atualizouLocal) {
        atualizarVisoesDeImoveis()
      } else if (typeof sincronizarImoveisDoServidor === "function") {
        sincronizarImoveisDoServidor()
      }

      const mensagemSucesso = resultado.mensagem || "Imóvel reprovado"
      mostrarNotificacao(mensagemSucesso, "aviso")

    } catch (error) {
      console.error("Erro ao reprovar imóvel:", error)
      mostrarNotificacao(`Erro ao reprovar: ${error.message}`, "erro")
    }
  }
  mostrarModalConfirmacao(
    "Reprovar Imóvel",
    mensagemHtml,
    callbackConfirmacao,
  )
}