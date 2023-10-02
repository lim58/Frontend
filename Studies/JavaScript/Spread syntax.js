//복제 가능
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

let user1 = { name: "Mike", age: 30 };
let user2 = { ...user1 };

//전개구문 이용
// [4,5,6,1,2,3]으로 만들기
let a = [1, 2, 3];
let b = [4, 5, 6];

const number = [...b, ...a];
console.log(number);

// 객체에서 전개구문 이용
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["Js", "React"];
let lang = ["Korean", "English"];

/*
user = Object.assign({}, user, info, { skils: [] });

fe.forEach((item) => {
  user.skils.push(item);
});

lang.forEach((item) => {
    user.skils.push(item)
})
*/

user = { ...user, ...info, skills: [...fe, ...lang] };

console.log(user);
