import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CleanLayout, MainLayout } from "./layouts";
import { Login, Dashboard } from "./pages";
import { ProvideAuth, useAuth } from "./hooks";
import { Loader } from "./components";

export default function MainRouter() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Dashboard />
          </PrivateRoute>
          <Redirect from='*' to='/Login' />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  const { user, fetchingCacheUser } = useAuth();
  if (fetchingCacheUser) {
    return <Loader />;
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            <MainLayout>{children}</MainLayout>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
};
