//객체지향

// 1. 모듈패턴

function Person() {
    let age = 35;

    return {
        getAge : function() {
            return age;
        },
        setAge : function(data) {
            age = data;
        }
    }
}

const person = Person();

// person = { getAge : f, setAge : f};
// person.getAge(); 35

// 2. 사용자 정의 타입 패턴

// 생성자 함수 PersonType
function PersonType(){
    this.age = 35;
}

PersonType.prototype.getAge = function(){
    return this.age;
}

const instancePerson = new PersonType();
console.log(instancePerson.getAge());