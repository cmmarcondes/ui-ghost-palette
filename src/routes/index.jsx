import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ApplicationContextProvider from "../context/ApplicationContext";
import FacebookContextProvider from "../context/FacebookContext";
import MessagModalContextProvider from "../context/MessageModalContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Palette from "../pages/Palette";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ApplicationContextProvider>
          <FacebookContextProvider>
            <MessagModalContextProvider>
              <Route path="/" exact component={Login}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/palette" component={Palette}></Route>
            </MessagModalContextProvider>
          </FacebookContextProvider>
        </ApplicationContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
