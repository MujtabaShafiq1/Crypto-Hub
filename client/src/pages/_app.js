import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "../context/ThemeProvider";
import { wrapper, store } from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
