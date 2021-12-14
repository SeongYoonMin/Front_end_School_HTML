// 몸풀기 문제

// 1~10,000 까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅하는것이아니라 8이라는 숫자를 모두 카운팅 해야한다.
// ex. 8808 - 8이 3개, 8888 - 8이 4개 로 카운팅해야한다.


// 빈 배열 만드는 법

Array(10);
let x = Array(10);
x[2] = undefined; // 0~9 번째 중 2번째 공간에 undifined.
x[3] = null; // 0~9 번째 중 3번째 공간에 null.
x; // [비어있음, 비어있음, undifined, null, 비어있음, 비어있음, 비어있음, 비어있음, 비어있음, 비어있음];
x.length = 20;
x; // [비어있음, 비어있음, undifined, null, 비어있음, 비어있음, 비어있음, 비어있음, 비어있음, 비어있음, ..., 비어있음] 뒤에 비어있음 10개 추가.
Array(10).fill(0); // 배열의 값을 모두 0으로 채움
Array(10).fill(10); // 배열의 값을 모두 10으로 채움
Array(100).fill(1).map((value, index) => value + index); // 배열 N번에 +1 => [1, ..., 100] 배열 생성
'.'.repeat(10); // . 10개 string으로 출력
'.'.repeat(10).split('.'); // .을 기준으로 쪼개어 배열로 만듬 repeat안의값에 +1됨 == 11개의 배열 생성
'.'.repeat(9).split('.'); // .을 기준으로 쪼개어진 배열 생성 == 10개의 배열 생성
Array.from('abc'); // from 안의 값을 배열로 쪼개줌 [a,b,c]
Array.from('a'.repeat(10)); // 'a'.repeat(10)을 통해 a가 10개있는 string이 생성되고 그것을 배열로 쪼갬 == [a,a,a,...,a]
Array.from('ab'.repeat(10)); // 'ab'.repeat(10)을 통해 ab가 10번 있는 string 이 생성되고 그것을 배열로 쪼갬 == [a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,...,a,b];

(Array(100).fill(1).map((value, index) => value+index)+'') // 1~100으로 이루어진 배열을 string으로 전환.
(Array(100).fill(1).map((value, index) => value+index)+'').split('8') // 1~100으로 이루어진 string을 8을 기준으로 쪼개짐.
(Array(100).fill(1).map((value, index) => value+index)+'').split('8').length // 8을 기준으로 쪼개진 배열의 갯수를 샘. repeat.split때처럼 -1해줘야함.
(Array(100).fill(1).map((value, index) => value+index)+'').split('8').length -1; // 8의 갯수 20개 출력

// 1차원 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시요. ( 단 점들의 배열은 모두 정렬되어있다고 가정 )
// ex. S = {1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3,4) 가 될것이다.

// const zip = (a, b) => a.map((value, index)=>[value, b[index]]);