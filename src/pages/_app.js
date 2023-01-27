import "../styles/globals.css";
import Layout from "../shared/components/Layout";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/charkaTheme";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  return (
    <ChakraProvider theme={theme.main[mode]}>
      <Layout>
        <Head>
          <meta name="viewport" content="with=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
