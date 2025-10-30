// ========================================
// MÓDULO DE MENSAGENS
// Gerencia listagem e visualização de mensagens
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
