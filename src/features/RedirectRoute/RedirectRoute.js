import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { checkLogin } from "./../CheckLogin/checkLogin";

const RedirectRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const isLogin = checkLogin();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/sign_in",
              state: {
                from: location,
              },
            }}
          />
        )
      }
    />
  );
};

export { RedirectRoute };
