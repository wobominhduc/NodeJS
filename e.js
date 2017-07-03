// let dong = 8;
// for (let i=1; i<=8; i++){
//     let str = "";
//     for (let j=1; j<=8; j++){
//         if (j<=i){str += j + " ";} else {str += "  "};
//     }
//     console.log(str);
// }

// let str="";
// for (let i=1; i<9; i++){
//     str += i + " ";
//     console.log(str);
// }

// Bai 5
// const dong = 5;
// for (let i=1; i<=dong; i++){
//     let str = "";
//     let k = 1;
//     for (let j=1; j<=dong*2-1; j++){
//         const dieukien = Math.abs(j - dong) < i;
//         if(dieukien) {str += k++ + " ";} else {str += "  ";}
//     }
//     console.log(str);
// }


// Bai 6
const dong = 5;
for (let i=1; i<=dong*2-1; i++){
    let str = "";
    let k = 1;
    for (let j=1; j<=dong; j++){
        const dieukien = Math.abs(i - dong) < j;
        if(dieukien) {str += k++ + " ";} else {str += "  ";}
    }
    console.log(str);
}

