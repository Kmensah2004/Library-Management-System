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
// Task 5: Method to Calculate Total Available Books in Section
class BooksSectionAvaliable extends Section {
    super(books) {
        this.books = books;
    }
    calculateTotalBooksAvaliable(){
    return this.books.filter(book => book.isAvailable).length;
    }
};
// Task 6: Set up Library Structure 

const Nonfiction = new Section("Nonfiction");
const Fantasy = new Section("Fantasy");

const book1 = new Book("Can' Hurt Me", "David Goggins", "1234568901");
const book2 = new Book("Shoe Dog", "Phil Knight", "0987654321");
const book3 = new Book("The Odyssey", "Gareth Hinds", "1166337755");

// Add books to sections
Nonfiction.addBook(book1);
Nonfiction.addBook(book2);
Fantasy.addBook(book3);


const regularPatron = new Patron("Kosi Mensah");
const vipPatron = new VIPPatron("Dejalie Aguilar");

// Regular  tries to borrow a book
regularPatron.borrowBook(book1);

// VIP  tries to borrow a book 
vipPatron.borrowBook(book1); 

// Regular returns the book
regularPatron.returnBook(book1);

console.log("Books in NonFiction Section:");
Nonfiction.listBooks();
console.log("Books in Fantasy Section:");
Fantasy.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${Nonfiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${Fantasy.getAvailableBooks()}`);
