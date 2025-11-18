"use strict";

class Book {
  constructor(t, a, i, issued = false) {
    this.t = t;
    this.a = a;
    this.i = i;
    this.issued = issued;
  }
  issue() {
    if (this.issued) return false;
    this.issued = true;
    return true;
  }
  data() {
    return `${this.t} | ${this.a} | ${this.i} | ${this.issued}`;
  }
}

const lib = [
  new Book("1984", "Orwell", "B1"),
  new Book("Clean Code", "Martin", "B2"),
  new Book("JS Guide", "Kyle", "B3"),
  new Book("Algo Book", "CLRS", "B4", true)
];

const box = document.getElementById("books");
const isbn = document.getElementById("isbn");

function render() {
  box.innerHTML = "";
  lib.filter(b => !b.issued).forEach(b => {
    const d = document.createElement("div");
    d.textContent = b.data();
    box.appendChild(d);
  });
}

document.getElementById("issue").onclick = () => {
  const book = lib.find(b => b.i === isbn.value);
  if (!book) alert("Not found");
  else if (book.issue()) {
    alert("Issued");
    render();
  } else alert("Already issued");
};

render();
