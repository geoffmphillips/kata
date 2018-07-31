var prompt = require("prompt-sync")();

var count = 0;
var number = Math.floor((Math.random() * 10) + 1);

while (true) {
  var answer = prompt("Guess a number between 1 and 10: ");
  count++;
  if (isNaN(Number(answer))) {
    console.log("That's not a number");
    count--;
  } else if (answer < number) {
    console.log("Too low! Try again.");
  }
  else if (answer > number) {
    console.log("Too high! Try again.");
  }
  else {
    console.log("Thats correct! You took " + count + " attempts.");
    break;
  }
}
