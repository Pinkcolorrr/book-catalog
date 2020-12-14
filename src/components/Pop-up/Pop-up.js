import "./Pop-up.css";
import React from "react";

function PopUp(props) {
  return (
    <div className="pop-up">
      <div className="pop-up-body">
        <div className="pop-up-close">
          <button className="pop-up-close-btn" onClick={props.closePopUp}>
            X
          </button>
        </div>
        <div className="pop-up-body-inner">
          <div className="pop-up-title">{props.title}</div>
          {props.form}
          <div className="pop-up-switch">
            <div className="pop-up-switch-text">{props.switchText}</div>
            <button
              className="pop-up-switch-link"
              type="button"
              onClick={props.togglePopUps}
            >
              {props.switchBtnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterPopUp(props) {
  if (!props.isOpen) return null;

  const form = (
    <form className="pop-up-form">
      <input
        className="pop-up-input"
        type="text"
        placeholder="Your username"
        autoComplete="on"
      ></input>
      <input
        className="pop-up-input"
        type="text"
        placeholder="Your email"
        autoComplete="on"
      ></input>
      <input
        className="pop-up-input"
        type="password"
        placeholder="Password"
        autoComplete="on"
      ></input>
      <input
        className="pop-up-input"
        type="password"
        placeholder="Confirm password"
        autoComplete="on"
      ></input>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
  return (
    <PopUp
      title="Register"
      switchText="Already registered?"
      switchBtnText="Sign In"
      form={form}
      closePopUp={props.closePopUp}
      togglePopUps={props.togglePopUps}
    ></PopUp>
  );
}

function SignInPopUp(props) {
  if (!props.isOpen) return null;

  const form = (
    <form className="pop-up-form">
      <input
        className="pop-up-input"
        type="text"
        placeholder="Your email"
        autoComplete="on"
      ></input>
      <input
        className="pop-up-input"
        type="password"
        placeholder="Password"
        autoComplete="on"
      ></input>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
  return (
    <PopUp
      title="Sign In"
      switchText="Don't have an account yet?"
      switchBtnText="Register"
      form={form}
      closePopUp={props.closePopUp}
      togglePopUps={props.togglePopUps}
    ></PopUp>
  );
}

export { RegisterPopUp, SignInPopUp };
