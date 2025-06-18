console.log("Connected");

import { Admin } from "./models/Admin.model.js";

import { Member } from "./models/Member.model.js";

import { Book } from "./models/Book.model.js";

import { LibrarySystem } from "./services/Library.services.js";

const userSwitcher = document.getElementById("userSwitcher");

const addBookSection = document.getElementById("addBookSection");

const borrowedBooks = document.getElementById("borrowedBooks");

const bookForm = document.getElementById("bookForm");

const bookList = document.getElementById("bookList");

const library = new LibrarySystem();

let currentUser = new Member("John", "jhon@email.com");

userSwitcher.addEventListener("change", (e) => {
    const selectedOption = e.target.value;

    currentUser = selectedOption === "admin" ? 
        new Admin("Alice", "alice@email.com") 
        : 
        new Member("John", "jhon@email.com")

    addBookSection.style.display = (selectedOption === "admin" ? "block" : "none");

    borrowedBooks.style.display = (selectedOption === "member" ? "block" : "none")
})

bookForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;

    const newBook = new Book(title, author, genre);

    library.addBook(newBook);

    renderBook();

    bookForm.reset();
})

function renderBook(){
    bookList.innerHTML = "";
    library.getAllBooks().forEach((book)=> {
        const li = document.createElement("li");
        li.innerHTML = 
        ` 
            <div>
                <strong>${book.title}</strong>
                by ${book.author} (<em>${book.genre}</em>)
            </div>
        `
        bookList.appendChild(li);
    })

}


addBookSection.style.display = "none";