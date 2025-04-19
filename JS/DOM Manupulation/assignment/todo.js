console.log("Todo Js");

const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const addButton = document.querySelector(".add-button");

function addTodo() {
  const listItem = document.createElement("li");

  listItem.innerText = todoInput.value;
  todoList.appendChild(listItem);

  todoInput.value = "";
}

addButton.addEventListener("click", () => {
  console.log(todoInput.value);
  console.log(todoList);
  addTodo();
});

todoInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addTodo();
  }
});
