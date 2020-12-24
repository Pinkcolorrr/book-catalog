import "./Content.css";
import React from "react";
import Nav from "./../Nav/Nav";
import BookContent from "./../BookContent/BookContent";
import AddBook from "./../AddBook/AddBook";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function Content(props) {
  const { history } = props;
  return (
    <div className="content">
      <Nav></Nav>
      <Switch>
        <Route history={history} path="/home" component={BookContent}></Route>
        <Route history={history} path="/addbook" component={AddBook}></Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(Content);
