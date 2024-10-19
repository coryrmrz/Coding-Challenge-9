//Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN) { //created book class with properties title, author and ISBN, and boolean _isAvailable.
        this.title = title; //title string
        this.author = author; //author string
        this.ISBN = ISBN; //ISBN string
        this._isAvailable = true; //_isAvailable boolean
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
        this.name = name; //name property
        this.books = []; //books array
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

//Task 3: Create a patron Class

class Patron {
    constructor(name) { //created patron class with name property and borrowed books array
        this.name = name; //name string
        this.borrowedBooks = []; //borrowedBooks array
    }
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false; //if book is borrowed
            this.borrowedBooks.push(book); //it is added to the borrowedBooks array
            console.log(`${book.title} has been borrowed by ${this.name}.`) //output displays the title of the book and who borrowed it
        } else {
            console.log(`${book.title} - Not Available`) //output displays book title is not available if the book selected isn't available
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.findIndex (b => b.title === book.title); //searches for book in array
        if (index !== -1) { //indicates if book is found in array
            this.borrowedBooks.splice(index, 1); //removes book from borrowedBooks array if found
            book.isAvailable = true; //book is available for borrowing after being removed
        } else { //if book isn't found in borrowedBooks array
            console.log(`${this.name} did not borrow ${book.title}`); //output displays name of person did not borrow the book title if the person selected did not borrow the selected book
        }
    }
}