import { Box, Button, Container, styled, TextField } from "@mui/material"

const Flexbox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const StyledButton = styled(Button)({
    backgroundColor: "black",
    opacity: "0.7",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",   // breakpoints add
    padding: "8px",
    borderRadius: "5px",
    gap: 10,
    ":hover": {
        backgroundColor: "black",
        cursor: "pointer",
        opacity: 1
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
    bgcolor: "white",
    minHeight: '55vh',
    width: "25%",
    borderRadius: "10px",
    boxShadow: "10px 0px 10px 5px rgb( 180, 180, 180, 0.4)",
    [theme.breakpoints.down('md')]: {
        width: "40%"
    },
    [theme.breakpoints.down('sm')]: {
        width: "60%"
    },
    backdropFilter: "blur(50px)",
}))

export { Flexbox, StyledButton, FormContainer, StyledField }