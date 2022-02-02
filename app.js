/* <label class="todo__item">   
<input type="checkbox">         
<div>teste de item 2</div>     
<input type="button" value="x">
</label> */

const criarItem = (tarefa) => {
    const item = document.creatElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
            <input type="checkbox">          
            <div>${tarefa}</div>     
            <input type="button" value="x">
        `
        document.getElementById('todoList').appendChild(item)
}