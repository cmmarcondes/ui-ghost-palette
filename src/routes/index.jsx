import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApplicationContextProvider from '../context/ApplicationContext';
import Home from '../pages/Home';
import Palette from '../pages/Palette';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
            <ApplicationContextProvider>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/palette">
                    <Palette />
                </Route>
            </ApplicationContextProvider>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;