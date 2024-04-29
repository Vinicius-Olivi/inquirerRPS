import {
  getUserChoice,
  getComputerChoice,
  determineWinner,
} from "./functions/inq.js";

async function playGame() {
  console.log("Welcome to Rock, Paper, Scissors!");
  const userChoice = await getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
