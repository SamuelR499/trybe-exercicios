function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}

console.log(indiceDoMaior([1, 4, 11, 6, 8, 1]));