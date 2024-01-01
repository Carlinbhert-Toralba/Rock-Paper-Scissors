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
