import React from "react";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <button className="nav-all nav-button" type="button">
          All books
        </button>
        <button className="nav-my nav-button" type="button">
          My books
        </button>
      </nav>
    );
  }
}

export default Nav;
