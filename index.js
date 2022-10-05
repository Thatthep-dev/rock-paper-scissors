let comChoice;
let playerChoice;
let result;

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    comChoice = choice[Math.floor(Math.random()*choice.length)];
    return comChoice
}

function playerSelection() {
    playerChoice = prompt('Please selected Rock, Paper, Scissors') ?? 'Please Select';
    playerChoice = playerChoice.toLowerCase();
    return playerChoice
}

// Game logic is here
function playRound() {
    switch (true) {
        case playerChoice = 
    }
}