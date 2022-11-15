import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/index.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Celetel Assignment</title>
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
