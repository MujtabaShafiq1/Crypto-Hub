import Head from "next/head";
import axios from "axios";

const HomePage = () => {

  const logoutHandler = async () => {
    await axios.get("http://localhost:8000/auth/logout", { withCredentials: true });
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

export default HomePage;
