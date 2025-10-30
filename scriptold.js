// // ========================================
// // DADOS SIMULADOS (MOCK DATA)
// // ========================================
// const dadosSimulados = {
//   imoveis: [
//     {
//       id: 1,
//       codigo: "IMV001",
//       nome: "Apartamento Luxo Centro",
//       proprietario: "João Silva",
//       tipo: "apartamento",
//       cidade: "São Paulo",
//       valor: 850000,
//       status: "aprovado",
//       quartos: 3,
//       banheiros: 2,
//       area: 120,
//     },
//     {
//       id: 2,
//       codigo: "IMV002",
//       nome: "Casa com Piscina",
//       proprietario: "Maria Santos",
//       tipo: "casa",
//       cidade: "Campinas",
//       valor: 1200000,
//       status: "aprovado",
//       quartos: 4,
//       banheiros: 3,
//       area: 250,
//     },
//     {
//       id: 3,
//       codigo: "IMV003",
//       nome: "Terreno Comercial",
//       proprietario: "Pedro Costa",
//       tipo: "terreno",
//       cidade: "Santos",
//       valor: 450000,
//       status: "pendente",
//       quartos: 0,
//       banheiros: 0,
//       area: 500,
//     },
//     {
//       id: 4,
//       codigo: "IMV004",
//       nome: "Sala Comercial",
//       proprietario: "Ana Lima",
//       tipo: "comercial",
//       cidade: "São Paulo",
//       valor: 380000,
//       status: "pendente",
//       quartos: 0,
//       banheiros: 1,
//       area: 80,
//     },
//     {
//       id: 5,
//       codigo: "IMV005",
//       nome: "Cobertura Vista Mar",
//       proprietario: "Carlos Mendes",
//       tipo: "apartamento",
//       cidade: "Santos",
//       valor: 2500000,
//       status: "aprovado",
//       quartos: 5,
//       banheiros: 4,
//       area: 350,
//     },
//     {
//       id: 6,
//       codigo: "IMV006",
//       nome: "Casa Condomínio Fechado",
//       proprietario: "Juliana Rocha",
//       tipo: "casa",
//       cidade: "Campinas",
//       valor: 980000,
//       status: "pendente",
//       quartos: 3,
//       banheiros: 2,
//       area: 180,
//     },
//     {
//       id: 7,
//       codigo: "IMV007",
//       nome: "Apartamento Compacto",
//       proprietario: "Roberto Alves",
//       tipo: "apartamento",
//       cidade: "São Paulo",
//       valor: 420000,
//       status: "aprovado",
//       quartos: 2,
//       banheiros: 1,
//       area: 65,
//     },
//     {
//       id: 8,
//       codigo: "IMV008",
//       nome: "Galpão Industrial",
//       proprietario: "Empresa XYZ",
//       tipo: "comercial",
//       cidade: "Campinas",
//       valor: 1800000,
//       status: "pendente",
//       quartos: 0,
//       banheiros: 2,
//       area: 800,
//     },
//     {
//       id: 9,
//       codigo: "IMV009",
//       nome: "Chácara Recreio",
//       proprietario: "Fernando Dias",
//       tipo: "terreno",
//       cidade: "Campinas",
//       valor: 750000,
//       status: "reprovado",
//       quartos: 0,
//       banheiros: 0,
//       area: 2000,
//     },
//     {
//       id: 10,
//       codigo: "IMV010",
//       nome: "Loft Moderno",
//       proprietario: "Beatriz Souza",
//       tipo: "apartamento",
//       cidade: "São Paulo",
//       valor: 650000,
//       status: "pendente",
//       quartos: 1,
//       banheiros: 1,
//       area: 85,
//     },
//     {
//       id: 11,
//       codigo: "IMV011",
//       nome: "Casa Sobrado",
//       proprietario: "Marcos Ferreira",
//       tipo: "casa",
//       cidade: "Santos",
//       valor: 890000,
//       status: "aprovado",
//       quartos: 3,
//       banheiros: 3,
//       area: 200,
//     },
//     {
//       id: 12,
//       codigo: "IMV012",
//       nome: "Apartamento Garden",
//       proprietario: "Luciana Martins",
//       tipo: "apartamento",
//       cidade: "Campinas",
//       valor: 720000,
//       status: "pendente",
//       quartos: 3,
//       banheiros: 2,
//       area: 140,
//     },
//     {
//       id: 13,
//       codigo: "IMV013",
//       nome: "Ponto Comercial",
//       proprietario: "José Oliveira",
//       tipo: "comercial",
//       cidade: "São Paulo",
//       valor: 550000,
//       status: "pendente",
//       quartos: 0,
//       banheiros: 1,
//       area: 120,
//     },
//     {
//       id: 14,
//       codigo: "IMV014",
//       nome: "Casa Térrea",
//       proprietario: "Sandra Ribeiro",
//       tipo: "casa",
//       cidade: "Santos",
//       valor: 680000,
//       status: "aprovado",
//       quartos: 2,
//       banheiros: 2,
//       area: 150,
//     },
//     {
//       id: 15,
//       codigo: "IMV015",
//       nome: "Apartamento Duplex",
//       proprietario: "Ricardo Gomes",
//       tipo: "apartamento",
//       cidade: "São Paulo",
//       valor: 1100000,
//       status: "pendente",
//       quartos: 4,
//       banheiros: 3,
//       area: 180,
//     },
//     {
//       id: 16,
//       codigo: "IMV016",
//       nome: "Terreno Urbano",
//       proprietario: "Paula Castro",
//       tipo: "terreno",
//       cidade: "Campinas",
//       valor: 320000,
//       status: "pendente",
//       quartos: 0,
//       banheiros: 0,
//       area: 350,
//     },
//     {
//       id: 17,
//       codigo: "IMV017",
//       nome: "Studio Decorado",
//       proprietario: "Thiago Barros",
//       tipo: "apartamento",
//       cidade: "São Paulo",
//       valor: 380000,
//       status: "aprovado",
//       quartos: 1,
//       banheiros: 1,
//       area: 45,
//     },
//     {
//       id: 18,
//       codigo: "IMV018",
//       nome: "Casa Colonial",
//       proprietario: "Adriana Pinto",
//       tipo: "casa",
//       cidade: "Santos",
//       valor: 1450000,
//       status: "pendente",
//       quartos: 5,
//       banheiros: 4,
//       area: 320,
//     },
//   ],

//   usuarios: [
//     { id: 1, nome: "João Silva", email: "joao@email.com", tipo: "usuario", imoveis: 3, dataCadastro: "2024-01-15" },
//     { id: 2, nome: "Maria Santos", email: "maria@email.com", tipo: "corretor", imoveis: 8, dataCadastro: "2023-11-20" },
//     { id: 3, nome: "Pedro Costa", email: "pedro@email.com", tipo: "usuario", imoveis: 1, dataCadastro: "2024-02-10" },
//     { id: 4, nome: "Ana Lima", email: "ana@email.com", tipo: "corretor", imoveis: 5, dataCadastro: "2023-09-05" },
//     {
//       id: 5,
//       nome: "Carlos Mendes",
//       email: "carlos@email.com",
//       tipo: "usuario",
//       imoveis: 2,
//       dataCadastro: "2024-03-01",
//     },
//     { id: 6, nome: "Juliana Rocha", email: "juliana@email.com", tipo: "admin", imoveis: 0, dataCadastro: "2023-06-12" },
//     {
//       id: 7,
//       nome: "Roberto Alves",
//       email: "roberto@email.com",
//       tipo: "usuario",
//       imoveis: 1,
//       dataCadastro: "2024-01-28",
//     },
//   ],

