import Link from "next/link";
import Head from "next/head";

// MUI Components
import * as MStyled from "../styles/global-components";
import * as Styled from "../styles/pages-components/signup-components";

// Components
import SignupForm from "../components/Forms/signup-form";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Crypto Hub Signup" />
      </Head>
      <MStyled.MainContainer container>
        <Styled.SignUpFormContainer>
          <MStyled.VerticalFlexbox sx={{ gap: { xs: 1.5, lg: 3 } }}>
            <MStyled.VerticalFlexbox sx={{ padding: "5px", gap: 1 }}>
              <MStyled.CenterTextBold variant="header" color="static.primary">
                Sign Up
              </MStyled.CenterTextBold>
              <MStyled.CenterTextBold variant="mainBody" color="static.other">
                Create an account to continue
              </MStyled.CenterTextBold>
            </MStyled.VerticalFlexbox>

            <SignupForm />

            <Styled.LoginTextContainer>
              <MStyled.ResponsiveText color="static.secondary" hide="true">Already a user?</MStyled.ResponsiveText>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <MStyled.BoldText color="static.other" sx={{ cursor: "pointer" }}>
                  Login now !
                </MStyled.BoldText>
              </Link>
            </Styled.LoginTextContainer>
          </MStyled.VerticalFlexbox>
        </Styled.SignUpFormContainer>
      </MStyled.MainContainer>
    </>
  );
};

export default Signup;
