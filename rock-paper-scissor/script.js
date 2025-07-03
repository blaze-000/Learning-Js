const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button[data-choice]");
const container = document.querySelector(".container");
const scoreboard = document.querySelector(".scoreboard");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  let result = "";

  if (humanChoice === computerChoice) {
    result = `Both chose ${humanChoice}. It's a tie!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    result = `${humanChoice} beats ${computerChoice}. You win!`;
    humanScore++;
  } else {
    result = `${computerChoice} beats ${humanChoice}. You lose!`;
    computerScore++;
  }

  container.textContent = result;
  scoreboard.textContent = `Score: You - ${humanScore} | Computer - ${computerScore}`;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const humanChoice = btn.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});