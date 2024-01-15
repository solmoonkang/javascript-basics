const book1 = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    isbn: 'AB123',
};

const book2 = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    isbn: 'CD456',
};

const book3 = {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    isbn: 'EF789',
};




// Factory Pattern을 사용해서 Factory 함수를 생성한다.
const createBook = (title, author, isbn) => ({
    title,
    author,
    isbn,
});

const factory_book1 = createBook('Harry Potter', 'JK Rowling', 'AB123');
const factory_book2 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 'CD456');
const factory_book3 = createBook('Moby-Dick', 'Herman Melville', 'EF789');
