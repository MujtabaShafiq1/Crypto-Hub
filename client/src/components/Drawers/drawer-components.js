import { Box, styled } from "@mui/material";

export const CollapseContainer = styled(Box)(({ open, duration, collapsedSize, theme }) => ({
  width: open ? collapsedSize : "100%",
  transition: `width ${duration}ms ease-in-out`,
  height: "100%",
  backgroundColor: theme.palette.main.primary,
}));
