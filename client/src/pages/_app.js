import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContextProvider } from "../context/ThemeProvider";
import { wrapper } from "../store/index";
import { getUser } from "../store/authActions";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUser())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
