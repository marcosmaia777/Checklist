/* <label class="todo__item">   
<input type="checkbox">         
<div>teste de item 2</div>     
<input type="button" value="x">
</label> */

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


