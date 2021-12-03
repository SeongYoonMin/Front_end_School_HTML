function myFunction() {
    var val1 = "hello";
    return { 
        getval1 : function(){return val1}
    }
}

let result = myFunction();
result.getval1();

function lotto(){
    let number = new Set();
    for (let i = 0; i < 6; i++){
        number.add(Math.floor(Math.random()*45+1));
    }
    if (number.length != 6){ number.add(Math.floor(Math.random()*45+1)); }
    return [...number];
}
for (let i = 1; i < 6; i++){
    console.log(`${i}회차 추천 번호 : ${lotto()}`);
}

function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

