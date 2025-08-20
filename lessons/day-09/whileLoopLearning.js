const { question } = require("readline-sync");
const readline = require("readline-sync");
// let isStrillPlaying = true;
// while (isStrillPlaying) {
//   printGameMenu();
//   let userOption = getUserOption();
//   if (userOption === 0) {
//     isStrillPlaying = false;
//   } else if (userOption === 1) {
//     let randomNumber = Math.floor(Math.random() * 10) + 1;
//     console.log("So may man la", randomNumber);
//   } else {
//     console.log("Nhap lui roi~");
//   }
// }

// console.log("Hen gap lai");

// function printGameMenu() {
//   console.log(`/**
//  * ---- LUCKY NUMBER GAME ----
//  * 1. Guess a number (1 => 10)
//  * 0. Exit!
//  */`);
// }

// function getUserOption() {
//   return Number(readline.question("Please select an option:"));
// }
let guessingTime = 0;
let randomNumber = generateRandomeNumber();
do {
  let userInput = getUserInput();
  if (userInput === randomNumber) {
    console.log(`Chuc mung ban!`);
    break;
  }
  guessingTime++;
} while (guessingTime < 3);
if (guessingTime === 3) {
  console.log(`chuc ban may man lan sau`);
} else {
  console.log(`hen gap lai~`);
}
function generateRandomeNumber() {
  return Number(Math.floor(Math.random() * 10 + 1));
}
function getUserInput() {
  return Number(readline.question(`please input number: `));
}
console.log("randomnumer:", randomNumber);
