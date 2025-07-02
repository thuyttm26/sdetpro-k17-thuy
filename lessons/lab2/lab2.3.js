const readline = require("readline-sync");

let height = parseFloat(readline.question("Please in put your height(m)):"));
let weight = parseFloat(readline.question("Please in put your weight(kg)):"));

let ibm = weight / (height * height);
if (height <= 0 || isNaN(height) || weight <= 0 || isNaN(weight)) {
  console.log("Please re-input valid value");
} else if (ibm < 18) {
  let targetWeight = 18.5 * (height * height);
  let weightToGain = targetWeight - weight;
  console.log(`your IBM is: ${ibm.toFixed(1)}`, "so you are Underweight");
  console.log(
    "To reach normal weight with IMB 18.5, you need to gain(kg):",
    weightToGain.toFixed(1)
  );
} else if (ibm <= 24.9) {
  console.log(`your IBM is:: ${ibm.toFixed(1)}`, "so you are Normal weight");
} else if (ibm <= 29.9) {
  let targetWeight = 24.9 * (height * height);
  let weightToLose = weight - targetWeight;
  console.log(`your IBM is: ${ibm.toFixed(1)}`, "so you are Overweight");
  console.log(
    "To reach normal weight with IMB 24.9, you need to lose(kg):",
    weightToLose.toFixed(1)
  );
} else {
  let targetWeight = 24.9 * (height * height);
  let weightToLose = weight - targetWeight;
  console.log(`your IBM is: ${ibm.toFixed(1)}`, "so you are Obesity");
  console.log(
    "To reach normal weight with IMB 24.9, you need to lose(kg):",
    weightToLose.toFixed(1)
  );
}
