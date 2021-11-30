

//1번
let value = [10, 20, 30, 10, 20, 30, 40, 10];
let avg = 0;
for (i of value){
    avg += i;
}
avg = avg/value.length;
console.log(`AVG is ${avg}`);
let bunsan = 0;
for (i of value){
    if (i > avg){
        bunsan += ((i-avg)**2);
    }
    else{
        bunsan += ((avg-i)**2);
    }
    console.log(bunsan/value.length);
}

//['5','4','10','2','5'].split(',')
//2번


//3번
let value = [11,22,33,111,2];
let answer = 0;
let realAnswer = 0;
for (i of value){
    if (i >= 10 && i < 100){
        answer = (parseInt(i/10)+(i%10))
    }
    else if (i >= 100){
        answer = (parseInt(i/100)+(parseInt((i/10)%10))+(i%10))
    }
    else{
        answer += i
    }
    console.log(answer);
    realAnswer += answer;
    answer = 0;
}
console.log(`정답 : ${realAnswer}`);