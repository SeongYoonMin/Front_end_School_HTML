//재귀함수 : 자신을 재 호출 하는 함수


//factorial
function factorial(n){
    if (n <= 1){
        return n;
    }
    return n * factorial(n-1);
}


//문자열 뒤집기
function stringReverse(text){
    text += '';
    if(text.length <= 1){
        return text;
    }
    return stringReverse(text.slice(1)) + text[0]
}

//문자열 심화
function hardReverse(text){
    text += ''
    if(text.length <= 1){
        return text;
    }
    return text[0]
}

//피보나치 수열
function fib(n){
    if (n <= 2){
        return 1;
    }
    return fib(n-1) + fib(n-2)
}

//fibo 심화
let fibo_cache = [];
function hardFibo(n){
    if (n in fibo_cache){
        return fibo_cache[n];
    }
    fibo_cache[n] = n < 2 ? n : hardFibo(n-2) + hardFibo(n-1)
    return fibo_cache[n];
}

//즉시 실행함수
(function (){
    let a = 1;
    let b = 2;
    return a+b;
}())

//map

let array = [1, 4, 9 , 16];
let value = array.map(x => x * 2);

function lotte(x) {
    return x ** 2
}
let value2 = array.map(lotte);
value2
(4) [1, 16, 81, 256]
array
(4) [1, 4, 9, 16]
value2
(4) [1, 16, 81, 256]
value2.map(Math.sqrt)
(4) [1, 4, 9, 16]
value2.map(Math.sqrt)
(4) [1, 4, 9, 16]


let data = [{
    반 : 1,
    번호 : 1,
    이름 : '호준',
    중간고사점수 : 55
}, {
    반 : 1,
    번호 : 2,
    이름 : '도준',
    중간고사점수 : 80
}, {
    반 : 1,
    번호 : 3,
    이름 : '상준',
    중간고사점수 : 100
}, {
    반 : 1,
    번호 : 4,
    이름 : '경준',
    중간고사점수 : 73
}, {
    반 : 1,
    번호 : 5,
    이름 : '서준',
    중간고사점수 : 22
}, {
    반 : 1,
    번호 : 6,
    이름 : '명준',
    중간고사점수 : 93
}]

let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang2',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}];

회원정보.filter( x => (x.성별 == '남' && x.가입연도.slice(0, 4) == '2021' && x.아이디 == 'jjang'))
[{…}]
0: {아이디: 'jjang', 패스워드: '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 성별: '남', 휴대폰번호: '010-5004-0000', 이메일: 'hojun1@gmail.com', …}
length: 1
[[Prototype]]: Array(0)

