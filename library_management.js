//Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN) { //created book class with properties title, author and ISBN, and boolean _isAvailable.
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
    constructor(name) { //created section class with name property and books array
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book); //addBook method adds book object to books array
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length; //returns total number of books available in designated section
    }
    listBooks() {
        this.books.forEach(book => {
            return `Book: ${book.title} by ${book.author}`; //returns each book title and author in designated section
        });
    }
//Task 5: Handle Books Borrowing & Returning

    calculateTotalBooksAvailable() {
        return this.books.filter (book => book.isAvailable).length; //calculates total books available by filtering and providing how many books are available
    }
}