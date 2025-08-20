intArr = [12, 34, 1, 16, 28];

// for (let i = 0; i < intArr.length - 1; i++) {
//   let minArray = i;
//   for (let j = i + 1; j < intArr.length; j++) {
//     if (intArr[j] < intArr[minArray]) {
//       minArray = j;
//     }
//   }

//   let tempNum = intArr[i];
//   intArr[i] = intArr[minArray];
//   intArr[minArray] = tempNum;
// }

// console.log("Sorted (Selection Sort):", intArr);
let unSortedPossition = intArr.length - 1;
for (; unSortedPossition > 0; unSortedPossition--) {
  for (innerIndex = 0; innerIndex < unSortedPossition; innerIndex++) {
    let currentValue = intArr[innerIndex];
    let rightPositionValue = intArr[innerIndex + 1];
    if (currentValue > rightPositionValue) {
      let temp = intArr[innerIndex];
      intArr[innerIndex] = intArr[innerIndex + 1];
      intArr[innerIndex + 1] = temp;
    }
  }
}
console.log(intArr);
