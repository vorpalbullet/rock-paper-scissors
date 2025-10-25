const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return CHOICES.at(Math.floor(Math.random() * 3));
}

function getHumanChoice() {
  let choice = "";

  do {
    choice = prompt("Enter your choice (rock, paper, or scissors):", "");

    choice = choice.toLowerCase();
  } while (!CHOICES.includes(choice));

  return choice;
}

/**
 * Determine whether round is a "win", "loss", or "tie"
 * @param {string} humanChoice
 * @param {string} computerChoice
 * @returns "win" | "loss" | "tie"
 */
function getRoundResult(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) return "tie";

  if (humanChoice == "rock" && computerChoice == "scissors") return "win";
  if (humanChoice == "paper" && computerChoice == "rock") return "win";
  if (humanChoice == "scissors" && computerChoice == "paper") return "win";

  return "loss";
}

function displayRoundResult(roundResult, humanChoice, computerChoice) {
  let message = "";

  if (roundResult == "tie") {
    message = "It's a tie! No one wins!";
  } else {
    // capitalize choices for display
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    computerChoice =
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    message = `You ${roundResult} the round! `;
    message += `${roundResult == "win" ? humanChoice : computerChoice} beats `;
    message += `${roundResult == "win" ? computerChoice : humanChoice}.`;
  }

  console.log(message);
}

/**
 * Play a round of rock, paper, scissors.
 * @param {string} humanChoice
 * @param {string} computerChoice
 * @returns
 */
function playRound(humanChoice, computerChoice) {
  let roundResult = getRoundResult(humanChoice, computerChoice);

  displayRoundResult(roundResult, humanChoice, computerChoice);
  return roundResult;
}

function displayGameResult(humanScore, computerScore) {
  if (humanScore == computerScore) {
    console.log("The game is a tie!");
    return;
  }

  console.log(
    `You ${humanScore > computerScore ? "win" : "lose"} the game!` +
      ` Final score - You: ${humanScore}, Computer: ${computerScore}.`
  );

}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(getHumanChoice(), getComputerChoice());
    if (roundResult == "win") {
      humanScore++;
    } else if (roundResult == "loss") {
      computerScore++;
    }
  }

  displayGameResult(humanScore, computerScore);
}

playGame();
