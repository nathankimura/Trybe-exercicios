// Para fixar 'Objetos'.
/* let player={
name : 'Marta',
lastName : 'Silva',
age : 34,
medals : { golden: 2, silver: 3 },
}
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld']=[2006, 2007, 2008, 2009, 2010, 2018];
console.table(player);

console.log('A jogadora '+player.name+' '+player.lastName+' foi eleita a melhor do mundo por '+player['bestInTheWorld'].length +' vezes.')

console.log('A jogadora possui '+player.medals.golden+' medalhas de ouro e '+player.medals.silver+ ' medalhas de prata'); */

//Para fixer 'for/in e for/of'.

/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let person in names){
    console.log('olá '+ names[person]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let indice in car){
    console.log(indice+" :", car[indice]);
} */

//Para fixer 'for/in e for/of'.

//Para fixar 'funções'.
//1:
/* function soma(a,b){
    return a+b;
}
console.log(soma(2,4));

function subtrae(a,b){
    return a-b;
}
console.log(subtrae(5,3));

function multi(a,b){
    return a*b;
}
console.log(multi(7,5));

function divi(a,b){
    return a/b;
}
console.log(divi(8,6));

function modulo(a,b){
    return a%b;
}
console.log(modulo(5,3));
 */
//2:

/* function maiorDeDois(a,b){
    if (a>b){
        console.log('a:'+a+', é maior que '+'b:'+b)
    }
    else if (a<b){
        console.log('b:'+b+', é maior que '+'a:'+a)
    }
    else{
        console.log('a:'+a+' é igual a b:'+b)
    }
}

maiorDeDois(8,8); */

//3:
/* 
function maiorDeDois(a,b,c){
    if (a>b&&a>c){
        console.log('a:'+a+', é maior que '+'b:'+b+' e c:'+c)
    }
    else if (b>a&&b>c){
        console.log('b:'+b+', é maior que '+'a:'+a+' e c:'+c)
    }
    else if (c>a&&c>b){
        console.log('c:'+c+', é maior que '+'a:'+a+' e b:'+b)
    }
    else{
        console.log('a:'+a+', b:'+b+' e c:'+c+' são iguais');
    }
}

maiorDeDois(10,10,10); */

//4:
/* 
function maiorMenorIgualZero(a){
    if (a>0){
        console.log('Valor de:'+a+' é positivo!');
    }
    else if(a<0){
        console.log('Valor de:'+a+' é negativo!');
    }
    else{
        console.log('Valor de:'+a+' é zero!');
    }
}
maiorMenorIgualZero(7) */

//5:

function eTriangulo(a,b,c){
    if (a<0||b<0||c<0){
        console.log('Erro ângulos inválidos');
    }
    else if(a+b+c===180){
        console.log('Valores validos, e é um triângulo !');
    }
    else{
        console.log('Valores validos, porém não é um triângulo !');
    }
}
eTriangulo(50,80,50)