export default abstract class Employee {
  protected salary: number;
  protected name: string;
  protected bonus: number = 0;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  public getName(): string {
    return this.name;
  }
  public getSalary(): number {
    return this.salary;
  }
  protected abstract setBonus(): void;
  public abstract getBonus(): number;
  public totalIncome(): number {
    return this.salary + this.bonus;
  }
}
