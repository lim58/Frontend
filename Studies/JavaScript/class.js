class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    // 프로토타입 내부에 저장
    console.log(this.name);
  }
}

const user1 = new User("lim", 17);
console.log(user1);

class Car {
  constructor(color) {
    this.color = color;
  }

  stop() {
    console.log("STOP");
  }
}

class Bmw extends Car { //상속
  constructor(color) { //오버라이딩
    super(color); // 확장
    this.navigation = 1;
  }

  stop() { //메소드 오버라이딩
    super.stop(); // 확장
    console.log("OFF");
  }
}

const myBmw = new Bmw("blue");
console.log(myBmw.color);
myBmw.stop();
