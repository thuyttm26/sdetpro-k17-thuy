const readline = require("readline-sync");
const baseAccount = {
  accountName: "Noi",
  accountNumber: "9942136787",
  routingNumber: "ABC123",
  balance: 1000,
};

const accountA = JSON.parse(JSON.stringify(baseAccount));
accountA.accountName = "Map";
accountA.accountNumber = "9942136780";

// console.log(accountA);

let choice;
let accounts = [baseAccount, accountA];

do {
  ShowMenu();
  choice = Number(readline.question(`Input choice: `));
  handleUserChoice(choice);
} while (choice !== 0);

function handleUserChoice(choice) {
  switch (choice) {
    case 1:
      handleFindAccount(accounts);
      break;
    case 2:
      handleWWithdrawal(accounts);
      break;
    case 0:
      console.log(`Exiting programming...`);
      break;
    default:
      console.log(`Please input valid menu!`);
      break;
  }
}
function ShowMenu() {
  console.log("=== Banking application===");
  console.log("1. Find an account");
  console.log("2. Update balance");
  console.log("0. Exit the program");
}

function handleFindAccountByNumber(accounts) {
  let userInput = readline.question(`Please input:`);
  let findAccount = accounts.find(function (account) {
    return account.accountNumber === userInput;
  });
  return findAccount;
}

function handleFindAccount(accounts) {
  let findAccount = handleFindAccountByNumber(accounts);
  if (findAccount) {
    console.log(`Account number: ${findAccount.accountNumber}`);
    console.log(`Balance: ${findAccount.balance}`);
  } else {
    console.log(`Account not found!`);
  }
}

function handleWWithdrawal(accounts) {
  let findAccount = handleFindAccountByNumber(accounts);
  if (!findAccount) {
    console.log("Account not found!");
    return;
  }
  let amount = Number(readline.question(`pLEASE in put the amount:`));
  if (isNaN(amount) || amount <= 0) {
    console.log(`please input valid amount!`);
  }
  if (amount > findAccount.balance) {
    console.log(`Not enough money!`);
  } else {
    findAccount.balance -= amount;
    console.log(`New balance: ${findAccount.balance}`);
  }
}
