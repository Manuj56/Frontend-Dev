"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function q1() {
    console.clear();
    const valid = [];
    const invalid = [];

    for (let i = 0; i < apiData.length; i++) {
        const raw = apiData[i];
        const num = Number(raw);
        const boolVal = Boolean(raw);
        const strVal = String(raw);

        if (!Number.isNaN(num)) {
            valid.push({ raw, num, boolVal, strVal });
        } else {
            invalid.push({ raw, num, boolVal, strVal });
        }
    }

    console.log("Valid:", valid);
    console.log("Invalid:", invalid);
}
