import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "./AllPosts";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export default AllPostsPage;
