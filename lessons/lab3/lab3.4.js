// intArr1 = [1, 12, 16, 28, 34];
// intArr2 = [1, 13, 16, 27, 99];

// let mergedArr = intArr1.concat(intArr2);
// console.log("Merged array", mergedArr);

// for (let i = 0; i < mergedArr.length - 1; i++) {
//   let minArray = i;
//   for (let j = i + 1; j < mergedArr.length; j++) {
//     if (mergedArr[j] < mergedArr[minArray]) {
//       minArray = j;
//     }
//   }

//   let tempNum = mergedArr[i];
//   mergedArr[i] = mergedArr[minArray];
//   mergedArr[minArray] = tempNum;
// }

// console.log("Sorted (Selection Sort):", mergedArr);

let fooArray = [1, 12, 16, 28, 34];
let barArray = [1, 13, 16, 27, 99];
let mergedArr = [];
let fooPosition = 0;
let barPosition = 0;

while (fooPosition < fooArray.length && barPosition < barArray.length) {
  const fooValue = fooArray[fooPosition];
  const barValue = barArray[barPosition];
  if (fooValue <= barValue) {
    mergedArr.push(fooValue);
    fooPosition++;
  } else {
    mergedArr.push(barValue);
    barPosition++;
  }
}
while (fooPosition < fooArray.length) {
  mergedArr.push(fooValue);
  fooPosition++;
}
while (barPosition < barArray.length) {
  mergedArr.push(barArray[barPosition]);
  barPosition++;
}
console.log(mergedArr);
