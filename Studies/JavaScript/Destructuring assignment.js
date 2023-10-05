// 구조분해할당

//배열 구조 분해
let users = ["mike", "tom", "jane"];
let [user1, user2, user3] = users;
// let user1 = users[0]
// let user2 = users[1]
// let user3 = users[2]
console.log(user1);
console.log(user2);
console.log(user3);

let str = "mike-tom-jane";
let [u1, u2, u3] = str.split("-");
console.log(u1);
console.log(u2);
console.log(u3);

let [a, b, c] = [1, 2]; //c는 undefined가 나옴
console.log(a);
console.log(b);
console.log(c);

let [d = 5, e = 4, f = 3] = [1, 2]; //기본값을 할당해줄 수 있음

let [name1, , name2] = ["mike", "tom", "jane", "tony"];
console.log(name1);
console.log(name2);
// 일부 반환값을 무시함 (할당 x)

// 바꿔치기
// tmp 변수를 사용하지 않아도 됨!!
let apple = 1;
let banana = 2;
[apple, banana] = [banana, apple];

//객체 구조 분해
let Mike = { name: "mike", age: 30 };
let { name, age } = Mike;
console.log(name);
console.log(age);

//let { name, age, gender } = Mike;
//let { naem, age, gender = "male" } = user; 
//기본값 할당

//새로운 변수 이름으로 할당
let Jane = { name: "Jane", age: 20 };
let { name: newName, age: newAge } = users;
console.log(newName);
console.log(newAge);
