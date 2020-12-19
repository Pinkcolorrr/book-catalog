import "./BookList.css";
import React from "react";
import Book from "./../Book/Book";
import firebase from "firebase/app";
import "firebase/database";
import PopUp from "./../Pop-up/Pop-up";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      isPopUpActive: false,
    };
  }

  setActive = () => {
    this.setState({ isPopUpActive: !this.state.isPopUpActive });
  };

  writeBookData(ISBN, bookName, year, authors) {
    firebase.database().ref("books/").push({
      name: bookName,
      year: year,
      ISBN: ISBN,
      authors: authors,
    });
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

  componentDidMount = () => {
    this.readBookData();
  };

  render() {
    const books = this.state.bookList.map((book) => {
      return (
        <Book key={book.isbn} book={book} setActive={this.setActive}></Book>
      );
    });

    const elem = (
      <div className="delet-book">
        <div className="delet-book-text">
          Are you sure you want to delete this book?
        </div>
        <div className="delet-book-btns">
          <button
            className="button delet-book-btns-cancel"
            onClick={this.setActive}
          >
            Cancel
          </button>
          <button
            className="button delet-book-btns-submit"
            type="button"
            onClick={this.deleteBook}
          >
            Submit
          </button>
        </div>
      </div>
    );

    return (
      <div className="book-list">
        {this.state.isPopUpActive ? (
          <PopUp
            title="Delete book"
            content={elem}
            setActive={this.setActive}
          ></PopUp>
        ) : null}

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
