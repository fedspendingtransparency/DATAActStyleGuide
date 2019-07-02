import Home from "./components/Home";
import Button from "./components/Button";

const createRouteObj = (link, component, exact = false, name = link) => ({
    link,
    component,
    name,
    exact: true
});

export default [
    createRouteObj('/', Home, true, "Home"),
    createRouteObj('/button', Button, true, "Button")
];
