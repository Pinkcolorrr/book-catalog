import "./Book.css";
import React from "react";

function Book(props) {
  const { book } = props;

  return (
    <li className="book">
      <ul className="book-fields">
        <li className="book-field">{book.name}</li>
        <li className="book-field">{book.auth}</li>
        <li className="book-field">{book.year}</li>
        <li className="book-field">{book.ISBN}</li>
      </ul>
    </li>
  );
}

export default Book;
