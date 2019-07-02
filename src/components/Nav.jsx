import React from 'react';
import { Link } from "react-router-dom";

import routes from "../routes";

export default () => (
    <ul className="nav">
        {routes.map((route) => (
            <li className="nav__item">
                <Link to={route.link}>
                    {route.name}
                </Link>
            </li>
        ))}
    </ul>
);
