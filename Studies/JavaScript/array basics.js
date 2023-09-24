//배열
// 문자, 숫자, 객체, 함수 등도 표현 가능함
let a = [
  1,
  "q",
  true,
  { name: "coco" },
  function say () {
    console.log("안녕");
  },
];
console.log(a);
console.log(a[3].name)
a[4]() //함수 호출
console.log(a[4]()); //함수 호출 후 반환값 출력 (undefined)



let days = ["mon", "tue", "wed"];
// 배열의 마직막 요소 추가, 삭제
days.push("thu");
console.log(days)
days.pop()
console.log(days)

// 배열의 앞 추가, 삭제
days.unshift("sun")
console.log(days)
days.shift()
console.log(days)


let animal = ["lion", "bird", "cat"]
// length 배열의 길이를 이용하여 인덱스 순회
for(let i = 0; i<animal.length; i++)
{
    console.log(animal[i])
}

// 배열 요소를 직접 사용하여 순회
for(let value of animal) {
    console.log(value)
}