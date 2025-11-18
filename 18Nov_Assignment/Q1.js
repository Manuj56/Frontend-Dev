"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
  applyDiscount(p) {
    this.price = this.price - (this.price * p) / 100;
  }
  details() {
    return `${this.id} | ${this.name} | ₹${this.price} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Phone", 15000, "electronics"),
  new Product(2, "Pen", 50, "stationary"),
  new Product(3, "Shoes", 2500, "fashion"),
  new Product(4, "Book", 300, "edu"),
  new Product(5, "Laptop", 60000, "electronics")
];

products[2].applyDiscount(10);

document.getElementById("btn").onclick = () => {
  const filtered = products.filter(p => p.price > 1000);
  filtered.forEach(p => console.log(p.details()));
  document.getElementById("out").textContent = "Check console";
};
