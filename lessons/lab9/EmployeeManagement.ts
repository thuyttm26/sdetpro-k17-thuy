import FTE from "./FTE";
import ContractEmployee from "./ContractEmployee";
import { SalaryController } from "./SalaryController";

const staff = [
  new FTE("One", 250),
  new FTE("Two", 200),
  new FTE("Three", 240),
  new ContractEmployee("Four"),
  new ContractEmployee("Five"),
];

const sorted = SalaryController.sortByTotalIncome(staff);
console.log("Sort by Total income:");
for (const emp of sorted) {
  console.log(
    "Name: " +
      emp.name +
      ", Salary: " +
      emp.salary +
      ", Bonus: " +
      emp.bonus +
      ", Total: " +
      emp.total
  );
}
const total = SalaryController.getTotalSalary(staff);
console.log("Total salary:", total);
