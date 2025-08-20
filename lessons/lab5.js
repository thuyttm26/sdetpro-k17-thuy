const readline = require("readline-sync");
const stringInput = getUserInput();
const individualWord = processInputStr(stringInput);
const groupdWords = groupWordFromStr(individualWord);
console.log(groupdWords);

function getUserInput() {
  return readline.question(`Please input your sentence:`);
}

function processInputStr(stringInput) {
  return stringInput.replace(/[,.?!]/gim, "").split(/\s+/);
}

function groupWordFromStr(individualWord) {
  const wordCount = {};
  for (const word of individualWord) {
    if (wordCount[word]) {
      wordCount[word] = wordCount[word] + 1;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
