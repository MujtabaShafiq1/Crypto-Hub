import { useSelector } from "react-redux"
import { Box, Typography } from "@mui/material";
import { Flexbox, StyledButton } from "../misc/MUIComponents";

const Home = () => {

    const user = useSelector((state) => state.auth.user)

    const logoutHandler = async () => {
        window.open(`http://localhost:8000/auth/logout`, "_self");
    }

    return (
        <Flexbox sx={{ flexDirection: "column", height: "100vh", gap: 3 }}>
            <StyledButton onClick={logoutHandler} sx={{ width: "10%" }}>logout</StyledButton>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="h5">{user.userId}</Typography>
            <Typography variant="h5">{user.provider}</Typography>
            <Box component="img" src={user.photo} alt="" />
        </Flexbox>
    )
}

export default Home