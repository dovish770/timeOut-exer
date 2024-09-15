let color = document.querySelector(`#color`);
let changeColorBTN = document.querySelector(`#change`);
let chooseColor = document.querySelector(`#choose`);
let inputColor = document.querySelector(`#input-color`);
let timerInterval = 0;
let timer = 4;
let timerOnHtml = document.querySelector(`#timer`);

function colorSelection() {
    hideOrDisplayChangeColor();
}

function hideOrDisplayChangeColor() {
    inputColor.classList.toggle(`hidden`);
}

function changeColor() {
    hideOrDisplayTimer();
    timerInterval = setInterval(activeTimer, 1000); // Start the timer
    hideOrDisplayChangeColor(); // Hide the input field
}

function activeTimer() {
    if (timer > 0) {
        timerOnHtml.innerHTML = `time for change: ${timer}s`;
        console.log(timer);
        timer--;
    } else {
        hideOrDisplayTimer();
        clearInterval(timerInterval);
        timer = 4;
        applyColor(); // Change the color when timer reaches 0
    }
}

function applyColor() {
    color.style.backgroundColor = inputColor.value; // Apply the selected color
}

function hideOrDisplayTimer() {
    timerOnHtml.classList.toggle(`hidden`);
}

chooseColor.addEventListener('click', colorSelection);
changeColorBTN.addEventListener('click', changeColor);
