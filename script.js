'use strict';
 
const library = [];
addBookToLibrary("Freshlife28", "Bazilio", 129, "yes");
addBookToLibrary("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 357, "no");

function addBookToLibrary(title, author, pages, status) {
  let book = new Book (title, author, pages, status)
  library.push(book);
  renderLibrary();
}

function Book (title,author,pages,status) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  this.status = status;
}

Book.prototype.toggleStatus = function () {
  console.log(this); 
  this.status = this.status === "no" ? "yes" : "no";
  renderLibrary();
}

function renderLibrary() {
const shelf = document.querySelector("tbody"); 
shelf.textContent = "";

  library.forEach(function(book, index) {  
  const tr = document.createElement("tr");
  tr.setAttribute("data-index", index);
  tr.innerHTML = `<td> ${book.title} </td>
                  <td> ${book.author}</td>
                  <td> ${book.pages} </td>
                  <td> <a href="javascript:void(0);" class="toggle-status">${book.status}</a></td>
                  <td><button class="btnDel" >Delete</button>
                  </tr>`;
  shelf.appendChild(tr);
});
 
document.querySelectorAll(".toggle-status").forEach((link, i) => {
  link.addEventListener("click", () => {
    library[i].toggleStatus();
  });
});

document.querySelectorAll(".btnDel").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const row = event.target.closest("tr");
    if (!row) return;

    const index = Number(row.getAttribute("data-index"));
    library.splice(index, 1);
    renderLibrary();  
  });
});
}

const newBookBtn = document.getElementById("new-book-btn");
newBookBtn.addEventListener("click", () => {
  addForm() 
});

const formContainer = document.getElementById("add-book-form");
function addForm() {
  formContainer.innerHTML = `
    <label>Title: <input id="title"></label>
    <label>Author: <input id="author"></label>
    <label>Pages: <input id="pages" type="number"></label>
    <label>Yes: <input type="radio" name="status" value="yes"></label>
    <label>No: <input type="radio" name="status" value="no"></label>
    <button id="addBtn" class="addBtn">Add</button>
  `;
  newBookBtn.style.display = "none";
  document.getElementById("addBtn").addEventListener("click", createBook);
}

function createBook() {
  const titleValue = document.getElementById("title").value.trim();
  const authorValue = document.getElementById("author").value.trim();
  const pagesValue = document.getElementById("pages").value.trim();
  const statusValue = document.querySelector(`input[name="status"]:checked`).value;  
  
  if (!titleValue || !authorValue || !pagesValue || !statusValue) {
    alert("Please fill in all fields before adding a book.");
    return;
  }
  
  addBookToLibrary(titleValue, authorValue, pagesValue, statusValue);
  resetRadioButtons();
  newBookBtn.style.display = "inline-block";
  formContainer.innerHTML = "";
}

function resetRadioButtons() {
  const radioButtons = document.querySelectorAll('input[name="status"]');
  radioButtons.forEach(button => {
    button.checked = false; 
  });
}


 