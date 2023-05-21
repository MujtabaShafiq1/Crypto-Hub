import Link from "next/link";
import Head from "next/head";

// MUI Components
import * as MStyled from "../styles/global-components";
import * as Styled from "../styles/pages-components/login-components";

// Components
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
      <MStyled.MainContainer container>
        <Styled.LoginFormContainer>
          <MStyled.VerticalFlexbox sx={{ gap: { xs: 1.5, lg: 3 } }}>
            <MStyled.VerticalFlexbox sx={{ padding: "5px", gap: 1 }}>
              <MStyled.CenterTextBold variant="header" color="static.primary">
                Welcome
              </MStyled.CenterTextBold>
              <MStyled.CenterTextBold variant="mainBody" color="static.other">
                login to continue
              </MStyled.CenterTextBold>
            </MStyled.VerticalFlexbox>

            <LoginForm />

            <Styled.SignUpTextContainer>
              <MStyled.ResponsiveText hide="true">Dont have an account?</MStyled.ResponsiveText>
              <Link href="/signup" style={{ textDecoration: "none" }}>
                <MStyled.BoldText color="static.other" sx={{ cursor: "pointer" }}>
                  Signup now !
                </MStyled.BoldText>
              </Link>
            </Styled.SignUpTextContainer>

            <Styled.DividerContainer>
              <Styled.HorizontalDivider orientation="horizontal" />
              <MStyled.ResponsiveText variant="body" color="static.primary">
                OR
              </MStyled.ResponsiveText>
              <Styled.HorizontalDivider orientation="horizontal" />
            </Styled.DividerContainer>
          </MStyled.VerticalFlexbox>

          <Styled.ImagesContainer>
            <div>
              <Styled.ImageBox component="img" src="/assets/SocialIcons/github.png" onClick={github} />
              <MStyled.ResponsiveText color="static.secondary" hide="true">
                Github
              </MStyled.ResponsiveText>
            </div>
            <div>
              <Styled.ImageBox component="img" src="/assets/SocialIcons/google.png" onClick={google} />
              <MStyled.ResponsiveText color="static.secondary" hide="true">
                Google
              </MStyled.ResponsiveText>
            </div>
            <div>
              <Styled.ImageBox component="img" src="/assets/SocialIcons/steam.png" onClick={steam} />
              <MStyled.ResponsiveText color="static.secondary" hide="true">
                Steam
              </MStyled.ResponsiveText>
            </div>
          </Styled.ImagesContainer>
        </Styled.LoginFormContainer>
      </MStyled.MainContainer>
    </>
  );
};

export default LoginPage;
