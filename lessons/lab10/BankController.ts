import { BankAccount } from "./BankAccount";

export class BankController {
  private account: BankAccount;

  constructor(account: BankAccount) {
    this.account = account;
  }

  public deposit(amount: number): void {
    this.account.deposit(amount);
  }
  public withdraw(amount: number): void {
    this.account.withdraw(amount);
  }
  public getBalance(): number {
    return this.account.getBalance();
  }
}
