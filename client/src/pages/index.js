import Head from "next/head";
import axios from "axios";
import ProtectedPage from "../components/HOC/ProtectedPage";

const HomePage = () => {

  const logoutHandler = async () => {
    console.log("logging out")
    // await axios.get("http://localhost:8000/auth/logout", { withCredentials: true });
  };

  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name="description" content="Timeline for crypto-hub user" />
      </Head>
      <h1>hello</h1>
      <button onClick={logoutHandler}>logout</button>
    </>
  );
};

export default ProtectedPage(HomePage);