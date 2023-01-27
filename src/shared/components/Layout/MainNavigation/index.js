import Link from "next/link";
import Logo from "../Logo";
import { Flex, Text } from "@chakra-ui/react";

const MainNavigation = () => {
  return (
    <Flex
      width={"100%"}
      height="6rem"
      backgroundColor={"gray.600"}
      justifyContent="space-between"
      alignItems="center"
      paddingX="10%"
    >
      <Link href="/">
        <Logo />
      </Link>
      <Flex>
        <Link href="/posts">
          <Text fontSize={["s", "s", "xl"]} marginX={4} color={"gray.100"}>
            Posts
          </Text>
        </Link>

        <Link href="/contact">
          <Text fontSize={["s", "s", "xl"]} marginX={4} color={"gray.100"}>
            Contact
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default MainNavigation;