//   mensagens: [
//     {
//       id: 1,
//       remetente: "João Silva",
//       assunto: "Dúvida sobre imóvel",
//       mensagem: "Gostaria de mais informações sobre o apartamento IMV001.",
//       data: "2024-10-15 14:30",
//       lida: false,
//     },
//     {
//       id: 2,
//       remetente: "Maria Santos",
//       assunto: "Aprovação pendente",
//       mensagem: "Quando meu imóvel será aprovado?",
//       data: "2024-10-14 10:15",
//       lida: false,
//     },
//     {
//       id: 3,
//       remetente: "Pedro Costa",
//       assunto: "Alteração de dados",
//       mensagem: "Preciso alterar o valor do meu terreno.",
//       data: "2024-10-13 16:45",
//       lida: true,
//     },
//     {
//       id: 4,
//       remetente: "Ana Lima",
//       assunto: "Agendamento de visita",
//       mensagem: "Cliente interessado em visitar a sala comercial.",
//       data: "2024-10-12 09:20",
//       lida: false,
//     },
//     {
//       id: 5,
//       remetente: "Carlos Mendes",
//       assunto: "Documentação",
//       mensagem: "Enviei os documentos solicitados por email.",
//       data: "2024-10-11 11:30",
//       lida: true,
//     },
//     {
//       id: 6,
//       remetente: "Juliana Rocha",
//       assunto: "Proposta recebida",
//       mensagem: "Recebi uma proposta para minha casa.",
//       data: "2024-10-10 15:00",
//       lida: false,
//     },
//   ],

//   agendamentos: [
//     {
//       id: 1,
//       cliente: "Lucas Ferreira",
//       imovel: "Apartamento Luxo Centro",
//       data: "2024-10-20",
//       horario: "14:00",
//       status: "confirmado",
//     },
//     {
//       id: 2,
//       cliente: "Camila Souza",
//       imovel: "Casa com Piscina",
//       data: "2024-10-21",
//       horario: "10:30",
//       status: "pendente",
//     },
//     {
//       id: 3,
//       cliente: "Rafael Oliveira",
//       imovel: "Cobertura Vista Mar",
//       data: "2024-10-22",
//       horario: "16:00",
//       status: "confirmado",
//     },
//     {
//       id: 4,
//       cliente: "Fernanda Lima",
//       imovel: "Loft Moderno",
//       data: "2024-10-23",
//       horario: "11:00",
//       status: "pendente",
//     },
//     {
//       id: 5,
//       cliente: "Bruno Costa",
//       imovel: "Casa Sobrado",
//       data: "2024-10-24",
//       horario: "15:30",
//       status: "cancelado",
//     },
//   ],

//   categorias: [
//     { id: 1, nome: "Casa", icone: "fa-home", quantidade: 5 },
//     { id: 2, nome: "Apartamento", icone: "fa-building", quantidade: 8 },
//     { id: 3, nome: "Terreno", icone: "fa-map", quantidade: 3 },
//     { id: 4, nome: "Comercial", icone: "fa-store", quantidade: 4 },
//   ],

//   comissoes: [
//     {
//       id: 1,
//       corretor: "Maria Santos",
//       imovel: "Apartamento Luxo Centro",
//       valor: 850000,
//       comissao: 42500,
//       data: "2024-10-01",
//     },
//     { id: 2, corretor: "Ana Lima", imovel: "Casa com Piscina", valor: 1200000, comissao: 60000, data: "2024-10-05" },
//     {
//       id: 3,
//       corretor: "Maria Santos",
//       imovel: "Cobertura Vista Mar",
//       valor: 2500000,
//       comissao: 125000,
//       data: "2024-10-08",
//     },
//     { id: 4, corretor: "Ana Lima", imovel: "Apartamento Compacto", valor: 420000, comissao: 21000, data: "2024-10-12" },
//   ],

//   atividades: [
//     {
//       tipo: "novo",
//       mensagem: "João Silva enviou um novo imóvel",
//       tempo: "5 minutos atrás",
//       icone: "fa-home",
//       cor: "#D4A843",
//     },
//     {
//       tipo: "aprovacao",
//       mensagem: "Imóvel IMV007 foi aprovado",
//       tempo: "1 hora atrás",
//       icone: "fa-check",
//       cor: "#4CAF50",
//     },
//     {
//       tipo: "usuario",
//       mensagem: "Novo usuário cadastrado: Lucas Ferreira",
//       tempo: "2 horas atrás",
//       icone: "fa-user",
//       cor: "#2196F3",
//     },
//     {
//       tipo: "mensagem",
//       mensagem: "Nova mensagem de Maria Santos",
//       tempo: "3 horas atrás",
//       icone: "fa-envelope",
//       cor: "#FF9800",
//     },
//     {
//       tipo: "agendamento",
//       mensagem: "Visita agendada para IMV001",
//       tempo: "5 horas atrás",
//       icone: "fa-calendar",
//       cor: "#9C27B0",
//     },
//   ],
// }

// const dadosAtuais = {
//   imoveis: [...dadosSimulados.imoveis],
//   usuarios: [...dadosSimulados.usuarios],
//   mensagens: [...dadosSimulados.mensagens],
//   agendamentos: [...dadosSimulados.agendamentos],
//   categorias: [...dadosSimulados.categorias],
// }

// // ========================================
// // VARIÁVEIS GLOBAIS DO MAPA
// // ========================================
// let googleMapsApiPronto = false
// let mapaGoogle
// let marcadoresAtuais = []
// let infoWindowGoogle

// window.google = window.google || {}

// // ========================================
// // INICIALIZAÇÃO DA APLICAÇÃO
// // ========================================
// document.addEventListener('DOMContentLoaded', () => {

//   const dropZone = document.getElementById('drop-zone');
//   const fileInput = document.getElementById('file-upload');
//   const previewArea = document.getElementById('image-preview-area');

//   let filesToUpload = new DataTransfer();

//   dropZone.addEventListener('click', (e) => {
//     const label = e.target.closest('label[for="file-upload"]');
//     if (label) {
//       return;
//     }
//     fileInput.click();
//   });

//   function processFiles(newFiles) {
//     [...newFiles].forEach(file => {
//       if (file.type.startsWith('image/')) {
//         filesToUpload.items.add(file);
//         createPreview(file);
//       } else {
//         console.warn(`O arquivo "${file.name}" não é uma imagem e foi ignorado.`);
//       }
//     });
//     fileInput.files = filesToUpload.files;
//   }

//   fileInput.addEventListener('change', (e) => {
//     processFiles(e.target.files);
//   });

//   ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
//     dropZone.addEventListener(eventName, preventDefaults, false);
//   });

//   function preventDefaults(e) {
//     e.preventDefault();
//     e.stopPropagation();
//   }

//   ['dragenter', 'dragover'].forEach(eventName => {
//     dropZone.addEventListener(eventName, () => {
//       dropZone.classList.add('drag-over');
//     }, false);
//   });

//   ['dragleave', 'drop'].forEach(eventName => {
//     dropZone.addEventListener(eventName, () => {
//       dropZone.classList.remove('drag-over');
//     }, false);
//   });

//   dropZone.addEventListener('drop', (e) => {
//     const dt = e.dataTransfer;
//     const files = dt.files;
//     processFiles(files);
//   }, false);


//   function createPreview(file) {
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const previewItem = document.createElement('div');
//       previewItem.className = 'preview-item';
//       previewItem.dataset.fileName = file.name;

//       const img = document.createElement('img');
//       img.src = e.target.result;
//       img.className = 'img-preview';
//       img.alt = file.name;

