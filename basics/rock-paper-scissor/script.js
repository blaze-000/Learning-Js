const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * choices.length);
  return choices[number];
}

function getHumanChoice() {
  return prompt("Enter your choice").trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  switch (computerChoice) {
    case "rock":
      switch (humanChoice) {
        case "rock":
          console.log("Both are rock. Tied");
          break;
        case "paper":
          console.log("Paper beats Rock. You win");
          humanScore += 1;
          break;
        case "scissor":
          console.log("rock beats Scissor. You loose");
          computerScore += 1;
          break;
        default:
          console.log("Invalid Choices");
      }
      break;

    case "paper":
      switch (humanChoice) {
        case "paper":
          console.log("Both are paper. Tied");
          break;
        case "rock":
          console.log("Paper beats Rock. You loose");
          computerScore += 1;
          break;
        case "scissor":
          console.log("Scissor beats paper. You win");
          humanScore += 1;
          break;
        default:
          console.log("Invalid Choices");
      }
      break;

    case "scissor":
      switch (humanChoice) {
        case "scissor":
          console.log("Both are scissor. Tied");
          break;
        case "paper":
          console.log("Scissor beats paper. You Loose");
          computerScore += 1;
          break;
        case "rock":
          console.log("rock beats Scissor. You win");
          humanScore += 1;
          break;
        default:
          console.log("Invalid Choices");
      }
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You - ${humanScore}, computer - ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You win the Game");
  } else if (computerScore > humanScore) {
    console.log("you loose the game");
  } else {
    console.log("tied");
  }
}

playGame();
