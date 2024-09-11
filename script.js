//  Return randomly "rock","paper" or "scissors"
//     Use Math.random to generate a random value between 0 and 1.
//
//     Multiply the random number with 3 and
//     round it down to the nearest number using Math.floor

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
// Get Human Choice using the prompt method
// Check if choice is valid
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


 // playGame function to play 5 rounds and choose a final winner!
 // Call playRound 5 times in a while loop
 
function playGame () {


// playRound
// Get human choice and computer choice
// Compare both and choose a winner
// return a string output message
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

 let roundCounter = 1;

 while (roundCounter <= 5 ) {
    console.log("Round " + roundCounter);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
   
    playRound(humanSelection, computerSelection);
    console.log("Human:" + humanScore);
    console.log("Computer:" + computerScore);
    roundCounter += 1;
 };

 if (humanScore > computerScore) {
    return "Congrats! You have won against the Computer";
 }
 else {
    return "You have lost! Try your luck again next time!";
 }

}