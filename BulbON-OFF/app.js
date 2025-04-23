/**
 * Write your challenge solution here
 */

let toggleButton = document.getElementById('toggleButton');
let bulb = document.getElementById('bulb');
let status = document.getElementById('status');
let body = document.body;

toggleButton.addEventListener('click', function () {
  bulb.classList.toggle('off');
  toggleButton.textContent =
    toggleButton.textContent === 'Turn on' ? 'Turn off' : 'Turn on';
  statusPara.textContent =
    statusPara.textContent === 'Status: Off' ? 'Status: On' : 'Status: Off';
  body.classList.toggle('dark-mode');
});
