"use strict";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const pick = choice[Math.floor(Math.random() * choice.length)];

  return pick;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
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
