import { Fragment } from "react";
import Hero from "./Hero";
import FeaturedPosts from "./FeaturedPosts";

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export default HomePage;