//       const removeBtn = document.createElement('button');
//       removeBtn.className = 'remove-btn';
//       removeBtn.innerHTML = '&times;';

//       removeBtn.addEventListener('click', () => {
//         removeFile(file.name);
//         previewItem.remove();
//       });

//       previewItem.appendChild(img);
//       previewItem.appendChild(removeBtn);

//       previewArea.appendChild(previewItem);
//     };

//     reader.readAsDataURL(file);
//   }

//   function removeFile(fileName) {
//     let newFilesToUpload = new DataTransfer();

//     for (let i = 0; i < filesToUpload.files.length; i++) {

//       const file = filesToUpload.files[i];

//       if (file.name !== fileName) {
//         newFilesToUpload.items.add(file);
//       }
//     }

//     filesToUpload = newFilesToUpload;
//     fileInput.files = filesToUpload.files;
//   }

//   // Função exposta para limpar o preview e resetar o input de arquivos
//   // Isso permite que outras funções (ex: salvarImovel, fecharModalImovel) façam a limpeza
//   window.limparPreviewImagens = function () {
//     try {
//       filesToUpload = new DataTransfer();
//       fileInput.value = '';
//       fileInput.files = filesToUpload.files;
//       if (previewArea) previewArea.innerHTML = '';
//       // remover qualquer estado visual do dropZone
//       if (dropZone) dropZone.classList.remove('drag-over');
//     } catch (e) {
//       console.warn('Erro ao limpar preview de imagens:', e);
//     }
//   }
//   inicializarAplicacao()
//   configurarEventos()
//   carregarDadosIniciais()
// })

// async function carregarDadosIniciais() {
//   const endpoints = [
//     { key: 'imoveis', url: 'api/imoveis.php' },
//     { key: 'usuarios', url: 'api/usuarios.php' },
//     { key: 'mensagens', url: 'api/mensagens.php' },
//     { key: 'categorias', url: 'api/categorias.php' },
//   ]

//   try {
//     const promises = endpoints.map(ep => fetch(ep.url).then(r => ({ ep, r })).catch(err => ({ ep, err })))
//     const results = await Promise.all(promises)

//     results.forEach(({ ep, r, err }) => {
//       if (err) {
//         console.warn(`Não foi possível acessar ${ep.url}:`, err)
//         return
//       }

//       if (!r.ok) {
//         console.warn(`Requisição a ${ep.url} retornou status ${r.status}`)
//         return
//       }

//       r.json()
//         .then((data) => {
//           if (Array.isArray(data)) {
//             dadosAtuais[ep.key] = data
//             console.info(`Dados carregados: ${ep.key} (${data.length})`)
//           } else if (data && typeof data === 'object') {
//             if (Array.isArray(data.items)) dadosAtuais[ep.key] = data.items
//           }
//         })
//         .catch((e) => console.warn(`Erro ao parsear JSON de ${ep.url}:`, e))
//     })

//     setTimeout(() => {
//       carregarDashboard()
//       carregarImoveis()
//       carregarAprovacao()
//       carregarUsuarios()
//       carregarMensagens()
//     }, 200)
//   } catch (error) {
//     console.error('Erro ao carregar dados iniciais:', error)
//     // fallback: carrega conteúdo com dados simulados
//     carregarDashboard()
//     carregarImoveis()
//     carregarAprovacao()
//   }
// }

// function initMap() {
//   console.log("Google Maps API está pronta.")
//   googleMapsApiPronto = true

//   if (document.getElementById("pagina-mapa").classList.contains("active")) {
//     carregarMapa()
//   }
// }

// function inicializarInstanciaDoMapa() {
//   if (mapaGoogle) return

//   const centroInicial = { lat: -23.55052, lng: -46.633308 }
//   const elementoMapa = document.getElementById("visualizacaoMapa")

//   if (elementoMapa && typeof window.google !== "undefined") {
//     mapaGoogle = new window.google.maps.Map(elementoMapa, {
//       zoom: 10,
//       center: centroInicial,
//       mapTypeId: "roadmap",
//     })

//     infoWindowGoogle = new window.google.maps.InfoWindow()
//     console.log("Instância do Google Map criada com sucesso.")
//   } else {
//     console.error("Elemento 'visualizacaoMapa' não foi encontrado ou Google Maps não carregado.")
//   }
// }

// function inicializarAplicacao() {
//   const itensNavegacao = document.querySelectorAll(".item-navegacao")
//   itensNavegacao.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       e.preventDefault()
//       const pagina = this.getAttribute("data-pagina")
//       navegarParaPagina(pagina)
//     })
//   })
// }

// function configurarEventos() {
//   // Alternar menu mobile
//   const alternarMenuMobile = document.getElementById("alternarMenuMobile")
//   const barraLateral = document.getElementById("barraLateral")

//   if (alternarMenuMobile) {
//     alternarMenuMobile.addEventListener("click", () => {
//       barraLateral.classList.toggle("active")
//     })
//   }

//   // Alternar tema
//   const alternarTema = document.getElementById("alternarTema")
//   alternarTema.addEventListener("click", alternarTemaEscuro)

//   document.getElementById("filtroStatus")?.addEventListener("change", filtrarImoveis)
//   document.getElementById("filtroTipo")?.addEventListener("change", filtrarImoveis)
//   document.getElementById("filtroCidade")?.addEventListener("change", filtrarImoveis)
//   document.getElementById("buscarImovel")?.addEventListener("input", filtrarImoveis)

//   document.getElementById("filtroTipoUsuario")?.addEventListener("change", filtrarUsuarios)
//   document.getElementById("buscarUsuario")?.addEventListener("input", filtrarUsuarios)

//   document.getElementById("filtroMapaCidade")?.addEventListener("change", filtrarImoveisMapa)
//   document.getElementById("filtroMapaTipo")?.addEventListener("change", filtrarImoveisMapa)

//   const formularioConfiguracoes = document.querySelector(".formulario-configuracoes")
//   if (formularioConfiguracoes) {
//     formularioConfiguracoes.addEventListener("submit", (e) => {
//       e.preventDefault()
//       mostrarNotificacao("Configurações salvas com sucesso!")
//     })
//   }

//   const opcoesTema = document.querySelectorAll('input[name="tema"]')
//   opcoesTema.forEach((opcao) => {
//     opcao.addEventListener("change", function () {
//       if (this.value === "escuro") {
//         document.body.classList.add("tema-escuro")
//       } else {
//         document.body.classList.remove("tema-escuro")
//       }
//     })
//   })
// }

// // ========================================
// // NAVEGAÇÃO
// // ========================================
// function navegarParaPagina(pagina) {
//   document.querySelectorAll(".item-navegacao").forEach((item) => {
//     item.classList.remove("active")
//   })
//   document.querySelector(`[data-pagina="${pagina}"]`).classList.add("active")

//   const titulos = {
//     dashboard: "Dashboard",
//     imoveis: "Gestão de Imóveis",
//     aprovacao: "Aprovação de Imóveis",
//     usuarios: "Usuários",
//     mensagens: "Mensagens",
//     mapa: "Mapa",
//     categorias: "Categorias",
//     agendamentos: "Agendamentos",
//     financeiro: "Financeiro",
//     configuracoes: "Configurações",
//   }
//   document.getElementById("tituloPagina").textContent = titulos[pagina]

//   document.querySelectorAll(".conteudo-pagina").forEach((conteudo) => {
//     conteudo.classList.remove("active")
//   })
//   document.getElementById(`pagina-${pagina}`).classList.add("active")

