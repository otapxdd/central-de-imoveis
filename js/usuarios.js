// // ========================================
// // MÓDULO DE USUÁRIOS
// // Gerencia listagem e filtros de usuários
// // ========================================

// function obterClasseBadgeTipo(tipo) {
//   return "success" 
// }

// function formatarData(data) {
//   return new Date(data).toLocaleDateString()
// }

// function carregarUsuarios() {
//   renderizarTabelaUsuarios(dadosAtuais.usuarios)
// }

// function renderizarTabelaUsuarios(usuarios) {
//   const tbody = document.getElementById("corpoTabelaUsuarios")
//   tbody.innerHTML = usuarios
//     .map(
//       (usuario) => `
//         <tr>
//             <td><strong>${usuario.nome}</strong></td>
//             <td>${usuario.email}</td>
//             <td><span class="badge badge-${obterClasseBadgeTipo(usuario.tipo)}">${usuario.tipo}</span></td>
//             <td>${usuario.imoveis}</td>
//             <td>${formatarData(usuario.dataCadastro)}</td>
//             <td>
//                 <button class="btn btn-icone btn-secundario" title="Ver Imóveis">
//                     <i class="fas fa-home"></i>
//                 </button>
//                 <button class="btn btn-icone btn-secundario" title="Editar">
//                     <i class="fas fa-edit"></i>
//                 </button>
//                 <button class="btn btn-icone btn-perigo" title="Bloquear">
//                     <i class="fas fa-ban"></i>
//                 </button>
//             </td>
//         </tr>
//     `,
//     )
//     .join("")
// }

// function filtrarUsuarios() {
//   const tipo = document.getElementById("filtroTipoUsuario").value
//   const busca = document.getElementById("buscarUsuario").value.toLowerCase()

//   let filtrados = dadosAtuais.usuarios

//   if (tipo) filtrados = filtrados.filter((u) => u.tipo === tipo)
//   if (busca)
//     filtrados = filtrados.filter((u) => u.nome.toLowerCase().includes(busca) || u.email.toLowerCase().includes(busca))

//   renderizarTabelaUsuarios(filtrados)
// }
