// ========================================
// MÓDULO DE MENSAGENS
// Gerencia mensagens do sistema
// ========================================

async function carregarMensagens() {
  try {
    // Garante que dadosAtuais existe
    if (typeof dadosAtuais === "undefined") {
      console.error("dadosAtuais não está definido")
      return
    }
    
    const response = await fetchComLoading("api/mensagens.php", {}, "Carregando mensagens...");

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    // Verifica se a resposta tem o formato esperado
    if (data.status === "ok" && Array.isArray(data.mensagens)) {
      dadosAtuais.mensagens = data.mensagens;
    } else if (Array.isArray(data)) {
      // Se a resposta for diretamente um array
      dadosAtuais.mensagens = data;
    } else {
      console.error("Formato de dados inesperado:", data);
      dadosAtuais.mensagens = [];
    }

    const naoLidas = dadosAtuais.mensagens.filter((m) => m.status_leitura === "N").length;
    const contagemEl = document.getElementById("contagemNaoLidas");
    if (contagemEl) {
      contagemEl.textContent = `${naoLidas} Não Lidas`;
    }

    const listaMensagens = document.getElementById("listaMensagens");
    if (listaMensagens) {
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
    }

  } catch (error) {
    console.error("Erro ao carregar mensagens:", error);
    if (typeof mostrarNotificacao === "function") {
      mostrarNotificacao("Erro ao carregar mensagens", "erro");
    }
  }
}

async function visualizarMensagem(id) {
  if (!dadosAtuais || !Array.isArray(dadosAtuais.mensagens)) {
    console.warn("dadosAtuais.mensagens não está disponível")
    return
  }
  
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
  try {
    await fetch("controllers/mensagens.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ marcarLida: id }),
    });
  } catch (error) {
    console.error("Erro ao marcar mensagem como lida:", error);
  }
}