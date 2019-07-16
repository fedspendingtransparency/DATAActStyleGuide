import HomePage from "./pages/HomePage";
import TooltipPage from "./pages/TooltipPage";

const createRouteObj = (link, component, exact = false, name = link) => ({
    link,
    component,
    exact,
    name
});

export default [
    createRouteObj('/', HomePage, true, "Home"),
    createRouteObj('/tooltip', TooltipPage, true, "Tooltip")
];
