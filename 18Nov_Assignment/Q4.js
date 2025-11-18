"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.formBox = document.createElement("div");
  }
  render(target) {
    this.formBox.innerHTML = "";
    this.fields.forEach(f => {
      const label = document.createElement("label");
      label.textContent = f.label;
      const input = f.type === "select" ? document.createElement("select") : document.createElement("input");
      if (f.type === "select") {
        f.options.forEach(o => {
          const op = document.createElement("option");
          op.value = o.value;
          op.textContent = o.label;
          input.appendChild(op);
        });
      } else {
        input.type = f.type;
      }
      input.name = f.name;
      this.formBox.appendChild(label);
      this.formBox.appendChild(input);
    });
    target.appendChild(this.formBox);
  }
  getData() {
    const obj = {};
    this.fields.forEach(f => {
      const el = this.formBox.querySelector(`[name=${f.name}]`);
      obj[f.name] = el.value;
    });
    return obj;
  }
}

const fields = [
  { label: "Username", type: "text", name: "username" },
  { label: "Email", type: "email", name: "email" },
  { label: "Role", type: "select", name: "role", options: [{ value:"user", label:"User" }, {value:"admin", label:"Admin"}] }
];

const fb = new FormBuilder(fields);
fb.render(document.getElementById("formArea"));

document.getElementById("submit").onclick = () => {
  document.getElementById("data").textContent = JSON.stringify(fb.getData(), null, 2);
};
