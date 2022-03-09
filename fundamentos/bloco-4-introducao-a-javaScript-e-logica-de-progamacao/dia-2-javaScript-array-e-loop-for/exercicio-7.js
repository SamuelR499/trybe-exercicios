//descubra qual o menor valor contido no array e imprima-o;
let numbers  = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let posicao = 0;
// let menor = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (menor < numbers[i]) {
//         menor = numbers[i];
//     }
//     for (let index = 0; index < numbers.length; index += 1) {
//         if (menor > numbers[index]) {
//             menor = numbers[index];
//             posicao = index;
//         }
//     }
// }

// console.log("O menor número é: ", menor, " e ele esta na ", posicao, "° posição");


//com funcao;
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

console.log(Array.min(numbers)); //finciona tambem com max 