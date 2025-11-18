"use strict";

const nameInput = document.getElementById("nameInput");
const out1 = document.getElementById("out");
const runBtn = document.getElementById("runBtn");

function greetUser(name, callback) {
  const msg = `Hello ${name}`;
  console.log(msg);
  out1.textContent = msg;
  callback();
}

function showEndMessage() {
  const end = "Welcome to the course!";
  console.log(end);
  out1.textContent += "\n" + end;
}

runBtn.onclick = () => {
  greetUser(nameInput.value || "Student", showEndMessage);
};
