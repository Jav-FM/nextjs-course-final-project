import { Fragment } from "react";
import Hero from "./Hero";
import FeaturedPosts from "./FeaturedPosts";
import Head from "next/head";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Jav's Blog</title>
        <meta
          name="description"
          content="I post about programing and post development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export default HomePage;
