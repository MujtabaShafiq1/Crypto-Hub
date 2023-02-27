import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../UI";
import Leftbar from "./Leftbar";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Layout = () => {
    return (
        <>
            <LayoutContainer>
                <TopNavbar />
                <Leftbar />
                <Outlet />
                <BottomNavbar />
            </LayoutContainer>
        </>
    );
};

export default Layout;
