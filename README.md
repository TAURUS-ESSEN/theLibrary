Taurus Library

Introduction
Taurus Library is a simple web-based application that allows users to manage a personal library of books.
Users can add books, mark their reading status, and remove books from the collection. This project is part of an assignment aimed at practicing object-oriented programming in JavaScript and DOM manipulation.

Features
- Add books with title, author, page count, and read status.
- Display books in a structured table.
- Toggle the read status of each book.
- Remove books from the library.
- Responsive UI with a clean and structured design.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

Usage

- Click the + Add book button to open the book entry form.
- Enter the book details and submit the form.
- The book will appear in the library table.
- Click the book's Yes/No status to toggle its read status.
- Click Delete to remove a book from the library.

Code Structure

- index.html: Defines the structure of the application.
- style.css: Styles the UI.
- script.js: Contains JavaScript logic for managing books.

JavaScript Breakdown

- Library Array (library): Stores all book objects.
- Book Constructor (Book): Defines book properties and methods.
- addBookToLibrary(): Creates a new book and adds it to the array.
- renderLibrary(): Displays books dynamically on the page.
- toggleStatus(): Updates the read status of a book.
- Event Listeners: Handles UI interactions like adding/removing books.

Future Improvements

- Implement local storage to persist books across sessions.
- Improve UI with animations and enhanced styling.
- Add book sorting and filtering options.

License
This project is open-source and available under the MIT License.

