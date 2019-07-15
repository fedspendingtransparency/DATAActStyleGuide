import React from 'react';
import { render } from 'react-dom';
import { hot } from "react-hot-loader";

import App from "./components/App";

require('./styles/main.scss');

const app = render(
    <App />,
    document.getElementById("app")
);

export default hot(module)(app);
