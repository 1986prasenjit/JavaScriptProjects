console.log("Connected");
import renderTask from "./renderTask.js";

const createCardButton = document.getElementById("createCardButton");
const addTaskButton = document.getElementById("addTaskButton");
const card = document.getElementById("addTaskCard");
const cardForBoards = document.getElementById("addBoard");
const addCardTitle = document.getElementById("addCardTitle");
const mainContainer = document.getElementById("boardContainer");
const addTaskInput = document.getElementById("addTaskInput");
const addHeading = document.getElementById("addHeading");
let themeButton = document.getElementById("themeBtn");
let createBoardBtn = document.getElementById("createBoard");

// themeButton.addEventListener("click", function(){
//     console.log("I am Clicked");
//     if(themeButton.innerText === "LIGHT"){
//         console.log("Inside IF");
//         document.body.classList.add("themeDark");

//         themeButton.innerText = "DARK"
//     }else if(themeButton.innerText === "DARK"){
//         console.log("Inside ELSE IF");
//         document.body.classList.remove("themeDark");
//         themeButton.innerText = "LIGHT"
//     }
// })
const taskArray = [];
let boardsArray = [];

createCardButton.addEventListener("click", function(){
    card.style.display =  "block";
    mainContainer.classList.add("bodyBlur");
})

addTaskButton.addEventListener("click",addTask);

function addTask(){
    console.log("Button Clicked");
    let newtask = addTaskInput.value.trim();
    if(newtask === "")return;
    let taskObj = {
        id:new Date(),
        taskInput:newtask,
        completed:false
    }
    taskArray.push(taskObj)
    renderTask(taskObj);
    addTaskInput.value = "";
    card.style.display =  "none";
    mainContainer.classList.remove("bodyBlur");
    console.log(taskObj);
}

//Add Boards Dynamically 
createBoardBtn.addEventListener("click", function(){
    cardForBoards.style.display =  "block";
    mainContainer.classList.add("bodyBlur");
})

addCardTitle.addEventListener("click", function(){
    let newHeading = addHeading.value.trim();
    if(newHeading === "")return;
    let boardCount = {
        id:new Date(),
    }
    boardsArray.push(boardCount);
    console.log(boardsArray);
    let dynamicBoard = document.createElement("div");
    dynamicBoard.classList.add("boards");
    dynamicBoard.setAttribute("Id", `${newHeading}Boards`);

    let header = document.createElement("div");
    header.classList.add("header");

    let heading = document.createElement("h4");
    heading.classList.add("boardh4");
    heading.innerText = `${newHeading}`;
    header.appendChild(heading);


    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBoard");
    deleteButton.innerText = "Delete Board"
    header.appendChild(deleteButton);

    header.querySelector(".deleteBoard").addEventListener("click", function(){
        boardsArray = boardsArray.filter((item)=> item.id !== boardsArray.id);
        dynamicBoard.remove();
    })

    dynamicBoard.appendChild(header)
    mainContainer.appendChild(dynamicBoard);
    cardForBoards.style.display =  "none";
    mainContainer.classList.remove("bodyBlur");
})

