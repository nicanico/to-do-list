'use strict';

let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'netflix', 'status': 'checked'}
];

const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo-item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}> 
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('todoList').appendChild(item);
}
const limparTarefa = () =>{
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    // enquanto existir o primeiro filho ele remove o ultimo
    }
}
const atualizarTela = () => {
    limparTarefa();
    banco.forEach(
        (item, indice) => criarItem (item.tarefa, item.status, indice));
    // ele manda para criar o item a tarefa, status e o indice
}

const verificarCampo = () =>{
    if(document.getElementById("newItem").value == ""){
        alert('Preencha o campo com a tarefa!');
        document.getElementById("newItem").focus
        return false;
    } else {
        return true;
    }
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    // pega a tecla digitada
    const texto = evento.target.value
    // target é o alvo e value pega o valor desse alvo

    console.log (tecla);
    if(tecla == 'Enter'){
        if (verificarCampo() == true ){
        banco.push ({'tarefa': texto, 'status': ''})
        atualizarTela(); 
        evento.target.value = '';
        
        }
    } 
}

const removerItem = (indice) => {
    banco.splice (indice, 1);
    atualizarTela();
}
const atualizarItem = (indice) => {
    banco[indice].status = banco[indice].status == '' ? 'checked' : '';
    atualizarTela;
}
const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removerItem (indice);
    } else if (elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);
atualizarTela();