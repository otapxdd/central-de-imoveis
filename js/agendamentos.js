// // ========================================
// // MÓDULO DE AGENDAMENTOS
// // Gerencia agendamentos de visitas
// // ========================================

// function formatarData(data) {
//   const options = { year: "numeric", month: "2-digit", day: "2-digit" }
//   return new Date(data).toLocaleDateString("pt-BR", options)
// }

// function obterClasseBadgeStatusAgendamento(status) {
//   switch (status) {
//     case "pendente":
//       return "warning"
//     case "confirmado":
//       return "success"
//     case "cancelado":
//       return "danger"
//     default:
//       return ""
//   }
// }

// function mostrarNotificacao(mensagem, tipo = "sucesso") {
//   console.log(`Notificação (${tipo}): ${mensagem}`)
// }

// function mostrarModalConfirmacao(titulo, mensagem, callback) {
//   console.log(`Modal (${titulo}): ${mensagem}`)
//   callback()
// }

// function carregarAgendamentos() {
//   const tbody = document.getElementById("corpoTabelaAgendamentos")
//   tbody.innerHTML = dadosAtuais.agendamentos
//     .map(
//       (ag) => `
//         <tr>
//             <td><strong>${ag.cliente}</strong></td>
//             <td>${ag.imovel}</td>
//             <td>${formatarData(ag.data)}</td>
//             <td>${ag.horario}</td>
//             <td><span class="badge badge-${obterClasseBadgeStatusAgendamento(ag.status)}">${ag.status}</span></td>
//             <td>
//                 ${
//                   ag.status === "pendente"
//                     ? `
//                     <button class="btn btn-icone btn-sucesso" onclick="confirmarAgendamento(${ag.id})" title="Confirmar">
//                         <i class="fas fa-check"></i>
//                     </button>
//                 `
//                     : ""
//                 }
//                 <button class="btn btn-icone btn-perigo" onclick="cancelarAgendamento(${ag.id})" title="Cancelar">
//                     <i class="fas fa-times"></i>
//                 </button>
//             </td>
//         </tr>
//     `,
//     )
//     .join("")
// }

// function confirmarAgendamento(id) {
//   const ag = dadosAtuais.agendamentos.find((a) => a.id === id)
//   if (ag) {
//     ag.status = "confirmado"
//     carregarAgendamentos()
//     mostrarNotificacao("Agendamento confirmado!")
//   }
// }

// function cancelarAgendamento(id) {
//   mostrarModalConfirmacao("Cancelar Agendamento", "Tem certeza que deseja cancelar este agendamento?", () => {
//     const ag = dadosAtuais.agendamentos.find((a) => a.id === id)
//     if (ag) {
//       ag.status = "cancelado"
//       carregarAgendamentos()
//       mostrarNotificacao("Agendamento cancelado", "aviso")
//     }
//   })
// }
