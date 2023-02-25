import { Box, styled } from "@mui/material";

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


export {  ModalContainer };
