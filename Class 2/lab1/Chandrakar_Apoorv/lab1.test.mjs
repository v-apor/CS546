import * as lab1 from './lab1.mjs';

// questionOne
console.log(lab1.questionOne([1, 0, 1]));
console.log(lab1.questionOne([1, 1, 1]));
console.log(lab1.questionOne([10, 11, 12]));
console.log(lab1.questionOne([75, 14, 61]));
console.log(lab1.questionOne([2, 2, 1]));


// questionTwo
console.log(lab1.questionTwo([2, 4, 8, 16, 32, 64, 128]));
console.log(lab1.questionTwo([2, 4, 8, 16, 64, 32, 128]));
console.log(lab1.questionTwo([1, 2]));
console.log(lab1.questionTwo([2, 1]));
console.log(lab1.questionTwo([1, 10, 14, 61, -75]));


// questionThree
console.log(lab1.questionThree({m:1, k:2, b:3}, {b:10, m:20, k:30}));
console.log(lab1.questionThree({x:"Google"}, {x:"Xoogle"}));
console.log(lab1.questionThree({p:1, q:2, r:3}, {e:30, c:50, a:60}));
console.log(lab1.questionThree({key1:"Present"}, {key1:"Present", key2:"Present"}));
console.log(lab1.questionThree({a:10}, {x:1, y:2, z:3, a:false} ));


// questionFour
console.log(lab1.questionFour(`Apoorv,Chandrakar,v-apor
Patrick,Hill,graffixnyc
David,Malan,dmalan`));
console.log(lab1.questionFour(`Col1,Col2,Col3
Val1,Val2,Val3`));
console.log(lab1.questionFour(`SingleLineColumn1,SingleLineColumn2`));
console.log(lab1.questionFour(`SingleLineSingleValue`));
console.log(lab1.questionFour(`1,2,3,4,5
6,7,8,9,10
0,0,0,0,0
-1,-1,-1,-1,-111`));