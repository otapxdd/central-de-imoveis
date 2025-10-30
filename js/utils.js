// ========================================
// MÓDULO DE UTILITÁRIOS
// Funções auxiliares e helpers
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
