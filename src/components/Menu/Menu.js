import "./Menu.css";
import React from "react";
import Authorization from "../Authorization/Authorization";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="App-name">book catalog</div>
        <Authorization></Authorization>
      </div>
    );
  }
}

export default Menu;
