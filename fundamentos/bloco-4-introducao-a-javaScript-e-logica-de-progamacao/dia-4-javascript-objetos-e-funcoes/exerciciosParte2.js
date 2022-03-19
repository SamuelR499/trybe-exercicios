
//let string = "texto";
//let splitString = string.split(""); {["t","e","x","t","o"]} <- SPLIT divide a string em uma array;

//let arrayReverse = splitString.reverse(); {["o","t","x","e","t"]} <- REVERSE inverte a ordem do array, troca a ultima posição pela primeira

//let joinArray = arrayReverse.join("") {"otxet"} <- JOIN ele junta a array em uma string;


//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//  function verificaPalindrome(palidromoTest) {
//     let splitString = palidromoTest.split("");
//     let arrayReverse = splitString.reverse();
//     let joinArray = arrayReverse.join("");

//     let resultado =false;
//     if (joinArray ===palidromoTest) {
//         resultado = true;
//     };
//     return resultado;
// };
//     console.log(verificaPalindrome("arara"));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4.

// function verificaMaior(numero) {
//     let maiorValor = 0;
//     let indexMaior = 0;
//     for (index in numero) {
//         if (maiorValor < numero[index]) {
//             maiorValor = numero[index];
//             indexMaior = index;
//         };
//     };
//     return indexMaior;

// }
// console.log(verificaMaior([2, 3, 6, 7, 10, 1]));


//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numero = [2, 4, 6, 7, 10, 0, -3];

// function verificaMenor(numero) {
//     return Math.min.apply(null, numero);

// };

// console.log(verificaMenor(numero));

var pessoas = [ 
    { nome: 'Joao', num: 1     },
    { nome: 'Maria', num: 2     },
    { nome: 'Fulano', num: 3    }
    ];

function compare(a,b) {
  if (a.nome < b.nome)
     return -1;
  if (a.nome > b.nome)
    return 1;
  return 0;
}

pessoas.sort(compare);