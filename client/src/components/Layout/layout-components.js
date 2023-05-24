import { Box, styled } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main.primary,
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

export const FriendsContainer = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 0,
  position: "sticky",
  height: "100vh",
  width: "300px",
  backgroundColor: theme.palette.main.secondary,
  transition: "0.5s all ease-in-out",
  [theme.breakpoints.down("lg")]: {
    width: "75px",
  },
}));
