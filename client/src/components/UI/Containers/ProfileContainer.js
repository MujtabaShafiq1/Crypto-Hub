import { Box, styled } from "@mui/material";

const UserDetails = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "90%",
    left: "5%",
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
    // position: "relative",
    // display: "flex",
    width: "90%",
    height: "45vh",
    backgroundColor: "rgba(239, 239, 240, 0.5)",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "30vh",
    },
}));

export { UserDetails, BackgroundContainer };
