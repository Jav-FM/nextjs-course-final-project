import AllPosts from "./AllPosts";
import PostGrid from "../../../shared/components/posts/PostsGrid";
import { Box, Heading } from "@chakra-ui/react";

const AllPostsPage = ({ posts }) => {
  return (
    <Box width="90%" maxWidth="80rem" margin="2rem auto">
      <Heading
        as="h2"
        size="3xl"
        textAlign="center"
        marginBottom={5}
        color="gray.600"
      >
        All Posts
      </Heading>
      <PostGrid posts={posts} />
    </Box>
  );
};

export default AllPostsPage;
