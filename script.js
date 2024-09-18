const btns = Array.from(document.querySelectorAll('#buttons'));
const message = document.querySelector('#message');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');
const recordPlayer = document.querySelector('#record-player');
const recordComputer = document.querySelector('#record-computer');

let playerScore = 0;
let computerScore = 0;


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

function random (number) {
    return Math.floor(Math.random() * number + 1);
}