import { Flex } from "@chakra-ui/react";
import PostCard from "../PostCard";

const PostGrid = ({ posts }) => {
  return (
    <Flex flexWrap="wrap" justify="flex-start" justifyContent="space-evenly">
      {posts && posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </Flex>
  );
};

export default PostGrid;
