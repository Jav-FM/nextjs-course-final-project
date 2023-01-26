import { getAllPosts } from "../../../shared/helpers/post-util";

const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default getStaticProps;
