import "./App.css";
import React from "react";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";

function App() {
  return (
    <div className="wrapper">
      <Menu></Menu>
      <Content></Content>
    </div>
  );
}

export default App;
