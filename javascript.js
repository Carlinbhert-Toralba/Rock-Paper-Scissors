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
"use strict";

let playerScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose rock, paper or scissors".toLowerCase());

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const pick = choice[Math.floor(Math.random() * choice.length)];

  return pick;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissor" && computerSelection == "paper")
  ) {
    playerScore++;
    return "Player wins!";
  } else {
    computerScore++;
    return "Computer wins!";
  }
}
console.log(playRound(computerSelection, playerSelection));
// function game() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt(
//       "Choose rock, paper or scissors".toLowerCase()
//     );

//     const computerChoice = getComputerChoice();

//     const result = playRound(playerSelection, computerChoice);

//     if (playerScore > computerScore) {
//       return "Player wins!";
//     } else if (playerScore < computerScore) {
//       return "Computer wins!";
//     } else {
//       return "It's a tie";
//     }
//   }
// }
