import { BankAccount } from "./BankAccount";

export class SavingAccount extends BankAccount {
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance = this.balance + amount;
    }
  }
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance = this.balance - amount;
    } else {
      console.log(`Not enough money!`);
    }
  }
  public getBalance(): number {
    return this.balance;
  }
  public getName(): string {
    return this.accountName;
  }
}
