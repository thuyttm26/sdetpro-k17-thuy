import Employee from "./Employee";
const CONTRACT_SALARY = 40000;

export default class ContractEmployee extends Employee {
  constructor(name: string) {
    super(name, CONTRACT_SALARY);
  }
  protected setBonus(): void {
    this.bonus = 0;
  }
  public getSalary(): number {
    return this.salary;
  }
  public getBonus(): number {
    this.setBonus();
    return this.bonus;
  }
}
