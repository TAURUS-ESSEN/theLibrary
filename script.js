'use strict';

let i = 0;
const myLibrary = [];
addBookToLibrary("Freshlife28", "Bazilio", 129, "yes");
addBookToLibrary("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 357, "no");

//just add object-books to Array-Library 
function addBookToLibrary(title, author, pages, status) {
  let mybook = new Book (title, author, pages, status)
  myLibrary.push(mybook);
  makeShelf();
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
  const tr = document.createElement("tr");
  tr.setAttribute("data-index", i);
  tr.innerHTML = `<td> ${myLibrary[i].title} </td>
                  <td> ${myLibrary[i].author}</td>
                  <td> ${myLibrary[i].pages} </td>
                  <td> <a href="javascript:void(0);" onclick="myLibrary[${i}].toggleFunction.call(myLibrary[${i}])">${myLibrary[i].status}</a></td>
                  <td><button class="btnDel" id=${i}>Delete</button>
                  </tr>`;
  shelf.appendChild(tr);
}

// button delete Book
shelf.addEventListener("click", function(event) {
  if (event.target.classList.contains("btnDel")) {
    myLibrary.splice(i-1,1);
    event.target.closest("tr").remove(); 
  }
});
}

const newBtn = document.getElementById("newBtn");
newBtn.addEventListener("click", () => {
  menu () });
const container = document.getElementById("addForm");
function menu() {
  
  container.innerHTML = "";
  newBtn.style.display = "none";
  const inputTitle = document.createElement("input");
  const inputTitleLabel = document.createElement("label")
  inputTitleLabel.textContent = "Title: "
  inputTitle.id = "title";
  inputTitle.required = "true";
  container.appendChild(inputTitleLabel);
  container.appendChild(inputTitle);

  const inputAuthor = document.createElement("input");
  const inputAuthorLabel = document.createElement("label");
  inputAuthorLabel.textContent = "Author: ";
  inputAuthor.id = "author";
  inputAuthor.required = "true";
  container.appendChild(inputAuthorLabel);
  container.appendChild(inputAuthor);
  
  const inputPages = document.createElement("input");
  const inputPagesLabel = document.createElement("label");
  inputPagesLabel.textContent = "Pages: ";
  inputPages.id = "pages";
  inputPages.required = "true";
  inputPages.maxLength = "4";
  inputPages.type = "number";
  container.appendChild(inputPagesLabel);
  container.appendChild(inputPages);


  const inputStatusYes = document.createElement("input");
  const inputStatusLabel = document.createElement("label");
  inputStatusYes.type = "radio";
  inputStatusYes.name = "status";
  inputStatusYes.value = "yes";
  inputStatusLabel.textContent = "Yes: ";
  container.appendChild(inputStatusLabel);
  container.appendChild(inputStatusYes);

  
  const inputStatusNo = document.createElement("input");
  const inputStatusLabelNo = document.createElement("label");
  inputStatusNo.type = "radio";
  inputStatusNo.name = "status";
  inputStatusNo.value = "no";
  inputStatusLabelNo.textContent = "No: ";
  container.appendChild(inputStatusLabelNo);
  container.appendChild(inputStatusNo);

  const btnAdd = document.createElement("button");
  btnAdd.id="addBtn";
  btnAdd.textContent = "Add";
  btnAdd.classList = "addBtn";
  container.appendChild(btnAdd);

  btnAdd.addEventListener("click", () => createBook())
  
} 

function createBook() {
  const titleValue = document.getElementById("title");
  const authorValue = document.getElementById("author");
  const pagesValue = document.getElementById("pages");
  const statusValue = document.querySelector(`input[name="status"]:checked`);  
  addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value, statusValue.value);
  titleValue.value ="";
  authorValue.value = "";
  pagesValue.value = "";
  resetRadioButtons();
  newBtn.style.display = "inline-block";
  container.innerHTML = "";
}

function resetRadioButtons() {
  const radioButtons = document.querySelectorAll('input[name="status"]');
  radioButtons.forEach(button => {
    button.checked = false; 
  });
}

Book.prototype.toggleFunction = function (i) {
  this.status = this.status === "no" ? "yes" : "no";
  makeShelf();
}

 