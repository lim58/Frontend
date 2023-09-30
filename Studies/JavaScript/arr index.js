let arr = [1, 2, 3, 4, 5, 1, 2, 3];

console.log(arr.indexOf(2));
console.log(arr.indexOf(3, 2));
console.log(arr.lastIndexOf(2));

let arr1 = [10, 20, 30];
console.log(arr1.includes(10));
console.log(arr1.includes(50));

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = arr2.find((item) => {
  return item % 2 === 0;
});

const odd = arr2.findIndex((item) => {
  return item % 2 === 1;
});

//첫번째 값만 반환
console.log(even);
console.log(odd);

let userList = [
  { name: "lim", age: 17 },
  { name: "kim", age: 20 },
  { name: "bee", age: 30 },
];

const result = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

const adult = userList.filter((user) => {
  if (user.age > 19) {
    return true;
  }
  return false;
});

console.log(result);
console.log(adult);
