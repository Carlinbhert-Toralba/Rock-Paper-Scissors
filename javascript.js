// function randomly returns "Rock", "Paper" or "Scissors"
// create function
// create array of 3 choices named 'choice'
// create variable 'pick' and do math.random for computer 'choice'
// return pick

// function plays a single round
// create function with parameters playerSelection and computerSelection
// if both choices are the same recall the function
// if player wins increase player score
// if computer wins increase computer score

// function plays 5 rounds
// create function game
// add a for loop for 5 rounds
// create variable for playerSelection with prompt
// create variable for computerSelection calling first function
// have the round played
// create game score conditional

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const pick = choice[Math.floor(Math.random() * choice.length)];
}
