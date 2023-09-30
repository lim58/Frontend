let user = ["apple", "bear", "cell"]

user.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`)
})

// 배열 순회
function fruits (item) {
    console.log(item)
}

const arr = ["apple", "orange", "kiwi"]

arr.forEach(fruits)
arr.forEach((item) => {
    console.log(item)
})


// value, index 인자로 받기
const eng = ["a", "b", "c"]

eng.forEach((item, index, arr) => {
    console.log(`${item} ${index} ${arr}`)
})

