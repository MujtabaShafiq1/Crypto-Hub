import { Collapse, styled } from "@mui/material";

const CollapseContainer = styled(Collapse)(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 2,
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

export { CollapseContainer };
