import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApplicationContextProvider from '../context/ApplicationContext';
import { NavBar } from '../elements';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Palette from '../pages/Palette';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
            <ApplicationContextProvider>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                
                <NavBar>
                    <Route path="/home" exact>
                        <Home />
                    </Route>
                    <Route path="/palette">
                        <Palette />
                    </Route>
                </NavBar>
                
            </ApplicationContextProvider>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;