const startEl = document.getElementById("btn");
const stopEl = document.getElementById("btn-1");
const resetEl = document.getElementById("btn-2");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1200;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1200;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1200;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
