import "./BookList.css";
import React from "react";
import Book from "./../Book/Book";
import firebase from "firebase/app";
import "firebase/database";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: {},
    };
  }

  componentDidMount() {
    this.readBookData();
  }

  componentWillUnmount() {
    firebase.database().ref("books").off();
  }

  readBookData = () => {
    firebase
      .database()
      .ref("books")
      .on("value", (elem) => {
        this.setState({
          bookList: elem.val(),
        });
      });
  };

  deleteBook = (key) => {
    firebase
      .database()
      .ref("books/" + key)
      .remove();
  };

  render() {
    const books = [];
    for (let key in this.state.bookList) {
      books.push(
        <li key={key}>
          <Book
            book={this.state.bookList[key]}
            deleteBook={this.deleteBook}
            bookKey={key}
          ></Book>
        </li>
      );
    }

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
}

export default BookList;
