import { TextField, styled } from "@mui/material";

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

export { StyledField };
