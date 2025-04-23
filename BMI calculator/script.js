let button = document.getElementById("btn");

button.addEventListener("click", function () {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let heightStatus = false;
  let weightStatus = false;
  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById(
      "heightError"
    ).innerHTML = `Please enter a valid heighty`;
  } else {
    document.getElementById("heightError").innerHTML = "";
    heightStatus = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById(
      "weightError"
    ).innerHTML = `Please enter a valid weight`;
  } else {
    document.getElementById("weightError").innerHTML = "";
    weightStatus = true;
  }

  if (heightStatus && weightStatus) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerText = "Under weight : " + bmi;
    } else if (bmi > 18.6 && bmi <= 24.5) {
      result.innerText = "normal : " + bmi;
    } else {
      result.innerText = "over weight : " + bmi;
    }
  }
});
