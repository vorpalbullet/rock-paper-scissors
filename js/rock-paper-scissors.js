const CHOICES = ["rock", "paper", "scissors"];

displayGameResult(playGame(5));

/**
 * Display the results of the game in the console.
 * @param {[number, number]} scores [humanScore, computerScore]
 */
function displayGameResult([humanScore, computerScore]) {
  let message;
  if (humanScore === computerScore) {
    message = "The game is a tie!";
  } else {
    message = `You ${humanScore > computerScore ? "win" : "lose"} the game!`;
  }

  message += ` Final score - You: ${humanScore}, Computer: ${computerScore}.`;

  console.log(message);
}

/**
 * Play a game of Rock, Paper, Scissors, consisting of a number of rounds.
 *
 * Display the result of the game in the console.
 * @param {number} rounds The number of rounds to play
 * @returns {[number, number]} [humanScore, computerScore]
 */
function playGame(rounds) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    let roundResult = playRound();
    if (roundResult === "win") {
      humanScore++;
    } else if (roundResult === "lose") {
      computerScore++;
    }
  }

  return [humanScore, computerScore];
}

/**
 * Play a round of rock, paper, scissors.
 * @param {string} humanChoice
 * @param {string} computerChoice
 * @returns {string} "win" | "loss" | "tie"
 */
function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  let roundResult = getRoundResult(humanChoice, computerChoice);

  displayRoundResult(roundResult, humanChoice, computerChoice);
  return roundResult;
}

/**
 * Prompt the user for a choice of "rock", "paper", or "scissors"
 * @returns {string} "rock" | "paper" | "scissors"
 */
function getHumanChoice() {
  let choice = "";

  do {
    choice = prompt("Enter your choice (rock, paper, or scissors):", "");

    choice = choice.trim().toLowerCase();
  } while (!CHOICES.includes(choice));

  return choice;
}

/**
 * Get a random choice of "rock", "paper", or "scissors"
 * @returns {string} "rock" | "paper" | "scissors"
 */
function getComputerChoice() {
  return CHOICES.at(Math.floor(Math.random() * CHOICES.length));
}

/**
 * Determine whether round is a "win", "lose", or "tie"
 * @param {string} humanChoice
 * @param {string} computerChoice
 * @returns "win" | "lose" | "tie"
 */
function getRoundResult(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "tie";
  if (isWinningChoice(humanChoice, computerChoice)) return "win";
  return "lose";
}

/** Determine whether a set of choices is a win for the human player
 * @returns {boolean}
 */
function isWinningChoice(humanChoice, computerChoice) {
  return (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  );
}

/**
 * Display the result of a round in the console.
 */
function displayRoundResult(roundResult, humanChoice, computerChoice) {
  let message = "";

  if (roundResult === "tie") {
    message = "It's a tie! No one wins!";
  } else {
    // capitalize choices for display
    humanChoice = capitalizeFirstLetter(humanChoice);
    computerChoice = capitalizeFirstLetter(computerChoice);

    message = `You ${roundResult} the round! `;
    message += `${roundResult === "win" ? humanChoice : computerChoice} beats `;
    message += `${roundResult === "win" ? computerChoice : humanChoice}.`;
  }

  console.log(message);
}

/**
 * Returns the input string with the first character in upper case
 * @param {string} string
 * @returns {string}
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
