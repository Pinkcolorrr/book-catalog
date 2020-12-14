import React from "react";
import "./Authorization.css";
import { RegisterPopUp, SignInPopUp } from "./../Pop-up/Pop-up";

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInIsOpen: false,
      registerIsOpen: false,
    };
  }

  toggleSignInPopup = () => {
    this.setState({
      signInIsOpen: !this.state.signInIsOpen,
    });
  };
  toggleRegisterPopup = () => {
    this.setState({
      registerIsOpen: !this.state.registerIsOpen,
    });
  };

  togglePopUps = () => {
    this.toggleRegisterPopup();
    this.toggleSignInPopup();
  };

  render() {
    return (
      <div className="authorization">
        <div>
          <button
            className="sing-in authorization-button"
            type="button"
            onClick={this.toggleSignInPopup}
          >
            Sign in
          </button>
          <SignInPopUp
            isOpen={this.state.signInIsOpen}
            closePopUp={this.toggleSignInPopup}
            togglePopUps={this.togglePopUps}
          ></SignInPopUp>
        </div>

        <div>
          <button
            className="register authorization-button"
            type="button"
            onClick={this.toggleRegisterPopup}
          >
            Register
          </button>
          <RegisterPopUp
            isOpen={this.state.registerIsOpen}
            closePopUp={this.toggleRegisterPopup}
            togglePopUps={this.togglePopUps}
          ></RegisterPopUp>
        </div>
      </div>
    );
  }
}

export default Authorization;
