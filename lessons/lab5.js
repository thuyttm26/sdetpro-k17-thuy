const readline = require("readline-sync");
const myStr = readline.question("Please input desired string: ");
const strToBeCut = myStr
  .toLocaleLowerCase("vi-VN")
  .replace(/[,.?!]/gim, " ")
  .trim()
  .split(/\s+/);
const wordCount = {};
for (word of strToBeCut) {
  if (!Object.prototype.hasOwnProperty.call(wordCount, word)) {
    wordCount[word] = 0;
  }
  wordCount[word] += 1;
}
console.log(wordCount);
