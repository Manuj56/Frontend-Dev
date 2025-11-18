"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function q7() {
    console.clear();

    operations.forEach(op => {
        try {
            let result;
            switch (op) {
                case "add": result = num1 + num2; break;
                case "subtract": result = num1 - num2; break;
                case "divide":
                    if (num2 === 0) throw new Error("Divide by zero");
                    result = num1 / num2;
                    break;
                case "power": result = num1 ** num2; break;
                case "root":
                    if (num1 < 0) throw new Error("Invalid root");
                    result = Math.sqrt(num1);
                    break;
                default: throw new Error("Invalid operation");
            }
            console.log(op, "=", result);
        } catch (err) {
            console.log("Error in", op, ":", err.message);
        }
    });
}
