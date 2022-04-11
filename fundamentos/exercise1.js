const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:
function formatedBookNames(livros) {
    return livros.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

// console.log(formatedBookNames(books));


function nameAndAge(livros) {
    const nomeIdade = livros.map((book) => ({
        age: book.releaseYear - book.author.birthYear, name: book.author.name
    }))
    return nomeIdade.sort((a, b) => a.age - b.age);
}

// console.log(nameAndAge(books));

function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

}
// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {

    const maisDe60 = books.filter((book) => 2022 - book.releaseYear > 60)
    return maisDe60.sort((a, b) => a.releaseYear - b.releaseYear)
}

//   console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
    const ficcaoFantasia = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    const apenasNomes = ficcaoFantasia.map((book) => book.author.name)
     return apenasNomes.sort((a, b) => a < b ? -1 : 1) 
}

console.log(fantasyOrScienceFictionAuthors());