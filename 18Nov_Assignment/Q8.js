"use strict";

let userObj = { name: "Akash", email: "akash@mail.com", age: 21 };

const f = document.getElementById("f");
const n = document.getElementById("name");
const e = document.getElementById("email");
const a = document.getElementById("age");
const out = document.getElementById("out");

function load() {
  n.value = userObj.name;
  e.value = userObj.email;
  a.value = userObj.age;
  out.textContent = JSON.stringify(userObj, null, 2);
}

f.addEventListener("submit", ev => {
  ev.preventDefault();
  userObj.name = n.value;
  userObj.email = e.value;
  userObj.age = Number(a.value);
  out.textContent = JSON.stringify(userObj, null, 2);
});

load();
