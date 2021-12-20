const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// forEach는 값을 건듬
aespa.forEach((item, index)=>{
    aespa[index] = item + 'item' + '⛰'
});
// map은 새로운 배열을 만듬.

const aespa2 = aespa.map(item => item+'❤️');