import Employee from "./Employee";
const FTE_SALARY = 50000;
const MAX_BONUS = 1000;
export default class FTE extends Employee {
  private workingDays: number;
  constructor(name: string, workingDays: number) {
    super(name, FTE_SALARY);
    this.workingDays = workingDays;
  }
  public setBonus(): void {
    this.bonus = MAX_BONUS * (this.workingDays / (365 - 52));
  }
  public getBonus(): number {
    this.setBonus();
    return this.bonus;
  }
}
