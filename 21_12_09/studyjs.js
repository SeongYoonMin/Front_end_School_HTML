// 이름과 성을 요소로 가진 배열
let arr = [1000, ["Hojun", "Lee"]]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [계좌잔고, [firstName, surname]] = arr;

console.log(계좌잔고);
console.log(firstName);
console.log(surname);

let a = [[1, 2], [3, 4], [5, 6]]

for (let [i, j] of a){
    console.log(i, j);
}

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("끝남!"), 3000);
});

console.log('hello world');
promise.then(v => console.log(v));
console.log('hello world2');


  // hello world
  // hello world2
  // 끝남!
  //동기일때는 순차적으로 실행되어야 하고 비동기일때는 실행되고 있는 중에도 실행될 수 있다.
  //(resolve, reject).then 성공적으로 실행되었을시 resolve의 값을 받아옴

// 1차 접종 퍼센트를 구해주세요!
fetch('https://블라블라.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    });

new Promise(function(resolve, reject) {

    setTimeout(() => reject('error'), 1000);
    
    }).then(function(result) {
    
    alert(result + ' : 잘 수행!');
    return result + 'one';
    
    }).catch(function(result) {
    
    alert(result + ' : 애러 발생!'); // 1
    console.log(result);
    return result + 'two';
    
    }).then(function(result) {
    
    alert(result + ' : 잘 수행!'); // 2
    return result + 'three';
    
});

function one(){ two(); }
function two(){ three(); }
function three(){ console.log('end'); }

//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D≈