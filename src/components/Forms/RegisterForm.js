import React from "react";
import PopUp from "../Pop-up/Pop-up";
import "./Form.css";
import firebase from "firebase/app";
import "firebase/auth";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
    };
  }

  componentWillUnmount() {
    this.setState({
      errorMsg: "",
    });
  }

  register = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.props.setActive();
      })
      .catch((error) => {
        this.setState({
          errorMsg: error.message,
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
    const form = (
      <div>
        <form className="pop-up-form" onSubmit={this.register}>
          <input
            className="pop-up-input input"
            id="email"
            placeholder="your email"
            type="text"
            onChange={this.handleChange}
          ></input>
          <input
            className="pop-up-input input"
            id="password"
            placeholder="password"
            type="password"
            onChange={this.handleChange}
          ></input>
          <button className="submit-btn button">submit</button>
        </form>
        <div className="submit-error">{this.state.errorMsg}</div>
        <div className="pop-up-switch">
          <div>Already registered?</div>
          <button
            className="pop-up-switch-link"
            onClick={this.props.toggleForms}
          >
            Sign In
          </button>
        </div>
      </div>
    );

    return (
      <PopUp
        setActive={this.props.setActive}
        content={form}
        title="Register"
      ></PopUp>
    );
  }
}

export default RegisterForm;
