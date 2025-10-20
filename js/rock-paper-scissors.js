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

//     function play a round (computer choice, player choice)
//         compare choices and determine winner
//         increment winners score
//         display round result message (eg. "You lose the round! Paper beats Rock")

//     loop 5 times
//         get players choice
//         get computers choice
//         play a round with those choices

//     compare player and computer scores to determine winner
//     display game result message (eg. "You lose the game! Final score: ${Player score} wins, ${computer score} losses.)
