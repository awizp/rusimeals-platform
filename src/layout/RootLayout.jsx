import { Outlet } from "react-router";

import { Navbar, ScrollToTop } from "../components";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Outlet />
        </div>
    );
};

export default RootLayout;