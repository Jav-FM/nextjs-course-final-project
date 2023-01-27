import classes from "./AllPosts.module.css";
import PostsGrid from "../../../../shared/components/posts/PostsGrid";

const AllPosts = ({ posts }) => {
  return <PostsGrid posts={posts} />;
};

export default AllPosts;
