import "./Book.css";
import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import BookCtrl from "./../BookCtrl/BookCtrl";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUser: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          hasUser: true,
        });
      } else {
        this.setState({
          hasUser: false,
        });
      }
    });
  }

  render() {
    const { book } = this.props;

    return (
      <li className="book">
        <ul className="book-fields">
          <li className="book-field">
            <span className="book-field-text">{book.title}</span>
          </li>
          <li className="book-field">
            <span className="book-field-text">{book.author}</span>{" "}
          </li>
          <li className="book-field">
            <span>{book.year}</span>{" "}
          </li>
          <li className="book-field">
            <span className="book-field-text">{book.isbn}</span>{" "}
          </li>
          {this.state.hasUser ? (
            <BookCtrl setActive={this.props.setActive}></BookCtrl>
          ) : null}
        </ul>
      </li>
    );
  }
}

export default Book;
