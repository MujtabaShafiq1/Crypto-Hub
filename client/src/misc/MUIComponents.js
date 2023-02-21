import {
    Box,
    Typography,
    Grid,
    Container,
    Button,
    Badge,
    TextField,
    List,
    ListItemButton,
    Collapse,
    BottomNavigation,
    BottomNavigationAction,
    styled,
} from "@mui/material";
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

const LeftbarContainer = styled(Box)(({ theme }) => ({
    top: 0,
    display: "flex",
    height: "100vh",
    position: "sticky",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("lg")]: {
        width: "370px",
    },
    [theme.breakpoints.down("lg")]: {
        width: "300px",
    },
    [theme.breakpoints.down("md")]: {
        width: "60px",
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

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

const ConfirmationButton = styled(Button)(({ value }) => ({
    backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
    color: value === "confirm" ? "white" : "black",
    borderRadius: "50px",
    fontSize: "12px",
    ":hover": {
        backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: 700,
        opacity: 0.7,
    },
}));

const StyledField = styled(TextField)(({ error, theme }) => ({
    width: "100%",
    input: { color: theme.palette.text.primary },
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
    "& .Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: error && "0.5px solid #red",
        },
    },
    "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
    },
}));

const StyledList = styled(List)(({ theme }) => ({
    overflow: "auto",
    padding: "8px",
    "& .MuiTypography-root": {
        fontWeight: 400,
        color: theme.palette.text.primary,
    },
    "&& .Mui-selected": {
        "& .MuiTypography-root": {
            color: "gray",
            fontWeight: 300,
        },
    },
}));

const StyledNavList = styled(List)(({ theme }) => ({
    "&& .Mui-selected": {
        fontWeight: 700,
        borderLeft: "3px solid purple",
        borderRadius: 0,
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
    margin: "4%",
    color: theme.palette.text.primary,
    fontWeight: "500",
}));

const StyledListButton = styled(ListItemButton)(({ theme }) => ({
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

const DiscoverTagsContainer = styled(Box)(({ hide, theme }) => ({
    display: hide && "none",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const TagsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "left",
    gap: theme.spacing(2),
    padding: "10px",
    height: "40vh",
    overflow: "auto",
    "& Button": {
        // backgroundColor: theme.palette.primary.main,
        color: "black",
        borderRadius: "50px",
        backgroundColor: "lightgray",
        opacity: 0.65,
    },
}));

// const StyledAppbar = styled(BottomNavigation)(({ theme }) => ({
//     left: 0,
//     bottom: 0,
//     width: "100%",
//     position: "fixed",
//     backgroundColor: theme.palette.primary.main,
//     [theme.breakpoints.up("sm")]: {
//         display: "none",
//     },
// }));

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

const ModalContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "45%",
    left: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    width: 180,
    height: 220,
    backgroundColor: theme.palette.primary.main,
    boxShadow: 24,
    border: "none",
    borderRadius: "20px",
    gap: theme.spacing(2),
    "& .MuiTypography-root": {
        color: theme.palette.text.primary,
        fontWeight: 700,
    },
    "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
        fontSize: 25,
    },
}));

export {
    Flexbox,
    LongTypography,
    MainContainer,
    LeftbarContainer,
    CollapseContainer,
    TagsContainer,
    DiscoverTagsContainer,
    StickyContainer,
    StyledBadge,
    StyledStatusBadge,
    StyledList,
    StyledNavList,
    ListHeader,
    StyledListButton,
    StyledButton,
    ConfirmationButton,
    FormContainer,
    StyledField,
    ModalContainer,
    StyledBottomNavigation,
    StyledBottomNavigationAction,
};
