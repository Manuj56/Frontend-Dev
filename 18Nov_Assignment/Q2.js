"use strict";

const f = document.getElementById("f");
const nameI = document.getElementById("name");
const emailI = document.getElementById("email");
const phoneI = document.getElementById("phone");
const passI = document.getElementById("pass");
const nMsg = document.getElementById("nMsg");
const eMsg = document.getElementById("eMsg");
const pMsg = document.getElementById("pMsg");
const paMsg = document.getElementById("paMsg");

const nameR = /^[A-Za-z ]+$/;
const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneR = /^\d{10}$/;
const passR = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

function setState(input, msgBox, valid, text) {
  input.className = valid ? "valid" : "error";
  msgBox.textContent = valid ? "" : text;
}

f.addEventListener("submit", e => {
  e.preventDefault();

  const n = nameR.test(nameI.value);
  const em = emailR.test(emailI.value);
  const ph = phoneR.test(phoneI.value);
  const pw = passR.test(passI.value);

  setState(nameI, nMsg, n, "Invalid Name");
  setState(emailI, eMsg, em, "Invalid Email");
  setState(phoneI, pMsg, ph, "Phone must be 10 digits");
  setState(passI, paMsg, pw, "Weak Password");

  if (n && em && ph && pw) alert("Form Valid");
});
