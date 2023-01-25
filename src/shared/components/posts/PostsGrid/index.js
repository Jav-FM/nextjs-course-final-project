import PostCard from "../PostCard";
import classes from "./PostsGrid.module.css";

const PostGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts && posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </ul>
  );
};

export default PostGrid;
