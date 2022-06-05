import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ApplicationContextProvider from "../context/ApplicationContext";
import { useAuthenticationContext } from "../context/AuthenticationContext";
import MessagModalContextProvider from "../context/MessageModalContext";
import WithAuth from "../hoc/WithAuth";
import Galeria from "../pages/Galeria";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Palette from "../pages/Palette";
import Registration from "../pages/Registration";

const Routes = () => {
  const { currentUser } = useAuthenticationContext();

  return (
    <BrowserRouter>
      <Switch>
        <ApplicationContextProvider>
          <MessagModalContextProvider>
            <Route
              path="/"
              exact
              render={() => (currentUser ? <Redirect to="/home" /> : <Login />)}
            ></Route>
            <Route
              path="/login"
              exact
              render={() => (currentUser ? <Redirect to="/home" /> : <Login />)}
            ></Route>
            <Route
              path="/registration"
              exact
              render={() =>
                currentUser ? <Redirect to="/home" /> : <Registration />
              }
            ></Route>
            <Route
              path="/home"
              exact
              render={() => (
                <WithAuth>
                  <Home />
                </WithAuth>
              )}
            />
            <Route
              path="/palette"
              render={() => (
                <WithAuth>
                  <Palette />
                </WithAuth>
              )}
            />
            <Route
              path="/galeria"
              exact
              render={() => (
                <WithAuth>
                  <Galeria />
                </WithAuth>
              )}
            />
          </MessagModalContextProvider>
        </ApplicationContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
