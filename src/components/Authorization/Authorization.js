import React from "react";
import "./Authorization.css";

class Authorization extends React.Component {
  openLoginForm = () => {};
  openRegisterForm = () => {};

  render() {
    return (
      <div className="authorization">
        <button
          className="sing-in authorization-button"
          type="button"
          onClick={this.openLoginForm()}
        >
          Sign in
        </button>
        <button
          className="register authorization-button"
          type="button"
          onClick={this.openRegisterForm()}
        >
          Register
        </button>
      </div>
    );
  }
}

export default Authorization;
