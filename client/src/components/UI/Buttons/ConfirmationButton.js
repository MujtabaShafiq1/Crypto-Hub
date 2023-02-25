import { Button, styled } from "@mui/material";

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

export { ConfirmationButton };
