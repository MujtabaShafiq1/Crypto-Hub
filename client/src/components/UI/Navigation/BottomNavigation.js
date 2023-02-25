import { BottomNavigation, BottomNavigationAction, styled } from "@mui/material";

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
    left: 0,
    bottom: 0,
    width: "100%",
    position: "fixed",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    width: "10%",
    "&.Mui-selected": {
        color: "purple",
        borderBottom: "3px solid purple",
    },
}));

export { StyledBottomNavigation, StyledBottomNavigationAction };
