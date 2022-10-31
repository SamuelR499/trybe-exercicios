// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const a = 40;
const b = 8;
const c = 250;

if (a > b && a > c) {
  console.log('O maior número é:');
  console.log('(✓)(a)--> ' + '<' + a + '>');
  console.log('(b)-----> ' + '<' + b + '>');
  console.log('(c)-----> ' + '<' + c + '>');
} else if (b > a && b > c) {
  console.log('O maior número é:');
  console.log('(a)-----> ' + '<' + a + '>');
  console.log('(✓)(b)--> ' + '<' + b + '>');
  console.log('(c)-----> ' + '<' + c + '>');
} else {
  console.log('O maior número é:');
  console.log('(a)-----> ' + '<' + a + '>');
  console.log('(b)-----> ' + '<' + b + '>');
  console.log('(✓)(c)--> ' + '<' + c + '>');
};