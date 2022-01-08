import AboutApp from "../views/about/AboutApp";
import Home from "../views/Home";
import Settings from "../views/settings/Settings";
import Weather from "../views/weather/Weather";

export const routes = [
    {
        id: 1,
        path: "/",
        component: Home,
        exact: true
    },
    {
        id: 2,
        path: "/settings",
        component: Settings,
        exact: true
    },
    {
        id: 3,
        path: "/weather",
        component: Weather,
        exact: true
    },
    {
        id: 4,
        path: "/about",
        component: AboutApp,
        exact: true
    }
]