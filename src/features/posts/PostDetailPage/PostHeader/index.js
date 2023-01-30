import { Flex, Heading } from "@chakra-ui/react";
import CustomImage from "../../../../shared/components/CustomImage";

const PostHeader = ({ title, image }) => {
  return (
    <Flex
      pb={8}
      borderBottom="8px solid"
      borderColor="gray.500"
      my={5}
      flexDir={["column-reverse", "row"]}
      justifyContent="space-between"
      alignItems={["center", "flex-end"]}
      textAlign={["center", "left"]}
      gap="1rem"
    >
      <Heading size={["xl", "xl", "3xl"]}>{title}</Heading>
      <CustomImage src={image} alt={title} width={200} height={150} />
    </Flex>
  );
};

export default PostHeader;
