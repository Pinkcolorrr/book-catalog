import React from "react";
import "./Authorization.css";
import RegisterForm from "./../Forms/RegisterForm";
import SignInForm from "./../Forms/SignInForm";
import firebase from "firebase/app";
import "firebase/auth";

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInIsActive: false,
      registerIsActive: false,
      hasUser: false,
    };
  }

  componentDidMount = () => {
    this.authListener();
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  authListener = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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
  };

  setSignInActive = () => {
    this.setState({
      signInIsActive: !this.state.signInIsActive,
    });
  };

  setRegisterActive = () => {
    this.setState({
      registerIsActive: !this.state.registerIsActive,
    });
  };

  toggleForms = () => {
    this.setSignInActive();
    this.setRegisterActive();
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="authorization">
        {this.state.hasUser ? (
          <div className="account-info">
            <div className="account-info-user">
              {firebase.auth().currentUser.email}
            </div>
            <button
              className="button authorization-button"
              onClick={this.signOut}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <div className="Sign-in">
              <button
                className="button authorization-button"
                onClick={this.setSignInActive}
              >
                Sign In
              </button>

              {this.state.signInIsActive ? (
                <SignInForm
                  setActive={this.setSignInActive}
                  toggleForms={this.toggleForms}
                ></SignInForm>
              ) : null}
            </div>
            <div className="Register">
              <button
                className="button authorization-button"
                onClick={this.setRegisterActive}
              >
                Register
              </button>
              {this.state.registerIsActive ? (
                <RegisterForm
                  setActive={this.setRegisterActive}
                  toggleForms={this.toggleForms}
                ></RegisterForm>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Authorization;
