import "./ChangeBook.css";
import React from "react";
import Book from "../Book/Book";
import firebase from "firebase/app";
import "firebase/database";
import SimpleReactValidator from "simple-react-validator";
import BookForm from "./../Forms/BookForm/BookForm";

class ChangeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      bookId: this.props.match.params.book,
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  componentDidMount() {
    this.getBook(this.state.bookId);
    document.title = "Change book";
  }

  componentWillUnmount() {
    document.title = "Book catalog";
  }

  changeBookData = ({ title, authors, year, isbn }) => {
    return firebase
      .database()
      .ref("books/" + this.state.bookId)
      .set({
        title: title.trim(),
        authors: authors.trim() || "Unknown",
        year: year.trim() || "Unknown",
        isbn: isbn.trim(),
      });
  };

  getBook = (bookId) => {
    firebase
      .database()
      .ref("books/" + bookId)
      .once("value")
      .then((response) => {
        this.setState({
          book: response.val(),
        });
      });
  };

  render() {
    if (!this.state.book)
      return <div className="change-book-notfound">Book not found</div>;
    return (
      <div className="change-book">
        <Book book={this.state.book}></Book>

        <BookForm
          submitFunc={this.changeBookData}
          title="Change Book"
        ></BookForm>
      </div>
    );
  }
}

export default ChangeBook;
