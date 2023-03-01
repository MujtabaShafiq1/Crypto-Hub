import { useContext, useEffect } from "react";
import { PageContainer } from "../components/UI";
import Rightbar from "../components/Layout/Rightbar";
import Stories from "../components/MainFeed/Story/Stories";
import { SocketContext } from "../context/SocketProvider";

const Home = () => {
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.connect();
    }, [socket]);

    return (
        <>
            <PageContainer>
                <Stories />
            </PageContainer>
            <Rightbar />
        </>
    );
};

export default Home;
