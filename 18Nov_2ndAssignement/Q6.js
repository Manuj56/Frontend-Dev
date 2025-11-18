"use strict";

const run6 = document.getElementById("run6");
const out6 = document.getElementById("out6");

function PersonP(name) {
  this.name = name;
}
PersonP.prototype.identify = function() {
  return `Person: ${this.name}`;
};

function Faculty(name, dept) {
  PersonP.call(this, name);
  this.dept = dept;
}
Faculty.prototype = Object.create(PersonP.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDept = function() {
  return `Dept: ${this.dept}`;
};

function Professor(name, dept, title) {
  Faculty.call(this, name, dept);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getTitle = function() {
  return `Title: ${this.title}`;
};

run6.onclick = () => {
  const prof = new Professor("Dr. Rao", "CS", "Associate");
  const out = `${prof.identify()}\n${prof.getDept()}\n${prof.getTitle()}`;
  console.log(out);
  out6.textContent = out;
};
