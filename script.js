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
const playAgainBtn = document.querySelector(".playAgain");

playAgainBtn.addEventListener("click", () => {
  playAgainBtn.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  elPlayerScore.textContent = playerScore;
  elComputerScore.textContent = computerScore;
  playing = true;
});

rock.addEventListener("click", () => {
  if (playing) {
    playerSelection = "rock ✊";
    playRound(playerSelection);
    elPlayerScore.textContent = playerScore;
    elComputerScore.textContent = computerScore;
  }
  checkScore();
});

paper.addEventListener("click", () => {
  if (playing) {
    playerSelection = "paper ✋";
    playRound(playerSelection);
    elPlayerScore.textContent = playerScore;
    elComputerScore.textContent = computerScore;
  }
  checkScore();
});
scissors.addEventListener("click", () => {
  if (playing) {
    playerSelection = "scissors ✌️";
    playRound(playerSelection);
    elPlayerScore.textContent = playerScore;
    elComputerScore.textContent = computerScore;
  }
  checkScore();
});

function checkScore() {
  if (playerScore === 5) {
    elInfo.textContent = "Game Over:Player wins the game";
    playing = false;
    playAgainBtn.classList.remove("hidden");
  } else if (computerScore === 5) {
    elInfo.textContent = "Game Over: Computer wins the game";
    playAgainBtn.classList.remove("hidden");
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
