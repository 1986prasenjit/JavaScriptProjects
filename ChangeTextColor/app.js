/**
 * Write your challenge solution here
 */

let mainHeading = document.getElementById('mainHeading');
let colorButtons = document.getElementById('colorBtn');

colorButtons.addEventListener('click', function (e) {
  e.stopPropagation();
  if (e.target.id === 'redButton') {
    mainHeading.style.color = 'red';
  } else if (e.target.id === 'greenButton') {
    mainHeading.style.color = 'green';
  } else if (e.target.id === 'blueButton') {
    mainHeading.style.color = 'blue';
  } else if (e.target.id === 'purpleButton') {
    mainHeading.style.color = 'purple';
  } else if (e.target.id === 'resetButton') {
    mainHeading.style.color = 'black';
  }
  console.log('Clicked');
});
