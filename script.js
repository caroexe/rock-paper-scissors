

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
        return "rock";
    } 
    else if (result == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}
function getHumanChoice () {
    let choice = prompt("Choose Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }
    else {
        return "invalid input";
    }
}

// Variables to keep track of players score.
let humanScore = 0;
let computerScore = 0;

function resetScore (){
    humanScore = 0;
    computerScore = 0;
}

 function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        return console.log("It's a tie!");
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore += 1;
                return console.log("You lose! Paper beats Rock");
            }
            else {
                humanScore += 1;
                return console.log("You win! Rock beats scissors");
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                computerScore += 1;
                return console.log("You lose! Scissors beats Paper");
            }
            else {
                humanScore += 1;
                return console.log("You win! Paper beats Rock");
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                computerScore += 1;
                return console.log("You lose! Rock beats Scissors");
            }
            else {
                humanScore += 1;
                return console.log("You win! Scissors beats Paper");
            }
            break;
        default: 
            return console.log("An error has occured");
    }
 }
 
function playGame () {

//  let roundCounter = 1;
//  while (roundCounter <= 5 ) {
//     console.log("Round " + roundCounter);
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
   
//     playRound(humanSelection, computerSelection);
//     console.log("Human:" + humanScore);
//     console.log("Computer:" + computerScore);
//     roundCounter += 1;
//  };



 if (humanScore > computerScore) {
    resetScore();
    return "Congrats! You have won against the Computer";
 }
 else {
    resetScore();
    return "You have lost! Try your luck again next time!";
 }

}