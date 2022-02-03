let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1.
/* 
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

//exercicio 2.
/* let resultado=0;
for (let index = 0; index < numbers.length; index += 1) {
    resultado+=numbers[index];
}
console.log(resultado); 
*/

//exercicio 3.
/* 
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}
let resultadoMedia=resultado/numbers.length;

console.log(resultadoMedia) 
*/

//exercicio 4.
/* 
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}
let resultadoMedia=resultado/numbers.length;

if (resultadoMedia>20){
    console.log("valor maior que 20")
}
else{
    console.log("valor menor ou igual a 20")
}
 */

//exercicio 5.
/* let numMaior=numbers[0]
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]>numMaior){
        numMaior=numbers[index]
    }
}
console.log(numMaior)
 */

//exercicio 6.
/* 
let resultado=0;

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2!==0){
    resultado+=1;
    }
}
if (resultado===0){
    console.log("nenhum valor ímpar encontrado")
}else{
    console.log(resultado)
} */

//exercicio 7.
/* 
let menorValor=numbers[0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]<menorValor){
    menorValor=numbers[index]
    }
}
console.log(menorValor)
 */

//exercicio 8.
/* 
let array=[];
let num=0;

for (let index=0; index<25; index+=1){
    num +=1;
    array.push(num);
}
console.log(array)
 */

//exercicio 9.

let array=[];
let num=0;

for (let index=0; index<25; index+=1){
    num +=1;
    array.push(num/2);
}
console.log(array)