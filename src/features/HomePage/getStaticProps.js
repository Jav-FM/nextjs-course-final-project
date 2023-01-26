import { getFeaturedPosts } from "../../shared/helpers/post-util";

const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default getStaticProps;
