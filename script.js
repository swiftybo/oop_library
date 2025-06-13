"use strict";

////////////////////////////////////////////////////////
// Data
const myLibrary = [];

////////////////////////////////////////////////////////
// HTML Elements

const containerBooks = document.querySelector(".books");

////////////////////////////////////////////////////////
// Class Declaration

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

////////////////////////////////////////////////////////
// Functions

const addBookTolibrary = function (title, author, pages) {
    const newNovel = new Book(title, author, pages);
    newNovel.id = crypto.randomUUID();
    myLibrary.push(newNovel);
};

const displayBooks = function (library) {
    library.forEach(function (book) {
        const html = `
            <div class="books_row">
                <div class="books__title">${book.title}</div>
                <div class="books__author">${book.author}</div>
                <div class="books__pages">${book.pages}</div>
                <div class="books__availability">Available</div>
                <div class="books__read_status">Not Read</div>
            </div>`;

        containerBooks.insertAdjacentHTML("beforeend", html);
    });
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
addBookTolibrary("The Raven's Head", "Karen Maitland", 512);

displayBooks(myLibrary);
