let intArr = [1, 2, 3, 4, 5];
let myEvenNums = intArr.filter(isEvenNumber).length;
let myOddNums = intArr.filter(isOddNumber).length;
console.log(`My Even numbers are: ${myEvenNums}`);
console.log(`My Odd numbers are: ${myOddNums}`);

function isEvenNumber(value) {
  return value % 2 === 0;
}
function isOddNumber(value) {
  return !isEvenNumber(value);
}
