const  books = require('./books');

// 1 - Filtre todos os objetos do gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = () => {
  return books.filter((book) => {
    return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
  });
}

console.log(fantasyOrScienceFiction());