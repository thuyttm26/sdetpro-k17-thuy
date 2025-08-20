let myNum1 = 1;
let myNum2 = 2;

//1. Right operand and Left operand
let result = myNum1 + myNum2;
console.log("Total value: " + result);
console.log("Total value: ", result);
// String litteral/template: backstick

console.log(`5/2: ${5 / 2}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

// Rounding nearest
let roundingNearest = Math.round(9 / 2);
console.log(`9/2(Rounding nearest): ${roundingNearest}`);

let roundingFloor = Math.round(9 / 2);
console.log(`9/2(Rounding floor): ${roundingFloor}`);

let roundingCeiling = Math.round(9 / 2);
console.log(`9/2(Rounding ceiling): ${roundingCeiling}`);
