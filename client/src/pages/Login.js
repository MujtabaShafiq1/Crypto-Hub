import Link from "next/link";
import Head from "next/head";

import { Box, Divider } from "@mui/material";
import {
  Flexbox,
  VerticalFlexbox,
  MainContainer,
  FormContainer,
  StyledButton,
  HeaderText,
  BodyText,
  SubText,
  HelperText,
} from "../styles/MUI-components";
import LoginForm from "../components/Forms/LoginForm";

const LoginPage = () => {
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
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Crypto Hub Login" />
      </Head>
      <MainContainer container>
        <FormContainer>
          <VerticalFlexbox sx={{ gap: { xs: 1.5, lg: 3 } }}>
            <VerticalFlexbox sx={{ padding: "5px" }}>
              <HeaderText sx={{ color: "black" }}>Welcome</HeaderText>
              <BodyText sx={{ fontWeight: 500, color: "gray" }}>login to continue</BodyText>
            </VerticalFlexbox>

            <LoginForm />

            <VerticalFlexbox sx={{ gap: 1, flexDirection: { lg: "row" } }}>
              <SubText sx={{ display: { xs: "none", md: "block" } }}>
                Dont have an account?{" "}
              </SubText>
              <Link href="/signup" style={{ textDecoration: "none" }}>
                <SubText
                  sx={{ color: { xs: "white", lg: "gray" }, cursor: "pointer", fontWeight: 500 }}>
                  Signup now !
                </SubText>
              </Link>
            </VerticalFlexbox>

            <VerticalFlexbox sx={{ gap: 1, width: "70%" }}>
              <Divider
                orientation="horizontal"
                sx={{ bgcolor: { xs: "white", lg: "black" }, opacity: "0.3", width: "100%" }}
              />
              <HelperText sx={{ color: { xs: "white", lg: "black" } }}>OR</HelperText>
              <Divider
                orientation="horizontal"
                sx={{ bgcolor: { xs: "white", lg: "black" }, opacity: "0.3", width: "100%" }}
              />
            </VerticalFlexbox>
          </VerticalFlexbox>

          <VerticalFlexbox sx={{ gap: 1.5, m: "5%", display: { xs: "none", lg: "flex" } }}>
            <StyledButton onClick={github}>
              <Box component="img" src="/assets/SocialIcons/github.png" sx={{ width: "8%" }} />
              <SubText sx={{ color: "white" }}>Github</SubText>
            </StyledButton>

            <StyledButton onClick={google}>
              <Box component="img" src="/assets/SocialIcons/google.png" sx={{ width: "8%" }} />
              <SubText sx={{ color: "white" }}>Google</SubText>
            </StyledButton>

            <StyledButton onClick={steam}>
              <Box component="img" src="/assets/SocialIcons/steam.png" sx={{ width: "8%" }} />
              <SubText sx={{ color: "white" }}>Steam</SubText>
            </StyledButton>
          </VerticalFlexbox>

          <Flexbox sx={{ gap: 5, m: "10%", display: { lg: "none" } }}>
            <Box
              component="img"
              src="/assets/SocialIcons/github.png"
              sx={{ width: { xs: "15%", md: "11%" } }}
              onClick={github}
            />
            <Box
              component="img"
              src="/assets/SocialIcons/google.png"
              sx={{ width: { xs: "15%", md: "11%" } }}
              onClick={google}
            />
            <Box
              component="img"
              src="/assets/SocialIcons/steam.png"
              sx={{ width: { xs: "15%", md: "11%" } }}
              onClick={steam}
            />
          </Flexbox>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default LoginPage;
