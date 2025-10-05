import { BankAccount } from "./BankAccount";

export class CheckingAccount extends BankAccount {
  private minimumBalance: number = 50;
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance = this.balance + amount;
    }
  }
  public withdraw(amount: number): void {
    if (amount > 0 && this.balance - amount >= this.minimumBalance) {
      this.balance = this.balance - amount;
    } else {
      console.log(`Not enought money!`);
    }
  }
  public getBalance(): number {
    return this.balance;
  }
  public getName(): string {
    return this.accountName;
  }
}
