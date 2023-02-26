import { Box, styled } from "@mui/material";

const ProgressContainer = styled(Box)(({ theme }) => ({
    display: "block",
    position: "absolute",
    backgroundColor: "lightgray",
    top: "1%",
    width: "98%",
    height: "3px",
    borderRadius: "50px",
}));

const Progressbar = styled(Box)(({ theme }) => ({
    width: "0%",
    height: "100%",
    borderRadius: "50px",
    backgroundColor: "gray",
    animation: "fill-bar 5s linear forwards",
    "@keyframes fill-bar": {
        from: { width: "0%" },
        to: { width: "100%" },
    },
}));

export { ProgressContainer, Progressbar };
