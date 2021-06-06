import React, { FC } from "react";
import { RouteProps } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthPage } from "./authentication";
import { HomePage } from "./home";
import { NoMatch } from "./noMatch";

import { useAuthContext } from "../providers/AuthProvider";

const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useAuthContext();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/authentication",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const RootRouter: FC = () => (
  <Router>
    <Switch>
      <Route path="/authentication">
        <AuthPage />
      </Route>
      <PrivateRoute exact path="/">
        <Route component={HomePage} />
      </PrivateRoute>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);
