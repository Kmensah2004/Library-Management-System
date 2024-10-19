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
