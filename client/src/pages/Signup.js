import Link from "next/link";
import Head from "next/head";

import {
  Flexbox,
  VerticalFlexbox,
  MainContainer,
  FormContainer,
  HeaderText,
  BodyText,
  SubText,
} from "../styles/MUI-components";
import SignupForm from "../components/Forms/SignupForm";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Crypto Hub Signup" />
      </Head>
      <MainContainer container>
        <FormContainer>
          <VerticalFlexbox sx={{ gap: { xs: 1, md: 3 } }}>
            <VerticalFlexbox sx={{ padding: "5px", gap: 1 }}>
              <HeaderText sx={{ color: "black" }}>Sign Up</HeaderText>
              <BodyText
                sx={{ fontWeight: 500, color: "gray", display: { xs: "none", md: "block" } }}>
                Create an account to continue
              </BodyText>
            </VerticalFlexbox>

            <SignupForm />

            <Flexbox sx={{ gap: 1, mb: "5%" }}>
              <SubText sx={{ color: "white", display: { xs: "none", md: "block" } }}>
                Already a user?
              </SubText>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <SubText sx={{ color: "white", cursor: "pointer", fontWeight: 500 }}>
                  Login now !
                </SubText>
              </Link>
            </Flexbox>
          </VerticalFlexbox>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default Signup;
