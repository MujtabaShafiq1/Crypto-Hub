import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Box, Divider, Typography, Grid } from "@mui/material"
import { Flexbox, FormContainer, StyledButton } from "../misc/MUIComponents"
import LoginForm from "../components/Forms/LoginForm"
import CustomSnackbar from '../components/UI/CustonSnackbar'

import GithubIcon from "../assets/github.png"
import GoogleIcon from "../assets/google.png"
import SteamIcon from "../assets/steam.png"
import background from "../assets/login.jpg"

const styles = {
    PaperStyles: {
        backgroundImage: `url(${background})`,
        backgroundSize: '100%',
        backgroundRepeat: "no-repeat",
        backgroundPosition: '0% 65%',
        // backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
    },
};

const Login = () => {

    const navigate = useNavigate()
    const [snackbar, setSnackbar] = useState({ open: false, details: "", type: "" })

    const github = () => {
        window.open("http://localhost:8000/auth/github", "_self");
    };

    const google = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    };

    const steam = () => {
        window.open("http://localhost:8000/auth/steam", "_self");
    };

    const snackbarHandler = (status, message, type) => {
        setSnackbar({ open: status, details: message, type: type })
        setTimeout(() => {
            setSnackbar({ open: false, details: "" })
        }, 2000)
    }

    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={styles.PaperStyles}
        >

            {snackbar.open && <CustomSnackbar type={snackbar.type} details={snackbar.details} />}

            <FormContainer>
                <Flexbox sx={{ flexDirection: "column", gap: 4 }}>

                    <Flexbox sx={{ flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "30px" }} fontWeight={500}>Welcome</Typography>
                        <Typography sx={{ fontSize: "20px" }} variant="h6" color="gray" fontWeight={300}>login to continue</Typography>
                    </Flexbox>

                    <LoginForm snackbarHandler={snackbarHandler} />

                    <Box display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
                        <Typography sx={{ fontSize: "16px" }}>Dont have an account? </Typography>
                        <Typography sx={{ color: "gray", cursor: "pointer", fontSize: "16px", fontWeight: 600 }} onClick={() => navigate("/signup")}>
                            Signup now !
                        </Typography>
                    </Box>

                    <Flexbox sx={{ flexDirection: "column", gap: 1, width: "100%" }}>
                        <Divider orientation='horizontal' sx={{ bgcolor: "black", opacity: "0.3", width: "70%" }} />
                        <Typography sx={{ textAlign: "center" }}>OR</Typography>
                        <Divider orientation='horizontal' sx={{ bgcolor: "black", opacity: "0.3", width: "70%" }} />
                    </Flexbox>

                </Flexbox >


                <Flexbox sx={{ flexDirection: "column", gap: 1.5, m: "5%" }}>

                    <StyledButton onClick={github} >
                        <Box component="img" src={GithubIcon} sx={{ width: "8%" }} />
                        <Typography>Github</Typography>
                    </StyledButton>

                    <StyledButton onClick={google} >
                        <Box component="img" src={GoogleIcon} sx={{ width: "8%" }} />
                        <Typography>Google</Typography>
                    </StyledButton>

                    <StyledButton onClick={steam} >
                        <Box component="img" src={SteamIcon} sx={{ width: "8%" }} />
                        <Typography>Steam</Typography>
                    </StyledButton>
                </Flexbox>

            </FormContainer>
        </Grid >

    )
}

export default Login