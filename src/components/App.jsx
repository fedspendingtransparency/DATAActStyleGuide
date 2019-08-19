import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import routes from "../routes";
import Nav from "./Nav";

const history = createBrowserHistory();

export default () => (
    <Router history={history}>
        <div className="container">
            <Nav />
            {routes.map((route) => (
                <Route exact={route.exact} path={route.link} component={route.component} />
            ))}
        </div>
    </Router>
);
