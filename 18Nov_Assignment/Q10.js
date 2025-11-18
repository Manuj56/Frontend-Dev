"use strict";

const f10 = document.getElementById("f10");
const nm = document.getElementById("name");
const em = document.getElementById("email");
const sk = document.getElementById("skills");
const gh = document.getElementById("github");
const li = document.getElementById("linkedin");
const out10 = document.getElementById("out10");

const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlR = /^https:\/\//;

f10.addEventListener("submit", e => {
  e.preventDefault();

  if (!emailR.test(em.value)) {
    alert("Invalid email");
    return;
  }
  if (!urlR.test(gh.value)) {
    alert("GitHub must start with https://");
    return;
  }
  if (!urlR.test(li.value)) {
    alert("LinkedIn must start with https://");
    return;
  }

  const obj = {
    name: nm.value,
    email: em.value,
    skills: sk.value.split(",").map(s => s.trim()).filter(Boolean),
    github: gh.value,
    linkedin: li.value
  };

  out10.textContent = JSON.stringify(obj, null, 2);
});
