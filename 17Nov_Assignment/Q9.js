"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

function q9() {
    console.clear();
    const clean = [];
    const errors = [];

    for (let i = 0; i < rawData.length; i++) {
        try {
            const obj = JSON.parse(rawData[i]);

            if (!obj.user || !obj.age) throw new Error("Missing field");

            const ageN = Number(obj.age);
            if (Number.isNaN(ageN)) throw new Error("Invalid age");

            obj.age = ageN;
            clean.push(obj);
        } catch (err) {
            errors.push({ line: i, err: err.message });
        }
    }

    console.log("Valid:", clean);
    console.log("Errors:", errors);
}
