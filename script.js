"use strict";

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read");
console.log(hobbit.info());
