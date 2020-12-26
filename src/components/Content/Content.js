import "./Content.css";
import React from "react";
import Nav from "./../Nav/Nav";
import BookContent from "./../BookContent/BookContent";
import AddBook from "./../AddBook/AddBook";
import PrivateRoute from "./../PrivateRoute/PrivateRoute";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

function Content(props) {
  const { history } = props;
  return (
    <div className="content">
      <Nav></Nav>
      <Switch>
        <Route history={history} path="/home" component={BookContent}></Route>
        <PrivateRoute path="/addbook" component={AddBook}></PrivateRoute>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(Content);
