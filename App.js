
//SELECTORS

let todoInput = document.querySelector('.todoInput');
let addBtn = document.querySelector('.addBtn');
let todoList = document.querySelector('.todo_list');


//EVENTLITSENERS

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



//FUNCTIONS

function addTodo(event) {
    
    event.preventDefault();

    //create a to do div
    
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');


    //create li

    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create a check button 

    let checkBtn = document.createElement('button');
    checkBtn.classList.add('complete-btn');
    checkBtn.innerText = 'completed';
    todoDiv.appendChild(checkBtn);

    //create a delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';
    todoDiv.appendChild(deleteBtn);


    todoList.appendChild(todoDiv);

    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'delete-btn' ) {
        const toDo = item.parentElement;
        toDo.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const toDo = item.parentElement;
        toDo.style.textDecoration = "line-through";
    }
}