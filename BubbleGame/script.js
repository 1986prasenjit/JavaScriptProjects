console.log("Connected");
let score = 0;
let timer = 60;
let hitValueRandomNum;
let panelBottom = document.querySelector(".panelBottom");
function getHitValue(){
    panelBottom.addEventListener("click", function(e){
        let userClickedNum = Number(e.target.textContent);
        if(userClickedNum === hitValueRandomNum){
            increaseScore();
            makeBubbles();
            hitValue();
        }
    })
}
function makeBubbles() {
    let clutter = "";
  for (let i = 1; i <= 200; i++) {
    let randomNum = Math.floor(Math.random() * 50);
    clutter += `<div class="bubble">${randomNum}</div>`;
  }
  document.querySelector(".panelBottom").innerHTML = clutter;
}
function increaseScore(){
    score += 10;
    let scoreValue = document.querySelector("#scoreValue");
    scoreValue.textContent = score;
}
function timerValue(){
    let timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else {
            clearInterval(timerInterval);
            panelBottom.innerHTML = `<h1>GAME OVER</h1>`
        }
    },1000)
}
function hitValue(){
    hitValueRandomNum = Math.floor(Math.random() * 50);
    document.querySelector("#hitNumber").textContent = hitValueRandomNum;
}
getHitValue();
makeBubbles();
timerValue();
hitValue();
