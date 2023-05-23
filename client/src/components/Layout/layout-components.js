import { Box, styled } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main.primary,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
