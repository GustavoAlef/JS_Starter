//referenciando os elementos da DOM
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//lista para renderizar no html
var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

//renderizar os todos
function renderTodos(){
    listElement.innerHTML = ''; //limpa a lista antes de add uma nova tarefa

    for(tarefa of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(tarefa);

        //add botao excluir
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText); //linkando texto ao elemento

        var pos = todos.indexOf(tarefa); //pega a pos da tarefa
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        todoElement.appendChild(todoText);
        //add excluir ao li
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

//add todos
function addTodo(){
    //recupera o valor do input
    var todoTexto = inputElement.value;

    todos.push(todoTexto);
    inputElement.value = ''; //limpa o campo
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}
