"use strict";

// variables to keep track of scores
let playerScore = 0;
let computerScore = 0;

// function for the computer picking a random choice
function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const pick = choice[Math.floor(Math.random() * choice.length)];

  return pick;
}

// function for getting player input and conditionals for score tabulations
function playRound() {
  const playerSelection = prompt(
    "Choose rock, paper or scissors"
  ).toLowerCase();

  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    playRound();
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("Player wins this round");
    playerScore++;
  } else {
    console.log("Computer wins this round");
    computerScore++;
  }
}

// function with a for loop playing 5 rounds and picking a winner in the end
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  if (computerScore > playerScore) {
    console.log("Computer wins!");
  } else if (computerScore < playerScore) {
    console.log("Player wins!");
  } else {
    console.log("It's a tie!");
  }
}

console.log(game());
