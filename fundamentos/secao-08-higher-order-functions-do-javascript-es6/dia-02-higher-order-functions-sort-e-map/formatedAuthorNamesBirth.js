const  books = require('./books');

// Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO

const formatedAuthorNamesBirth = () => {
  return books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
}

console.log(formatedAuthorNamesBirth());