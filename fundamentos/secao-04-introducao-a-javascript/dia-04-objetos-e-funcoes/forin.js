let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

/*Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
personagem
origem
nota
recorrente
*/

for(let properties in info) {
  console.log(properties);
}

/* Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
Valor esperado no console:

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
*/

for(let properties in info) {
  console.log(info[properties]);
}

/*
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do
primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s
Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de
cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!

*/

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
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
}