document.addEventListener("DOMContentLoaded", function () {
  let todoInput = document.getElementById("todoInput");
  let addTaskBtn = document.getElementById("addTaskBtn");
  let todoList = document.getElementById("todoList");

  let todoArray = JSON.parse(localStorage.getItem("tasks")) || [];

  todoArray.forEach((task) => renderTask(task));

  function addTask() {
    let newTask = todoInput.value.trim();
    if(newTask === "") return;

    let inputValue = {
      id: new Date(),
      text: newTask,
      completed: false,
    };

    todoArray.push(inputValue);
    saveTaskToLocal();
    renderTask(inputValue);
    todoInput.value = "";
    console.log(todoArray);
  }
  addTaskBtn.addEventListener("click", addTask);

  todoInput.addEventListener("keydown", (e)=> {
      if(e.key === "Enter"){
        addTask();
      }
  })
  function renderTask(task) {
    let li = document.createElement("li");
    li.setAttribute("dataID", task.id);
    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      li.completed = !li.completed;
      li.classList.toggle("completed");
      saveTaskToLocal();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      todoArray = todoArray.filter((tsk) => tsk.id !== task.id);
      li.remove();
      saveTaskToLocal();
    });
    todoList.appendChild(li);
  }
  function saveTaskToLocal() {
    localStorage.setItem("tasks", JSON.stringify(todoArray));
  }
});
