import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Navigation from "../components/Layout/Navigation";
import axios from "axios"


const Home = () => {
    const user = useSelector((state) => state.auth.user);

    const fetchUserDetails = async () => {
        const response = await axios.get(`http://localhost:8000/user/me`, { withCredentials: true });
        console.log(response.data)
    };

    useEffect(() => {
        fetchUserDetails()  
    }, []);

    return (
        <>
            <Navigation />
            <Box sx={{ height: "100vh" }}>
                <Typography variant="h5" sx={{ overflowWrap: "break-word", textAlign: "center" }}>
                    {user.name}
                </Typography>
                <Typography variant="h5" sx={{ overflowWrap: "break-word", textAlign: "center" }}>
                    {user.userId}
                </Typography>
                <Typography variant="h5" sx={{ overflowWrap: "break-word", textAlign: "center" }}>
                    {user.provider}
                </Typography>
                <Box component="img" src={user.photo} alt="" />
            </Box>
        </>
    );
};

export default Home;
