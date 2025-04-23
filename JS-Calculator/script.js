
let inputValue = document.getElementById("inputValue");
let firstNum;
let secondNum;
let step = 0;
let firstNumArray = [];
let secondNumArray = [];
let operations;
let result = 0;

function getNumberValue(num) {
  if (step === 0 || step === 1) {
    firstNumArray.push(num);
    step === 1;
    firstNum = Number(firstNumArray.join(""));
    inputValue.value = firstNum;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNum = Number(secondNumArray.join(""));
    inputValue.value = secondNum;
  }
}
function getOperator(op) {
  //console.log("op  clicked");
  step = 2;
  operations = op;
}
function clearDisplayValue() {
  inputValue.value = 0;
  step = 0;
  firstNumArray = [];
  secondNumArray = [];
  firstNum = null;
  secondNum = null;
  result = 0;
  operations = null;
}
function calculateTotal() {
  if (operations === "+") {
    result = firstNum + secondNum;
    inputValue.value = result;
  } else if (operations === "-") {
    result = firstNum - secondNum;
    inputValue.value = result;
  } else if (operations === "*") {
    result = firstNum * secondNum;
    inputValue.value = result;
  } else if (operations === "/") {
    result = firstNum / secondNum;
    inputValue.value = result;
  }
}
