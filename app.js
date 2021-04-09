//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteOrCheck);
filterOption.addEventListener("click", filterToDoItems);

//Functions

function addToDo(e) {
  e.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //create checkmark button
  const completedButtton = document.createElement("button");
  completedButtton.innerHTML = '<i class="fas fa-check"></i>';
  completedButtton.classList.add("complete-btn");
  todoDiv.appendChild(completedButtton);

  //create trash button

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  //clear todo input value

  todoInput.value = "";
}

function deleteOrCheck(e) {
  const item = e.target;
  console.log("drrr", item.parentElement);
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterToDoItems(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
      console.log('fk',e.target.value)
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
        case "uncompleted":
            if (!todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
    }
  });
}
