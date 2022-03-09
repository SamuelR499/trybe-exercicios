//Descubra quantos valores ímpares existem no array e imprima o resultado
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers  = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalDeImpares = 0;
let numImpar = 0;

for (let i = 0; i <numbers.length; i += 1) {
    if (numbers[i] % 2 != 0) {
        numImpar = numbers[i];
        console.log(numImpar, " bora!! mais um impar");
        totalDeImpares += 1;
    }else{
        console.log(numbers[i], " ih!! esse é par");
    }
}
    console.log("O total de impares é: ", totalDeImpares);

if (totalDeImpares == 0) {
    console.log("Nenhum numero impar encontrado!!");
}

