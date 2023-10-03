const user = {
    name: "Mike",
    showName : function () {
        console.log(`hello ${this.name}`)
    }
}

user.showName()

let fn = user.showName
fn() //fn에 할당할때 this 값을 잃어버림

let boundFn = fn.bind(user)
boundFn()