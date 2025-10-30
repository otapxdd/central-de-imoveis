

/**
 * @param {string}
 */
function abrirModal(idModal) {
  const modal = document.getElementById(idModal)
  if (modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

/**
 * @param {string}
 */
function fecharModal(idModal) {
  const modal = document.getElementById(idModal)
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

/**
 * @param {string} 
 * @param {string} 
 * @param {Function} 
 */
function mostrarModalConfirmacao(titulo, mensagem, aoConfirmar) {
  const tituloEl = document.getElementById("tituloModalConfirmacao")
  const corpoEl = document.getElementById("corpoModalConfirmacao")
  const btnConfirmar = document.getElementById("btnModalConfirmacao")

  if (!tituloEl || !corpoEl || !btnConfirmar) {
    console.warn("Elementos do modal de confirmação não encontrados")
    return
  }

  tituloEl.textContent = titulo
  corpoEl.innerHTML = `<p>${mensagem}</p>`

  const novoBtn = btnConfirmar.cloneNode(true)
  btnConfirmar.parentNode.replaceChild(novoBtn, btnConfirmar)

  novoBtn.onclick = () => {
    aoConfirmar()
    fecharModal("modalConfirmacao")
  }

  abrirModal("modalConfirmacao")
}

/**
 * @param {string} 
 * @param {string} 
 * @param {number} 
 */
function mostrarNotificacao(mensagem, tipo = "sucesso", duracao = 3000) {
  const notificacao = document.getElementById("notificacao")
  const mensagemNotificacao = document.getElementById("mensagemNotificacao")
  const icone = notificacao?.querySelector("i")

  if (!notificacao || !mensagemNotificacao) {
    console.warn("Elementos de notificação não encontrados")
    return
  }

  mensagemNotificacao.textContent = mensagem

  const configs = {
    aviso: { cor: "var(--cor-aviso)", icone: "fas fa-exclamation-triangle" },
    erro: { cor: "var(--cor-perigo)", icone: "fas fa-times-circle" },
    sucesso: { cor: "var(--cor-sucesso)", icone: "fas fa-check-circle" },
  }

  const config = configs[tipo] || configs.sucesso
  notificacao.style.background = config.cor
  if (icone) icone.className = config.icone

  notificacao.classList.add("active")

  setTimeout(() => {
    notificacao.classList.remove("active")
  }, duracao)
}

function alternarTemaEscuro() {
  document.body.classList.toggle("tema-escuro")
  const icone = document.querySelector("#alternarTema i")

  if (!icone) return

  if (document.body.classList.contains("tema-escuro")) {
    icone.classList.remove("fa-moon")
    icone.classList.add("fa-sun")
    localStorage.setItem("tema", "escuro")
  } else {
    icone.classList.remove("fa-sun")
    icone.classList.add("fa-moon")
    localStorage.setItem("tema", "claro")
  }
}

function carregarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema")
  if (temaSalvo === "escuro") {
    document.body.classList.add("tema-escuro")
    const icone = document.querySelector("#alternarTema i")
    if (icone) {
      icone.classList.remove("fa-moon")
      icone.classList.add("fa-sun")
    }
  }
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active")
    document.body.style.overflow = ""
  }
})

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modaisAtivos = document.querySelectorAll(".modal.active")
    modaisAtivos.forEach((modal) => {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    })
  }
})
