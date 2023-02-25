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
    cursor: "pointer",
    position: "relative",
    height: "230px",
    width: "180px",
    [theme.breakpoints.down("md")]: {
        height: "180px",
        width: "120px",
    },
}));

const StoryImageContainer = styled(Box)(({ theme }) => ({
    width: "30%",
    height: "90%",
    objectFit: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));

export { StoriesContainer, StoryContainer, StoryImageContainer };
