import { getPostsFiles } from "../../../shared/helpers/post-util";

const getStaticPaths = () => {
  const postsFiles = getPostsFiles();
  const paths = postsFiles.map((postfile) => {
    const slug = postfile.replace(/\.md$/, "");
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default getStaticPaths;
