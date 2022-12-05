const books = require('./books');


// Encontre o primeiro livro cujo nome possua 26 caracteres.

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
}

console.log(getNamedBook());