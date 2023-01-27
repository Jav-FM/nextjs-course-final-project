import "../styles/globals.css";
import Layout from "../shared/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="with=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