//   switch (pagina) {
//     case "dashboard":
//       carregarDashboard()
//       break
//     case "imoveis":
//       carregarImoveis()
//       break
//     case "aprovacao":
//       carregarAprovacao()
//       break
//     case "usuarios":
//       carregarUsuarios()
//       break
//     case "mensagens":
//       carregarMensagens()
//       break
//     case "mapa":
//       if (googleMapsApiPronto) {
//         inicializarInstanciaDoMapa()
//       }
//       carregarMapa()
//       break
//     case "categorias":
//       carregarCategorias()
//       break
//     case "agendamentos":
//       carregarAgendamentos()
//       break
//     case "financeiro":
//       carregarFinanceiro()
//       break
//   }

//   document.getElementById("barraLateral").classList.remove("active")
// }

// /////////////////////////////////////////////////

// const graficosAtivos = {
//   graficoTipo: null,
//   graficoCidade: null
// };

// document.addEventListener("DOMContentLoaded", () => {
//   carregarDashboard();
// });

// async function carregarDashboard() {
//   try {
//     const response = await fetch('api/imoveis.php');
//     if (!response.ok) {
//       throw new Error(`Erro ao buscar dados: ${response.statusText}`);
//     }
//     const imoveis = await response.json();

//     const stats = {
//       total: imoveis.length,
//       pendentes: 0,
//       aprovados: 0,
//       reprovados: 0
//     };

//     const agregados = {
//       tipos: {},
//       cidades: {}
//     };

//     for (const imovel of imoveis) {
//       switch (imovel.status) {
//         case 'pendente':
//           stats.pendentes++;
//           break;
//         case 'aprovado':
//           stats.aprovados++;
//           break;
//         case 'reprovado':
//           stats.reprovados++;
//           break;
//       }

//       if (imovel.tipo) {
//         agregados.tipos[imovel.tipo] = (agregados.tipos[imovel.tipo] || 0) + 1;
//       }

//       if (imovel.cidade) {
//         agregados.cidades[imovel.cidade] = (agregados.cidades[imovel.cidade] || 0) + 1;
//       }
//     }

//     document.getElementById('stat-total').textContent = stats.total;
//     document.getElementById('stat-pendentes').textContent = stats.pendentes;
//     document.getElementById('stat-aprovados').textContent = stats.aprovados;
//     document.getElementById('stat-reprovados').textContent = stats.reprovados;

//     criarGraficos(agregados.tipos, agregados.cidades);

//     carregarListaAtividades();

//   } catch (error) {
//     console.error("Erro ao carregar o dashboard:", error);
//     document.getElementById('pagina-dashboard').innerHTML =
//       `<p style="color: red;">Não foi possível carregar os dados do dashboard. Verifique o console para mais detalhes.</p>`;
//   }
// }

// function carregarListaAtividades() {
//   const listaAtividades = document.getElementById("listaAtividades");
//   listaAtividades.innerHTML = "<p>Nenhuma atividade recente registrada.</p>";
// }

// function criarGraficos(dadosTipos, dadosCidades) {
//   const labelsTipo = Object.keys(dadosTipos);
//   const dataTipo = Object.values(dadosTipos);
//   criarGraficoPizza("graficoTipo", labelsTipo, dataTipo);

//   const labelsCidade = Object.keys(dadosCidades);
//   const dataCidade = Object.values(dadosCidades);
//   criarGraficoBarras("graficoCidade", labelsCidade, dataCidade);
// }

// function criarGraficoPizza(canvasId, labels, data) {
//   if (graficosAtivos[canvasId]) {
//     graficosAtivos[canvasId].destroy();
//   }

//   const ctx = document.getElementById(canvasId).getContext('2d');
//   graficosAtivos[canvasId] = new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: labels,
//       datasets: [{
//         label: 'Imóveis por Tipo',
//         data: data,
//         backgroundColor: [
//           '#D4A843',
//           '#FF9800',
//           '#4CAF50',
//           '#ff0000',
//           '#36A2EB',
//           '#FFCE56',
//           '#9966FF'
//         ],
//         hoverOffset: 4
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: true,
//       plugins: {
//         legend: {
//           position: 'top'
//         }
//       }
//     }
//   });
// }

// function criarGraficoBarras(canvasId, labels, data) {
//   if (graficosAtivos[canvasId]) {
//     graficosAtivos[canvasId].destroy();
//   }

//   const ctx = document.getElementById(canvasId).getContext('2d');
//   graficosAtivos[canvasId] = new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: labels,
//       datasets: [{
//         label: 'Imóveis por Cidade',
//         data: data,
//         backgroundColor: [
//           '#D4A843',
//           '#FF9800',
//           '#4CAF50',
//           '#ff0000',
//           '#36A2EB',
//           '#FFCE56',
//           '#9966FF'
//         ],
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: true,
//       indexAxis: 'y',
//       scales: {
//         x: {
//           beginAtZero: true
//         }
//       },
//       plugins: {
//         legend: {
//           display: false
//         }
//       }
//     }
//   });
// }

// // ========================================
// // FUNÇÕES DE IMÓVEIS
// // ========================================
// function carregarImoveis() {
//   renderizarTabelaImoveis(dadosAtuais.imoveis)
// }

// function renderizarTabelaImoveis(imoveis) {
//   const tbody = document.getElementById("corpoTabelaImoveis")
//   tbody.innerHTML = imoveis
//     .map(
//       (imovel) => `
//         <tr>
//             <td><strong>${imovel.id}</strong></td>
//             <td>${imovel.nome}</td>
//             <td>${imovel.proprietario}</td>
//             <td><span class="badge badge-info">${imovel.tipo}</span></td>
//             <td>${imovel.cidade}</td>
//             <td><strong>R$ ${imovel.valor.toLocaleString("pt-BR")}</strong></td>
//             <td>
//                 <span class="badge badge-${obterClasseBadgeStatus(imovel.status)}">
//                     ${imovel.status}
//                 </span>
//             </td>
//             <td>
//                 <button class="btn btn-icone btn-secundario" onclick="visualizarImovel(${imovel.id})" title="Ver Detalhes">
//                     <i class="fas fa-eye"></i>
//                 </button>
//                 ${imovel.status === "pendente"
//           ? `
//                     <button class="btn btn-icone btn-sucesso" onclick="aprovarImovel(${imovel.id})" title="Aprovar">
//                         <i class="fas fa-check"></i>
//                     </button>
//                     <button class="btn btn-icone btn-perigo" onclick="reprovarImovel(${imovel.id})" title="Reprovar">
//                         <i class="fas fa-times"></i>
//                     </button>
//                 `
//           : ""
//         }
//             </td>
//         </tr>
//     `,
//     )
//     .join("")
// }

// function filtrarImoveis() {
//   const status = document.getElementById("filtroStatus").value
//   const tipo = document.getElementById("filtroTipo").value
//   const cidade = document.getElementById("filtroCidade").value
//   const busca = document.getElementById("buscarImovel").value.toLowerCase()

//   let filtrados = dadosAtuais.imoveis

//   if (status) filtrados = filtrados.filter((i) => i.status === status)
//   if (tipo) filtrados = filtrados.filter((i) => i.tipo === tipo)
//   if (cidade) filtrados = filtrados.filter((i) => i.cidade === cidade)
//   if (busca) {
//     // Se o usuário digitou apenas números, faz match por ID (mais preciso).
//     const somenteNumeros = /^\d+$/.test(busca)
//     filtrados = filtrados.filter((i) => {
//       const nomeMatch = i.nome && i.nome.toLowerCase().includes(busca)
//       const idMatch = String(i.id).includes(busca)
//       return somenteNumeros ? String(i.id) === busca : nomeMatch || idMatch
//     })
//   }

