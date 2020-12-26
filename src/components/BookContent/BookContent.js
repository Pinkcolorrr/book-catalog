import React from "react";
import "./BookContent.css";
import BookList from "./../BookList/BookList";
import ChangeBook from "./../ChangeBook/ChangeBook";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import { Route, Switch } from "react-router-dom";

function BookContent(props) {
  return (
    <div className="book-content">
      <div className="book-list-title">
        <ul className="book-title-list">
          <li>Title</li>
          <li>Authors</li>
          <li>Year</li>
          <li>ISBN</li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/home" component={BookList}></Route>

        <PrivateRoute
          path="/home/changebook/:book"
          component={ChangeBook}
        ></PrivateRoute>
      </Switch>
    </div>
  );
}

export default BookContent;
