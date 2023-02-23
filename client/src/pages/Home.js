import { Box } from "@mui/material";
import Rightbar from "../components/Layout/Rightbar";
import Stories from "../components/MainFeed/Story/Stories";

const Home = () => {
    return (
        <Box sx={{ display: "flex", width: "100%" }}>
            <Box sx={{ height: "300vh", width: "100%", backgroundColor: "lightblue" }}>
                <Stories />
            </Box>
            <Rightbar />
        </Box>
    );
};

export default Home;
