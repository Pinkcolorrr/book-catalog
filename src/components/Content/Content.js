import "./Content.css";
import React from "react";
import Nav from "./../Nav/Nav";
import BookList from "./../BookList/BookList";
import AddBook from "./../AddBook/AddBook";
import ChangeBook from "./../ChangeBook/ChangeBook";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function Content(props) {
  const { history } = props;
  return (
    <div className="content">
      <Nav></Nav>
      <Switch>
        <Route history={history} path="/home" component={BookList}></Route>
        <Route history={history} path="/addbook" component={AddBook}></Route>
        <Route
          history={history}
          path="/changebook"
          component={ChangeBook}
        ></Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(Content);
