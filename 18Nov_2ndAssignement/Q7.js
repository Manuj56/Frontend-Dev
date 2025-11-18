"use strict";

const mulVal = document.getElementById("mulVal");
const numVal = document.getElementById("numVal");
const run7 = document.getElementById("run7");
const out7 = document.getElementById("out7");

function makeMultiplier(multiplier) {
  return function(n) {
    return n * multiplier;
  };
}

run7.onclick = () => {
  const multiplier = makeMultiplier(Number(mulVal.value));
  const result = multiplier(Number(numVal.value));
  console.log(result);
  out7.textContent = String(result);
};
