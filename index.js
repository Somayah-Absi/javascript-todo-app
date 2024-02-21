const todoList = document.querySelector("#todoList");
const addButton = document.querySelector(".add-btn");
const input = document.querySelector("#todoInput");
const counter=document.querySelector(".counter");

const todos = [
  { description: "hi", completed: false },
  { description: "somayah", completed: true },
];

function display(todos) {
  todoList.innerHTML = "";
  if (todos.length === 0) {
    alert("enter your list");
  } else {
    for (let index = 0; index < todos.length; index++) {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      const todoCheckbox = document.createElement("input");
      todoCheckbox.type = "checkbox";
      todoCheckbox.checked = todos[index].completed;

      div.appendChild(todoCheckbox);
      

      const items = document.createElement("p");
      items.textContent = todos[index].description;
      div.appendChild(items);
      const deleteList = document.createElement("button");
      deleteList.textContent = "Delete";
      deleteList.addEventListener("click", () => deleteButton(index));
      div.appendChild(deleteList);
      const edit = document.createElement("button");
      edit.textContent = "Edit";
      div.appendChild(edit);

      todoList.appendChild(div);
      counter.textContent=`Total tasks is : ${todos.length}`;
    }
  }
  input.value = "";
}
display(todos);

function addList() {
  
  const descriptionList = input.value.trim();
  const newItems = {
    description: descriptionList,
    completed: false,
  };
  todos.push(newItems);
  display(todos);
}

function deleteButton(index) {
  todos.splice(index, 1);
  display(todos);
}
addButton.addEventListener("click", addList);


