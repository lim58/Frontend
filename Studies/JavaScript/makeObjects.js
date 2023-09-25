function makeObject (key, value) {
    return {
        [key] : value
    }
}
const a = makeObject("이름", "쿠키")
const b = makeObject("나이", 7)
const c = makeObject("직업", "고양이")

console.log(a)
console.log(b)
console.log(c)