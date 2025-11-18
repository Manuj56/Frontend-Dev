"use strict";

const f7 = document.getElementById("f");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
const uMsg = document.getElementById("uMsg");
const pMsg = document.getElementById("pMsg");
const res = document.getElementById("res");

const userR = /^.{5,}$/;
const passR = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

f7.addEventListener("submit", e => {
  e.preventDefault();

  const u = userR.test(user.value);
  const p = passR.test(pass.value);

  uMsg.textContent = u ? "" : "Username must be 5+ characters";
  pMsg.textContent = p ? "" : "Password must include upper, lower, number, special";

  res.textContent = u && p ? "Login Successful" : "Fix errors";
});
