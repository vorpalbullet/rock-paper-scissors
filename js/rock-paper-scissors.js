function getComputerChoice() {
  // randomly return "rock", "paper", or "scissors"
  return ["rock", "paper", "scissors"].at(Math.floor(Math.random() * 3));
}

// function get players choice
function getHumanChoice() {
  let choice = "";

  // if choice invalid, prompt again till valid
  while (!["rock", "paper", "scissors"].includes(choice)) {
    // prompt player for choice
    choice = prompt("Enter your choice (rock, paper, or scissors):", "");

    // make choice lowercase
    choice = choice.toLowerCase();
  }

  // return players choice
  return choice;
}

// function play game

//     declare human score variable with value 0
//     declare computer score variable with value 0
let humanScore = 0;
let computerScore = 0;

//     function play a round (computer choice, player choice)
function playRound(humanChoice, computerChoice) {
  // capitalize choices for display
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
  computerChoice =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  // compare choices and determine winner
  if (humanChoice == computerChoice) {
    console.log(`It's a tie! You both picked ${humanChoice}. No one wins!`);
    return;
  }

  let win = false;

  if (humanChoice == "rock") {
    win = computerChoice == "scissors";
  } else if (humanChoice == "paper") {
    win = computerChoice == "rock";
  } else {
    // humanChoice == "scissors"
    win = computerChoice == "paper";
  }

  // increment winners score
  // display round result message (eg. "You lose the round! Paper beats Rock")
  if (win) {
    humanScore++;
    console.log(`You win the round! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose the round! ${computerChoice} beats ${humanChoice}`);
  }
}

//     loop 5 times
//         get players choice
//         get computers choice
//         play a round with those choices

//     compare player and computer scores to determine winner
//     display game result message (eg. "You lose the game! Final score: ${Player score} wins, ${computer score} losses.)
