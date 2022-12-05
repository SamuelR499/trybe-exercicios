const books = require('./books');

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const everyoneWasBornOnSecXX = () => {
  return books.every((book) => (
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  ));
}

console.log(everyoneWasBornOnSecXX());