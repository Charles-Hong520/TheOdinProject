let nameToInt = {};
let intToName = {};
let userScore = 0;
let computerScore = 0;
let roundNum = 0;
function gameover() {
  if(userScore>=5 || computerScore>=5) {
    document.querySelector(".rock").removeEventListener("click", roundrock);
    document.querySelector(".paper").removeEventListener("click",roundpaper);
    document.querySelector(".scissors").removeEventListener("click", roundscissors);
    const winner = document.querySelector(".score");
    let message = "";
    if(userScore>=5) {
      message = "You win!";
    } else {
      message = "You lose!";
    }
    const winnermessage = document.createElement("div");
    winnermessage.innerText = message;
    winner.appendChild(winnermessage);
    console.log("gameover");
  }
}

function round(userChoice) {
  roundNum++;
  const roundlog = document.querySelector(".roundlog");
  const round = document.createElement("p");
    


  userChoice = nameToInt[userChoice];
  let computerChoice = 1 + Math.floor(Math.random() * 3);
  let roundlogtext = `Round ${roundNum}: `;
  roundlogtext += `You picked ${intToName[userChoice]}. CPU picked ${intToName[computerChoice]}. `;

  if(computerChoice==userChoice) {
    roundlogtext += "It's a tie!";
  } else if(computerChoice%3 + 1 == userChoice) {
    roundlogtext += "You win the round.";
    userScore++;
    const span_userscore = document.querySelector(".userscore");
    span_userscore.innerText = `${userScore}`;
  } else {
    roundlogtext += "You lose the round.";
    computerScore++;
    const span_compscore = document.querySelector(".compscore");
    span_compscore.innerText = `${computerScore}`;
  }

  round.innerText = roundlogtext;
  roundlog.appendChild(round);

  gameover();
}

function roundrock() {
  round('rock');
}

function roundpaper() {
  round('paper');
}

function roundscissors() {
  round('scissors');
}
function setup() {

  nameToInt['rock'] = 1;
  nameToInt['paper'] = 2;
  nameToInt['scissors'] = 3;
  for(let k in nameToInt) {
    intToName[nameToInt[k]] = k;
  }

  roundNum = 0;
  computerScore = 0;
  userScore = 0;
  document.querySelector(".rock").addEventListener("click", roundrock);
  document.querySelector(".paper").addEventListener("click",roundpaper);
  document.querySelector(".scissors").addEventListener("click", roundscissors);
}

setup();