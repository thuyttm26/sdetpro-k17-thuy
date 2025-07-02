const readline = require("readline-sync");

let num = Number(readline.question("Please input an integer: "));

if (!Number.isInteger(num) || isNaN(num)) {
  console.log("Please re-input the valid value");
} else if (num % 2 === 0) {
  console.log("This is an even number");
} else {
  console.log("This is an odd number");
}
