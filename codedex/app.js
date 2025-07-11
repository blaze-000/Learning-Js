const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const session = document.querySelector(".minutes");
let myInterval;
let state = true;
let totalSeconds;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    totalSeconds = sessionAmount * 60;

    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert("Session has already started.");
  }
};

const updateSeconds = () => {
  const minuteDiv = document.querySelector(".minutes");
  const secondDiv = document.querySelector(".seconds");

  totalSeconds--;

  let minutesLeft = Math.floor(totalSeconds / 60);
  let secondsLeft = totalSeconds % 60;

  if (secondsLeft < 10) {
    secondDiv.textContent = "0" + secondsLeft;
  } else {
    secondDiv.textContent = secondsLeft;
  }
  minuteDiv.textContent = `${minutesLeft}`;

  if (minutesLeft === 0 && secondsLeft === 0) {
    bells.play();
    clearInterval(myInterval);
    state = true;
  }
};

startBtn.addEventListener("click", appTimer);






































