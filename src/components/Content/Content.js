import "./Content.css";
import React from "react";
import Nav from "./../Nav/Nav";
import BookList from "./../BookList/BookList";

function Content() {
  return (
    <div className="content">
      <Nav></Nav>
      <BookList></BookList>
    </div>
  );
}

export default Content;
