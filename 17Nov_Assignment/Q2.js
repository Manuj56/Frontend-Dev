"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

function q2() {
    console.clear();

    for (let i = 0; i < employees.length; i++) {
        try {
            const e = employees[i];
            const sal = Number(e.salary);
            const yrs = Number(e.years);
            if (Number.isNaN(sal) || Number.isNaN(yrs)) throw new Error("Invalid data");

            const bonus = yrs > 3 ? sal * 0.1 : sal * 0.05;
            console.log(`Name: ${e.name} | Salary: ${sal} | Years: ${yrs} | Bonus: ${bonus}`);
        } catch (err) {
            console.log("Error:", err.message);
        }
    }
}
