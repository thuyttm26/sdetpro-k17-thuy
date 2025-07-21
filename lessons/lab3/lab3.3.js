intArr = [12, 34, 1, 16, 28];

for (let i = 0; i < intArr.length; i++) {
  let minArray = i;
  for (let j = i + 1; j < intArr.length; j++) {
    if (intArr[j] < intArr[minArray]) {
      minArray = j;
    }
  }

  let tempNum = intArr[i];
  intArr[i] = intArr[minArray];
  intArr[minArray] = tempNum;
}

console.log("Sorted (Selection Sort):", intArr);
