import React from "react";
import "./BookForm.css";
import SimpleReactValidator from "simple-react-validator";
import { Redirect } from "react-router-dom";

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: "",
      year: "",
      isbn: "",
      redirect: false,
    };

    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  submitFunc = (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      this.props.submitFunc(this.state).then(() => {
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
    }
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <form className="book-form" onSubmit={this.submitFunc}>
        <div className="book-form-title">{this.props.title}</div>
        <div className="input-group">
          <input
            className="input book-input"
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
            className="input book-input"
            placeholder="Authors"
            id="authors"
            value={this.state.authors}
            onChange={this.handleChange}
          ></input>
          <div className="srv-validation-message"></div>
        </div>

        <div className="input-group">
          <input
            className="input book-input"
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
            className="input book-input"
            placeholder="isbn"
            id="isbn"
            value={this.state.isbn}
            onChange={this.handleChange}
            onBlur={() => this.validator.showMessageFor("isbn")}
          ></input>
          <div className="srv-validation-message">
            {this.validator.message(
              "isbn",
              this.state.isbn,
              "required|integer"
            )}
          </div>
        </div>

        <button className="button book-button" type="submit">
          submit
        </button>
      </form>
    );
  }
}

export default BookForm;
