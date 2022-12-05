// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


const lettersArray = names.join('').toLowerCase().split('');


const countA = () => {
  return lettersArray.reduce((acc, curr) => {
    return curr === 'a' ? acc += 1 : acc;
  }, 0);
}

console.log(countA());
