const countries = require('./countries');

//  3 - Encontre o país com o maior nome.

const longestName = () => {
  return countries.reduce((acc, curr) => {
    return acc.name.length > curr.name.length ? acc : curr;
  });
}

console.log(longestName());