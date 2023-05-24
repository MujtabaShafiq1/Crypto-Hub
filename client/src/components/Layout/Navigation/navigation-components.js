import { Box, List, ListItemButton, ListItemIcon, styled } from "@mui/material";
import { Flexbox, LongText, Logo } from "../../../styles/global-components";

// LOGO

export const NavLogo = styled(Logo)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const LogoContainer = styled(Flexbox)(({ theme }) => ({
  width: "90%",
  margin: "auto",
  justifyContent: "space-evenly",
  padding: `${theme.spacing(1.3)} ${theme.spacing(0)}`,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const LogoText = styled(LongText)(({ hide, theme }) => ({
  fontWeight: "500",
  fontSize: "1.75rem",
  display: hide && "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const DrawerContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    position: "relative",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  position: "sticky",
  width: "250px",
  height: "100vh",
  display: "flex",
  zIndex: 2,
  backgroundColor: theme.palette.main.primary,
  transition: "0.5s all ease-in-out",
  [theme.breakpoints.up("lg")]: {
    top: 0,
    left: 0,
  },
  [theme.breakpoints.down("lg")]: {
    width: "210px",
  },
  [theme.breakpoints.down("md")]: {
    width: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    bottom: 0,
    height: "50px",
    width: "100%",
  },
}));

export const CollapseContainer = styled(Box)(({ open, duration, collapsedsize, theme }) => ({
  transition: `width ${duration}ms ease-in-out`,
  height: "100%",
  backgroundColor: theme.palette.main.secondary,
  width: open ? collapsedsize : "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const NavList = styled(List)(({ theme }) => ({
  borderRadius: "5px",
  margin: "auto",
  height: "100%",
  width: "100%",
  "&& .Mui-selected": {
    backgroundColor: "transparent",
    fontWeight: 500,
    borderRadius: 0,

    [theme.breakpoints.up("sm")]: {
      borderRight: "0px solid purple",
    },

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
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const ListText = styled(LongText)(({ hide, theme }) => ({
  display: hide && "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ListButton = styled(ListItemButton)(({ collapse, theme }) => ({
  padding: "1rem 0rem",
  margin: "0.85rem 0rem",
  justifyContent: collapse && "center",
  "&:hover": {
    opacity: 1,
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      borderRight: "2px solid purple",
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.3rem 0rem",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const ListIcon = styled(ListItemIcon)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
}));
