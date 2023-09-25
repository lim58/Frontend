function User (name, age) {
    // this = {} 빈객체 생성
    this.name = name;
    this.age = age;
    // return this 반환
}

const user1 = new User('lim', 17)
const user2 = new User('jin', 10)
console.log(user1)
console.log(user2)


//method
function UserName (name) {
    this.name = name;
    this.sayMyname = function() {
        console.log(`${name}`)
    }
}
let user = new UserName('han')
user.sayMyname()

// 생성자 함수 연습
function Price(name, price) {
    this.name = name;
    this.price = price;
}
let price1 = new Price("사과", 1000)
let price2 = new Price("배", 2000)
let price3 = new Price("떡", 3000)
console.log(price1)
console.log(price2)
console.log(price3)

function Student (name, age) {
    this.name = name;
    this.age = age
}

let student1 = new Student('a', 10)
let student2 = new Student('b', 10)
console.log(student1)
console.log(student2)