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
    playRound();
  } else if (
    (playerSelection === "rock" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock") ||
    (playerSelection === "scissor" && computerSelection == "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (playerScore > computerScore) {
    return "Player wins!";
  } else if (playerScore < computerScore) {
    return "Computer wins!";
  } else {
    return "It's a tie";
  }
}

game();
