//exercicio 1.
/* 
let fatorialDez=1;

for (i=10;i>=1;i-=1){
    fatorialDez*=i;
}
console.log(fatorialDez); 
*/

//exercicio 2.

let word = 'banana';
let wordArray= Array.from(word);
let wordBackArray=[];
//wordArray=[ 't', 'r', 'y', 'b', 'e', 'r' ]

for (i=wordArray.length-1;i>=0;i-=1){
    wordBackArray.push(wordArray[i])
}
let wordBack=wordBackArray.toString();
console.log(wordBack);

