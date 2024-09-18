const btns = document.querySelector('#buttons');
const message = document.querySelector('#message');
const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');
const recordPlayer = document.querySelector('#record-player');
const recordComputer = document.querySelector('#record-computer');

let playerScore = 0;
let computerScore = 0;

btns.addEventListener('click', (event) => {
    let target = event.target;
    let choice = '';

    switch(target.id) {
        case 'rockBtn':
            choice = 'Rock';
            break;
        case 'paperBtn':
            choice = 'Paper';
            break;
        case 'scissorsBtn':
            choice = 'Scissors';
            break;
        default:
            break;        
    }

    playGame(choice);
});

function getComputerSelection () {
    let computerNumber = random(3);
    let computerGuess = '';

    switch (computerNumber) {
        case 1:
            computerGuess = 'Rock';
            break;
        case 2:
            computerGuess = 'Paper';
            break;
        case 3:
            computerGuess = 'Scissors';
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
        }  else if (computerChoice === 'Scissors'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else {
            result = `It's a tie!`;
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            result = `You Lose! ${computerChoice} beats ${playerChoice}`;
        } else if (computerChoice === 'Rock'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else {
            result = `It's a tie!`;
        }
    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            result = `You Lose! ${computerChoice} beats ${playerChoice}`;
        } else if (computerChoice === 'Paper'){
            result = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else {
            result = `It's a tie!`;
        }
    } 
    
    return result;
}

function playGame (playerSelect) {
    let playerSelection = playerSelect;
    let computerSelection = getComputerSelection();

    let roundResult = playRound(playerSelection,computerSelection);

    if (roundResult.search('You Win!') > -1) {
        console.log('WIN');
        playerScore++;
    } else if (roundResult.search ('You Lose!') > -1 ) {
        console.log('LOOSE');
        computerScore++;
    } 

    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    message.textContent = roundResult;
    recordPlayer.appendChild(createParagWithText(playerSelection));
    recordComputer.appendChild(createParagWithText(computerSelection));    

    if (playerScore >= 5 && computerScore < 5) {
        message.textContent = 'Game Over. You Win!';
      } else if (playerScore < 5 && computerScore >= 5) {
        message.textContent = 'Game Over. You Lose!';
      }

}

function createParagWithText (text) {
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function random (number) {
    return Math.floor(Math.random() * number + 1);
}