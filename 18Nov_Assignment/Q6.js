"use strict";

class Employee {
  constructor(id, name, dept, salary) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
  }
  getAnnual() {
    return this.salary * 12;
  }
  bonus(p) {
    this.salary += (this.salary * p) / 100;
  }
}

const emps = [
  new Employee(1, "A", "Tech", 30000),
  new Employee(2, "B", "HR", 25000),
  new Employee(3, "C", "Sales", 28000),
  new Employee(4, "D", "Tech", 32000),
  new Employee(5, "E", "Finance", 26000)
];

document.getElementById("btn").onclick = () => {
  emps.forEach(e => e.bonus(10));
  const data = emps.map(e => ({ id: e.id, name: e.name, annual: e.getAnnual() }));
  const total = data.reduce((s, i) => s + i.annual, 0);
  document.getElementById("out").textContent =
    JSON.stringify(data, null, 2) + "\n\nTotal Annual Payout: " + total;
};
