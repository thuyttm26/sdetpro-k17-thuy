export abstract class BankAccount {
  protected accountName: string;
  protected accountNumber: string;
  protected balance: number;

  constructor(accountName: string, accountNumber: string, balance: number) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public abstract deposit(amount: number): void;
  public abstract withdraw(amount: number): void;
  public abstract getBalance(): number;
  public abstract getName(): string;
}
