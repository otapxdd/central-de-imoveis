// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO (Bootstrap)
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  if (typeof inicializarUploadImagens === "function") inicializarUploadImagens()
  if (typeof inicializarAplicacao === "function") inicializarAplicacao()
  if (typeof configurarEventos === "function") configurarEventos()
  if (typeof carregarDadosIniciais === "function") carregarDadosIniciais()
  if (typeof carregarTemaSalvo === "function") carregarTemaSalvo()
})
