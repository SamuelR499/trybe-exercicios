const  books = require('./books');

// Construa um array de objetos a partir do array de livros.

const nameAndAge = () => {
  return books
    .map((book) => (
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    ))
    .sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());