"use strict";

////////////////////////////////////////////////////////
// Data
const myLibrary = [];

////////////////////////////////////////////////////////
// HTML Elements

const containerBooks = document.querySelector(".books");

const booksArea = document.querySelector(".books__area");

const btnAddBook = document.querySelector(".newbook__btn");
let btnsDeleteBook;
const btnCloseDialog = document.querySelector(".close__btn");
const btnCancel = document.querySelector(".cancel__btn");
const btnSubmit = document.querySelector(".submit__btn");

let btnsReadStatus;

const dialog = document.querySelector(".dialog");

const inputTitle = document.querySelector(".input__title");
const inputAuthor = document.querySelector(".input__author");
const inputPages = document.querySelector(".input__pages");

////////////////////////////////////////////////////////
// Class Declaration

class BookCl {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = "Not Read";
    }

    readBook() {
        return (this.read = "Read");
    }

    unreadBook() {
        return (this.read = "Not Read");
    }
}

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

////////////////////////////////////////////////////////
// Functions

function addBookTolibrary(title, author, pages) {
    const newNovel = new BookCl(title, author, pages);
    newNovel.id = crypto.randomUUID().split("-")[0];
    myLibrary.push(newNovel);
    displayBooks(myLibrary);
    activateButtons();
}

function displayBooks(library) {
    booksArea.innerHTML = "";
    library.forEach(function (book) {
        const book_html = `
            <div class="books_row ${
                book.read === "Read" ? "books_row_read" : "books_row_unread"
            }">
                <button class="deletebook__btn">&#8722;</button>
                <div class="books__title">${book.title}</div>
                <div class="books__author">${book.author}</div>
                <div class="books__pages">${book.pages}</div>
                <div class="books__read">${book.read}</div>
                <button class="books__read_status">Read</button>
            </div>`;

        booksArea.insertAdjacentHTML("beforeend", book_html);
    });
}

const removeBookFromLibrary = function (index) {
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    displayBooks(myLibrary);
    activateButtons();
};

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
    dialog.close();
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
});

// Necessary to re-activate "Delete" and "readStatus" buttons after additions to myLibrary array as new buttons will not be in the button node list.
function activateButtons() {
    btnsDeleteBook = document.querySelectorAll(".deletebook__btn");
    btnsDeleteBook.forEach(function (button, index) {
        button.addEventListener("click", () => {
            removeBookFromLibrary(index);
        });
    });

    btnsReadStatus = document.querySelectorAll(".books__read_status");
    btnsReadStatus.forEach(function (button, index) {
        // Associating DOM Read Buttons with Book Objects
        button.dataset.id = myLibrary[index].id;
        button.addEventListener("click", function () {
            const targetBook = myLibrary.find(
                (book) => button.dataset.id === book.id
            );
            if (targetBook.read === "Not Read") {
                targetBook.readBook();
                button.textContent = "Not Read";
                // index + 1 as header has same class.
                document.querySelectorAll(".books__read")[
                    index + 1
                ].textContent = targetBook.read;
                document
                    .querySelectorAll(".books_row")
                    [index + 1].classList.remove("books_row_unread");
                document
                    .querySelectorAll(".books_row")
                    [index + 1].classList.add("books_row_read");
            } else if (targetBook.read === "Read") {
                targetBook.unreadBook();
                button.textContent = "Read";
                document.querySelectorAll(".books__read")[
                    index + 1
                ].textContent = targetBook.read;
                document
                    .querySelectorAll(".books_row")
                    [index + 1].classList.remove("books_row_read");
                document
                    .querySelectorAll(".books_row")
                    [index + 1].classList.add("books_row_unread");
            }
        });
    });
}
