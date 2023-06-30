nameToInt = {}
nameToInt['rock'] = 1;
nameToInt['paper'] = 2;
nameToInt['scissor'] = 3;
console.log("Hello, this is rock paper scissor game vs computer");

function round() {
  userChoice = prompt("Type 'Rock', 'Paper', or 'Scissor' to select your choice").toLowerCase();
  if(!(userChoice in nameToInt)) {
    console.log("Please enter a valid choice. Try Again.");
    return;
  }

  userChoice = nameToInt[userChoice];
  computerChoice = Math.floor(Math.random() * 3);
  
  if(computerChoice==userChoice) {
    console.log("It's a tie!");
  } else if(computerChoice%3 + 1 == userChoice) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}
for(let i = 0; i < 5; i++) {
  round();
}