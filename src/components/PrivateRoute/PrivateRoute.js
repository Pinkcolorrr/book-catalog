import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./../UserContext";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <UserContext.Consumer>
      {(value) => (
        <Route
          {...rest}
          render={(props) =>
            value ? (
              <Component {...rest} {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            )
          }
        />
      )}
    </UserContext.Consumer>
  );
}

export default PrivateRoute;
