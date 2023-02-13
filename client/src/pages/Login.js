import { useNavigate } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import { Flexbox, MainContainer, FormContainer, StyledButton } from "../misc/MUIComponents";
import LoginForm from "../components/Forms/LoginForm";

import GithubIcon from "../assets/SocialIcons/github.png";
import GoogleIcon from "../assets/SocialIcons/google.png";
import SteamIcon from "../assets/SocialIcons/steam.png";

const Login = () => {
    const navigate = useNavigate();

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
        <MainContainer container>
            <FormContainer>
                <Flexbox sx={{ flexDirection: "column", gap: { xs: 1.5, lg: 3 } }}>
                    <Flexbox sx={{ flexDirection: "column" }}>
                        <Typography variant="header" sx={{ fontWeight: 500 }}>
                            Welcome
                        </Typography>
                        <Typography variant="body" sx={{ fontWeight: 500, color: "gray" }}>
                            login to continue
                        </Typography>
                    </Flexbox>

                    <LoginForm />

                    <Flexbox gap={1} flexDirection={{ xs: "column", lg: "row" }}>
                        <Typography variant="body">Dont have an account? </Typography>
                        <Typography
                            variant="subBody"
                            sx={{ color: { xs: "white", lg: "gray" }, cursor: "pointer", fontWeight: 500 }}
                            onClick={() => navigate("/signup")}>
                            Signup now !
                        </Typography>
                    </Flexbox>

                    <Flexbox sx={{ flexDirection: "column", gap: 1, width: "70%" }}>
                        <Divider orientation="horizontal" sx={{ bgcolor: { xs: "white", lg: "black" }, opacity: "0.3", width: "100%" }} />
                        <Typography variant="helper" sx={{ color: { xs: "white", lg: "black" } }}>
                            OR
                        </Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: { xs: "white", lg: "black" }, opacity: "0.3", width: "100%" }} />
                    </Flexbox>
                </Flexbox>

                <Flexbox sx={{ flexDirection: "column", gap: 1.5, m: "5%", display: { xs: "none", lg: "flex" } }}>
                    <StyledButton onClick={github}>
                        <Box component="img" src={GithubIcon} sx={{ width: "8%" }} />
                        <Typography>Github</Typography>
                    </StyledButton>

                    <StyledButton onClick={google}>
                        <Box component="img" src={GoogleIcon} sx={{ width: "8%" }} />
                        <Typography>Google</Typography>
                    </StyledButton>

                    <StyledButton onClick={steam}>
                        <Box component="img" src={SteamIcon} sx={{ width: "8%" }} />
                        <Typography>Steam</Typography>
                    </StyledButton>
                </Flexbox>

                <Flexbox sx={{ gap: 5, m: "10%", display: { xs: "flex", lg: "none" } }}>
                    <Box component="img" src={GithubIcon} sx={{ width: { xs: "15%", md: "11%" } }} onClick={github} />
                    <Box component="img" src={GoogleIcon} sx={{ width: { xs: "15%", md: "11%" } }} onClick={google} />
                    <Box component="img" src={SteamIcon} sx={{ width: { xs: "15%", md: "11%" } }} onClick={steam} />
                </Flexbox>
            </FormContainer>
        </MainContainer>
    );
};

export default Login;
