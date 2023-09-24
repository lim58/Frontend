// 객체 연습
const coco = {
  job: "cat",
  age: 7,
};


// 접근, 추가, 삭제
console.log(coco.job); 
coco.hobby = "bite"; 
console.log(coco);
delete coco.job; 
console.log(coco);


// 객체 생성 함수
function makeObject(name, age) {
  return {
    name: name,
    age: age,
  };
}

const me = makeObject("dayoung", 17);
console.log(me);

const dust = makeObject("hyojeong", 17);
console.log(dust.name)


// 프로퍼티 존재 여부 확인
const cookie = {
    job : "cat"
}

console.log(cookie.birth)
console.log('birth' in cookie)
console.log('job' in cookie)