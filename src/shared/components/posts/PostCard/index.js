import Link from "next/link";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CustomImage from "../../CustomImage";

const PostCard = ({ post }) => {
  const { title, image, date, description, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <Flex
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.2)"
      backgroundColor="gray.700"
      flexDirection="column"
      alignItems="center"
      width={["100%", "100%", "48%", "48%", "32%"]}
      height="auto"
      marginBottom="4"
    >
      <Link href={linkPath}>
        <Box position="relative" width="100%" height="20rem">
          <CustomImage
            src={imagePath}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </Box>

        <Box width="100%" textAlign="center" padding="18px">
          <Heading size={"md"} color="gray.100" marginBottom="10px">
            {title}
          </Heading>
          <Text as="em" color="gray.400">
            {formattedDate}
          </Text>
          <Text color="gray.300">{description}</Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default PostCard;
