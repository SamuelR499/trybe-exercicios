//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//   console.log("Bem vinda", info["personagem"]);

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"] = "sim";

//   console.log(info);


// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for(value in info){
//     console.log(info[value]);
// }

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "sim"
};

// valorIdentico = "Ambos recorrentes // Atenção para essa última linha!";
// for(value in info){
//     if(info[value] === info2[value]){
//         info[value] = valorIdentico;
//         console.log(info[value])
//     }else {
//     console.log(info[value], " e ", info2[value]);
//     }   
// }

// Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

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
 
// console.log("O livro Favorito de ", leitor["nome"], leitor["sobrenome"], "se chama","'", leitor["livrosFavoritos"][0]["titulo"], "'");

//Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
leitor["livrosFavoritos"].push({titulo: 'Harry Potter e o Prisioneiro de Azkaban',
autor: 'JK Rowling',
editora: 'Rocco'});

console.log(leitor["nome"],"Tem",leitor["livrosFavoritos"].length, "livros");