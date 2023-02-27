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
    flexDireciton: "column",
});

export { Flexbox, VerticalFlexbox };
