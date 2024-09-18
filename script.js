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

// Variables to keep track of player score.
let humanScore = 0;
let computerScore = 0;

function resetScore (){
    humanScore = 0;
    computerScore = 0;
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let result = "";

    if (humanChoice == computerChoice) {
        return result = "tie";
    }

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                computerScore += 1;
                result = 'You Lose! Paper beats Rock.';
            }
            else {
                humanScore += 1;
                result = 'You Win! Rock beats Scissors.';
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                computerScore += 1;
                result = 'You Lose! Scissors beats Paper.';
            }
            else {
                humanScore += 1;
                result = 'You Win! Paper beats Rock.';
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                computerScore += 1;
                result = 'You Lose! Rock beats Scissors.';
            }
            else {
                humanScore += 1;
                result = 'You Win! Scissors beats Paper.';
            }
            break;
        default: 
            return console.log("An error has occured"); 
    }

    return result;
 }


function playGame (playerSelect) {

    let playerSelection = playerSelect;
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection,computerSelection); 

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


const btns = document.querySelector('#buttons');
btns.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rockBtn':
            playGame('rock');
            break;
        case 'paperBtn':
            playGame('paper');
            break;
        case 'scissorsBtn':
            playGame('scissors');
            break;
    }
});


const scoreBoardPlayer = document.querySelector('#score-player');
const scoreBoardComputer = document.querySelector('#score-computer');
const recordPlayer = document.querySelector('#record-player');
const recordComputer = document.querySelector('#record-computer');

function createParagWithText(text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}