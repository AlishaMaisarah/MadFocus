let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    startBtn.disabled = true;
    resetBtn.disabled = false;
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            startBtn.disabled = false;
            resetBtn.disabled = true;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateTimerDisplay();
    startBtn.disabled = false;
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay();
