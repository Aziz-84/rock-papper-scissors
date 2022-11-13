let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let playing = false;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerSelected = document.querySelector(".playerSelected");
const computerSelected = document.querySelector(".computerSelected");
const elPlayerScore = document.querySelector(".playerScore");
const elComputerScore = document.querySelector(".computerScore");
const elInfo = document.querySelector(".info");

rock.addEventListener("click", () => {
  playRound(playerSelection);
  playing = true;
  elPlayerScore.textContent = playerScore;
  elComputerScore.textContent = computerScore;
  playerSelection = "rock ✊";
});

paper.addEventListener("click", () => {
  playRound(playerSelection);
  elPlayerScore.textContent = playerScore;
  elComputerScore.textContent = computerScore;
  playerSelection = "paper ✋";
});
scissors.addEventListener("click", () => {
  playRound(playerSelection);
  elPlayerScore.textContent = playerScore;
  elComputerScore.textContent = computerScore;
  playerSelection = "scissors ✌️";
});

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  playerSelected.textContent = "You selected" + "  " + playerSelection;

  computerSelected.textContent = "computer Selected" + "  " + computerSelection;

  if (computerSelection == "rock ✊" && playerSelection == "scissors ✌️") {
    computerScore++;
    elInfo.textContent = "You Lose! rock beats scissors";
  } else if (
    computerSelection === "scissors ✌️" &&
    playerSelection === "paper ✋"
  ) {
    computerScore++;
    elInfo.textContent = "You Lose! Scissors beats Paper";
  } else if (
    computerSelection === "paper ✋" &&
    playerSelection === "rock ✊"
  ) {
    computerScore++;
    elInfo.textContent = "You Lose! Paper beats Rock";
  } else if (computerSelection === playerSelection) {
    elInfo.textContent = "its a tie";
  } else {
    playerScore++;
    elInfo.textContent = "You win!";
  }
}
if (playerScore === 3) {
  elInfo.textContent = "Player wins the game";
  playing = false;
} else if (computerScore === 3) {
  elInfo.textContent = "Game over";
  elInfo.textContent = "Computer wins the game";
  playing = false;
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return "rock ✊";

    case 2:
      return "paper ✋";

    case 3:
      return "scissors ✌️";
    default:
      break;
  }
}
