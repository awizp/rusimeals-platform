import { Outlet } from "react-router";

import { Hero, Navbar, ScrollToTop } from "../components";

const RootLayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <Outlet />
        </div>
    );
};

export default RootLayout;