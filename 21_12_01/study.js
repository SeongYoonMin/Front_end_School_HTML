// 날짜
let d = new Date();
d
//Wed Dec 01 2021 10:35:01 GMT+0900 (한국 표준시)
d.getMonth()
//11
d.getDate()
//1
// 월은 0부터 시작합니다.
// 일은 1부터 시작합니다.
d.getDay()
//3
// 일요일부터 0입니다.
undefined
d.getHours()
//10
d.getMinutes()
//35
d.getSeconds()
//1
d.getMinutes()
//35
let dd = new Date();
dd.getMinutes()
//39
// 실시간 아니고 new Date() 했을 때에 시간

let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
과일[0]
//사과
과일[0] = '한라봉'
//사과가 한라봉으로 바뀜
let text = 'abdsf'
text[0]
//a
text[0] = 'zz'
//abdsf앞에 zz가 추가됨
//배열은 값이 변환되는데 문자열은 값이 추가됨

//다차원배열
let 전교점수 = [
    //0
    [
        //0
        [ //0   1   2   3   4
            10, 20, 30, 40, 50
        ],
        //1
        [ //0   1   2   3   4
            20, 30, 40, 50, 60
        ]
    ],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];



let matrix = [[1,2,3],[4,5,6],[7,8,9]]
//1,2,3을 바꾸기위해선?
for (let i in matrix[0]){ //of로도 할수있음.
    matrix[0][i] *= 2
    console.log(matrix[0][i])
}

let 과일 = ['apple', 'watermellon', 'peach', 'strawberry']
// 배열에 값 추가 = push

let 꺼낸과일 = 과일.pop();
undefined
꺼낸과일
'strawberry'
과일.push('hanrabong');
4
과일
(4) ['apple', 'watermellon', 'peach', 'hanrabong']
과일.push(꺼낸과일);
5
과일
(5) ['apple', 'watermellon', 'peach', 'hanrabong', 'strawberry']
과일.push('banana');
6
과일
(6) ['apple', 'watermellon', 'peach', 'hanrabong', 'strawberry', 'banana']
과일.unshift('orange');
7
과일
(7) ['orange', 'apple', 'watermellon', 'peach', 'hanrabong', 'strawberry', 'banana']
과일+''
'orange,apple,watermellon,peach,hanrabong,strawberry,banana'
스트링과일 = 과일+''
'orange,apple,watermellon,peach,hanrabong,strawberry,banana'
스트링과일.split(',')
(7) ['orange', 'apple', 'watermellon', 'peach', 'hanrabong', 'strawberry', 'banana']


phone
'010.1000.1000'
phone.split('.').join('-');
'010-1000-1000'
과일
(7) ['orange', 'apple', 'watermellon', 'peach', 'hanrabong', 'strawberry', 'banana']
과일.slice(2,5)
(3) ['watermellon', 'peach', 'hanrabong']
과일.slice(-5, -2)
(3) ['watermellon', 'peach', 'hanrabong']
과일
(7) ['orange', 'apple', 'watermellon', 'peach', 'hanrabong', 'strawberry', 'banana']
과일.splice(0,2)
(2) ['orange', 'apple']
과일
(5) ['watermellon', 'peach', 'hanrabong', 'strawberry', 'banana']
과일.splice(0,2,'watermellon+peach')
(2) ['watermellon', 'peach']
과일
(4) ['watermellon+peach', 'hanrabong', 'strawberry', 'banana']

let 스트링숫자 = '123213123123';
undefined
let 배열숫자  = [1, 5, 2, 6, 8, 5, 3, 2, 1]
undefined
배열숫자.sort()
(9) [1, 1, 2, 2, 3, 5, 5, 6, 8]
배열숫자
(9) [1, 1, 2, 2, 3, 5, 5, 6, 8]
배열숫자 [25, 34, 12, 66, 655, 8, 111111111, 9]
undefined
배열숫자.sort()
(9) [1, 1, 2, 2, 3, 5, 5, 6, 8]
배열숫자 = [25, 34, 12, 66, 655, 8, 111111111, 9]
(8) [25, 34, 12, 66, 655, 8, 111111111, 9]
배열숫자.sort()
(8) [111111111, 12, 25, 34, 655, 66, 8, 9]
//sort()는 사전식 - 숫자크기 x 숫자의 순서 1~9 ㄱ~ㅎ a~z
//sort((a,b) => a-b) 오름차순 b-a 내림차순
배열숫자 = [23, 5,34, 1,2,5 ,34,2,3,]
(9) [23, 5, 34, 1, 2, 5, 34, 2, 3]
배열숫자.reverse()
(9) [3, 2, 34, 5, 2, 1, 34, 5, 23]
//reverse는 역순, sort().reverse() 하여야 정렬 sort안에 콜백함수를 넣어줌으로써 정렬 정리가능
배열숫자.sort((a,b) => a - b)
(9) [1, 2, 2, 3, 5, 5, 23, 34, 34]
배열숫자.sort((a,b) => b - a)
(9) [34, 34, 23, 5, 5, 3, 2, 2, 1]
배열숫자.sort(function(a,b){return a-b})
(9) [1, 2, 2, 3, 5, 5, 23, 34, 34]

let person = {
    //key: value
    name: '이호준',
    age: 10,
    height : 30,
    weight : 40,
    이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
}
Object.entries(person);
(5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
let data = Object.entries(person);
undefined
data[0]
(2) ['name', '이호준']
for ( i in data){
    console.log(`${i[0]} : ${i[1]}`);
}

undefined
for ( i in data){
    console.log(i);
}

undefined
for ( i of data){
    console.log(`${i[0]} : ${i[1]}`);
}

undefined

for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(i, j, k);
}

let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    k += 10;
    console.log(k)
}
viewk()
changek()
viewk()
let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()