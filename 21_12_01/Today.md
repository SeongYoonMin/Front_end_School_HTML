# 함수
함수는 왜 사용할까?
- 재사용성
- 아키텍처 파악
- 유지보수

function 함수명 ( parameter ) {
    return ;
}
함수명(argument)

ex.
기본값 : a = 5, b = 10 인 덧셈함수를 만들어보자.
function add(a=5, b=10){
    return a+b;
}
add()
결과값 : 15
만약 a 나 b 중 하나만 기본값으로 쓰고싶다면? undefined 혹은 구조분해할당
ex.
add(undefined, 15)
결과값 : 20

ex2.
function add({a = 100, b = 200}){
    return a+b;
}
add({a : 200})
결과값 : 200

변수를 함수안으로 호출하고 수정할 수 있음.

let value = 5;
function add(a, b){
    console.log(value);
    value += 5;
    return a,b;
}
add();
console.log(value);
결과값 : 5 / 10

함수 안에서 선언한 변수는 밖에서 사용할 수 없음.

function add(a, b){
    let value = 5;
    console.log(value);
}
add()
console.log(value)
결과값 : 5 / value is not defined 에러 발생

매개변수(parameter) : 함수내에서 인자값을 받는 변수
전달인자(argument) : 함수에게 전달 하는 값

function add(a, b){ // a, b 는 매개변수
    return a+b;
}
add(3, 5) // 3, 5는 전달인자

기명함수 : 이름을 사용해 함수 표현식 내부에서 자기자신을 참조가능.
let hello = function halo(who){
    alert(`hello, ${who}`);
}
undefined
hello("john");

결과값 : 경고창으로 hello, john 출력
