'use strict';

let userScore = 0;
let computerScore = 0;
let gameCount = 0;

const winner = document.querySelector('#game-result');
const buttons = document.querySelectorAll('button');
const gameResult = document.querySelector('#round-result');


function getComputerPlay() {
    let availablePlays = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    let computerPlay = availablePlays[choice];
    return computerPlay;
}

function playRound(userPlay, computerPlay) {

// make userPlay case-insensitive
userPlay = userPlay.toLowerCase();

let result;

    // check that userPlay isn't empty
    if (userPlay === undefined) {
        // do nothing
        return;
    }

    // 	compare the user answer with the computer answer
    if (userPlay === "rock") {
        if (computerPlay === "rock") {
            result = `draw`;
        } else if (computerPlay === "scissors") {
            result = `win`;
        } else if (computerPlay === "paper") {
            result = `loss`;
        }
    } else if (userPlay === "scissors") {
        if (computerPlay === "scissors") { 
            result = `draw`;
        } else if (computerPlay === "paper") {
            result = `win`;
        } else if (computerPlay === "rock") {
            result = `loss`;
        }
    } else if (userPlay === "paper") {
        if (computerPlay === "paper") {
            result = `draw`;
        } else if (computerPlay === "rock") {
            result = `win`;
        } else if (computerPlay === "scissors") {
            result = `loss`;
        }
    } else {
        result = undefined;
    }

    gameResult.textContent = generateResultMessage(result, userPlay, computerPlay)

    return result;
}

function generateResultMessage(outcome, userPlay, computerPlay) {

    if (outcome === undefined) {
        return `oops I think something went wrong`;
    } else if (outcome === 'draw') {
        return `It's a ${outcome} my guy! You both played ${userPlay}!`;
    } else {
        return `It's a ${outcome} my guy! ${userPlay} beats ${computerPlay}!`;
    }
}

function finalScore() {

    if (userScore > computerScore) {
        return `The user won with a score of ${userScore}`
    } else if (computerScore > userScore) {
        return `The computer won with a score of ${computerScore}`
    } else {
        return `I guess it was a draw! you both got a score of ${userScore}`
    }
}
 
buttons.forEach((button) => button.addEventListener('click', function(event) {
    let outcome = playRound(button.getAttribute('id'), getComputerPlay());
    gameCount++

    if (outcome === 'win') {
        userScore += 1;
    } else if (outcome === 'loss') {
        computerScore += 1;
    } 

    if (gameCount === 5) {
        winner.textContent = finalScore();
    }
}));

