// array의 평균 구하기 for of - array값 출력
let array = [10, 20, 30, 40, 50];
let sum = 0;
for (let count of array) {
    sum += count
}
console.log(sum/array.length)

// for in - 인덱스 출력

for (let value in array){
    console.log(value);
}

// while()
let i = 0;
sum = 0;
while (i < 101) {
    sum += i
    i+=2;
}
console.log(sum)

// do{} while()

let num = 0;
do{
    console.log(num);
    num += 1;
} while(num < 11)

// 99단
for (var i = 2; i < 10; i++){
    for (var j = 1; j < 10; j++){
        document.write(`${i} X ${j} = ${i*j} <br>`);
    }
}

let i = 2;
let j = 1;
while (i < 10){
    if (i == 5){
        break;
    }
    while (j < 10){
        console.log(`${i} X ${j} = ${i*j} <br>`);
        j++;
    }
    j = 1;
    i++;
}

// outer 식별자
outer: for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if (i === 5) break outer;
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

//String

let s = "abcdefABCDEF";
s.length // 길이
s.indexOf('cde') // 시작값 설정 가능
s.search('ABC') // 정규표현식 사용 가능
s.slice(0, 4) // 특정 위치를 잘라내서 출력 / 비슷한 구문 = substring 그러나 substring은 음수를 0으로 취급 / slice는 찾아감
s.substr(6, 3) // 특정 위치부터 N개의 string값을 출력
s.replace('ABC', 'XYZ') // ABC를 XYZ로 바꿈

