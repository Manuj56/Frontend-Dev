"use strict";

const doubleBtn = document.getElementById("doubleBtn");
const squareBtn = document.getElementById("squareBtn");
const out2 = document.getElementById("out2");

function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

doubleBtn.onclick = () => {
  const result = applyOperation([1,2,3,4], n => n * 2);
  console.log(result);
  out2.textContent = JSON.stringify(result);
};

squareBtn.onclick = () => {
  const result = applyOperation([1,2,3,4], n => n * n);
  console.log(result);
  out2.textContent = JSON.stringify(result);
};
