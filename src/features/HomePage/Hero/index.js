import { Flex, Heading, Text } from "@chakra-ui/react";

import CustomImage from "../../../shared/components/CustomImage";

const Hero = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      paddingY={30}
      backgroundColor={"gray.600"}
    >
      <CustomImage
        src="/images/site/javs-profile-image.jpg"
        alt="Image showing Jav"
        width={300}
        height={300}
        borderRadius="full"
      />
      <Heading
        as="h1"
        size="3xl"
        noOfLines={1}
        marginTop={8}
        color={"gray.400"}
      >
        Hi! I'm Jav
      </Heading>
      <Text
        fontSize={["lg", "lg", "2xl"]}
        maxWidth={["30rem", "30rem", "40rem"]}
        textAlign={"center"}
        marginTop={8}
        color={"gray.400"}
      >
        I blog about web development - especially frontend frameworks like
        ReactJS.
      </Text>
    </Flex>
  );
};

export default Hero;
