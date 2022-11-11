
// playerSelection,computerSelection

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

console.log(getComputerChoice());
