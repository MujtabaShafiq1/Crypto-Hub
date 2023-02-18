import { Box } from "@mui/material";
import Leftbar from "../components/Layout/Leftbar";
import Rightbar from "../components/Layout/Rightbar";

const Home = () => {
    return (
        <Box sx={{display: "flex", }}>
            <Leftbar />
            <Box sx={{ height: "300vh", width: "100%", backgroundColor: "lightblue" }}>Hello</Box>
            <Rightbar />
        </Box>
    );
};

export default Home;
