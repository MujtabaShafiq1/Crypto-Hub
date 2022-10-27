import { useNavigate } from "react-router-dom"
import { Box, Divider, Typography, Grid } from "@mui/material"
import { Flexbox, FormContainer, StyledButton } from "../misc/MUIComponents"
import LoginForm from "../components/Forms/LoginForm"

import GithubIcon from "../assets/github.png"
import GoogleIcon from "../assets/google.png"
import SteamIcon from "../assets/steam.png"
import background from "../assets/background.jpg"

const styles = {
    PaperStyles: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 65%',
        height: "100vh",
        width: "100vw",
    },
};

const Login = () => {

    const navigate = useNavigate()

    const github = () => {
        window.open("http://localhost:8000/auth/github", "_self");
    };

    const google = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    };

    const steam = () => {
        window.open("http://localhost:8000/auth/steam", "_self");
    };

    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={styles.PaperStyles}
        >
            <FormContainer>

                <Flexbox sx={{ flexDirection: "column", gap: { xs: 2, lg: 3 } }}>

                    <Flexbox sx={{ flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "30px" }} fontWeight={500}>Welcome</Typography>
                        <Typography sx={{ fontSize: "20px", textAlign: "center" }} variant="h6" color="gray" fontWeight={300}>login to continue</Typography>
                    </Flexbox>

                    <LoginForm />

                    <Flexbox display="flex" gap={2} flexDirection={{ xs: "column", md: "row" }}>
                        <Typography sx={{ fontSize: "16px", textAlign: "center" }}>Dont have an account? </Typography>
                        <Typography
                            sx={{ color: { xs: "white", lg: "gray" }, cursor: "pointer", fontSize: "16px", fontWeight: 600, textAlign: "center" }}
                            onClick={() => navigate("/signup")}
                        >
                            Signup now !
                        </Typography>
                    </Flexbox>

                    <Flexbox sx={{ flexDirection: "column", gap: 1, width: "100%" }}>
                        <Divider orientation='horizontal' sx={{ bgcolor: { xs: "white", lg: "black" }, opacity: "0.3", width: "70%" }} />
                        <Typography sx={{ textAlign: "center", color: { xs: "white", lg: "black" } }}>OR</Typography>
                        <Divider orientation='horizontal' sx={{ bgcolor: { xs: "white", lg: "black" }, opacity: "0.3", width: "70%" }} />
                    </Flexbox>

                </Flexbox >


                <Flexbox sx={{ flexDirection: "column", gap: 1.5, m: "5%", display: { xs: "none", lg: "flex" } }}>

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

                <Flexbox sx={{ gap: 5, m: "10%", display: { xs: "flex", lg: "none" } }}>
                    <Box component="img" src={GithubIcon} sx={{ width: "15%" }} onClick={github} />
                    <Box component="img" src={GoogleIcon} sx={{ width: "15%" }} onClick={google} />
                    <Box component="img" src={SteamIcon} sx={{ width: "15%" }} onClick={steam} />
                </Flexbox>

            </FormContainer>
        </Grid >

    )
}

export default Login