//   renderizarTabelaImoveis(filtrados)
// }

// function mudarSlide(botao, direcao) {
    
//     const container = botao.closest('.imagem-slider-container');
//     if (!container) {
//         console.error("Não foi possível encontrar o .imagem-slider-container");
//         return; 
//     }

//     const trilho = container.querySelector('.slider-trilho');
//     if (!trilho) {
//         console.error("Não foi possível encontrar o .slider-trilho");
//         return; 
//     }

//     const totalImagens = parseInt(container.dataset.totalImagens || 1);
//     let indiceAtual = parseInt(trilho.dataset.indiceAtual || 0);

//     indiceAtual += direcao;
    
//     if (indiceAtual < 0) indiceAtual = 0;
//     if (indiceAtual >= totalImagens) indiceAtual = totalImagens - 1;
    
//     trilho.dataset.indiceAtual = indiceAtual;
//     trilho.style.transform = `translateX(-${indiceAtual * 100}%)`;
    
//     const setaEsquerda = container.querySelector('.slider-seta.esquerda');
//     const setaDireita = container.querySelector('.slider-seta.direita');
    
//     if (setaEsquerda) {
//         setaEsquerda.disabled = (indiceAtual === 0);
//     }
//     if (setaDireita) {
//         setaDireita.disabled = (indiceAtual === totalImagens - 1);
//     }
// }

// function carregarAprovacao() {
//   const pendentes = dadosAtuais.imoveis.filter((i) => i.status === "pendente");
//   document.getElementById("contagemPendentes").textContent = `${pendentes.length} Pendentes`;

//   const grade = document.getElementById("gradeAprovacao");
//   grade.innerHTML = pendentes
//     .map(
//       (imovel) => {
        
//         let sliderHtml = '';
//         const totalImagens = imovel.fotos.length;

//         if (totalImagens > 0) {
//             const imagensHtml = imovel.fotos.map(urlFoto => `
//                 <img src="${urlFoto}" alt="${imovel.nome}" class="slider-imagem">
//             `).join('');
            
//             sliderHtml = `
//             <div class="imagem-slider-container" data-total-imagens="${totalImagens}">
//                 <div class="slider-trilho" id="trilho-imovel-${imovel.id}" data-indice-atual="0">
//                     ${imagensHtml}
//                 </div>
                
//                 ${totalImagens > 1 ? `
//                 <button class="slider-seta esquerda" onclick="mudarSlide(this, -1, ${imovel.id})" disabled>
//                     &#10094;
//                 </button>
//                 <button class="slider-seta direita" onclick="mudarSlide(this, 1, ${imovel.id})">
//                     &#10095;
//                 </button>
//                 ` : ''}
//             </div>
//             `;
            
//         } else {
//             sliderHtml = `
//             <div class="imagem-slider-container">
//                 <img src="/placeholder.svg?height=200&width=400" alt="Sem foto" class="slider-imagem">
//             </div>
//             `;
//         }
//         return `
//         <div class="cartao-imovel">
            
//             ${sliderHtml}
            
//             <div class="conteudo-imovel">
//                 <div class="cabecalho-imovel">
//                     <div>
//                         <h3 class="titulo-imovel">${imovel.nome}</h3>
//                         <p class="localizacao-imovel">
//                             <i class="fas fa-map-marker-alt"></i>
//                             ${imovel.cidade}
//                         </p>
//                     </div>
//                     <span class="badge badge-info">${imovel.tipo}</span>
//                 </div>
                
//                 <p class="preco-imovel">R$ ${Number(imovel.valor).toLocaleString("pt-BR")}</p>
                
//                 <div class="detalhes-imovel">
//                     ${imovel.quartos > 0
//             ? `
//                         <div class="detalhe-imovel">
//                             <i class="fas fa-bed"></i>
//                             <span>${imovel.quartos} quartos</span>
//                         </div>
//                     `
//             : ""
//           }
//                     ${imovel.banheiros > 0
//             ? `
//                         <div class="detalhe-imovel">
//                             <i class="fas fa-bath"></i>
//                             <span>${imovel.banheiros} banheiros</span>
//                         </div>
//                     `
//             : ""
//           }
//                     <div class="detalhe-imovel">
//                         <i class="fas fa-ruler-combined"></i>
//                         <span>${imovel.area}m²</span>
//                     </div>
//                 </div>
                
//                 <div class="acoes-imovel">
//                     <button class="btn btn-secundario btn-detalhes" onclick="visualizarImovel(${imovel.id})">
//                         <i class="fas fa-eye"></i> Ver Detalhes
//                     </button>
//                     <div class="acao-grupo">
//                         <button class="btn btn-sucesso" onclick="aprovarImovel(${imovel.id})">
//                             <i class="fas fa-check"></i>
//                         </button>
//                         <button class="btn btn-perigo" onclick="reprovarImovel(${imovel.id})">
//                             <i class="fas fa-times"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             </div>
//       `;
//       }
//     )
//     .join("");
// }

// function carregarMapaDoModal(lat, lng) {
//   const elementoMapa = document.getElementById('mapa-no-modal');

//   if (!elementoMapa) {
//     console.warn("Elemento 'mapa-no-modal' não encontrado.");
//     return;
//   }

//   const posicao = { lat: parseFloat(lat), lng: parseFloat(lng) };

//   const map = new google.maps.Map(elementoMapa, {
//     zoom: 16,
//     center: posicao,
//     disableDefaultUI: true,
//     gestureHandling: 'cooperative'
//   });

//   const houseSvgPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z";
//   const iconeCasa = {
//     path: houseSvgPath,
//     fillColor: "#D4A843",
//     fillOpacity: 1,
//     strokeWeight: 0,
//     scale: 1.5,
//     anchor: new google.maps.Point(12, 24)
//   };

//   new google.maps.Marker({
//     position: posicao,
//     map: map,
//     icon: iconeCasa
//   });
// }

// function visualizarImovel(id) {
//   console.log("ID recebido:", id, "(Tipo:", typeof id, ")");
//   if (dadosAtuais.imoveis.length > 0) {
//     console.log("ID no 1º imóvel:", dadosAtuais.imoveis[0].id, "(Tipo:", typeof dadosAtuais.imoveis[0].id, ")");
//   }
//   // ----------------------------------------

//   const imovel = dadosAtuais.imoveis.find((i) => i.id == id);

//   console.log("Imóvel encontrado:", imovel);

//   if (!imovel) {
//     mostrarNotificacao("ERRO: Imóvel não encontrado (ID: " + id + ")", "erro");
//     return;
//   }

//   const lat = parseFloat(imovel.latitude);
//   const lng = parseFloat(imovel.longitude);
//   const temCoordenadasValidas = !isNaN(lat) && !isNaN(lng) && lat >= -90 && lat <= 90;

//   let htmlLocalizacao = '';

//   if (temCoordenadasValidas) {
//     htmlLocalizacao = `
//             <div style="margin-top: 1.5rem;">
//                 <h4 style="margin-bottom: 0.75rem;">Localização</h4>
//                 <div id="mapa-no-modal" style="height: 300px; width: 100%; border-radius: 8px; background: #f0f0f0;">
//                     </div>
//             </div>
//         `;
//   } else {
//     htmlLocalizacao = `
//             <div style="margin-top: 1.5rem;">
//                 <h4 style="margin-bottom: 0.75rem;">Localização</h4>
//                 <div style="background: var(--fundo-secundario); padding: 1rem; border-radius: 8px; text-align: center;">
//                     <i class="fas fa-map-marker-alt" style="font-size: 2rem; color: var(--cor-primaria);"></i>
//                     <p style="margin-top: 0.5rem; color: var(--texto-secundario);">${imovel.cidade}</p>
//                 </div>
//             </div>
//         `;
//   }

