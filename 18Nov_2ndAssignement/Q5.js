"use strict";

const run5 = document.getElementById("run5");
const out5 = document.getElementById("out5");

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getBranch = function() {
  return this.branch;
};

run5.onclick = () => {
  const s = new Student("Kiran", "Computer");
  const res = `Name: ${s.getName()} | Branch: ${s.getBranch()}`;
  console.log(res);
  out5.textContent = res;
};
