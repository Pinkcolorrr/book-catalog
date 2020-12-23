import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="nav">
        <Link className={`nav-all nav-button`} to="/">
          <span>All books</span>
        </Link>
        <Link className={`nav-my nav-button`} to="/addbook">
          <span>Add new book</span>
        </Link>
      </nav>
    );
  }
}

export default Nav;

// window.location.pathname.slice(1),
