/**
 * Write your challenge solution here
 */

let addButton = document.getElementById("addButton");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let totalTasks = document.getElementById("totalTasks");
let firstLi = document.getElementsByClassName("empty-list");
let completedTasks = document.getElementById("completedTasks");
let countTaskArray = 0;
let taskCompleted = 0;
let taskArray = [];

addButton.addEventListener("click", addTask);

function addTask() {
  // console.log('Button Clicked');
  let newTask = taskInput.value.trim();
  if (newTask === "") return;

  let inputValue = {
    id: new Date(),
    text: newTask,
    completed: false,
  };

  taskArray.push(inputValue);
  countTaskArray = countTaskArray + 1;
  let emptyLi = document.querySelector(".empty-list");
  if(emptyLi){
    emptyLi.remove()
  }
  totalTasks.innerText = `Total tasks: ${countTaskArray}`;
  renderTask(inputValue);
  taskInput.value = "";
  console.log(taskArray);
}

function renderTask(task) {
  let li = document.createElement("li");
  li.setAttribute("dataId", task.id);
  li.classList.add("task-item");

  let inputType = document.createElement("input");
  inputType.type = "checkbox";
  inputType.checked = false;
  inputType.classList.add("complete-checkbox");
  li.appendChild(inputType);

  let p = document.createElement("p");
  p.classList.add("task-text");
  p.innerText = `${task.text}`;
  li.appendChild(p);

  let button = document.createElement("button");
  button.classList.add("delete-button");
  button.innerText = "DELETE";
  li.appendChild(button);

  let inputCheckBox = li.querySelector("input");
  inputCheckBox.addEventListener("click", function () {
    //console.log(`Completed Value, ${task.completed}`);
    p.classList.toggle("completed");
    task.completed = true;
    if (inputCheckBox.checked) {
      //console.log("inside if");
      taskCompleted = taskCompleted + 1;
      completedTasks.innerText = `Completed: ${taskCompleted}`;
    } else if (!inputCheckBox.checked) {
      taskCompleted = taskCompleted - 1;
      completedTasks.innerText = `Completed: ${taskCompleted}`;
    }
  });

  li.querySelector("button").addEventListener("click", function () {
    // console.log('Button Clicked');
    taskArray = taskArray.filter((tasks) => tasks.id !== task.id);
    li.remove();
    countTaskArray = countTaskArray - 1;
    taskCompleted = taskCompleted - 1;
    totalTasks.innerText = `Total tasks: ${countTaskArray}`;
    completedTasks.innerText = `Completed: ${countTaskArray}`;
  });
  taskList.appendChild(li);
}
