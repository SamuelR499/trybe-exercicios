function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }

  return maiorPalavra;
}

console.log(maiorPalavra(['ana', 'Caio', 'Samuel', 'Sara', 'cacilda', 'Tanya']));