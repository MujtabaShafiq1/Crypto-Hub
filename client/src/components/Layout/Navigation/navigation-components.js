import { Box, List, ListItemButton, ListItemIcon, useScrollTrigger, styled } from "@mui/material";
import { Flexbox, LongText } from "../../../styles/global-components";

export const DrawerContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    position: "relative",
  },
}));

export const Container = styled(Box)(({ theme }) => {
  const trigger = useScrollTrigger();
  console.log(trigger)
  return {
    position: "sticky",
    width: "250px",
    height: "100vh",
    display: "flex",
    zIndex: 2,
    top: 0,
    left: 0,
    backgroundColor: theme.palette.main.primary,
    transition: "0.5s all ease-in-out",
    [theme.breakpoints.down("lg")]: {
      width: "210px",
    },
    [theme.breakpoints.down("md")]: {
      width: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      marginBottom: "65px",
      height: "65px",
      width: "100%",
      display: trigger ? "none" : "flex",
    },
  };
});

export const CollapseContainer = styled(Box)(({ open, duration, collapsedsize, trigger, theme }) => ({
  transition: `width ${duration}ms ease-in-out`,
  height: "100%",
  backgroundColor: theme.palette.main.secondary,
  width: open ? collapsedsize : "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
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
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    margin: "auto 0",
    "& .MuiSvgIcon-root": {
      fontSize: "1.5rem",
    },
  },
}));

export const ListText = styled(LongText)(({ hide, theme }) => ({
  display: hide && "none",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ListButton = styled(ListItemButton)(({ hide, collapse, theme }) => ({
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
    padding: 0,
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    display: hide && "none",
  },
}));

export const ListIcon = styled(ListItemIcon)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
}));

export const BottomContainer = styled(Flexbox)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  height: "50px",
  backgroundColor: theme.palette.main.secondary,
  width: "100%",
  justifyContent: "space-evenly",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const BottomIcon = styled(Box)(({ active, theme }) => ({
  "& .MuiSvgIcon-root": {
    fill: active ? "purple" : theme.palette.text.primary,
    fontSize: "1.5rem",
  },
}));
