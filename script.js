"use strict";

const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    info(read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
    }
}

const addBookTolibrary = function (title, author, pages) {
    const newNovel = new Book(title, author, pages);
    newNovel.id = crypto.randomUUID();
    myLibrary.push(newNovel);
};

addBookTolibrary("The Hobbit", "J.R.R Tolkien", 295);
addBookTolibrary("Gone", "Michael Grant", 315);
addBookTolibrary("The Kite Runner", "Matthew Spangler", 180);
addBookTolibrary("The Alchemist", "Paulo Coelho", 165);
addBookTolibrary(
    "Harry Potter and the Order of the Phoenix",
    "JK Rowling",
    870
);
