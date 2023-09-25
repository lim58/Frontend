let desc = "안녕하세요";
console.log(desc.length); //문자열 길이

let greet = "Nice to meet you";
console.log(greet.toUpperCase()); //대문자로 변환
console.log(greet.toLowerCase()); //소문자로 변환

let string = "Hi guys, Nice to meet you!";
console.log(string.indexOf("to")); //문자를 인수로 받아 몇번째 글자인지 알려줌
console.log(string.indexOf("bye")); //만약 찾는 문자가 없을 시 -1 출력

let abc = "abcdef";
console.log(abc.slice(2)); //끝을 지정하지 않는다면 문자열 끝까지 출력함
console.log(abc.slice(0, 5)); //양수면 0~4 출력
console.log(abc.slice(2, -2)); //음수면 끝에서부터

console.log(abc.substring(2, 5));
console.log(abc.substring(5, 2)); //n과 m 사이 문자열 반환
console.log(abc.substring(-1)); //음수면 0으로 인식함

let txt = "     a ";
console.log(txt.trim());

let hello = "hello";
console.log(hello.repeat(5));
