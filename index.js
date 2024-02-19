const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTodo(this)">
      <span>${todoText}</span>
      <button  class ="delete"onclick="deleteTodo(this)">Delete</button>
    `;
    todoList.appendChild(li);
    todoInput.value = '';
  } else {
    alert('Please enter a valid todo');
  }
}

function deleteTodo(todoElement) {
  const li = todoElement.parentElement;
  todoList.removeChild(li);
}
function toggleTodo(checkbox) {
  const span = checkbox.nextElementSibling;
  if (checkbox.checked) {
    span.style.textDecoration = 'line-through';
  } else {
    span.style.textDecoration = 'none';
  }
}