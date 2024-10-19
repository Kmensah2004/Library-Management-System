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