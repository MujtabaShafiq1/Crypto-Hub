import { Button, styled } from "@mui/material";

const ProfileButton = styled(Button)(({ value, theme }) => ({
    backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
    color: value === "confirm" ? "white" : "black",
    borderRadius: "25px",
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    fontSize: theme.typography.body.fontSize,
    ":hover": {
        backgroundColor: value === "confirm" ? "lightblue" : "lightgray",
        cursor: "pointer",
        fontWeight: 700,
        opacity: 0.7,
    },
}));

export { ProfileButton };
