import { Box, styled } from "@mui/material";

const LeftbarContainer = styled(Box)(({ theme }) => ({
    top: 0,
    zIndex: 2,
    width: "15vw",
    display: "flex",
    height: "100vh",
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("lg")]: {
        width: "200px",
    },
    [theme.breakpoints.down("md")]: {
        width: "60px",
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

export { LeftbarContainer };
