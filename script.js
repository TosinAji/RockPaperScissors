'use strict';

// FUNCTION Get computer play
function getComputerPlay() {
// 	create a list of plays (rock,paper,scissors)
    let availablePlays = ["rock", "paper", "scissors"];
// 	generate an integer between 0 and 2 inclusive
    let choice = Math.floor(Math.random() * 3);
// 	whichever number is chosen will map to the play
// 	store the play in a {computerPlay} variable
    let computerPlay = availablePlays[choice];
// 	RETURN {computerPlay}
    return computerPlay;
}

// FUNCTION Get winner (need {userPlay} and {computerPlay})
function getWinner(userPlay, computerPlay) {

// 	compare the user answer with the computer answer, decide if it is a win a lose or a draw for the user
// 	Store that message in a {result} variable
    let result;

// EVENT the user's play didn't fly
    if (userPlay === undefined) {
        // do nothing
        return;
    }

// 	EVENT the user plays rock
    if (userPlay === "rock") {

// 		if computer plays rock
        if (computerPlay === "rock") {
// 			it's a draw, set {result} as "It's a draw my guy!"
            result = `It's a draw my guy! You both played ${userPlay}!`;
// 		otherwise if computer plays scissors
        } else if (computerPlay === "scissors") {
// 			it's a win, set {result} as "It's a win my guy!"
            result = `It's a win my guy! ${userPlay} beats ${computerPlay}!`;
// 		otherwise if computer plays paper
        } else if (computerPlay === "paper") {
// 			it's a loss, set {result} as "It's a loss my guy!"
            result = `It's a loss my guy! ${computerPlay} beats ${userPlay}!`;
        }

    }

// 	EVENT the user plays scissors
    if (userPlay === "scissors") {
// 		if the computer plays scissors
        if (computerPlay === "scissors") { 
// 			it's a draw, set {result} as "It's a draw my guy!"
            result = `It's a draw my guy! You both played ${userPlay}!`;
// 		otherwise if the computer plays paper
        } else if (computerPlay === "paper") {
// 			it's a win, set {result} as "It's a win my guy!"
            result = `It's a win my guy! ${userPlay} beats ${computerPlay}!`;
// 		otherwise if the computer plays rock
        } else if (computerPlay === "rock") {
// 			it's a loss, set {result} as "It's a loss my guy!"
            result = `It's a loss my guy! ${computerPlay} beats ${userPlay}!`;
        }
    }

// 	EVENT the user plays paper
    if (userPlay === "paper") {
// 		if the computer plays paper
        if (computerPlay === "paper") {
// 			it's a draw, set {result} as "It's a draw my guy!"
            result = `It's a draw my guy! You both played ${userPlay}!`;
// 		otherwise if the computer plays rock
        } else if (computerPlay === "rock") {
// 			it's a win, set {result} as "It's a win my guy!"
            result = `It's a win my guy! ${userPlay} beats ${computerPlay}!`;
// 		otherwise if the computer plays scissors
        } else if (computerPlay === "scissors") {
// 			it's a loss, set {result} as "It's a loss my guy!"
            result = `It's a loss my guy! ${computerPlay} beats ${userPlay}!`;
        }
    }

// 	RETURN {result}
    return result;
}


// FUNCTION Get user play
function getUserPlay() {
	// Ask user to type their answer, convert the answer to lowercase
	// store the answer in a {toVerify} variable

    let userPlay = prompt('please type your play (rock, paper, scissors: ').toLowerCase();

	// if {toVerify} is 'rock' or 'paper' or 'scissors' 
    if (userPlay === 'rock' || userPlay === 'paper' || userPlay === 'scissors') {
        // RETURN {userPlay}
        return userPlay;
    // otherwise
    } else {
        // tell the user no
        alert("Sorry that doesn't make sense to me")
    }
}