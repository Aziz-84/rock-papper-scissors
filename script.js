
let playerSelection="";
let computerSelection="";

function playRound(playerSelection,computerSelection){
   
   
    let playerScore=0;
    let computerScore=0;
   
    for(let i=0;i<5;i++){
       console.log(playerScore);
       console.log(computerScore);
    computerSelection=getComputerChoice();
    playerSelection=prompt("Please choose: rock,paper or scissors ");

      console.log("You selected",playerSelection)
      
      
      console.log("computer selected",computerSelection)

    if(computerSelection=="rock" && playerSelection=="scissors"){
        computerScore++;
       console.log("You Lose! rock beats scissors")
    }
    else if(computerSelection==="scissors"&& playerSelection==="paper"){
        computerScore++;
        console.log("You Lose! Scissors beats Paper")
    }
    else if(computerSelection==="paper" && playerSelection==="rock"){
        computerScore++
        console.log("You Lose! Paper beats Rock")
    }
    else if(computerSelection===playerSelection){
       
        console.log("its a tie")
    }
    else{
        playerScore++;
        console.log("You win!")
    }
}
if(playerScore>computerScore){
    console.log("Game over")
    console.log("Player wins the game")
}
else{
    console.log("Computer wins the game")
}

console.log("computer scored:",computerScore)
console.log("You scored:",playerScore)
}



function getComputerChoice () {
 let random=Math.floor(Math.random()*3+1)

 switch (random) {
    case 1:
        return "rock"
    
    case 2:
        return "paper"

    case 3:
        return "scissors"
    default:
        break;

 }

}

playRound(playerSelection,computerSelection);