//   const corpoModal = document.getElementById("corpoModal");
//   corpoModal.innerHTML = `
//         <div class="galeria-modal">
//             <img src="/placeholder.svg?height=200&width=300" alt="Foto 1">
//             <img src="/placeholder.svg?height=200&width=300" alt="Foto 2">
//             <img src="/placeholder.svg?height=200&width=300" alt="Foto 3">
//         </div>
        
//         <div class="info-modal">
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Código:</span>
//                 <span class="valor-info-modal">${imovel.id}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Nome:</span>
//                 <span class="valor-info-modal">${imovel.nome}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Proprietário:</span>
//                 <span class="valor-info-modal">${imovel.proprietario}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Tipo:</span>
//                 <span class="valor-info-modal">${imovel.tipo}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Cidade:</span>
//                 <span class="valor-info-modal">${imovel.cidade}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Valor:</span>
//                 <span class="valor-info-modal"><strong>R$ ${Number(imovel.valor).toLocaleString("pt-BR")}</strong></span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Quartos:</span>
//                 <span class="valor-info-modal">${imovel.quartos}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Banheiros:</span>
//                 <span class="valor-info-modal">${imovel.banheiros}</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Área:</span>
//                 <span class="valor-info-modal">${imovel.area}m²</span>
//             </div>
//             <div class="item-info-modal">
//                 <span class="label-info-modal">Status:</span>
//                 <span class="badge badge-${obterClasseBadgeStatus(imovel.status)}">${imovel.status}</span>
//             </div>
//         </div>
        
//         <div style="margin-top: 1.5rem;">
//             <h4 style="margin-bottom: 0.75rem;">Descrição</h4>
//             <p style="color: var(--texto-secundario); line-height: 1.6;">
//                 ${imovel.descricao || obterDescricaoImovel(imovel)}
//             </p>
//         </div>
        
//         ${htmlLocalizacao}
//     `;

//   document.getElementById("tituloModal").textContent = imovel.nome;
//   abrirModal("modalImovel");

//   if (temCoordenadasValidas) {
//     setTimeout(() => {
//       carregarMapaDoModal(lat, lng);
//     }, 150);
//   }
// }

// function obterDescricaoImovel(imovel) {
//   const descricoes = {
//     apartamento:
//       "Apartamento moderno e bem localizado, com acabamento de primeira qualidade. Próximo a comércios, escolas e transporte público. Condomínio com área de lazer completa.",
//     casa: "Casa espaçosa em excelente localização. Amplo quintal, garagem para múltiplos veículos. Perfeita para famílias que buscam conforto e tranquilidade.",
//     terreno:
//       "Terreno plano e regular, ideal para construção. Localização privilegiada com fácil acesso. Documentação em dia.",
//     comercial:
//       "Imóvel comercial em ponto estratégico, com grande fluxo de pessoas. Ideal para diversos tipos de negócio. Infraestrutura completa.",
//   }
//   return descricoes[imovel.tipo] || "Excelente imóvel com ótima localização e infraestrutura completa."
// }

// function editarImovel(id) {
//   mostrarNotificacao("Função de edição em desenvolvimento")
// }

// function aprovarImovel(id) {
//   mostrarModalConfirmacao("Aprovar Imóvel", "Tem certeza que deseja aprovar este imóvel?", async () => {

//     try {
//       const response = await fetch('api/aprovarImovel.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id: id })
//       });

//       const resultado = await response.json();

//       if (!response.ok) {
//         throw new Error(resultado.erro || 'Erro ao conectar com o servidor.');
//       }
//       carregarImoveis();
//       carregarAprovacao();
//       mostrarNotificacao("Imóvel aprovado com sucesso!");

//     } catch (error) {
//       console.error('Erro ao aprovar imóvel:', error);
//       mostrarNotificacao(`Erro ao aprovar: ${error.message}`, 'erro');
//     }
//   });
// }

// function reprovarImovel(id) {
//   mostrarModalConfirmacao(
//     "Reprovar Imóvel",
//     "Tem certeza que deseja reprovar este imóvel? Esta ação pode ser revertida posteriormente.",
//     async () => {

//       try {
//         const response = await fetch('api/reprovarImovel.php', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: id })
//         });

//         const resultado = await response.json();

//         if (!response.ok) {
//           throw new Error(resultado.erro || 'Erro ao conectar com o servidor.');
//         }

//         carregarImoveis();
//         carregarAprovacao();

//         mostrarNotificacao("Imóvel reprovado", "aviso");

//       } catch (error) {
//         console.error('Erro ao reprovar imóvel:', error);
//         mostrarNotificacao(`Erro ao reprovar: ${error.message}`, 'erro');
//       }
//     },
//   );
// }

// ////////////////////////////////////////////////////////////

// const cepInput = document.getElementById('imovel-cep');
// const cepLoading = document.getElementById('cep-loading');

// const modalOverlay = document.getElementById('modal-imovel-overlay');
// const formImovel = document.getElementById('form-imovel');

// async function buscarCep() {
//   const cep = cepInput.value.replace(/\D/g, '');
//   if (cep.length !== 8) {
//     return;
//   }

//   cepLoading.style.display = 'inline';
//   document.getElementById('imovel-endereco').disabled = true;
//   document.getElementById('imovel-bairro').disabled = true;
//   document.getElementById('imovel-cidade').disabled = true;

//   try {
//     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

//     if (!response.ok) {
//       throw new Error('Erro ao buscar o CEP.');
//     }

//     const data = await response.json();

//     if (data.erro) {
//       mostrarNotificacao('CEP não encontrado.');
//       document.getElementById('imovel-endereco').value = '';
//       document.getElementById('imovel-bairro').value = '';
//       document.getElementById('imovel-cidade').value = '';
//     } else {
//       document.getElementById('imovel-endereco').value = data.logradouro;
//       document.getElementById('imovel-bairro').value = data.bairro;
//       document.getElementById('imovel-cidade').value = data.localidade;

//       document.getElementById('imovel-numero').focus();
//     }

//   } catch (error) {
//     console.error("Erro na API ViaCEP:", error);
//     mostrarNotificacao('Não foi possível buscar o CEP. Verifique sua conexão.');
//   } finally {
//     cepLoading.style.display = 'none';
//     document.getElementById('imovel-endereco').disabled = false;
//     document.getElementById('imovel-bairro').disabled = false;
//     document.getElementById('imovel-cidade').disabled = false;
//   }
// }


// function abrirModalAdicionarImovel() {
//   modalOverlay.classList.add('ativo');
// }

// function fecharModalImovel() {
//   modalOverlay.classList.remove('ativo');
//   setTimeout(() => {
//     formImovel.reset();
//     if (window.limparPreviewImagens) window.limparPreviewImagens();
//   }, 300);
// }

// async function salvarImovel(event) {
//   event.preventDefault();

//   const formImovel = document.getElementById('form-imovel');
//   const formData = new FormData(formImovel);

//   console.log("Enviando dados do imóvel:");
//   for (let [key, value] of formData.entries()) {
//     console.log(`${key}:`, value);
//   }

//   try {


//     const response = await fetch('api/salvarImovel.php', {
//       method: 'POST',
//       body: formData
//     });

//     const result = await response.json();
//     if (result.success) {
//       mostrarNotificacao('Imóvel salvo com sucesso!');
//       fecharModalImovel();
//       // Limpa o preview e reseta o input de arquivos (se a função estiver disponível)
//       if (window.limparPreviewImagens) window.limparPreviewImagens();
//     } else {
//       throw new Error(result.message);
//     }

