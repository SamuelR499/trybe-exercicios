const  books = require('./books');

// 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}

console.log(authorWith3DotsOnName());