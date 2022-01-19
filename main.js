const criarTarefa = (evento) => {
    evento.preventDefault()  //Evitar de a página ficar atualizando automaticamente 

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
   
   // Adicionar tarefa na lista
    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

// Eventos
novaTarefa.addEventListener('click', criarTarefa);
