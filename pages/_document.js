/** @format */

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://ka-f.fontawesome.com/releases/v6.0.0/css/pro.min.css"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Celetel Front End Assignment" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="overflow-y-scroll scrollbar-hide">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
