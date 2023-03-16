// const pendingTodos = [];

// const completedTodos = [];



// // Render todos

// function renderTodos() {

//   const pendingTodosEl = document.getElementById("incompleted-tasks");

//   const completedTodosEl = document.getElementById("completed-tasks");



//   // Clear previous todos

//   pendingTodosEl.innerHTML = "";

//   completedTodosEl.innerHTML = "";



//   // Render pending todos

//   pendingTodos.forEach((todo) => {

//     const todoEl = document.createElement("div");

//     todoEl.className = "todo-item";

//     const labelEl = document.createElement("label");

//     labelEl.innerText = todo.text;

//     const checkboxEl = document.createElement("input");

//     checkboxEl.type = "checkbox";

//     checkboxEl.checked = false;

//     checkboxEl.addEventListener("change", () => {

//       completeTodoById(todo.id);

//       renderTodos();

//     });

//     todoEl.appendChild(checkboxEl);

//     todoEl.appendChild(labelEl);

//     const deleteBtnEl = document.createElement("button");

//     deleteBtnEl.innerText = "delete";

//     deleteBtnEl.addEventListener("click", () => {

//       deleteTodoById(todo.id);

//       renderTodos();

//     });

//     todoEl.appendChild(deleteBtnEl);

//     pendingTodosEl.appendChild(todoEl);

//   });



//   // Render completed todos

//   completedTodos.forEach((todo) => {

//     const todoEl = document.createElement("div");

//     todoEl.className = "todo-item completed";

//     const labelEl = document.createElement("label");

//     labelEl.innerText = todo.text;

//     const checkboxEl = document.createElement("input");

//     checkboxEl.type = "checkbox";

//     checkboxEl.checked = true;

//     checkboxEl.addEventListener("change", () => {

//       uncompleteTodoById(todo.id);

//       renderTodos();

//     });

//     todoEl.appendChild(checkboxEl);

//     todoEl.appendChild(labelEl);

//     const deleteBtnEl = document.createElement("button");

//     deleteBtnEl.innerText = "delete";

//     deleteBtnEl.addEventListener("click", () => {

//       deleteTodoById(todo.id);

//       renderTodos();

//     });

//     todoEl.appendChild(deleteBtnEl);

//     completedTodosEl.appendChild(todoEl);

//   });

// }



// // Add todo

// function addTodo()