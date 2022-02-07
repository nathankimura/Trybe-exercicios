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

//exercicio6.
/* console.log('O livro favorito de '+leitor.nome+' '+leitor.sobrenome+' se chama '+leitor.livrosFavoritos[0].titulo); */

//exercicio7.
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
    )
console.log(leitor.nome+' tem '+leitor.livrosFavoritos.length+' livros favoritos.')