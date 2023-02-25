import { Button, styled } from "@mui/material";

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

export { StyledButton };
