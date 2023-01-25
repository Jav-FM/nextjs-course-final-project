import { Fragment } from "react";
import Hero from "./Hero";
import FeaturedPosts from "./FeaturedPosts";

const HomePage = () => {
  const dummyPosts = [
    {
      title: "Dummy post",
      image: "dummy-post.png",
      date: "2023-01-24",
      description:
        "This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post. This is a dummy post.",
      slug: "dummy-post",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummyPosts} />
    </Fragment>
  );
};

export default HomePage;
