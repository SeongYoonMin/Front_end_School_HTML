// getter

let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
    return `${this.name} ${this.surname}`;
    }
};

alert(user.fullName); // John Smith

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;

let animal = {
    eats: true,
    walk() {
    alert("동물이 걷습니다.");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.

let animal = {
    eats: true,
    walk() {
    alert("동물이 걷습니다.");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

  // 메서드 walk는 프로토타입 체인을 통해 상속받았습니다.
  longEar.walk(); // 동물이 걷습니다.
  alert(longEar.jumps); // true (rabbit에서 상속받음)

let animal = {
eats: true
};

let rabbit = {
jumps: true,
proto: animal
};

// Object.keys는 객체 자신의 키만 반환합니다.
alert(Object.keys(rabbit)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for(let prop in rabbit) alert(prop); // jumps, eats

let animal = {
    eats: true
};

// 프로토타입이 animal인 새로운 객체를 생성합니다.
let rabbit = Object.create(animal);

//Object.getPrototypeOf(obj) - obj의 [[Prototype]]을 반환.
//Object.setPrototypeOf(obj) - obj의 [[Prototype]]이 proto가 되도록 설정.

//prototype : 상속받은 객체(유전자)
//__proto__는 [[Prototype]]에 접근하기 위한 방법
//__proto__는 비 표준으로 시작했으나 지금은 표준의 부록에 실렸다.


// class는 함수의 한 종류이다. class의 내부에 다양한 메소드나 변수를 선언할 수 있다. 단! class안에서 메소드와 메소드사이에 콤마를 따로 찍진 않는다.
// class는 단순한 편의 문법이 아니다.
class user{
    constructor(name){
        this.name = name;
    }
    
    sayHi(){
        console.log(this.name);
    }
}

let userName = new user("John");
userName.sayHi();
//John

class Animal {

constructor(name) {
    this.speed = 0;
    this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name}가 멈췄습니다.`);
    }

}

class Rabbit extends Animal {
    hide() {
        alert(`${this.name}가 숨었습니다!`);
    }

    stop() {
        super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
        this.hide(); // 숨습니다.
    }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!

class CoffeeMachine {

    #waterAmount = 0;
    
    get waterAmount() {
    return this.#waterAmount;
    }

    set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this.#waterAmount = value;    
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error

// 많은 프로그래밍 언어는 '객체 지향'이라는 패러다임을 기반으로 만들어졌다.

// '객체 지향 패러다임'이란 객체를 우선적으로 생각해서 프로그램을 만든다는 소리이다.

// 객체 지향 프로그래밍 언어들은 '클래스'라는 문법으로 '객체'를 효율적이고 안전하게 만들어 객체 지향 패러다임을 쉽게 프로그래밍에 적용할 수 있도록 도와준다.