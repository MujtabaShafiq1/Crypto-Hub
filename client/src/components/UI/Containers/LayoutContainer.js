import { Box, styled } from "@mui/material";

const LayoutContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

export { LayoutContainer };
