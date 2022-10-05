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

function playRound(playerChoice, comChoice) {
    if (playerChoice === comChoice) {
        result = 'draw';
        return result
    }
}