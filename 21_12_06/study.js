let a = 'study'
a.repeat(2) // 괄호안의 숫자만큼 반복
// studystudy
a[3] = undefined
undefined
a
(10) // [비어 있음 × 3, undefined, 비어 있음 × 6] 
Array(10).fill(100)
(10) // [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
Array(10).fill('abc')
(10)//  ['abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc']
Array(100).fill(1).map((value, indes) => value + indes)
(100) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
Array(100).fill(0).map((value, index) => value = (index+1)**2)
(100) //[1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801, 10000]
Math.pow(Math.pow(2,3),2)
64
let s = 'weniv CEO hojun.lee'
undefined
s.split(' ')
(3) ['weniv', 'CEO', 'hojun.lee']
s.split('.')
(2) ['weniv CEO hojun', 'lee']
s.split('')
(19) ['w', 'e', 'n', 'i', 'v', ' ', 'C', 'E', 'O', ' ', 'h', 'o', 'j', 'u', 'n', '.', 'l', 'e', 'e']
var peter = {
    name : 'Peter Parker',
    sayName : function(){    
        console.log(this.name);
    }
}

var bruce = {
    name : 'Bruce Wayne',
}
peter.sayName.call(bruce);

function sayName(){
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName : sayName
}

var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
}

peter.sayName();
bruce.sayName();