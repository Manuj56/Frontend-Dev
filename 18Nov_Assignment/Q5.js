"use strict";

const form = document.getElementById("form");
const nameI = document.getElementById("name");
const emailI = document.getElementById("email");
const seatsI = document.getElementById("seats");
const nMsg = document.getElementById("nMsg");
const eMsg = document.getElementById("eMsg");
const sMsg = document.getElementById("sMsg");
const ticket = document.getElementById("ticket");

const nameR = /^[A-Za-z ]+$/;
const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", e => {
  e.preventDefault();

  const n = nameR.test(nameI.value);
  const em = emailR.test(emailI.value);
  const s = Number(seatsI.value);

  nMsg.textContent = n ? "" : "Invalid name";
  eMsg.textContent = em ? "" : "Invalid email";
  sMsg.textContent = s >= 1 && s <= 10 ? "" : "Seats must be 1-10";

  if (n && em && s >= 1 && s <= 10) {
    const obj = { name: nameI.value, email: emailI.value, seats: s };
    ticket.innerHTML = `<pre>${JSON.stringify(obj, null, 2)}</pre>`;
  }
});
