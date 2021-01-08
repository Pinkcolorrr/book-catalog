import "./AddBook.css";
import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import SimpleReactValidator from "simple-react-validator";
import BookForm from "./../Forms/BookForm/BookForm";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  componentDidMount() {
    document.title = "Add new book";
  }

  componentWillUnmount() {
    document.title = "Book catalog";
  }

  writeBookData = ({ title, authors, year, isbn }) => {
    return firebase
      .database()
      .ref("books/")
      .push({
        title: title.trim(),
        authors: authors.trim() || "Unknown",
        year: year.trim() || "Unknown",
        isbn: isbn.trim(),
      });
  };

  render() {
    return (
      <div className="add-book">
        <BookForm submitFunc={this.writeBookData} title="Add book"></BookForm>
      </div>
    );
  }
}

export default AddBook;
