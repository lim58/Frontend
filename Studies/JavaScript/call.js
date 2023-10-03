// call : 모든 함수에서 사용 가능, this를 특정값으로 지정함

const mike = {
    name: "Mike"
}

function showThisName() {
    console.log(this.name)
}

showThisName() //윈도우를 가르키기에 undefined
showThisName.call(mike) //this로 사용할 객체를 넘김

function update(birthYear, occupation) {
    this.birthYear = birthYear
    this.occupation = occupation
}

update.call(mike, 2020, "baby") 
// 첫번째 매개변수는 this로 사용될 값
// 두번째 부터는 함수가 사용할 매개변수로 보낼 값
console.log(mike)