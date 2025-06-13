"use strict";

////////////////////////////////////////////////////////
// Data
const myLibrary = [];

////////////////////////////////////////////////////////
// HTML Elements

const containerBooks = document.querySelector(".books");

const booksArea = document.querySelector(".books__area");

const btnAddBook = document.querySelector(".newbook__btn");
const btnCloseDialog = document.querySelector(".close__btn");
const btnCancel = document.querySelector(".cancel__btn");
const btnSubmit = document.querySelector(".submit__btn");

const dialog = document.querySelector(".dialog");

const inputTitle = document.querySelector(".input__title");
const inputAuthor = document.querySelector(".input__author");
const inputPages = document.querySelector(".input__pages");

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
    newNovel.id = crypto.randomUUID().split("-")[0];
    myLibrary.push(newNovel);
};

const displayBooks = function (library) {
    booksArea.innerHTML = "";
    library.forEach(function (book) {
        const book_html = `
            <div class="books_row">
                <div class="books__title">${book.title}</div>
                <div class="books__author">${book.author}</div>
                <div class="books__pages">${book.pages}</div>
                <div class="books__id">${book.id}</div>
                <div class="books__read_status">Not Read</div>
            </div>`;

        booksArea.insertAdjacentHTML("beforeend", book_html);
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

////////////////////////////////////////////////////////
// Event Handlers

btnAddBook.addEventListener("click", function () {
    dialog.showModal();
});

btnCloseDialog.addEventListener("click", function () {
    dialog.close();
});

btnCancel.addEventListener("click", function () {
    dialog.close();
});

btnSubmit.addEventListener("click", function () {
    const newBookTitle = inputTitle.value;
    const newBookAuthor = inputAuthor.value;
    const newBookPages = Number(inputPages.value);
    addBookTolibrary(newBookTitle, newBookAuthor, newBookPages);
    displayBooks(myLibrary);
    dialog.close();
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
});
