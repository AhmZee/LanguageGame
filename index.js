let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem("score");

  document.querySelector(
    ".js-score-display"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "english";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "fulani";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "yoruba";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "yoruba") {
    if (computerMove === "english") {
      result = "You lose.";
    } else if (computerMove === "fulani") {
      result = "You win.";
    } else if (computerMove === "yoruba") {
      result = "Tie.";
    }
  } else if (playerMove === "fulani") {
    if (computerMove === "english") {
      result = "You win.";
    } else if (computerMove === "fulani") {
      result = "Tie.";
    } else if (computerMove === "yoruba") {
      result = "You lose.";
    }
  } else if (playerMove === "english") {
    if (computerMove === "english") {
      result = "Tie.";
    } else if (computerMove === "fulani") {
      result = "You lose.";
    } else if (computerMove === "yoruba") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${playerMove}.jpg" class="move-selected"> <img src="images/${computerMove}.jpg" class="move-selected">Computer`;
  document.querySelector(".js-result-display").innerHTML = `${result}`;
  document.querySelector(
    ".js-score-display"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
