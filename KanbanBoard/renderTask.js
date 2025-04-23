let todoBoard = document.getElementById("todoBoards");
const mainContainer = document.getElementById("mainContainer");
let taskArray = [];


function renderTask(tasks) {
    
    let taskCards = document.createElement("p");
    taskCards.classList.add("item")
    taskCards.innerText = tasks.taskInput;
    taskCards.setAttribute("draggable", true);
    
    let timeDisplay = document.createElement("span");
    timeDisplay.innerText = `Time--${new Date().toLocaleTimeString()}`;
    taskCards.appendChild(timeDisplay);


    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    taskCards.appendChild(deleteButton);

    taskCards.querySelector(".deleteButton").addEventListener("click", function () {
        //console.log("I am Clicked");
        taskArray = taskArray.filter((items) => items.id !== tasks.id);
        taskCards.remove();
    })

    taskArray.push(taskCards);
    todoBoard.appendChild(taskCards);

    function attchedEventListners(target) {
        target.addEventListener("dragstart", function () {
            target.classList.add("flying");
        })
        target.addEventListener("dragend", function () {
            target.classList.remove("flying");
        })
    }

    const boards = document.querySelectorAll(".boards");
    const items = document.querySelectorAll(".item");

    items.forEach((item) => attchedEventListners(item))
    items.forEach((item) => attchedEventListners(item))

    boards.forEach((board) => {
        board.addEventListener("dragover", function () {
            let flyElement = document.querySelector(".flying")
            console.log(board, "Kuch tho gaya mere upar se");
            board.appendChild(flyElement)
        })
    })
}
export default renderTask;