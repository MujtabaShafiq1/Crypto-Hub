import Head from "next/head";
import ProtectedPage from "../components/HOC/ProtectedPage";
import { useRouter } from "next/router";
import axios from "axios";

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
      <h1>hello</h1>
      <button onClick={logoutHandler}>logout</button>
    </>
  );
};

export default ProtectedPage(HomePage);
