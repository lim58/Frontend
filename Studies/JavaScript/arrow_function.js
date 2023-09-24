showError(); // 함수선언문은 호이스팅 영향

function showError() {
  console.log("에러");
}

let sayHello = function () {
  console.log("안녕");
};

sayHello();
// 함수표현식은 호이스팅 영향 안받은
// 해당코드가 생성된 후 사용가능 함

const name1 = "쿠키";
const name2 = "코코";

let sayBye = (name1, name2) => {
  console.log(`잘가 ${name1} ${name2}`);
};

sayBye(name1, name2);
// 화살표 함수 연습

