//descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let posicao = 0;
for (let i = 0; i < numbers.length; i += 1) {
    if (maior < numbers[i]) {
        maior = numbers[i];
        posicao = i;
    }

}
console.log("O maior número é: ", maior, " e ele esta na ", posicao, "° posição");
