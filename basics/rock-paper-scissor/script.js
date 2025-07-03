const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const btn = document.querySelector("button");

function getComputerChoice() {
  const number = Math.floor(Math.random() * choices.length);
  return choices[number];
}

function getHumanChoice() {
  return prompt("Enter your choice: rock, paper, or scissor")
    .trim()
    .toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let result = "";

  switch (computerChoice) {
    case "rock":
      switch (humanChoice) {
        case "rock":
          result = "Both chose rock. Tied";
          break;
        case "paper":
          result = "Paper beats Rock. You win";
          humanScore++;
          break;
        case "scissor":
          result = "Rock beats Scissor. You lose";
          computerScore++;
          break;
        default:
          result = "Invalid choice";
      }
      break;

    case "paper":
      switch (humanChoice) {
        case "paper":
          result = "Both chose paper. Tied";
          break;
        case "rock":
          result = "Paper beats Rock. You lose";
          computerScore++;
          break;
        case "scissor":
          result = "Scissor beats Paper. You win";
          humanScore++;
          break;
        default:
          result = "Invalid choice";
      }
      break;

    case "scissor":
      switch (humanChoice) {
        case "scissor":
          result = "Both chose scissor. Tied";
          break;
        case "paper":
          result = "Scissor beats Paper. You lose";
          computerScore++;
          break;
        case "rock":
          result = "Rock beats Scissor. You win";
          humanScore++;
          break;
        default:
          result = "Invalid choice";
      }
      break;
  }

  container.textContent = `${result} | Score: You - ${humanScore}, Computer - ${computerScore}`;
}

btn.addEventListener("click", () => {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  if (humanScore + computerScore >= 5) {
    if (humanScore > computerScore) {
      container.textContent += "\n🏆 You win the Game!";
    } else if (computerScore > humanScore) {
      container.textContent += "\n💻 Computer wins the Game!";
    } else {
      container.textContent += "\n🤝 The game is tied!";
    }

    // Optionally disable the button after 5 rounds
    btn.disabled = true;
  }
});