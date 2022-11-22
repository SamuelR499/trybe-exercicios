// Transforme a função nomeCompleto em uma arrow function;

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

let firstName = 'Ivan';
let sobrenome = 'Pires';

console.log(nomeCompleto(firstName, sobrenome));