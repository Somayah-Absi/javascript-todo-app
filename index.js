const todoList = document.querySelector("#todoList");

const todos = [
  { description: "hi", completed: false },
  { description: "somayah", completed: false },
];

function display(todos) {
  if (todos.length === 0) {
    alert("enter your list");
  } else {
    for (let index = 0; index < todos.length; index++) {
      const div = document.createElement("div");
      div.classList.add("todo-item");

      const items = document.createElement("p");
      items.textContent = todos[index].description;
      div.appendChild(items);
      const deleteList = document.createElement("button");
      deleteList.textContent = "Delete";
      div.appendChild(deleteList);
      const edit = document.createElement("button");
      edit.textContent = "Edit";
      div.appendChild(edit);

      todoList.appendChild(div);
    }
  }
}
display(todos);

function addList(newLi) {
  todos.push(newLi);
  display(todos);
}
