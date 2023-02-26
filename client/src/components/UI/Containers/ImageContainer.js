import { Box, styled } from "@mui/material";

const ImageContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
}));

export { ImageContainer };
