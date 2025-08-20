let intArr = [1, 2, 3, 4, 5];

let minValue = intArr[0];
let maxValue = intArr[0];
let minValueIndexes = [0];
let maxValueIndexes = [0];
for (let index = 1; index < intArr.length; index++) {
  const currentValue = intArr[index];
  if (currentValue < minValue) {
    minValue = currentValue;
    minValueIndexes = [];
    minValueIndexes.push(index);
  } else if (currentValue === minValue) {
    minValueIndexes.push(index);
  }
  if (currentValue > maxValue) {
    maxValue = currentValue;
    maxValueIndexes = [];
    maxValueIndexes.push(index);
  } else if (currentValue === maxValue) {
    maxValueIndexes.push(index);
  }
}
// console.log(Math.max(...intArr));
// console.log(Math.min(...intArr));
console.log(`Max values: ${maxValue}, maxValueIndexes: ${maxValueIndexes}`);
console.log(`Min values: ${minValue}, minValueIndexes: ${minValueIndexes}`);
