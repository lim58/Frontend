const car = {
  wheels: 4,
  drive() {
    console.log("drive-");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

bmw.__proto__ = car;

console.log(bmw.color);
console.log(bmw.wheels);
console.log(bmw.drive);

const x5 = {
  color: "white",
};
x5.__proto__ = bmw;

console.log(x5.color);
console.log(x5.navigation);

for (a in x5) {
  if (x5.hasOwnProperty(a)) {
    console.log("o", a);
  } else {
    console.log("x", a);
  }
}
