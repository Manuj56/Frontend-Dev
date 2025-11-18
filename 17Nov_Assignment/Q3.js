"use strict";

class TxError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

function q3() {
    console.clear();
    const valid = [];
    const invalid = [];

    for (let i = 0; i < transactions.length; i++) {
        try {
            const t = transactions[i];
            if (t === null) throw new TxError("Null entry", "NULL");
            if (t.id === undefined) throw new TxError("Missing id", "ID");
            if (t.amount === undefined) throw new TxError("Missing amount", "AMT");
            if (t.amount < 0) throw new TxError("Negative amount", "NEG");

            valid.push(t);
        } catch (err) {
            invalid.push(err.code);
        }
    }

    console.log("Valid:", valid);
    console.log("Invalid:", invalid);
}
