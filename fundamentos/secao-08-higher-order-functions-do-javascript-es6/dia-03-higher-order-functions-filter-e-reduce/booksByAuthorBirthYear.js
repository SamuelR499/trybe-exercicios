const  books = require('./books');

// 3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksByAuthorBirthYear = (birthYear) => {
  return books.filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);
}
console.log(booksByAuthorBirthYear(1920));