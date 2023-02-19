import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Leftbar from "./Leftbar";

const Layout = () => {
    return (
        <Box sx={{ display: "flex" }}>
            <Leftbar />
            <Outlet />
        </Box>
    );
};

export default Layout;
