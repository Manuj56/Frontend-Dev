"use strict";

const out3 = document.getElementById("out3");
const testArrowBtn = document.getElementById("testArrow");
const testNormalBtn = document.getElementById("testNormal");

const user = {
  name: "Amit",
  showName: () => {
    console.log(this.name);
    return this.name;
  }
};

const userFixed = {
  name: "Amit",
  showName() {
    console.log(this.name);
    return this.name;
  }
};

testArrowBtn.onclick = () => {
  const val = user.showName();
  out3.textContent = `Arrow result: ${String(val)}`;
};

testNormalBtn.onclick = () => {
  const val = userFixed.showName();
  out3.textContent = `Normal result: ${String(val)}`;
};
