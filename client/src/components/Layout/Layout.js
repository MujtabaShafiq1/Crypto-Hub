import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Leftbar from "./Leftbar";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Layout = () => {
    return (
        <>
            <Box sx={{ display: { sm: "flex" } }}>
                <TopNavbar />
                <Leftbar />
                <Outlet />
                <BottomNavbar />
            </Box>
        </>
    );
};

export default Layout;
