'use strict'

let banco = [];

const criarItem = (tarefa , status) => {
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
            <input type="checkbox" ${status}>          
            <div>${tarefa}</div>     
            <input type="button" value="x">
        `
        document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
}