'use strict';
let kkey = 0;
let i=0;
const myLibrary = [];
addBookToLibrary("Freshlife28", "Bazilio", 129, 1);
addBookToLibrary("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 357, 1);

//just add object-books to Array-Library 
function addBookToLibrary(title, author, pages, status) {
  let mybook = new Book (title, author, pages, status)
  myLibrary.push(mybook);
  makeShelf()
  console.log(myLibrary);
}

// Constructor
function Book (title,author,pages,status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// bookshelf
makeShelf();
function makeShelf() {
const shelf = document.querySelector("tbody"); 
shelf.textContent = "";
for ( i=0; i <myLibrary.length; i++) {
const tr = document.createElement("tr")
tr.innerHTML = `<td> ${myLibrary[i].title} </td>
                <td> ${myLibrary[i].author}</td>
                <td> ${myLibrary[i].pages} </td>
                <td> ${myLibrary[i].status}</td>
                <td><button class="btnDel" id=${i}>Delete</button>
                </tr>`;
shelf.appendChild(tr);}

shelf.addEventListener("click", function(event) {
  if (event.target.classList.contains("btnDel")) {
    console.log(i);
    myLibrary.splice(i-1,1);
    
      event.target.closest("tr").remove(); // Удаляет строку
  }
});
}
const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click", () => {
if (kkey == 0) { menu () }});

function menu() {
  kkey = 1;
  const container = document.getElementById("addForm");
  const inputTitle = document.createElement("input");
  const inputTitleLabel = document.createElement("label")
  inputTitleLabel.textContent = "Title: "
  inputTitle.id = "title";
  container.appendChild(inputTitleLabel);
  container.appendChild(inputTitle);

  const inputAuthor = document.createElement("input");
  const inputAuthorLabel = document.createElement("label");
  inputAuthorLabel.textContent = "Author: ";
  inputAuthor.id = "author";
  container.appendChild(inputAuthorLabel);
  container.appendChild(inputAuthor);
  
  const inputPages = document.createElement("input");
  const inputPagesLabel = document.createElement("label");
  inputPagesLabel.textContent = "Pages: ";
  inputPages.id = "pages";
  inputPages.maxLength = "4";
  container.appendChild(inputPagesLabel);
  container.appendChild(inputPages);

  const inputStatus = document.createElement("input");
  const inputStatusLabel = document.createElement("label");
  inputStatusLabel.textContent = "Status: ";
  inputStatus.id = "status";
  inputStatus.maxLength = "4";
  container.appendChild(inputStatusLabel);
  container.appendChild(inputStatus);
  // const inputStatusYes = document.createElement("input");
  // const inputStatusLabel = document.createElement("label");
  // inputStatusYes.type = "radio";
  // inputStatusLabel.textContent = "Yes: ";
  // container.appendChild(inputStatusLabel);
  // container.appendChild(inputStatusYes);

  
  // const inputStatusNo = document.createElement("input");
  // const inputStatusLabelNo = document.createElement("label");
  // inputStatusNo.type = "radio";
  // inputStatusLabelNo.textContent = "No: ";
  // container.appendChild(inputStatusLabelNo);
  // container.appendChild(inputStatusNo);

  const btnAdd = document.createElement("button");
  btnAdd.id="addBtn";
  btnAdd.textContent = "Add";
  btnAdd.classList = "addBtn";
  container.appendChild(btnAdd);

  btnAdd.addEventListener("click", () => createBook())
  
} 

function createBook() {
  console.log("hi"); 
  const titleValue = document.getElementById("title");
  const authorValue = document.getElementById("author");
  const pagesValue = document.getElementById("pages");
  const statusValue = document.getElementById("status");  
  addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value, statusValue.value);
  titleValue.value ="";
  authorValue.value = "";
  pagesValue.value = "";
  statusValue.value = "";
}
