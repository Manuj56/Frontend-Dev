"use strict";

const run9 = document.getElementById("run9");
const out9 = document.getElementById("out9");

class PersonC {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class StudentC extends PersonC {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  getBranch() {
    return this.branch;
  }
}

function PersonP(name) {
  this.name = name;
}
PersonP.prototype.getName = function() { return this.name; };

function StudentP(name, branch) {
  PersonP.call(this, name);
  this.branch = branch;
}
StudentP.prototype = Object.create(PersonP.prototype);
StudentP.prototype.constructor = StudentP;
StudentP.prototype.getBranch = function() { return this.branch; };

run9.onclick = () => {
  const sc = new StudentC("Rita", "ECE");
  const sp = new StudentP("Rita", "ECE");
  const outText = `Class -> Name: ${sc.getName()} Branch: ${sc.getBranch()}\nPrototype -> Name: ${sp.getName()} Branch: ${sp.getBranch()}`;
  console.log(outText);
  out9.textContent = outText;
};
