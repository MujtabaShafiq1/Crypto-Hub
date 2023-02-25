import { Box } from "@mui/material";
import { HomeContainer } from "../components/UI";
import Rightbar from "../components/Layout/Rightbar";
import Stories from "../components/MainFeed/Story/Stories";

const Home = () => {
    return (
        <>
            <HomeContainer>
                <Stories />
                <Box sx={{ height: "20vh", backgroundColor: "gray" }} />
            </HomeContainer>
            <Rightbar />
        </>
    );
};

export default Home;
