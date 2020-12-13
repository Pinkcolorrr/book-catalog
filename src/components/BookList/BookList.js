import "./BookList.css";
import React from "react";
import Book from "./../Book/Book";

let booksArr = [
  {
    name: "Book",
    auth: "Pushkin",
    year: 2000,
    ISBN: 228,
  },

  {
    name: "Book of the dead 2",
    auth: "Pushkin",
    year: 2006,
    ISBN: 221231238,
  },

  {
    name: "Dead soul 2",
    auth: "Gogol",
    year: 101,
    ISBN: 221231231,
  },
];

function BookList() {
  const books = booksArr.map((book) => {
    return <Book key={book.ISBN} book={book}></Book>;
  });

  return (
    <div className="book-list">
      <div className="book-list-title">
        <ul className="book-title-list">
          <li>Name</li>
          <li>Authors</li>
          <li>Year</li>
          <li>ISBN</li>
        </ul>
      </div>

      <ul className="book-list-content">{books}</ul>
    </div>
  );
}

export default BookList;
