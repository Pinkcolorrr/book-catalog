import "./App.css";
import React from "react";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";

function App(props) {
  return (
    <div className="wrapper">
      <Menu></Menu>
      <Content history={props.history}></Content>
    </div>
  );
}

export default App;
