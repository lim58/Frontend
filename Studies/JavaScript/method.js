let boy = {
    name: "Mike",
    showName : function() {
        console.log(this.name)
        // 메소드의 this는 해당 개체를 가리킴
    }
}

let man = boy;
boy = null

man.showName()


let girl = {
    name: "jane",
    sayThis () {
        console.log(this)
    }
}

girl.sayThis()