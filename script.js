'use strict';

console.log("Hi there");


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
