import { Box, List, ListItemButton, ListItemIcon, styled } from "@mui/material";
import { LongText } from "../../../styles/global-components";

export const CollapseContainer = styled(Box)(({ open, duration, collapsedSize, theme }) => ({
  width: open ? collapsedSize : "100%",
  transition: `width ${duration}ms ease-in-out`,
  height: "100%",
  backgroundColor: theme.palette.main.secondary,
}));

export const ListText = styled(LongText)(({ hide, theme }) => ({
  fontSize: "1.1rem",
  display: hide && "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 0,
  position: "sticky",
  height: "100vh",
  width: "300px",
  backgroundColor: theme.palette.main.primary,
  transition: "0.5s all ease-in-out",
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
  [theme.breakpoints.down("md")]: {
    width: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const NavList = styled(List)(({ theme }) => ({
  borderRadius: "5px",
  margin: "auto",
  height: "93%",
  "&& .Mui-selected": {
    backgroundColor: "transparent",
    fontWeight: 500,
    borderRadius: 0,
    borderRight: "3px solid purple",
    "& .MuiSvgIcon-root": {
      fill: "purple",
    },
  },
  "&& .Mui-selected:hover": {
    backgroundColor: "transparent",
  },
  "& .MuiSvgIcon-root": {
    fill: theme.palette.text.primary,
    fontSize: "1.75rem",
  },
}));

export const ListButton = styled(ListItemButton)(({ hide, theme }) => ({
  padding: "0.65rem 0.3rem",
  marginBottom: theme.spacing(1.2),
  justifyContent: hide && "center",
  "&:hover": {
    opacity: 1,
    cursor: "pointer",
    borderRight: "2px solid purple",
  },
}));

export const ListIcon = styled(ListItemIcon)(({ theme }) => ({
  justifyContent: "center",
}));
