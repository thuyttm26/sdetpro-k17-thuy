const readline = require("readline-sync");

let height = parseFloat(readline.question("Please in put your height(m)):"));
let weight = parseFloat(readline.question("Please in put your weight(kg)):"));

let ibm = weight / (height * height);
if (height <= 0 || isNaN(height) || weight <= 0 || isNaN(weight)) {
  console.log("Please re-input valid value");
} else if (ibm < 18) {
  console.log(`your IBM is: ${ibm.toFixed(1)}`, "so you are Underweight");
} else if (ibm <= 24.9) {
  console.log(`your IBM is:: ${ibm.toFixed(1)}`, "so you are Normal weight");
} else if (ibm <= 29.9) {
  console.log(`your IBM is: ${ibm.toFixed(1)}`, "so you are Overweight");
} else {
  console.log(`your IBM is: ${ibm.toFixed(1)}`, "so you are Obesity");
}
