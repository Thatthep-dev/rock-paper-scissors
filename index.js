let comChoice;
let playerChoice;
let result;

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    comChoice = choice[Math.floor(Math.random()*choice.length)];
    return comChoice
}

function playerSelection() {
    playerChoice = prompt('Please selected Rock, Paper, Scissors');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}

// Game logic is here
function playRound() {
    getComputerChoice();
    playerSelection();
    switch (true) {
        case playerChoice === comChoice:
            result = 'draw';
            return result
        case playerChoice === 'rock' && comChoice === 'scissors':
            result = 'win';
            return result
        case playerChoice === 'rock' && comChoice === 'paper':
            result = 'lose';
            return result
        case playerChoice === 'paper' && comChoice === 'rock':
            result = 'win';
            return result
        case playerChoice === 'paper' && comChoice === 'scissors':
            result = 'lose';
            return result
        case playerChoice === 'scissors' && comChoice === 'paper':
            result = 'win';
            return result
        case playerChoice === 'scissors' && comChoice === 'rock':
            result = 'lose';
            return result
        default:
            result = "We don't have that choice.";
            return result
        }
}

function game() {
    for (i=0; i < 5; i++) {
        playRound();
        console.log(comChoice);
        console.log(playerChoice);
        console.log(result);
    }
}