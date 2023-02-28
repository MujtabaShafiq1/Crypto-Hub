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

const RightbarContainer = styled(Box)(({ theme }) => ({
    top: 0,
    flex: 1.6,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export { LeftbarContainer, RightbarContainer };
