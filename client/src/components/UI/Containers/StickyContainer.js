import { Box, styled } from "@mui/material";

const StickyContainer = styled(Box)(({ theme }) => ({
    top: 0,
    display: "flex",
    height: "100vh",
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
}));

export { StickyContainer };
