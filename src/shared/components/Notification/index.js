import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Notification(props) {
  const { title, message, status } = props;
  const [bgColor, setBgColor] = useState("gray.400");

  useEffect(() => {
    if (status === "success") {
      setBgColor("green.400");
    } else if (status === "error") {
      setBgColor("red.400");
    } else {
      setBgColor("gray.400");
    }
  }, [status]);

  return createPortal(
    <Flex
      backgroundColor={bgColor}
      justifyContent="space-between"
      alignItems="center"
      padding="7"
      boxShadow="0 1px 8px rgba(0, 0, 0, 0.2)"
      position="fixed"
      bottom="0"
      left={["0", "calc(50% - 20rem)"]}
      width={["100%", "40rem"]}
      height="5rem"
      borderTopRightRadius={["0", "6px"]}
      borderTopLeftRadius={["0", "6px"]}
    >
      <Heading as={"h2"} size="lg">
        {title}
      </Heading>
      <Text>{message}</Text>
    </Flex>,
    document.getElementById("notifications")
  );
}

export default Notification;
