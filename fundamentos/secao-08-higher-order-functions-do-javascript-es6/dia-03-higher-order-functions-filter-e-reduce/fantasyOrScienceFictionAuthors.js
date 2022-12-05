const  books = require('./books');

// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const fantasyOrScienceFictionAuthors = () => {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book)=> book.author.name)
    .sort();
}

console.log(fantasyOrScienceFictionAuthors());