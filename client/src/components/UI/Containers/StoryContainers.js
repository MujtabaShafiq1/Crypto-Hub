import { Box, styled } from "@mui/material";

const StoriesContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    gap: theme.spacing(1),
    display: "flex",
    // overflow: "hidden",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    width: "100%",
    position: "relative",
}));

const StoryContainer = styled(Box)(({ theme }) => ({
    zIndex: 0,
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "10px",
    cursor: "pointer",
    position: "relative",
    height: "230px",
    width: "180px",
    [theme.breakpoints.down("lg")]: {
        height: "200px",
        width: "150px",
    },
    [theme.breakpoints.down("md")]: {
        height: "160px",
        width: "120px",
    },
}));

const StoryDetails = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    position: "absolute",
    top: "75%",
    left: "5%",
    color: "white",
    fontWeight: 500,
    "& .MuiAvatar-root": {
        height: 35,
        width: 35,
    },
}));

export { StoriesContainer, StoryContainer, StoryDetails };
