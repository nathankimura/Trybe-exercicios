//exercicio 1.
/* 
let fatorialDez=1;

for (i=10;i>=1;i-=1){
    fatorialDez*=i;
}
console.log(fatorialDez); 
*/

//exercicio 2.
/* 
let word = 'banana';
let wordArray= Array.from(word);
let wordBackArray=[];
//wordArray=[ 't', 'r', 'y', 'b', 'e', 'r' ]

for (i=wordArray.length-1;i>=0;i-=1){
    wordBackArray.push(wordArray[i])
}
let wordBack=wordBackArray.toString();
console.log(wordBack);
 */

//exercicio 3.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra=array[0];
let menorPalavra=array[0];
for (i=0; i<array.length;i+=1){
    if (array[i].length>maiorPalavra.length){
        maiorPalavra=array[i]
    }
}
console.log(maiorPalavra);

for (i=0; i<array.length;i+=1){
    if (array[i].length<menorPalavra.length){
        menorPalavra=array[i];
    }
}
console.log(menorPalavra)