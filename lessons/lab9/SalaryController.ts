import Employee from "./Employee";
export type Paycheck = {
  name: string;
  salary: number;
  bonus: number;
  total: number;
};
export class SalaryController {
  private static mapToPaycheck(employees: Employee[]): Paycheck[] {
    return employees.map(function (employee) {
      return {
        name: employee.getName(),
        salary: employee.getSalary(),
        bonus: employee.getBonus(),
        total: employee.totalIncome(),
      };
    });
  }
  public static getTotalSalary(employeeList: Employee[]): number {
    let totalSalary = 0;
    for (const emp of employeeList) {
      totalSalary = emp.getSalary() + emp.getBonus() + totalSalary;
    }
    return totalSalary;
  }
  public static sortByTotalIncome(employees: Employee[]): Paycheck[] {
    return this.mapToPaycheck(employees).sort(function (a, b) {
      if (a.total !== b.total) {
        return b.total - a.total;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
}
