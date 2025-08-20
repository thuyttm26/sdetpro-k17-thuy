const readline = require("readline-sync");
let baseAccount = {
  accountName: "Teo",
  accountNumber: "9704050001234567",
  routingNumber: "VCB001",
  balance: 325000,
};

let account1 = JSON.parse(JSON.stringify(baseAccount));
account1.accountNumber = "9704050001234568";
account1.accountName = "Tun";

let accounts = [baseAccount, account1];

let choice;
do {
  showMenu();
  choice = Number(readline.question(`Please input your choice: `));
  handleUserChoice(choice);
} while (choice !== 0);

function handleUserChoice(choice) {
  switch (choice) {
    case 1:
      handleFindAccount(accounts);
      break;
    case 2:
      handleWithdraw(accounts);
      break;
    case 0:
      console.log("Exiting program...");
      break;
    default:
      console.log("Please re-select the menu!");
      break;
  }
}
function showMenu() {
  console.log(`=== Banking application===`);
  console.log(`1. Find an account`);
  console.log(`2. Update balance`);
  console.log(`0. Exit the program`);
}

function findAccountByNumber(accounts) {
  let loginAttemp = 0;
  while (loginAttemp < 3) {
    let userInputAccountNumber = readline.question(
      `Please input your account number: `
    );
    let findAccount = accounts.find(function (account) {
      return account.accountNumber === userInputAccountNumber;
    });
    if (findAccount) {
      return findAccount;
    } else {
      console.log(`Account not found!`);
      loginAttemp++;
    }
  }
  console.log("❌ Too many login attempts. Exiting...");
  process.exit(); // Exit the entire program
}

function handleFindAccount(accounts) {
  let findAccount = findAccountByNumber(accounts);
  console.log(`Account Name: ${findAccount.accountName}`);
  console.log(`Balance: ${findAccount.balance}`);
}

function handleWithdraw(accounts) {
  let findAccount = findAccountByNumber(accounts);
  let updateBalancedAttempts = 0;
  while (updateBalancedAttempts < 3) {
    let amount = Number(readline.question(`Please input the amount:`));
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid amount. Please enter a number greater than 0");
      updateBalancedAttempts++;
    } else if (amount > findAccount.balance) {
      console.log("Invalid amount. Not enough money!");
      updateBalancedAttempts++;
    } else {
      findAccount.balance -= amount;
      console.log(
        `✅ Withdraw successful. New balance: ${findAccount.balance}`
      );
      return;
    }
    console.log("❌ Too many failed withdrawal attempts. Exiting...");
    process.exit();
  }
}
