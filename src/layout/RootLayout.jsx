import { Outlet, useLocation, matchPath } from "react-router";

import { Categories, Hero, Navbar, ScrollToTop } from "../components";
import Footer from "../components/Footer";

const RootLayout = () => {

    const { pathname } = useLocation();
    const searchPath = matchPath('/search/:search', pathname);
    const categoryPath = matchPath('/category/:name', pathname);
    const mealPath = matchPath('/meal/:id', pathname);

    return (
        <div>
            <ScrollToTop />
            <Navbar />
            {!searchPath && !categoryPath && !mealPath && <Hero />}
            {!searchPath && !categoryPath && !mealPath && <Categories />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;