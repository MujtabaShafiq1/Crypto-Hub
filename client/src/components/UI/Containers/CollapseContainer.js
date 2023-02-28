import { Collapse, styled } from "@mui/material";

const CollapseContainer = styled(Collapse)(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 2,
    height: "100%",
    position: "absolute",
    "& .MuiCollapse-wrapperInner": {
        width: "20vw",
        borderRadius: "0px 10px 10px 0px",
        borderRight: "1px solid rgba(191, 191, 191, 0.5)",
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.down("lg")]: {
            width: "30vw",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            borderRadius: 0,
            border: "none",
        },
    },
}));

export { CollapseContainer };
