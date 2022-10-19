'use strict';

const criarItem = () => {
    const item = document.createElement('label');
    item.classList.add('todo-item');
    item.innerHTML = `
        <input type="checkbox">
        <div>teste de item 1</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}