import Link from "next/link";
import Head from "next/head";

import {
  Flexbox,
  VerticalFlexbox,
  MainContainer,
  FormContainer,
  ResponsiveText,
  BoldText,
} from "../styles/global-components";
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
              <ResponsiveText variant="header" color="static.primary">
                Sign Up
              </ResponsiveText>
              <BoldText variant="mainBody" hide="true">
                Create an account to continue
              </BoldText>
            </VerticalFlexbox>

            <SignupForm />

            <Flexbox sx={{ gap: 1, mb: "5%" }}>
              <ResponsiveText color="static.secondary" hide="true">
                Already a user?
              </ResponsiveText>
              <Link href="/login" style={{ textDecoration: "none" }}>
                <BoldText color="static.secondary" sx={{ cursor: "pointer" }}>
                  Login now !
                </BoldText>
              </Link>
            </Flexbox>
          </VerticalFlexbox>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default Signup;
