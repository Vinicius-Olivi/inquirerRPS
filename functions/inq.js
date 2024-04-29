import { log } from "console";
import inquirer from "inquirer";

export function getUserChoice() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose your move:",
        choices: ["rock", "paper", "scissors"],
      },
    ])
    .then((answers) => answers.choice);
}

export function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

export function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
