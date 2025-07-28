// humein seekhna factories banaana, matlab ki aap ek baar bluepruint bana do ki har object kaisa dikhega and hum log naye naye objects with different values bana paayege, yahi upar upar se poora kaam hai OOPS mein

function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}

CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  console.log(h1);
  document.body.append(h1);
};

let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");
