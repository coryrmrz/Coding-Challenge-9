//Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN) { //created class with properties title, author and ISBN, and boolean _isAvailable.
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    getDetails() {
        return `The book ${this.title} by ${this.author} has the ISBN ${this.ISBN}.`; // return book details title, author, and ISBN
    }
    get isAvailable() {
        return this._isAvailable; //getter returns true or false for book availability
    }
    set isAvailable(availability) {
        this._isAvailable = availability; //setter updates availability status of book
    }
}

//Task 2: Create a Section Class

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }
    listBooks() {
        this.books.forEach(book => {
            return `Book: ${book.title} by ${book.author}`;
        });
    }
}