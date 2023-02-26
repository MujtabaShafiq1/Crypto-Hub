import { Box, styled } from "@mui/material";

const ViewStoryContainer = styled(Box)(({ theme }) => ({
    width: "30%",
    height: "90%",
    position: "relative",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
}));

export { ViewStoryContainer, ImageContainer };
