// ========================================
// SISTEMA DE AUTENTICAÇÃO
// ========================================

///////////////!!!! SOMENTE PRA TESTE !!!!

function verificarAutenticacao(tipoRequerido) {
  const sessaoStr = localStorage.getItem("sessao_central_imoveis")

  if (!sessaoStr) {
    window.location.href = "login.html"
    return
  }

  const sessao = JSON.parse(sessaoStr)
  const agora = new Date().getTime()
  const umDia = 24 * 60 * 60 * 1000

  // Verificar se a sessão expirou (24 horas)
  if (agora - sessao.timestamp > umDia) {
    // Sessão expirada
    localStorage.removeItem("sessao_central_imoveis")
    window.location.href = "login.html"
    return
  }

  if (sessao.tipo !== tipoRequerido) {
    if (sessao.tipo === "admin") {
      window.location.href = "index.html"
    } else if (sessao.tipo === "inquilino") {
      window.location.href = "inquilino.html"
    } else {
      localStorage.removeItem("sessao_central_imoveis")
      window.location.href = "login.html"
    }
    return
  }

  console.log("[v0] Usuário autenticado:", sessao.tipo)
}

function fazerLogout(event) {
  if (event) {
    event.preventDefault()
  }

  localStorage.removeItem("sessao_central_imoveis")

  window.location.href = "login.html"
}

setInterval(
  () => {
    const sessaoStr = localStorage.getItem("sessao_central_imoveis")
    if (sessaoStr) {
      const sessao = JSON.parse(sessaoStr)
      sessao.timestamp = new Date().getTime()
      localStorage.setItem("sessao_central_imoveis", JSON.stringify(sessao))
      console.log("[v0] Sessão renovada")
    }
  },
  30 * 60 * 1000,
)
