import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

// MUI Components
import * as MStyled from "../styles/global-components";

// Components
import ProtectedPage from "../components/HOC/protected-page";
import Layout from "../components/Layout/layout"

const HomePage = () => {
  const router = useRouter();

  const logoutHandler = () => {
    axios.get("http://localhost:8000/auth/logout", { withCredentials: true }).then(() => {
      router.push("/login");
    });
  };

  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name="description" content="Timeline for crypto-hub user" />
      </Head>
      <Layout>
        <MStyled.MainContainer>
          <h1>hello</h1>
          <button onClick={logoutHandler}>logout</button>
        </MStyled.MainContainer>
      </Layout>
    </>
  );
};

// export default ProtectedPage(HomePage);
export default HomePage;
