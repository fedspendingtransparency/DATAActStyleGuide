import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "../routes";
import Nav from "./Nav";

export default () => (
    <div className="container">
        <Router>
            <React.Fragment>
                <Nav />
                {routes.map((route) => (
                    <Route exact={route.exact} path={route.link} component={route.component} />
                ))}
            </React.Fragment>
        </Router>
    </div>
);
