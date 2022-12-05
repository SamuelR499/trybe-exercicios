const  books = require('./books');

// 2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  return books.filter((book) => (currentYear - book.releaseYear) >= 60)
  .sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered());
