let dadosAtuais = { mensagens: [] };

async function carregarMensagens() {
  try {
    const response = await axios.get("api/mensagens.php");

    if (response.data.status === "ok") {
      dadosAtuais.mensagens = response.data.mensagens;
    } else {
      console.error("Erro ao carregar mensagens:", response.data.mensagem);
    }

    const naoLidas = dadosAtuais.mensagens.filter((m) => m.status_leitura === "N").length;
    document.getElementById("contagemNaoLidas").textContent = `${naoLidas} Não Lidas`;

    const listaMensagens = document.getElementById("listaMensagens");
    listaMensagens.innerHTML = dadosAtuais.mensagens
    .map(
        (msg) => `
          <div class="item-mensagem ${msg.status_leitura === "N" ? "nao-lida" : ""}" onclick="visualizarMensagem(${msg.id_mensagem})">
              
            <div class="avatar-mensagem">
              ${msg.email_remetente?.charAt(0)?.toUpperCase() || '?'}
            </div>

                          <div class="conteudo-mensagem">
                  <div class="cabecalho-mensagem">
                      <span class="remetente-mensagem">${msg.email_remetente}</span>
                      <span class="data-mensagem">${msg.data}</span>
                  </div>
                  <div class="assunto-mensagem">${msg.assunto}</div>
                  <div class="preview-mensagem">${msg.conteudo}</div>
              </div>
          </div>
      `
      )
      .join("");

  } catch (error) {
    console.error("Erro ao carregar mensagens:", error);
  }
}

async function visualizarMensagem(id) {
  const msg = dadosAtuais.mensagens.find((m) => m.id_mensagem == id);
  if (!msg) return;

  msg.status_leitura = "S"; 

  document.getElementById("tituloModalMensagem").textContent = msg.assunto;
  document.getElementById("corpoModalMensagem").innerHTML = `
    <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--cor-borda);">
        <strong>De:</strong> ${msg.email_remetente}<br>
        ${msg.telefone ? `<strong>Telefone:</strong> ${msg.telefone}<br>` : ''}
        <strong>Data:</strong> ${msg.data}
    </div>
    <p style="line-height: 1.6; color: var(--texto-primario);">${msg.conteudo}</p>
  `;

  const btnResponder = document.getElementById("btnResponderWpp");

  if (msg.telefone && msg.telefone.trim() !== '') {
    
    const numeroLimpo = msg.telefone.replace(/\D/g, '');
    
    btnResponder.href = `https://wa.me/55${numeroLimpo}`;
    
    btnResponder.style.display = 'inline-block'; 
  
  } else {
    btnResponder.style.display = 'none';
    btnResponder.href = '#';
  }


  abrirModal("modalMensagem");
  carregarMensagens(); 

  // Atualiza no banco (marcar como lida)
  await axios.post("controllers/mensagens.php", { marcarLida: id });
}