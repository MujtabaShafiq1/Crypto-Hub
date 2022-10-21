import { Box, Divider, Typography, Grid, Container } from "@mui/material"
import LoginForm from "../components/Forms/LoginForm"
import { Flexbox, SocialButton } from "../misc/MUIComponents"

import GithubIcon from "../assets/github.png"
import GoogleIcon from "../assets/google.png"
import SteamIcon from "../assets/steam.png"


const Login = () => {

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
            style={{ height: "100vh" }}
        >

            <Container
                sx={{
                    bgcolor: "white",
                    minHeight: '55vh',
                    width: { lg: "25%", md: "40%", xs: "60%" },
                    borderRadius: "10px",
                    boxShadow: "10px 10px 5px rgba(180, 180, 180, 0.5)"
                }}
            >

                <LoginForm />
                <Divider orientation='horizontal' sx={{ bgcolor: "black", opacity: "0.1" }} />
                <Flexbox sx={{ flexDirection: "column", gap: 1.5, m: "5%" }}>
                    <SocialButton onClick={github} sx={{ bgcolor: "black" }}>
                        <Box component="img" src={GithubIcon} sx={{ width: "8%" }} />
                        <Typography>Github</Typography>
                    </SocialButton>
                    <SocialButton onClick={google} sx={{ bgcolor: "red" }}>
                        <Box component="img" src={GoogleIcon} sx={{ width: "8%" }} />
                        <Typography>Google</Typography>
                    </SocialButton>
                    <SocialButton onClick={steam} sx={{ bgcolor: "black" }}>
                        <Box component="img" src={SteamIcon} sx={{ width: "8%" }} />
                        <Typography>Steam</Typography>
                    </SocialButton>
                </Flexbox>

            </Container>
        </Grid >

    )
}

export default Login