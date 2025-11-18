"use strict";

const run4 = document.getElementById("run4");
const out4 = document.getElementById("out4");

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function() {
  const s = `${this.brand} ${this.model}`;
  console.log(s);
  return s;
};

run4.onclick = () => {
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic");
  const d1 = car1.getDetails();
  const d2 = car2.getDetails();
  out4.textContent = d1 + "\n" + d2;
};
