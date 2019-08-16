const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Starts game/Fades intro out/fades match in
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computers Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Call compareHands
          compareHands(this.textContent, computerChoice);

          //Update images
          playerHand.src = `img/${this.textContent}.png`;
          computerHand.src = `img/${computerChoice}.png`;
        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Check for Tie
    if (playerChoice === computerChoice) {
      winner.textContent = "lol tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "nice! player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "ew computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "nice! player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "ew computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "nice! player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "ew computer wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
