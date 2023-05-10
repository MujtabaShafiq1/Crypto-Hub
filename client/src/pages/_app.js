import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeContextProvider } from "../context/ThemeProvider";
import { wrapper } from "../store/index";
import { getUser } from "../store/authActions";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <ThemeContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default wrapper.withRedux(MyApp);
