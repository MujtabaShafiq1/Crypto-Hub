import { Box, styled } from "@mui/material";

const UserDetails = styled(Box)(({ theme }) => ({
    position: "absolute",
    padding: `${theme.spacing(0)} ${theme.spacing(3)}`,
    top: "55%",
    width: "95%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "450px",
    borderRadius: "3px",
    backgroundColor: theme.palette.primary.secondary,
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "350px",
    },
}));

const FriendsContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "450px",
    borderRadius: "3px",
    backgroundColor: theme.palette.primary.secondary,
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "350px",
    },
}));

export { FriendsContainer, UserDetails, BackgroundContainer };
