let arr = [3, 2, 1];
let num = [18, 20, 30, 8];

arr.sort();
console.log(arr);

num.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(num);

