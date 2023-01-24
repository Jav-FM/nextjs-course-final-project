import { Fragment } from "react";
import Hero from "./Hero";
import FeaturedPosts from "./FeaturedPosts";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default HomePage;
