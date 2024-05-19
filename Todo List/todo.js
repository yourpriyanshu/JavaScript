let todoList = [
  {
    item: "Milk",
    dueDate: "2024-05-18",
  },
  {
    item: "chocolate",
    dueDate: "2024-05-14",
  },
];
displayTodo();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let inputDate = document.querySelector("#todo-date");
  todoList.push({
    item: `${inputElement.value}`,
    dueDate: `${inputDate.value}`,
  });
  inputElement.value = ``;
  inputDate.value = ``;
  displayTodo();
}

function displayTodo() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = ``;
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete button" onclick="todoList.splice(${i},1);displayTodo();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
  console.log(todoList);
}
