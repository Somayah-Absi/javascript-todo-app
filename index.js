const todoList = document.querySelector("#todoList");
const addButton = document.querySelector(".add-btn");
const input = document.querySelector("#todoInput");
const counter = document.querySelector(".counter");
const searchInput = document.querySelector("#searchInput");
const search = document.querySelector(".search");

// the array of the to do list
let todos = [];

//function to display all the list of the to do list
const display = (todos) => {
  try {
    todoList.innerHTML = "";
    if (todos.length === 0) {
      alert("enter your list");
    } else {
      for (let index = 0; index < todos.length; index++) {
        const div = document.createElement("div");

        div.classList.add("todo-item");
        // checkbox to complete and uncompleted list item
        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.checked = todos[index].completed;
        todoCheckbox.setAttribute("aria-label", "task checkbox");
        todoCheckbox.addEventListener("change", () => toggleCompletion(index));

        div.appendChild(todoCheckbox);
        // create paragraph will contain the description that inside the todos array
        const items = document.createElement("p");
        items.textContent = todos[index].description;

        div.appendChild(items);
        // Add cross line if task is completed
        if (todos[index].completed) {
          items.classList.add("completed");
        }
        // create delete button when click it will invoke deleteTodo function
        const deleteList = document.createElement("button");
        deleteList.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>
`;
        deleteList.setAttribute("aria-label", "delete Button");
        deleteList.addEventListener("click", () => deleteTodo(index));
        div.appendChild(deleteList);
        // create edit button when click it will invoke editTodo function
        const edit = document.createElement("button");
        edit.innerHTML = `<i class="fa-solid fa-pencil" style="color: #0a1529;"></i>`;
        edit.setAttribute("aria-label", "edit Button");
        edit.addEventListener("click", () => editTodo(index));
        div.appendChild(edit);
        // will count how many list item there depend on the array todos length
        counter.textContent = `Total tasks is : ${todos.length}`;
        todoList.appendChild(div);
      }
    }
    // after create  new list item the user write it in the input field  this line will refresh the input field
    input.value = "";
  } catch (error) {
    console.log("something wrong");
  }
};

const addTodo = () => {
  try {
    // Trim the input value to remove leading and trailing whitespace
    const descriptionList = input.value.trim();

    // Check if the input value is empty
    if (!descriptionList) {
      alert("Please enter a valid to-do item");
      return; // Exit the function early if input is invalid
    }

    // Create a new to-do item object
    const newItems = {
      description: descriptionList,
      completed: false,
    };

    // Add the new to-do item to the array
    todos.push(newItems);

    // Display the updated to-do list
    display(todos);

    // Save the updated to-do list to local storage
    localStorage.setItem("list", JSON.stringify(todos));
  } catch (error) {
    console.log("Something went wrong:", error);
  }
};

const deleteTodo = (index) => {
  try {
    todos.splice(index, 1);
    display(todos);
    localStorage.setItem("list", JSON.stringify(todos));
  } catch (error) {
    console.log("something wrong");
  }
};

const editTodo = (index) => {
  try {
    const newDescription = (todos[index].description = prompt(
      "enter new list:",
      todos[index].description
    ));
    if (newDescription) {
      todos[index].description = newDescription;
      display(todos);
      localStorage.setItem("list", JSON.stringify(todos));
    }
  } catch (error) {
    console.log("something wrong");
  }
};
// Function to toggle completion status
const toggleCompletion = (index) => {
  try {
    todos[index].completed = !todos[index].completed;

    display(todos);
    localStorage.setItem("list", JSON.stringify(todos));
  } catch (error) {
    console.log("Something went wrong");
  }
};
const searchTodo = (e) => {
  try {
    e.preventDefault();
    // will make sure there is no spaces and the letters in lower case
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === "") {
      alert("Enter something");
    } else {
      const filteredTodos = todos.filter((todo) =>
        todo.description.toLowerCase().includes(searchTerm)
      );
      if (filteredTodos.length === 0) {
        alert("No matches found");
      } else {
        display(filteredTodos);
      }
    }
    searchInput.value = "";
  } catch (error) {
    console.log("something wrong");
  }
};

const getElementFromStorage = () => {
  try {
    const todosStorage = JSON.parse(localStorage.getItem("list"));
    if (todosStorage) {
      todos = todosStorage;
      display(todos);
    }
  } catch (error) {
    console.log("there is something wrong with storage data");
  }
};

window.addEventListener("DOMContentLoaded", getElementFromStorage);
search.addEventListener("submit", searchTodo);
addButton.addEventListener("click", addTodo);
