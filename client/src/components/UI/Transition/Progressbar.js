import { Box, styled } from "@mui/material";

const Progressbar = styled(Box)(({ theme }) => ({
    width: "0%",
    height: "10px",
    position: "absolute",
    backgroundColor: "lightgray",
    animation: "fill-bar 5s linear forwards",
    "@keyframes fill-bar": {
        from: { width: "0%" },
        to: { width: "100%" },
    },
}));

export { Progressbar };
