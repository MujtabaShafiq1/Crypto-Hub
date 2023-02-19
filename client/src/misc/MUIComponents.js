import { Box, Typography, Grid, Container, Button, Badge, TextField, List, ListItemButton, Collapse, styled } from "@mui/material";
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

const CollapseContainer = styled(Collapse)(({ theme }) => ({
    top: 0,
    left: 0,
    height: "100vh",
    position: "absolute",
    "& .MuiCollapse-wrapperInner": {
        width: "20vw",
        borderRadius: "0px 5px 5px 0px",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down("lg")]: {
            width: "30vw",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
        },
    },
}));

const StickyContainer = styled(Box)(({ theme }) => ({
    top: 0,
    display: "flex",
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

const StyledButton = styled(Button)(({ error }) => ({
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
    animation: error && "shake 500ms ease-in-out",
    "@keyframes shake": {
        "0%": {
            transform: "translateX(0)",
        },
        "25%": {
            transform: "translateX(-15px)",
        },
        "50%": {
            transform: "translateX(15px)",
        },
        "75%": {
            transform: "translateX(-15px)",
        },
        "100%": {
            transform: "translateX(0)",
        },
    },
}));

const StyledField = styled(TextField)(({ error }) => ({
    width: "100%",
    input: { color: "black" },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "0.5px solid black",
        background: "rgb(180, 180, 180, 0.2)",
        animation: error && "shake 500ms ease-in-out",
        "@keyframes shake": {
            "0%": {
                transform: "translateX(0)",
            },
            "25%": {
                transform: "translateX(-5px)",
            },
            "50%": {
                transform: "translateX(5px)",
            },
            "75%": {
                transform: "translateX(-5px)",
            },
            "100%": {
                transform: "translateX(0)",
            },
        },
    },
    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: error && "0.5px solid #red",
        },
    },
}));

const StyledList = styled(List)(({ theme }) => ({
   overflow: "auto", 
   padding: "10px",
}));

const StyledNavList = styled(List)(({ theme }) => ({
    // [theme.breakpoints.down("sm")]: {
    //     display: "flex",
    // },
    "&& .Mui-selected": {
        fontWeight: 700,
        "& .MuiSvgIcon-root": {
            color: "purple",
        },
    },
    "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
        fontSize: 30,
        "&:hover": {
            animation: "bounce 500ms",
            "@keyframes bounce": {
                "0%": {
                    transform: "translateY(0)",
                },
                "25%": {
                    transform: "translateY(-3px)",
                },
                "50%": {
                    transform: "translateY(0px)",
                },
                "75%": {
                    transform: "translateY(-3px)",
                },
                "100%": {
                    transform: "translateY(0)",
                },
            },
        },
    },
    "& .MuiAvatar-root": {
        backgroundColor: "transparent",
        overflow: "visible",
    },
}));

const ListHeader = styled(Typography)(({ theme }) => ({
    margin: "5%",
    color: theme.palette.text.primary,
    fontWeight: "500",
}));

const StyledListItem = styled(ListItemButton)(({ theme }) => ({
    margin: "5px 0",
    padding: "8px",
    "&:hover": {
        opacity: 1,
        borderRadius: "30px",
        cursor: "pointer",
    },
}));

const LongTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}));

const StyledStatusBadge = styled(Badge)(({ show }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: show ? "#44b700" : "gray",
        color: "#44b700",
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

export {
    Flexbox,
    LongTypography,
    MainContainer,
    CollapseContainer,
    StickyContainer,
    StyledBadge,
    StyledStatusBadge,
    StyledList,
    StyledNavList,
    ListHeader,
    StyledListItem,
    StyledButton,
    FormContainer,
    StyledField,
};
