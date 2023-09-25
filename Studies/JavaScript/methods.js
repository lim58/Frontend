const user = {
  name: "Tom",
  age: 100,
};

// 객체 복제
const newUser1 = Object.assign({}, user); //빈객체에 user 병합
const newUser2 = Object.assign({ job: "superman" }, user); //초기화 값에 새로운 프로퍼티를 생성
const newUser3 = Object.assign({}, user, { name: "Lim" }); //빈객체에 복제하고 덮어쓰기 시킴
console.log(newUser1);
console.log(newUser2);
console.log(newUser3);

const age = {
  age: 10,
};
const job = {
  job: "superman",
};
const girl = Object.assign(user, age, job); //user에 age, job의 키와 값을 넣음
console.log(girl);

// key 반환
const a = Object.keys(user);
console.log(a);

// value 반환
const b = Object.values(user);
console.log(b);

// key & value 배열로 반환
const c = Object.entries(user);
console.log(c);

// key & value 배열을 객체로 반환
const arr = [
  ["name", "jane"],
  ["age", 10],
];
const d = Object.fromEntries(arr)
console.log(d)