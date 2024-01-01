"use strict";

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const pick = choice[Math.floor(Math.random() * choice.length)];

  return pick;
}

function playRound() {
  const playerSelection = prompt(
    "Choose rock, paper or scissors"
  ).toLowerCase();

  const computerSelection = getComputerChoice();

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
  for (let i = 1; i <= 5; i++) {
    playRound();

    if (computerScore > playerScore) {
      console.log("Computer wins!");
    } else if (computerScore < playerScore) {
      console.log("Player wins!");
    } else {
      console.log("It's a tie!");
    }
  }
}

console.log(game());
