const countries = require('./countries');

// 1 - Calcule a quantidade total da população de todos os países.

const getPopulation = () => {
  return countries.reduce((acc, curr) => acc + curr.population, 0);
}

console.log(getPopulation());