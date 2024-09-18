const btns = Array.from(document.querySelectorAll('#buttons'));
const message = document.querySelector('#message');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');
const recordPlayer = document.querySelector('#record-player');
const recordComputer = document.querySelector('#record-computer');

let playerScore = 0;
let computerScore = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        
    })
});

function getComputerSelection () {
    let computerNumber = random(3);
    let computerGuess = '';

    switch (computerNumber) {
        case 1:
            computerGuess = 'rock';
            break;
        case 2:
            computerGuess = 'paper';
            break;
        case 3:
            computerGuess = 'scissors';
            break;
        default:
            console.log('Error has occured trying to generate random Computer selection');
            break;
    }

    return computerGuess;
}



function playRound (playerChoice, computerChoice) {

    let result = '';

    if (playerChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            result = `You Lose! ${computerChoice} beats ${playerChoice}`;
            computerScore += 1;
        }  else if (computerChoice === 'Scissors'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1;
        } else {
            result = `It's a tie!`;
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            result = `You Lose! ${computerChoice} beats ${playerChoice}`;
            computerScore += 1;
        } else if (computerChoice === 'Rock'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1;
        } else {
            result = `It's a tie!`;
        }
    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            result = `You Lose! ${computerChoice} beats ${playerChoice}`;
            computerScore += 1;
        } else if (computerChoice === 'Paper'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
            playerScore += 1;
        } else {
            result = `It's a tie!`;
        }
    } 
    
    return result;
}


function random (number) {
    return Math.floor(Math.random() * number + 1);
}