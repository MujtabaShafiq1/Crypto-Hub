import { Box, Grid } from "@mui/material";
import Leftbar from "../components/Layout/Leftbar";
import Rightbar from "../components/Layout/Rightbar";

const Home = () => {
    // grid 1 - 12
    return (
        <Grid container>
            <Grid item md={2.2} xs={1.5}>
                <Leftbar />
            </Grid>
            <Grid item md={7.3} xs={10.5}>
                <Box sx={{ height: "500vh", backgroundColor: "lightblue" }} />
            </Grid>
            <Grid item md={2.5} sx={{ display: { xs: "none", md: "flex" } }}>
                <Leftbar />
            </Grid>
        </Grid>
    );
};

export default Home;
