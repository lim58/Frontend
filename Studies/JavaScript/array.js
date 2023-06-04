//배열 : 여러개의 데이터를 한 번에 담을 수 있는 공간
const blankArr = [];

const numbers = [2, 10, 7, 3.3];

const classmates = ["j", "a", "v", "a", "s"];

//배열의 길이 구하기 (length)
classmates.length;

//배열의 값 꺼내기
//데이터의 위치(index)는 0부터 시작함
classmates[0];
classmates[1];

//배열 맨 뒤에 추가 (push)
classmates.push("c");

//배열 맨 마지막 삭제 (pop)
classmates.pop();

//배열 요소 정렬, 뒤집기 (sort)
classmates.sort();

//배열이 가지고 있는 데이터 확인 (includes)
classmates.includes("a");
