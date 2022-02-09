/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}; */
//exercicio1.
/* console.log('Bem-vinda, '+info.personagem); */

//exercicio2.
/* info['recorrente']='sim'; */
/* console.log(info); */

//exercicio3.
/* for (index in info){ */
/*     console.log(index); */
/* } */

//exercicio4.
/* for (index in info){ */
/*     console.log(info[index]); */
/* } */

//exercicio5.  
/*   let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  } */
/* 
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
 */
//exercicio6.
/* console.log('O livro favorito de '+leitor.nome+' '+leitor.sobrenome+' se chama '+leitor.livrosFavoritos[0].titulo); */

//exercicio7.
/* leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
    )
console.log(leitor.nome+' tem '+leitor.livrosFavoritos.length+' livros favoritos.') */

//PARTE 2-FUNÇÕES.

//exercicio1.
/* function ePalin(palavra){
    let palavraInvertida=palavra.split('').reverse().join('');
    if (palavra===palavraInvertida){
        return 'true';
    }
    else{
        return 'false';
    }
}
console.log(ePalin('arara'));
 */

//exercicio2.
/* 
function retornaMaior(array){
    let maiorNumero=0;
    for (let index=0;index<=array.length;index+=1){
        if (array[index]>maiorNumero){
            maiorNumero=index;
        }
    }
    return maiorNumero;
}
console.log(retornaMaior([2, 3, 6, 7, 10, 1]));
 */
//exercicio3.
/* 
function retornaMaior(array){
    let menorNumero=0;
    for (let index in array){
        if (array[index]<menorNumero){
            menorNumero=index;
        }
    }
    return menorNumero;
}
console.log(retornaMaior([2, 4, 6, 7, 10, 0, -3]));
 */
//exercicio4.
/* 
function retornaMaiorNome(array){
    let maiorNome=[0];
    for (let index in array){
        if (array[index].length>maiorNome.length){
            maiorNome=array[index];
        }
    }
    return maiorNome;
}
console.log(retornaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
 */

//exercicio5.
/* function maisRepetido(arrayNumeros){
    let contaRepetidos=0;
    let contaNumeros=0;
    let indexNumeroRepetido=0;
    for (let index in arrayNumeros){
        verificaNumero = arrayNumeros[index];
        for (let index2 in arrayNumeros){
            if (verificaNumero===arrayNumeros[index2]){
                contaNumeros+=1;
            }
        }
        if (contaNumeros>contaRepetidos){
            contaRepetidos=contaNumeros;
            indexNumeroRepetido = index;
        }
        contaNumeros=0;
    }
    return arrayNumeros[indexNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); */

//exercicio6.

/* function somaNum(numeros) {
    let soma = 0;
    for (let index = 1; index <= numeros; index += 1) {
      soma = soma + index;
    }
    return soma;
  }
  console.log(somaNum(5)); */

  //exercicio7.
function comparaFinal(word,ending){
    wordSeparada = word.split('');
    endingSeparada=ending.split('');
    for(i=wordSeparada.length-1; i>=1; i-=1){
        letraWord=wordSeparada[i];
        for (i2=endingSeparada.length-1;i2>=1;i-=1){
            if (endingSeparada[i2]===letraWord){

            }
        }
    }
}