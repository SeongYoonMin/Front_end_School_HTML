## 타입

1. Array - 배열
```javascript
    let array = [1,3,'오','칠']
```
2. String - 문자열
```javascript
    let string = 'justify-content'
```
3. Number - 숫자
```javascript
    let number = 83
```
4. Boolean - 논리값
```javascript
    let boolean = true(or false)
```
5. Object - 객체
```javascript
    let object = {
        "local" = "host",
        "ip" = "config",
        "howmuch" = 27000,
        "imfine" = "thankyou"
    }
```
6. ```undefine = undefined```
7. ```null = Object```
8. ```NaN = Number```


##  연산

1. 산술연산 : +, -, /, %, *, **
2. 논리연산 : !, &&, || (+ bit 연산)
3. 비교연산 : =, !=, >, >=, <, <=, ==, ===, !==
4. 조건문 : if, else if, else, switch case
5. 반복문 : for, for in, for of, while, do while, forEach, break, continue
>for
```javascript
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
    //결과 : 0 ~ 9 까지 출력
    //i가 0이고 i가 10이 되기전까지 i값을 console.log로 출력하는데 이때 한번 반복할때마다 i값에 1씩 추가 
```
>for in
```javascript
    let a = [1,2,3,4,5];
    for (let i in a){
        console.log(i);
    }
    //결과 : 0 ~ 4 까지 출력
    //for in은 index값 출력
```
>for of
```javascript
    let a = [1,2,3,4,5];
    for (let i of a){
        console.log(i);
    }
    //결과 : 1 ~ 5 까지 출력
    //for of는 array값 출력
```
>while
```javascript
    let count = 0;
    while (count < 10){
        console.log(count);
        count++;
    }
    //결과 : 0 ~ 9 까지 출력
    //while은 ()안의 조건문을 충족할때까지 반복
    //만약 조건문을 만족하지 못하는경우(위의 예시에선 count값이 증가하지 않을경우) 무한루프 발생
```
>do while
```javascript
    let x = 0;
    do{
        console.log(x);
        x++;
    } while(x<10);
    //결과 : 0 ~ 9 까지 출력
    //while문과 다를바 없음
```
>forEach
```javascript
    let a = [1,2,3,4,5];
    a.forEach(e => console.log(e*2));
    //결과 : a의 값이 *2 되어 출력 = 2 4 6 8 10
    //()안의 callback 함수를 통해 값을 출력 가능하다고함. 깊게다루지않음
```
>break
```javascript
    for (let i = 0; i < 10; i++){
        if (i == 5){
            break;
        }
        console.log(i);
    }
    //결과 : 0 ~ 4 까지 출력 
    //i가 10이될때 까지 반복해야하는데 if문의 조건 5일때를 만족하여 break에 의해 반복 종료
```
>continue
```javascript
    for (let i = 0; i < 5; i++){
        if(i == 3) continue;
        console.log(i);
    }
    //결과 : 0 1 2 4 출력
    //continue는 해당 조건을 충족할때 해당 반복을 건너뜀
```