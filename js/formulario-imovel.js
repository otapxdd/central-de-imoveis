// ========================================
// MÓDULO DE FORMULÁRIO DE IMÓVEL
// Gerencia adição e edição de imóveis
// ========================================

const cepInput = document.getElementById("imovel-cep")
const cepLoading = document.getElementById("cep-loading")
const modalOverlay = document.getElementById("modal-imovel-overlay")
const formImovel = document.getElementById("form-imovel")

function mostrarNotificacao(mensagem) {
  alert(mensagem)
}

async function buscarCep() {
  const cep = cepInput.value.replace(/\D/g, "")
  if (cep.length !== 8) {
    return
  }

  cepLoading.style.display = "inline"
  document.getElementById("imovel-endereco").disabled = true
  document.getElementById("imovel-bairro").disabled = true
  document.getElementById("imovel-cidade").disabled = true

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if (!response.ok) {
      throw new Error("Erro ao buscar o CEP.")
    }

    const data = await response.json()

    if (data.erro) {
      mostrarNotificacao("CEP não encontrado.")
      document.getElementById("imovel-endereco").value = ""
      document.getElementById("imovel-bairro").value = ""
      document.getElementById("imovel-cidade").value = ""
    } else {
      document.getElementById("imovel-endereco").value = data.logradouro
      document.getElementById("imovel-bairro").value = data.bairro
      document.getElementById("imovel-cidade").value = data.localidade
      document.getElementById("imovel-numero").focus()
    }
  } catch (error) {
    console.error("Erro na API ViaCEP:", error)
    mostrarNotificacao("Não foi possível buscar o CEP. Verifique sua conexão.")
  } finally {
    cepLoading.style.display = "none"
    document.getElementById("imovel-endereco").disabled = false
    document.getElementById("imovel-bairro").disabled = false
    document.getElementById("imovel-cidade").disabled = false
  }
}

function abrirModalAdicionarImovel() {
  modalOverlay.classList.add("ativo")
}

function fecharModalImovel() {
  modalOverlay.classList.remove("ativo")
  setTimeout(() => {
    formImovel.reset()
    if (window.limparPreviewImagens) window.limparPreviewImagens()
  }, 300)
}

async function salvarImovel(event) {
  event.preventDefault()

  const formImovel = document.getElementById("form-imovel")
  const formData = new FormData(formImovel)

  console.log("Enviando dados do imóvel:")
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value)
  }

  try {
    const response = await fetch("api/salvarImovel.php", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()
    if (result.success) {
      mostrarNotificacao("Imóvel salvo com sucesso!")
      fecharModalImovel()
      if (window.limparPreviewImagens) window.limparPreviewImagens()
    } else {
      throw new Error(result.message)
    }
  } catch (error) {
    console.error("Erro ao salvar o imóvel:", error)
    mostrarNotificacao(`Erro ao salvar: ${error.message}`)
  }
}

if (formImovel) {
  formImovel.addEventListener("submit", salvarImovel)
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      fecharModalImovel()
    }
  })
}

if (cepInput) {
  cepInput.addEventListener("blur", buscarCep)
}
