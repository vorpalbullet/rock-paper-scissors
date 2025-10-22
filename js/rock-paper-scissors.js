function getComputerChoice() {
  return ["rock", "paper", "scissors"].at(Math.floor(Math.random() * 3));
}

function getHumanChoice() {
  let choice = "";

  do {
    choice = prompt("Enter your choice (rock, paper, or scissors):", "");

    choice = choice.toLowerCase();
  } while (!["rock", "paper", "scissors"].includes(choice));

  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log(`It's a tie! No one wins!`);
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

    // capitalize choices for display
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    computerChoice =
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (win) {
      humanScore++;
      console.log(`You win the round! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose the round! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore == computerScore) {
    console.log("The game is a tie!");
    return;
  }

  console.log(
    `You ${humanScore > computerScore ? "win" : "lose"} the game!` +
      ` Final score: ${humanScore} wins, ${computerScore} losses.`
  );
}

playGame();
