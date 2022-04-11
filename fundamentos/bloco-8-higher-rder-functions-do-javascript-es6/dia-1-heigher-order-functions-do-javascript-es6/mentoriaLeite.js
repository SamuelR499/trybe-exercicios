function tururu(texto){
    console.log(texto);
}


const descrição = 'este Valor entra no parâmetro(valor) de callback,  callback vai ser chamada como segundo parametro para master, e  recebera o valor como parametro para callback'
function master (valor, callback){
    return callback(valor);
}

function dobro (number){
    console.log(number * 2);
}

master(descrição, tururu);
master(3,dobro);

//definição da HOF
const calculadora = (num1, operador, num2) => operador(num1,num2);

//definição das 'callback'
const soma = (a, b) => a + b; 

//definição das 'callback'
const subtracao = (a, b) => a - b;
//definição das 'callback'
const divisao = (a, b) => a / b;
//definição das 'callback'
const multipicacao = (a, b) => a * b;

console.log(calculadora(5, soma, 8));
console.log(calculadora(5, subtracao, 8));
console.log(calculadora(5, divisao, 8));
console.log(calculadora(5, multipicacao, 8));