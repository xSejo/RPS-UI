function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    displayResult.style.color = "gray";
    displayResult.textContent = "It's a tie... No one gained points";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    currentScore.textContent = `${humanScore}:${computerScore}`;
    displayResult.style.color = "green";
    displayResult.textContent = `You win ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    currentScore.textContent = `${humanScore}:${computerScore}`;
    displayResult.style.color = "red";
    displayResult.textContent = `You lose ${computerChoice} beats ${humanChoice}`;
  }

  if (humanScore === 5 || computerScore === 5) endGame();
}

function endGame() {
  const displayResult = document.querySelector(".displayResult");

  if (humanScore > computerScore) {
    displayResult.style.color = "green";
    displayResult.textContent = `YOU WON THE GAME VS THE COMPUTER!!!`;
  } else {
    displayResult.textContent = "red";
    displayResult.textContent = `YOU LOSE THE GAME VS THE COMPUTER!!!`;
  }

  humanScore = 0;
  computerScore = 0;
  tieCounter = 0;
}

const currentScore = document.querySelector(".currentScore");
const displayResult = document.querySelector(".displayResult");

const buttons = document.querySelector("#buttonContainer");
buttons.addEventListener("click", (e) => {
  let target = e.target;

  if (target.tagName !== "button") return;

  switch (target.className) {
    case "rockBtn":
      playRound("rock");
      break;
    case "paperBtn":
      playRound("paper");
      break;
    case "scissorsBtn":
      playRound("scissors");
      break;
  }
});

let humanScore = 0;
let computerScore = 0;
let tieCounter = 0;
