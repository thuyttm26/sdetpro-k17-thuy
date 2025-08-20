// let intArr = [1, 2, 3, 4, 5];
// let myEvenNums = intArr.filter(isEvenNumber).length;
// let myOddNums = intArr.filter(isOddNumber).length;
// console.log(`My Even numbers are: ${myEvenNums}`);
// console.log(`My Odd numbers are: ${myOddNums}`);

// function isEvenNumber(value) {
//   return value % 2 === 0;
// }
// function isOddNumber(value) {
//   return !isEvenNumber(value);
// }

const readline = require("readline-sync");

let totalNums = Number(readline.question("How many number?"));
if (totalNums > 10 || totalNums < 2) {
  console.log(`We accept numbers from 2 - 10 only`);
  process.exit(1);
}
let array = [];
for (index = 0; index < totalNums; index++) {
  let addNums = Number(
    readline.question(`Please input number at ${index + 1}: `)
  );
  array.push(addNums);
}
let oddNumsCount = 0;
let eventNumsCount = 0;
let myEvenNums = [];
let myOddNums = [];
for (index = 0; index < array.length; index++) {
  const value = array[index];
  if (isEvenNums(value)) {
    eventNumsCount++;
    myEvenNums.push(value);
  } else {
    oddNumsCount++;
    myOddNums.push(value);
  }
}
function isEvenNums(value) {
  if (value % 2 === 0) {
    return value;
  }
}
console.log(`there are ${eventNumsCount} even nums from array ${myEvenNums}`);
console.log(`there are ${oddNumsCount} even nums from array ${myOddNums}`);
