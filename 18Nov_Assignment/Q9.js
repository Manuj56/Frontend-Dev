"use strict";

class Item {
  constructor(n, p, q) {
    this.n = n;
    this.p = p;
    this.q = q;
  }
}

class Cart {
  constructor() {
    this.items = [];
    this.coupon = null;
  }
  add(i) {
    this.items.push(i);
  }
  getTotal() {
    return this.items.reduce((s, x) => s + x.p * x.q, 0);
  }
  apply(c) {
    const r = /^(SAVE|DISC)(\d{1,2})$/i;
    const m = c.match(r);
    if (!m) return false;
    this.coupon = Number(m[2]);
    return true;
  }
  final() {
    const t = this.getTotal();
    if (!this.coupon) return t;
    return t - (t * this.coupon) / 100;
  }
}

const cart = new Cart();
cart.add(new Item("Shoes", 2500, 1));
cart.add(new Item("Book", 600, 2));
cart.add(new Item("Pen", 20, 5));

document.getElementById("apply").onclick = () => {
  const c = document.getElementById("coupon").value.trim();
  alert(cart.apply(c) ? "Applied" : "Invalid");
};

document.getElementById("total").onclick = () => {
  const o = document.getElementById("out");
  o.textContent = `Total: ${cart.getTotal()}\nFinal: ${cart.final()}`;
};
