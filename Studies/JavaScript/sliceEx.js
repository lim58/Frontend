let list = ["01. 시작", "02. js 역사", "03. 자료형"];

let newList = [];

for (let i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}
console.log(newList);
