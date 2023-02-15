import { Box, Grid, Container, Button, Badge, TextField, List, ListItemButton, styled } from "@mui/material";
import background from "../assets/background.jpg";

const MainContainer = styled(Grid)({
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "0% 65%",
    height: "100vh",
    width: "100vw",
});

const StickyContainer = styled(Box)(({ theme }) => ({
    top: 0,
    height: "100vh",
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
}));

const Flexbox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 4,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        fontSize: "11px",
    },
}));

const StyledButton = styled(Button)({
    backgroundColor: "black",
    opacity: "0.7",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    padding: "8px",
    borderRadius: "5px",
    gap: 10,
    ":hover": {
        backgroundColor: "black",
        cursor: "pointer",
        opacity: 1,
    },
    ":disabled": {
        color: "white",
    },
});

const StyledField = styled(TextField)(({ error }) => ({
    width: "100%",
    input: { color: "black" },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "0.5px solid black",
        background: "rgb(180, 180, 180, 0.2)",
    },
    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: error && "0.5px solid #red",
        },
    },
}));

const StyledList = styled(List)({
    "&& .Mui-selected, && .Mui-selected:hover": {
        "& .MuiListItemIcon-root": {
            color: "purple",
        },
        "&, .Typography-root": {
            fontWeight: 700,
        }
    },
});

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
    margin: "10px 0",
    padding: "10px",
    "&:hover": {
        opacity: 1,
        borderRadius: "30px",
        cursor: "pointer",
    },
    "&, & .MuiListItemIcon-root": {
        color: "black",
    },
}));

const FormContainer = styled(Container)(({ theme }) => ({
    width: "27%",
    minHeight: "55%",
    borderRadius: "10px",
    boxShadow: "10px 0px 10px 5px rgb( 180, 180, 180, 0.4)",
    [theme.breakpoints.down("lg")]: {
        width: "35%",
    },
    [theme.breakpoints.down("md")]: {
        width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "70%",
    },
    backdropFilter: "blur(50px)",
}));

export { Flexbox, StickyContainer, StyledBadge, StyledList, StyledListItem, MainContainer, StyledButton, FormContainer, StyledField };
