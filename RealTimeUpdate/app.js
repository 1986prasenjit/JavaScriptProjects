/**
 * Write your challenge solution here
 */

let nameInput = document.getElementById('nameInput');
let jobInput = document.getElementById('jobInput');
let ageInput = document.getElementById('ageInput');
let bioInput = document.getElementById('bioInput');
let nameDisplay = document.getElementById('nameDisplay');
let jobDisplay = document.getElementById('jobDisplay');
let ageDisplay = document.getElementById('ageDisplay');
let bioDisplay = document.getElementById('bioDisplay');

nameInput.addEventListener('input', function () {
  nameDisplay.textContent = this.value || 'Not provided';
});

jobInput.addEventListener('input', function () {
  jobDisplay.textContent = this.value || 'Not provided';
});

ageInput.addEventListener('input', function () {
  ageDisplay.textContent = this.value || 'Not provided';
});

bioInput.addEventListener('input', function () {
  bioDisplay.textContent = this.value || 'Not provided';
});
