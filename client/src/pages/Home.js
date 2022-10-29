import { useSelector } from "react-redux"
import { Box, Typography } from "@mui/material";
import { Flexbox } from "../misc/MUIComponents";
import Navigation from "../components/Layout/Navigation";

const Home = () => {

    const user = useSelector((state) => state.auth.user)

    return (
        <>
            <Navigation />
            <Box sx={{ height: "100vh" }}>
                <Typography variant="h5" sx={{ overflowWrap: "break-word", textAlign: "center" }}>{user.name}</Typography>
                <Typography variant="h5" sx={{ overflowWrap: "break-word", textAlign: "center" }}>{user.userId}</Typography>
                <Typography variant="h5" sx={{ overflowWrap: "break-word", textAlign: "center" }}>{user.provider}</Typography>
                <Box component="img" src={user.photo} alt="" />
            </Box >
        </>
    )
}

export default Home