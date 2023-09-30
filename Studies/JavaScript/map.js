const userList = [
  { name: "Mike", age: 10 },
  { name: "Amily", age: 20 },
  { name: "Simson", age: 30 },
];

const newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: userList.age > 19,
  });
});

console.log(newUserList);
console.log(userList);
