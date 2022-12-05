const books = require('./books');

// Faça uma função que retorne true, se algum livro tiver sido lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s());