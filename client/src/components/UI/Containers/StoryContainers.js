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
}));

export { StoriesContainer, StoryContainer };
