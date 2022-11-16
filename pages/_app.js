import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/index.css";

function MyApp({ Component,  ...pageProps }) {
  return (
    <>
      <Head>
        <title>Celetel Assignment</title>
      </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </>
  );
}

export default MyApp;
