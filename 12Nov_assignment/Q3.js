function q3() {
    console.clear();

    let x = 16.75;

    let summary = `
Rounded: ${Math.round(x)}
Square Root: ${Math.sqrt(x)}
Power (x^3): ${Math.pow(x, 3)}
Random (10–50): ${Math.floor(Math.random() * 41) + 10}
`;

    console.log(summary);
}
