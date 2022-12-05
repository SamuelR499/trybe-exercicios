const countries = require('./countries');

// 2 - Calcule a área total de todos os países.

const getTotalArea = () => {
  return countries.reduce((acc, curr) => acc + curr.area, 0);
}

console.log(getTotalArea());