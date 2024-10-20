// Task 1: Creates diffrent properties inside the book class

class Book {
    constructor(title,author,ISBN) {
        this.title = title;  
        this.author = this.author; 
        this.ISBN = ISBN;  
        this._isAvailable = true; 
    }

    getDetails() {
        return(`Title: ${this.title}, Author: ${this.author}, ISBN: $${this.ISBN}`); // Method to get book details as a string
    }

    
    get isAvailable() { // Getter for the isAvailable property
        return this._isAvailable;
    }

    
    set isAvailable(status) { // Setter for the isAvailable property
        this._isAvailable = status;
    }
}
// Task 2: Define the Section Class
class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // add a book to the section
    addBook(book) {
        this.books.push(book);
    }

    // Method to get the count of available books 
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    // list all books in the section
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.getDetails()}  Available: ${book.isAvailable}`);
        });
    }
}
// Task 3: Define the Patron Class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    // borrow a book if available
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`"${book.title}" is currently unavailable.`);
        }
    }

    // return a borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true;
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}" borrowed.`);
        }
    }
}
// Task 4: VIPPatron Class with Inheritance
class VIPPatron extends Patron {
    constructor(name, priority) {
        priority = true;
        super(name);
        this.priority = priority;
    }

    borrowBook(book) {
        if (this.priority || book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(` ${this.name} borrowed "${book.title}" with priority.`);
        } else {
            console.log(` "${book.title}" is currently unavailable.`);
        }
    }
}

