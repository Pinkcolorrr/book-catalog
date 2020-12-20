import "./Book.css";
import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import BookCtrl from "./../BookCtrl/BookCtrl";
import PopUp from "./../Pop-up/Pop-up";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUser: false,
      isPopUpActive: false,
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

  setActive = () => {
    this.setState({ isPopUpActive: !this.state.isPopUpActive });
  };

  render() {
    const { book } = this.props;

    const elem = (
      <div className="delet-book">
        <div className="delet-book-text">
          Are you sure you want to delete{" "}
          <span className="delet-book-text-title">"{book.title}"</span>?
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
            onClick={() => {
              this.props.deleteBook(this.props.bookKey);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );

    return (
      <div className="book">
        {this.state.isPopUpActive ? (
          <PopUp
            title="Delete book"
            content={elem}
            setActive={this.setActive}
          ></PopUp>
        ) : null}

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
            <BookCtrl setActive={this.setActive}></BookCtrl>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default Book;
