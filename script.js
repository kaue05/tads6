// Estado da aplicação
let contador = 0
let mostrarDetalhes = false

// Lista de membros da equipe - fácil de modificar via PR
const membrosEquipe = [
  { nome: "Luiz Paulo", papel: "full-stack developer", ativo: true },
  { nome: "Kaue", papel: "full-stack developer and infrastructure analyst", ativo: true },
  // TODO: Adicionar mais membros aqui
]

// Lista de tarefas - pode ser expandida pelos estudantes
const tarefas = [
  { id: 1, titulo: "Configurar ambiente de desenvolvimento", concluida: true },
  { id: 2, titulo: "Criar componente de header", concluida: true },
  { id: 3, titulo: "Implementar sistema de autenticação", concluida: false },
  { id: 4, titulo: "Adicionar testes unitários", concluida: false },
  // TODO: Adicionar mais tarefas
]

// Função para atualizar o contador na tela
function atualizarContador() {
  document.getElementById("contador").textContent = contador
}

// Função para renderizar membros da equipe
function renderizarMembros() {
  const grid = document.getElementById("membros-grid")
  grid.innerHTML = ""

  membrosEquipe.forEach((membro) => {
    const membroDiv = document.createElement("div")
    membroDiv.className = "p-4 border border-border rounded-lg space-y-2"

    const badgeClass = membro.ativo
      ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
      : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"

    membroDiv.innerHTML = `
            <h3 class="font-semibold">${membro.nome}</h3>
            <p class="text-sm text-muted-foreground">${membro.papel}</p>
            <span class="${badgeClass}">${membro.ativo ? "Ativo" : "Inativo"}</span>
        `

    grid.appendChild(membroDiv)
  })
}

// Função para renderizar tarefas
function renderizarTarefas() {
  const lista = document.getElementById("tarefas-lista")
  lista.innerHTML = ""

  tarefas.forEach((tarefa) => {
    const tarefaDiv = document.createElement("div")
    tarefaDiv.className = "flex items-center space-x-3 p-3 border border-border rounded-lg"

    const circuloClass = tarefa.concluida ? "w-4 h-4 rounded-full bg-green-500" : "w-4 h-4 rounded-full bg-gray-300"
    const textoClass = tarefa.concluida ? "flex-1 line-through text-muted-foreground" : "flex-1"
    const badgeClass = tarefa.concluida
      ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
      : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border"

    tarefaDiv.innerHTML = `
            <div class="${circuloClass}"></div>
            <span class="${textoClass}">${tarefa.titulo}</span>
            <span class="${badgeClass}">${tarefa.concluida ? "Concluída" : "Pendente"}</span>
        `

    lista.appendChild(tarefaDiv)
  })
}

// Função para alternar detalhes
function alternarDetalhes() {
  mostrarDetalhes = !mostrarDetalhes
  const content = document.getElementById("detalhes-content")
  const button = document.getElementById("toggle-detalhes")

  if (mostrarDetalhes) {
    content.classList.remove("hidden")
    button.textContent = "Ocultar Detalhes"
  } else {
    content.classList.add("hidden")
    button.textContent = "Mostrar Detalhes"
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar a página
  atualizarContador()
  renderizarMembros()
  renderizarTarefas()

  // Botões do contador
  document.getElementById("incrementar").addEventListener("click", () => {
    contador++
    atualizarContador()
  })

  document.getElementById("decrementar").addEventListener("click", () => {
    contador = Math.max(0, contador - 1)
    atualizarContador()
  })

  document.getElementById("reset").addEventListener("click", () => {
    contador = 0
    atualizarContador()
  })

  // Botão de detalhes
  document.getElementById("toggle-detalhes").addEventListener("click", alternarDetalhes)
})
