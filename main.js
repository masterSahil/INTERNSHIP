const counterElement = document.getElementById('counter');

const targetNumber = 1408785; 
const duration = 10000; 

let currentNumber = 0;
const increment = targetNumber / (duration / 50);

function updateCounter() {
  if (currentNumber < targetNumber) {
    currentNumber += increment;
    counterElement.textContent = Math.floor(currentNumber).toLocaleString();
    requestAnimationFrame(updateCounter);
  } else {
    counterElement.textContent = targetNumber.toLocaleString();
  }
}

updateCounter();
