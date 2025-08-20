const readline = require("readline-sync");
let arrivalTimeStr = readline.question("Arrival Time:");

let arrivalTime = Number(arrivalTimeStr);
let isHeOnTime = arrivalTime == 7;

let myName = "Tun";

if (isHeOnTime) {
  console.log(`Let's talk`);
  myName = "Teo";
} else {
  console.log(`Write a letter`);
  myName = "Ti";
}

//Ternary operator
let msg = isHeOnTime ? "Let's talk" : "Write a letter";

if (!isHeOnTime) {
  console.log(`Write a letter`);
} else {
  console.log(`Let's talk`);
}

if (!isHeOnTime) {
  console.log(`Write a letter`);
} else {
  console.log(`Let's talk`);
}

//Mimic real situation in life

console.log(myName);
