import "./AddBook.css";
import React from "react";
import firebase from "firebase/app";
import "firebase/database";
import SimpleReactValidator from "simple-react-validator";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: "",
      year: "",
      isbn: "",
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  writeBookData = (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      firebase
        .database()
        .ref("books/")
        .push({
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
          });
        });
    } else {
      this.validator.showMessages();
    }
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  render() {
    return (
      <div className="add-book">
        <form className="add-book-form" onSubmit={this.writeBookData}>
          <div className="input-group">
            <input
              className="add-book-input"
              id="title"
              placeholder="book title"
              onChange={this.handleChange}
              type="text"
              value={this.state.title}
              onBlur={() => this.validator.showMessageFor("title")}
            ></input>
            <div className="add-book-error-msg">
              {this.validator.message("title", this.state.title, "required")}
            </div>
          </div>
          <div className="input-group">
            <input
              className="add-book-input"
              id="authors"
              placeholder="authors"
              onChange={this.handleChange}
              type="text"
              value={this.state.authors}
            ></input>
          </div>

          <div className="input-group">
            <input
              className="add-book-input"
              id="year"
              placeholder="year"
              onChange={this.handleChange}
              type="text"
              value={this.state.year}
              onBlur={() => this.validator.showMessageFor("year")}
            ></input>
            <div className="add-book-error-msg">
              {this.validator.message("year", this.state.year, "integer")}
            </div>
          </div>

          <div className="input-group">
            <input
              className="add-book-input"
              id="isbn"
              placeholder="isbn"
              onChange={this.handleChange}
              type="text"
              value={this.state.isbn}
              onBlur={() => this.validator.showMessageFor("isbn")}
            ></input>
            <div className="add-book-error-msg">
              {this.validator.message(
                "isbn",
                this.state.isbn,
                "required|alpha_num_dash_space"
              )}
            </div>
          </div>

          <button className="button add-book-button" type="submit">
            Submit
          </button>
          <div>{this.state.errorMsg}</div>
        </form>
      </div>
    );
  }
}

export default AddBook;
