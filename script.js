let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let playing = true;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerSelected = document.querySelector(".playerSelected");
const computerSelected = document.querySelector(".computerSelected");
const elPlayerScore = document.querySelector(".playerScore");
const elComputerScore = document.querySelector(".computerScore");
const elInfo = document.querySelector(".info");

rock.addEventListener("click", () => {
  if (playing) {
    playRound(playerSelection);
    elPlayerScore.textContent = playerScore;
    elComputerScore.textContent = computerScore;
    playerSelection = "rock ✊";
  }
  checkScore();
});

paper.addEventListener("click", () => {
  if (playing) {
    playRound(playerSelection);
    elPlayerScore.textContent = playerScore;
    elComputerScore.textContent = computerScore;
    playerSelection = "paper ✋";
  }
  checkScore();
});
scissors.addEventListener("click", () => {
  if (playing) {
    playRound(playerSelection);
    elPlayerScore.textContent = playerScore;
    elComputerScore.textContent = computerScore;
    playerSelection = "scissors ✌️";
  }
  checkScore();
});

function checkScore() {
  if (playerScore === 3) {
    elInfo.textContent = "Game Over:Player wins the game";
    playing = false;
  } else if (computerScore === 3) {
    elInfo.textContent = "Game Over: Computer wins the game";
    playing = false;
  }
}

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
