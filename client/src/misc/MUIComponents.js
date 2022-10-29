import { Box, Button, Container, styled, TextField, Toolbar, Avatar, Typography } from "@mui/material"

const Flexbox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})


const StyledLink = styled(Typography)({
    borderRadius: "8px",
    padding: "8px 20px",
    color: "white",
    fontSize: "16px",
    "&:hover": {
        backgroundColor: "skyblue",
        cursor: "pointer"
    },
    textTransform: "none",
})

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
        opacity: 1
    },
    ":disabled": {
        color: "white",
    }
})

const StyledField = styled(TextField)(({ error }) => ({
    width: "100%",
    input: { color: 'black' },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "0.5px solid black",
        background: "rgb(180, 180, 180, 0.2)",
    },
    "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
            border: error && "0.5px solid #red",
        }
    },
}))


const FormContainer = styled(Container)(({ theme }) => ({
    width: "27%",
    bgcolor: "white",
    minHeight: '55vh',
    borderRadius: "10px",
    boxShadow: "10px 0px 10px 5px rgb( 180, 180, 180, 0.4)",
    [theme.breakpoints.down('lg')]: {
        width: "35%"
    },
    [theme.breakpoints.down('md')]: {
        width: "50%"
    },
    [theme.breakpoints.down('sm')]: {
        width: "70%"
    },
    backdropFilter: "blur(50px)",
}))


export { Flexbox, StyledButton, FormContainer, StyledField, StyledLink }