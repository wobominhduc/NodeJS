function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// console.log(getRandomIntInclusive(1,100));
// 912834
// Chay vong lap ddee mua ve so, moivong lap log ra so lan mua so bao nhieu va lan mua nay dc so bao nhieu

const KQ = 11;
let i = 0;
// do {
//     var tmp = getRandomIntInclusive(0,99);
//     console.log("Lan so " + ++i + ": " + tmp);
// } while (tmp!=KQ);
let soMuaDuoc;
// while (soMuaDuoc!==KQ){
//     soMuaDuoc = getRandomIntInclusive(0,99);
//     console.log("Lan so " + ++i + ": " + soMuaDuoc);
// }
for (;soMuaDuoc!==KQ;){
    soMuaDuoc = getRandomIntInclusive(0,99);
    console.log("Lan so " + ++i + ": " + soMuaDuoc);
}