//   } catch (error) {
//     console.error("Erro ao salvar o imóvel:", error);
//     mostrarNotificacao(`Erro ao salvar: ${error.message}`);
//     // esconderLoading();
//   }
// }

// if (formImovel) {
//   formImovel.addEventListener('submit', salvarImovel);
// }

// if (modalOverlay) {
//   modalOverlay.addEventListener('click', function (event) {
//     if (event.target === modalOverlay) {
//       fecharModalImovel();
//     }
//   });
// }

// if (cepInput) {
//   cepInput.addEventListener('blur', buscarCep);
// }

// // ========================================
// // FUNÇÕES DE USUÁRIOS
// // ========================================
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

// // ========================================
// // FUNÇÕES DE MENSAGENS
// // ========================================
// function carregarMensagens() {
//   const naoLidas = dadosAtuais.mensagens.filter((m) => !m.lida).length
//   document.getElementById("contagemNaoLidas").textContent = `${naoLidas} Não Lidas`

//   const listaMensagens = document.getElementById("listaMensagens")
//   listaMensagens.innerHTML = dadosAtuais.mensagens
//     .map(
//       (msg) => `
//         <div class="item-mensagem ${!msg.lida ? "nao-lida" : ""}" onclick="visualizarMensagem(${msg.id})">
//             <div class="avatar-mensagem">${msg.remetente.charAt(0)}</div>
//             <div class="conteudo-mensagem">
//                 <div class="cabecalho-mensagem">
//                     <span class="remetente-mensagem">${msg.remetente}</span>
//                     <span class="data-mensagem">${msg.data}</span>
//                 </div>
//                 <div class="assunto-mensagem">${msg.assunto}</div>
//                 <div class="preview-mensagem">${msg.mensagem}</div>
//             </div>
//         </div>
//     `,
//     )
//     .join("")
// }

// function visualizarMensagem(id) {
//   const msg = dadosAtuais.mensagens.find((m) => m.id === id)
//   if (!msg) return

//   msg.lida = true

//   document.getElementById("tituloModalMensagem").textContent = msg.assunto
//   document.getElementById("corpoModalMensagem").innerHTML = `
//         <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--cor-borda);">
//             <strong>De:</strong> ${msg.remetente}<br>
//             <strong>Data:</strong> ${msg.data}
//         </div>
//         <p style="line-height: 1.6; color: var(--texto-primario);">${msg.mensagem}</p>
//     `

//   abrirModal("modalMensagem")
//   carregarMensagens()
// }

// // ========================================
// // FUNÇÕES DE MAPA
// // ========================================
// async function carregarMapa() {
//   if (!mapaGoogle) {
//     if (googleMapsApiPronto && typeof window.google !== "undefined") {
//       inicializarInstanciaDoMapa()
//     } else {
//       mostrarNotificacao("Aguardando API do Google Maps...", "aviso")
//       return
//     }
//   }

//   document.getElementById("listaImoveisMapa").innerHTML = "<p>Carregando imóveis...</p>"

//   try {
//     const response = await fetch("api/mapa.php")
//     if (!response.ok) throw new Error("Falha ao carregar dados do mapa")

//     const imoveis = await response.json()
//     renderizarMarcadoresMapa(imoveis)
//     renderizarListaImoveisMapa(imoveis)
//   } catch (error) {
//     console.warn("Erro ao carregar mapa do servidor, usando fallback simulado:", error)

//     // fallback: gerar coordenadas aproximadas para imóveis aprovados
//     const imoveis = dadosAtuais.imoveis
//       .filter((i) => i.status === "aprovado")
//       .map((imovel) => ({
//         ...imovel,
//         latitude: -23.55052 + (Math.random() - 0.5) * 0.1,
//         longitude: -46.633308 + (Math.random() - 0.5) * 0.1,
//       }))

//     renderizarMarcadoresMapa(imoveis)
//     renderizarListaImoveisMapa(imoveis)
//   }
// }

// function renderizarMarcadoresMapa(imoveis) {
//   if (!mapaGoogle || typeof window.google === "undefined") return

//   marcadoresAtuais.forEach((marker) => marker.setMap(null))
//   marcadoresAtuais = []

//   const bounds = new google.maps.LatLngBounds();

//   const houseSvgPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z";

//   const iconeCasa = {
//     path: houseSvgPath,
//     fillColor: "#D4A843",
//     fillOpacity: 1,
//     strokeWeight: 0,
//     scale: 1.5,
//     anchor: new google.maps.Point(12, 24),
//   };

//   imoveis.forEach((imovel) => {
//     const posicao = {
//       lat: Number.parseFloat(imovel.latitude),
//       lng: Number.parseFloat(imovel.longitude),
//     }

//     if (isNaN(posicao.lat) || isNaN(posicao.lng)) return

//     const marker = new window.google.maps.Marker({
//       position: posicao,
//       map: mapaGoogle,
//       title: imovel.nome,
//       animation: window.google.maps.Animation.DROP,
//       icon: iconeCasa,
//     })

//     const conteudoPopup = `
//       <div style="font-family: 'Inter', sans-serif; padding: 5px;">
//         <strong style="font-size: 1.1em;">${imovel.nome}</strong>
//         <p>${imovel.cidade}</p>
//         <p style="color: var(--cor-primaria); font-weight: 700; font-size: 1.1em; margin: 5px 0 0 0;">
//           R$ ${Number(imovel.valor).toLocaleString("pt-BR")}
//         </p>
//       </div>
//     `

//     marker.addListener("click", () => {
//       infoWindowGoogle.setContent(conteudoPopup)
//       infoWindowGoogle.open(mapaGoogle, marker)
//       mapaGoogle.panTo(posicao)
//     })

//     marcadoresAtuais.push(marker)
//     bounds.extend(posicao)
//   })

//   if (marcadoresAtuais.length > 0) {
//     mapaGoogle.fitBounds(bounds)
//   }

//   if (marcadoresAtuais.length === 1) {
//     mapaGoogle.setZoom(15)
//   }
// }

// function renderizarListaImoveisMapa(imoveis) {
//   const lista = document.getElementById("listaImoveisMapa")

//   if (imoveis.length === 0) {
//     lista.innerHTML = "<p>Nenhum imóvel encontrado com estes filtros.</p>"
//     return
//   }

//   lista.innerHTML = imoveis
//     .map(
//       (imovel) => `
//         <div class="cartao-imovel" style="cursor: pointer;" onclick="focarNoMapa(${imovel.latitude}, ${imovel.longitude})">
//             <img src="/placeholder.svg?height=150&width=280" alt="${imovel.nome}" class="imagem-imovel" style="height: 150px;">
//             <div class="conteudo-imovel">
//                 <h4 class="titulo-imovel" style="font-size: 1rem;">${imovel.nome}</h4>
//                 <p class="localizacao-imovel">
//                     <i class="fas fa-map-marker-alt"></i>
//                     ${imovel.cidade}
//                 </p>
//                 <p class="preco-imovel" style="font-size: 1.125rem;">R$ ${Number(imovel.valor).toLocaleString("pt-BR")}</p>
                
//                 <button class="btn btn-secundario" style="padding: 5px 10px; font-size: 0.8rem; margin-top: 5px;" 
//                         onclick="event.stopPropagation(); visualizarImovel(${imovel.id})">
//                     Ver Detalhes
//                 </button>
//             </div>
//         </div>
//     `,
//     )
//     .join("")
// }

// async function filtrarImoveisMapa() {
//   const cidade = document.getElementById("filtroMapaCidade").value
//   const tipo = document.getElementById("filtroMapaTipo").value

