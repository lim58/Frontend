const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, cur) => {
  return (prev += cur); //현재값이 누산되면서 더해짐
}, 0);

console.log(result);

const userList = [
  { name: "a", age: 10 },
  { name: "b", age: 15 },
  { name: "c", age: 20 },
  { name: "d", age: 25 },
  { name: "e", age: 30 },
];

const userFind = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(userFind);
