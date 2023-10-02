function fn() {
    console.log("안녕")
}

setTimeout(fn, 3000)

function showName(name) {
    console.log(name)
}
setTimeout(showName, 5000, "mike")