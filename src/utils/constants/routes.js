import { HOMEPAGE, LOGIN, REGISTER, CONTACTUS, ABOUT, DASHBOARD } from '../constants/urls';
import Dashboard from "../../components/Dashboard";
import ContactUs from "../../components/ContactUs";
import About from "../../components/About";

export const userRoutes = [
    {
        id: 1,
        name: "Dashboard",
        path: DASHBOARD,
        component: <Dashboard />
    },
    {
        id: 1,
        name: "About",
        path: ABOUT,
        component: <About />
    },
    {
        id: 1,
        name: "Contact Us",
        path: CONTACTUS,
        component: <ContactUs />
    }
];