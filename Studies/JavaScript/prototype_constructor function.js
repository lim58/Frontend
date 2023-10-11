const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive--");
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

console.log(x5.wheels);
z4.drive();
console.log(z4.color);
