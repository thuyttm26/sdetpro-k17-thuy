import { BankController } from "./BankController";
import { CheckingAccount } from "./CheckingAccount";
import { SavingAccount } from "./SavingAccount";

const savingAccount = new SavingAccount("Teo", "VCB12345678", 10000);
const checkingAccount = new CheckingAccount("Ti", "VCB87654321", 16000);

const savingController = new BankController(savingAccount);
const checkingController = new BankController(checkingAccount);

console.log("Savings Account:", savingAccount.getName());
savingController.deposit(500);
savingController.withdraw(400);
console.log("Balance: ", savingController.getBalance());

console.log("Checking Account:", checkingAccount.getName());
checkingController.deposit(100);
checkingController.withdraw(16100);
console.log("Balance: ", checkingController.getBalance());
