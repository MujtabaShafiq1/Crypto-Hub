import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../UI";
import { SocketContext } from "../../context/SocketProvider";
import Leftbar from "./Leftbar";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";

const Layout = () => {
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.connect();
    }, [socket]);

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