//   const params = new URLSearchParams()
//   if (cidade) params.append("cidade", cidade)
//   if (tipo) params.append("tipo", tipo)

//   document.getElementById("listaImoveisMapa").innerHTML = "<p>Filtrando...</p>"

//   try {
//     const response = await fetch(url)
//     if (!response.ok) throw new Error("Falha ao filtrar dados")

//     const imoveisFiltrados = await response.json()

//     renderizarMarcadoresMapa(imoveisFiltrados)
//     renderizarListaImoveisMapa(imoveisFiltrados)
//   } catch (error) {
//     console.warn("Erro ao filtrar mapa no servidor, usando fallback local:", error)

//     let filtrados = dadosAtuais.imoveis.filter((i) => i.status === "aprovado")
//     if (cidade) filtrados = filtrados.filter((i) => i.cidade === cidade)
//     if (tipo) filtrados = filtrados.filter((i) => i.tipo === tipo)

//     const imoveisComCoordenadas = filtrados.map((imovel) => ({
//       ...imovel,
//       latitude: -23.55052 + (Math.random() - 0.5) * 0.1,
//       longitude: -46.633308 + (Math.random() - 0.5) * 0.1,
//     }))

//     renderizarMarcadoresMapa(imoveisComCoordenadas)
//     renderizarListaImoveisMapa(imoveisComCoordenadas)
//   }
// }

// function focarNoMapa(lat, lng) {
//   if (!mapaGoogle) return

//   const posicao = { lat: Number.parseFloat(lat), lng: Number.parseFloat(lng) }
//   mapaGoogle.panTo(posicao)
//   mapaGoogle.setZoom(16)

//   const marcadorClicado = marcadoresAtuais.find(
//     (marker) =>
//       Math.abs(marker.getPosition().lat() - posicao.lat) < 0.00001 &&
//       Math.abs(marker.getPosition().lng() - posicao.lng) < 0.00001,
//   )

//   if (marcadorClicado) {
//     new window.google.maps.event.trigger(marcadorClicado, "click")
//   }
// }

// // ========================================
// // FUNÇÕES DE CATEGORIAS
// // ========================================
// // function carregarCategorias() {
// //   const grade = document.getElementById("gradeCategorias")
// //   grade.innerHTML = dadosAtuais.categorias
// //     .map(
// //       (cat) => `
// //         <div class="cartao-categoria">
// //             <div class="cabecalho-categoria">
// //                 <div class="icone-categoria">
// //                     <i class="fas ${cat.icone}"></i>
// //                 </div>
// //                 <div class="acoes-categoria">
// //                     <button class="btn btn-icone btn-secundario" onclick="editarCategoria(${cat.id})">
// //                         <i class="fas fa-edit"></i>
// //                     </button>
// //                     <button class="btn btn-icone btn-perigo" onclick="excluirCategoria(${cat.id})">
// //                         <i class="fas fa-trash"></i>
// //                     </button>
// //                 </div>
// //             </div>
// //             <h4 class="nome-categoria">${cat.nome}</h4>
// //             <p class="contagem-categoria">${cat.quantidade} imóveis</p>
// //         </div>
// //     `,
// //     )
// //     .join("")
// // }

// // function abrirModalAdicionarCategoria() {
// // }

// // function editarCategoria(id) {
// // }

// // function excluirCategoria(id) {
// // }

// // ========================================
// // FUNÇÕES DE AGENDAMENTOS
// // ========================================
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
//                 ${ag.status === "pendente"
//           ? `
//                     <button class="btn btn-icone btn-sucesso" onclick="confirmarAgendamento(${ag.id})" title="Confirmar">
//                         <i class="fas fa-check"></i>
//                     </button>
//                 `
//           : ""
//         }
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

// // ========================================
// // FUNÇÕES FINANCEIRAS
// // ========================================
// // function carregarFinanceiro() {
// //   const tbody = document.getElementById("corpoTabelaComissoes")
// //   tbody.innerHTML = dadosSimulados.comissoes
// //     .map(
// //       (com) => `
// //         <tr>
// //             <td><strong>${com.corretor}</strong></td>
// //             <td>${com.imovel}</td>
// //             <td>R$ ${com.valor.toLocaleString("pt-BR")}</td>
// //             <td><strong style="color: var(--cor-sucesso);">R$ ${com.comissao.toLocaleString("pt-BR")}</strong></td>
// //             <td>${formatarData(com.data)}</td>
// //         </tr>
// //     `,
// //     )
// //     .join("")
// // }

// // ========================================
// // FUNÇÕES UTILITÁRIAS
// // ========================================
// function obterClasseBadgeStatus(status) {
//   const badges = {
//     aprovado: "sucesso",
//     pendente: "aviso",
//     reprovado: "perigo",
//   }
//   return badges[status] || "info"
// }

// function obterClasseBadgeTipo(tipo) {
//   const badges = {
//     admin: "perigo",
//     corretor: "primario",
//     usuario: "info",
//   }
//   return badges[tipo] || "info"
// }

// function obterClasseBadgeStatusAgendamento(status) {
//   const badges = {
//     confirmado: "sucesso",
//     pendente: "aviso",
//     cancelado: "perigo",
//   }
//   return badges[status] || "info"
// }

// function formatarData(dataString) {
//   const data = new Date(dataString)
//   return data.toLocaleDateString("pt-BR")
// }

// function alternarTemaEscuro() {
//   document.body.classList.toggle("tema-escuro")
//   const icone = document.querySelector("#alternarTema i")

//   if (document.body.classList.contains("tema-escuro")) {
//     icone.classList.remove("fa-moon")
//     icone.classList.add("fa-sun")
//   } else {
//     icone.classList.remove("fa-sun")
//     icone.classList.add("fa-moon")
//   }
// }

// // ========================================
// // FUNÇÕES DE MODAL
// // ========================================
// function abrirModal(idModal) {
//   document.getElementById(idModal).classList.add("active")
// }

// function fecharModal(idModal) {
//   document.getElementById(idModal).classList.remove("active")
// }

// function mostrarModalConfirmacao(titulo, mensagem, aoConfirmar) {
//   document.getElementById("tituloModalConfirmacao").textContent = titulo
//   document.getElementById("corpoModalConfirmacao").innerHTML = `<p>${mensagem}</p>`

//   const btnConfirmar = document.getElementById("btnModalConfirmacao")
//   btnConfirmar.onclick = () => {
//     aoConfirmar()
//     fecharModal("modalConfirmacao")
//   }

//   abrirModal("modalConfirmacao")
// }

// // ========================================
// // FUNÇÕES DE NOTIFICAÇÃO
// // ========================================
// function mostrarNotificacao(mensagem, tipo = "sucesso") {
//   const notificacao = document.getElementById("notificacao")
//   const mensagemNotificacao = document.getElementById("mensagemNotificacao")
//   const icone = notificacao.querySelector("i")

//   mensagemNotificacao.textContent = mensagem

//   if (tipo === "aviso") {
//     notificacao.style.background = "var(--cor-aviso)"
//     icone.className = "fas fa-exclamation-triangle"
//   } else if (tipo === "erro") {
//     notificacao.style.background = "var(--cor-perigo)"
//     icone.className = "fas fa-times-circle"
//   } else {
//     notificacao.style.background = "var(--cor-sucesso)"
//     icone.className = "fas fa-check-circle"
//   }

//   notificacao.classList.add("active")

//   setTimeout(() => {
//     notificacao.classList.remove("active")
//   }, 3000)
// }

// window.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal")) {
//     e.target.classList.remove("active")
//   }
// })
