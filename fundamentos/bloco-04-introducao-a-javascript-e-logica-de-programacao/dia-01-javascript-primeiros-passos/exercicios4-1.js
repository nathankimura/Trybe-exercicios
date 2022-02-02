// exercício 1.
/* let programa="adição";
let a=10;
let b=5;

switch (programa){
    case "adição":
        console.log(a+b);
        break;
    case "subtração":
        console.log(a-b);
        break;
    case "multiplicação":
        console.log(a*b);
        break;
    case "divisão":
        console.log(a/b);
        break;
    case "módulo":
        console.log(a%b);
        break;
    default:
        console.log("Operação não encontrada") */

// exercício 2.
/* let a=10;
let b=11;
if (a>b){
    console.log("a é maior que b")
}
else{
    console.log("b é maior q a")
} */

//exercicio 3.
/* let a=10;
let b=15;
let c=13;
if (a>b && a>c){
    console.log(a)
}
else if (b>a && b>c){
    console.log(b)
}
else if (c>a && c>b){
    console.log(c)
}
 */

//exercício 4.
/* const valor=0;
if (valor>0){
    console.log("valor é positivo")
}
else if (valor<0){
    console.log("valor é negativo")
}
else {
    console.log("valor é zero")
} */

//exercício 5.
/* let angulo1=30;
let angulo2=120;
let angulo3=30;

let somaAngulos= angulo1+angulo2+angulo3;
let verificaAnguloPositivo= angulo1>0 && angulo2>0 && angulo3>0;

if (verificaAnguloPositivo=true && somaAngulos===180){
    console.log("É um triângulo")
}
else{
    console.log("Não é um triângulo")
}
 */

//exercício 6.
/* let peca = "Peão".toLowerCase();

switch (peca){
    case "rei":
        console.log("O " + peca + " move-se todas as direções, porém apenas uma casa.");
        break;
    case "rainha":
        console.log("O " + peca + " move-se todas as direções.");
        break;
    case "bispo":
        console.log("O " + peca + " move-se diagonal.");
        break;
    case "cavalo":
        console.log("O " + peca + " move-se em forma de L.");
        break;
    case "torre":
        console.log("O " + peca + " move-se na horizontal ou vertical.");
        break;
    case "peão":
        console.log("O " + peca + " move-se apenas uma casa a frente, duas pra o caso de ser o primeiro movimento.");
        break;
    default:
        console.log("Peça inválida.")
} */

//exercício 7.
/* let porcentagem=120;

if (porcentagem<0 || porcentagem>100){
    console.log("Nota inválida")
}
else if(porcentagem>=90){
    console.log("Sua nota é A")
}
else if (porcentagem>=80){
   console.log("Sua nota é B")
}
else if (porcentagem>=70){
    console.log("Sua nota é C")
}
else if (porcentagem>=60){
    console.log("Sua nota é D")
}
else if (porcentagem>=50){
    console.log("Sua nota é D")
}
else{
    console.log("Sua nota é F")
} */

//exercício 8.
/* const num1=15;
const num2=4;
const num3=7;
let ePar = false;

if (num1%2===0||num2%2===0||num3%2===0){
    ePar = true;
}
console.log(ePar);
 */

//exercício 9.
/* const num1=14;
const num2=4;
const num3=8;
let eImpar = false;

if (num1%2===1||num2%2===1||num3%2===1){
    eImpar = true;
}
console.log(eImpar);
 */

//exercício 10.
/* const custoProduto= 30;
const valorVenda= 40;
const impostoSobreProduto=0.2*custoProduto;
let quantidadeVendida=1000;
let valorCustoTotal= custoProduto+impostoSobreProduto;
let lucro= valorVenda-valorCustoTotal;

if (custoProduto<0 || valorVenda<0){
    console.log("Valor inexistente")
}
else{
    console.log(quantidadeVendida*lucro)
} */

//exercício 11.
let salarioBruto=5200;

if (salarioBruto<=1556.94 && salarioBruto>=0){
    salarioBase=salarioBruto-salarioBruto*0.08
}
else if (salarioBruto>=1556.95 && salarioBruto<=2594.92){
    salarioBase=salarioBruto-salarioBruto*0.09
}
else if (salarioBruto>=2594.93 && salarioBruto<=5189.82){
    salarioBase=salarioBruto-salarioBruto*0.11
}
else {
    salarioBase=salarioBruto-570.88
}

if (salarioBase>=0 && salarioBase<=193.98){
    salarioLiquido=salarioBase
}
else if (salarioBase>=1903.99 && salarioBase<=2826.65){
    salarioLiquido=salarioBase-((0.075*salarioBase)-142.80)
}
else if (salarioBase>=2826.66 && salarioBase<=3751.05){
    salarioLiquido=salarioBase-((0.15*salarioBase)-354.8)
}
else if (salarioBase>=3751.06 && salarioBase<=4664.68){
    salarioLiquido=salarioBase-((0.225*salarioBase)-636.13)
}
else {
    salarioLiquido=salarioBase-((0.275*salarioBase)-869.36)
}
console.log(salarioLiquido)
