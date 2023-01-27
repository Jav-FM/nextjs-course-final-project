import { Box, Heading } from "@chakra-ui/react";
import PostGrid from "../../../shared/components/posts/PostsGrid";

const FeaturedPosts = ({ posts }) => {
  return (
    <Box width="90%" maxWidth="80rem" margin="2rem auto">
      <Heading
        as="h2"
        size="3xl"
        textAlign="center"
        marginBottom={5}
        color="gray.600"
      >
        Featured Posts
      </Heading>
      <PostGrid posts={posts} />
    </Box>
  );
};

export default FeaturedPosts;
