// arr.concat() 합쳐서 새 배열로 반환

let arr = [1, 2];

const a = arr.concat([3, 4]);
const b = arr.concat(3, 4);
const c = arr.concat([3,4], 5)

console.log(a)
console.log(b);
console.log(c);
