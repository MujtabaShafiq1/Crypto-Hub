import { Box, styled } from "@mui/material";

const Flexbox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const VerticalFlexbox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
});

export { Flexbox, VerticalFlexbox };
