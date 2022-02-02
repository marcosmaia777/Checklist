/* <label class="todo__item">   
<input type="checkbox">         
<div>teste de item 2</div>     
<input type="button" value="x">
</label> */

const criarItem = () => {
    const item = document.createElement('label')
    item.classList.add('todo__item')
    item.innerHTML = `
            <input type="checkbox">          
            <div>Caminhar</div>     
            <input type="button" value="x">
        `
        document.getElementById('todoList').appendChild(item);
}


