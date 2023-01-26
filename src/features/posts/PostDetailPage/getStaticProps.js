import { getPostData } from "../../../shared/helpers/post-util";

const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const fileName = slug + ".md";
  const postData = getPostData(fileName);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export default getStaticProps;
