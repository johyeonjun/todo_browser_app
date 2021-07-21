const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector('input');

const TODOS_KEY = "todos"

let toDos = [];


function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveTodos();
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id

    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo)
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);

    saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}



// array.filter(function) : function이 true 를 리턴하는 경우에만 배열에 포함됨
// function sexyFilter(){

// }
// [1,2,3,4].filter(sexyFilter)