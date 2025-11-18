"use strict";

const run8 = document.getElementById("run8");
const out8 = document.getElementById("out8");

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(fn, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) result.push(fn.call(thisArg, this[i], i, this));
    }
    return result;
  };
}

run8.onclick = () => {
  const arr = [1,2,3];
  const doubled = arr.myMap(n => n * 2);
  console.log(doubled);
  out8.textContent = JSON.stringify(doubled);
};
