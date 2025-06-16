"use strict";
// Use script2.js to refer to the working js code behind the oop library project.

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
        this.read = "not read";
    }

    readBook() {
        this.read = "read";
        updateUI();
    }

    unreadBook() {
        return (this.read = "not read");
    }
}

////////////////////////////////////////////////////////
// Functions

const addBookTolibrary = function (title, author, pages) {
    const newNovel = new BookCl(title, author, pages);
    newNovel.id = crypto.randomUUID().split("-")[0];
    myLibrary.push(newNovel);
    updateUI();
};

const removeBookFromLibrary = function (index) {
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    console.log(btnsDeleteBook);
    updateUI();
};

const displayBooks = function (library) {
    booksArea.innerHTML = "";
    library.forEach(function (book) {
        const book_html = `
            <div class="books_row books_row_unread">
                <button class="deletebook__btn">&#8722;</button>
                <div class="books__title">${book.title}</div>
                <div class="books__author">${book.author}</div>
                <div class="books__pages">${book.pages}</div>
                <div class="books__read">${book.read}</div>
                <button class="books__read_status">read</button>
            </div>`;

        booksArea.insertAdjacentHTML("beforeend", book_html);
    });
};

function updateUI() {
    // Update books list on UI
    displayBooks(myLibrary);

    //(Re)activate delete books button
    activateDeleteButtons();

    //(Re)activate read buttons
    // activateReadButtons();
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

function activateDeleteButtons() {
    btnsDeleteBook = document.querySelectorAll(".deletebook__btn");
    btnsDeleteBook.forEach(function (button, index) {
        button.addEventListener("click", () => {
            removeBookFromLibrary(index);
        });
    });
}

// function activateReadButtons() {
//     btnsReadStatus = document.querySelectorAll(".books__read_status");
//     btnsReadStatus.forEach(function (button, index) {
//         // Associating DOM Read Buttons with Book Objects
//         button.dataset.id = myLibrary[index].id;
//         button.addEventListener("click", function () {
//             const targetBook = myLibrary.find(
//                 (book) => button.dataset.id === book.id
//             );
//             console.log(button);
//             if (targetBook.read === "not read") {
//                 console.log("You've now read this!");
//                 button.textContent = "Not Read";
//                 targetBook.readBook();
//             } else if (targetBook.read === "read") {
//                 console.log("You've no longer read this!");
//                 button.textContent = "Read";
//                 targetBook.unreadBook();
//             }
//         });
//     });
// }
