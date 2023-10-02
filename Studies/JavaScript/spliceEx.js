// arr.splice(n, m) 특정 요소를 지움
// n부터 m개의 요소를 지움

let arr = [1, 2, 3, 4, 5];

arr.splice(1, 3);
console.log(arr);

// arr.splice(n,m,x) 특정 요소 지우고 추가
arr.splice(1, 0, 2, 3, 4); 
console.log(arr);

 //삭제된 요소 반환
const result = arr.splice(1, 2);
console.log(result);


