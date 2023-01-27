import Head from "next/head";
import { Fragment } from "react";
import PostContent from "./PostContent";

const PostDetailPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export default PostDetailPage;
