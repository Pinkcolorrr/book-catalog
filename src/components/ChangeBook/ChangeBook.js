import "./ChangeBook.css";
import React from "react";
import Book from "../Book/Book";
import firebase from "firebase/app";
import "firebase/database";
import { Redirect } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import isbn from "isbn-validate";

class ChangeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      bookId: this.props.match.params.book,
      title: "",
      authors: "",
      year: "",
      isbn: "",
      redirect: false,
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });

    this.isbnValidator = new SimpleReactValidator({
      validators: {
        isbn: {
          message: "Invalid isbn",
          rule: (val) => {
            return isbn.Validate(val);
          },
          required: true,
        },
      },
    });
  }

  componentDidMount() {
    this.getBook(this.state.bookId);
  }

  ChangeBook = (e) => {
    e.preventDefault();

    if (this.validator.allValid() && this.isbnValidator.allValid()) {
      firebase
        .database()
        .ref("books/" + this.state.bookId)
        .set({
          title: this.state.title.trim(),
          authors: this.state.authors.trim() || "Unknown",
          year: this.state.year.trim() || "Unknown",
          isbn: this.state.isbn.trim(),
        })
        .then(() => {
          this.setState({
            title: "",
            authors: "",
            year: "",
            isbn: "",
            redirect: true,
          });
        });
    } else {
      this.validator.showMessages();
      this.isbnValidator.showMessages();
    }
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

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  render() {
    if (!this.state.book)
      return <div className="change-book-notfound">Book not found</div>;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="change-book">
        <Book book={this.state.book}></Book>

        <form className="change-book-form" onSubmit={this.ChangeBook}>
          <div className="change-book-form-title">Change book</div>
          <div className="input-group">
            <input
              className="input change-book-input"
              placeholder="title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("title")}
            ></input>
            <div className="srv-validation-message">
              {this.validator.message("title", this.state.title, "required")}
            </div>
          </div>
          <div className="input-group">
            <input
              className="input change-book-input"
              placeholder="Authors"
              id="authors"
              value={this.state.authors}
              onChange={this.handleChange}
            ></input>
            <div className="srv-validation-message"></div>
          </div>

          <div className="input-group">
            <input
              className="input change-book-input"
              placeholder="Year"
              id="year"
              value={this.state.year}
              onChange={this.handleChange}
              onBlur={() => this.validator.showMessageFor("year")}
            ></input>
            <div className="srv-validation-message">
              {this.validator.message("year", this.state.year, "integer")}
            </div>
          </div>

          <div className="input-group">
            <input
              className="input change-book-input"
              placeholder="isbn"
              id="isbn"
              value={this.state.isbn}
              onChange={this.handleChange}
              onBlur={() => this.isbnValidator.showMessageFor("isbn")}
            ></input>
            <div className="srv-validation-message">
              {this.isbnValidator.message("isbn", this.state.isbn, "isbn")}
            </div>
          </div>

          <button className="button change-book-button" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default ChangeBook;
