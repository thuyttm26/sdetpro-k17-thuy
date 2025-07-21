intArr1 = [1, 12, 16, 28, 34];
intArr2 = [1, 13, 16, 27, 99];

let mergedArr = intArr1.concat(intArr2);
console.log("Merged array", mergedArr);

for (let i = 0; i < mergedArr.length - 1; i++) {
  let minArray = i;
  for (let j = i + 1; j < mergedArr.length; j++) {
    if (mergedArr[j] < mergedArr[minArray]) {
      minArray = j;
    }
  }

  let tempNum = mergedArr[i];
  mergedArr[i] = mergedArr[minArray];
  mergedArr[minArray] = tempNum;
}

console.log("Sorted (Selection Sort):", mergedArr);
