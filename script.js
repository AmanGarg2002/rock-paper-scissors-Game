let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");


const yourScore=document.querySelector("#user-score");

const comScore=document.querySelector("#comp-score");



const genCompchoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const rndIdx = Math.floor(Math.random() * 3);
  return options[rndIdx];
};

const drawGame = () => {
  console.log("Game was Draw");
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    yourScore.innerText= userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    comScore.innerText=compScore;
    console.log("YOU LOSE");
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {

  const compChoice = genCompchoice();
    
  if (userChoice === compChoice) {
    // draw game
    drawGame();
    msg.innerText = "It's Draw!. Play Again";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      // paper,scissors
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Scissors") {
      //paper,rock
      userWin = compChoice === "Paper" ? true : false;
    } else {
      // rock,scissors
      userWin = compChoice === "Rock" ? true : false;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
