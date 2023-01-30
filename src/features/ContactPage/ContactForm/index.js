import { useEffect, useState } from "react";
import Notification from "../../../shared/components/Notification";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      } else {
        setRequestStatus("success");
        setEmail("");
        setName("");
        setMessage("");
      }
    } catch (e) {
      setRequestError(e.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  useEffect(() => {
    if (requestStatus !== "pending") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  return (
    <Box
      marginY="4"
      marginX="auto"
      borderRadius="6px"
      backgroundColor="gray.200"
      width="90%"
      maxWidth="50rem"
      padding="10"
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.2)"
    >
      <Heading
        as="h1"
        size={["xl", "3xl"]}
        marginY="2"
        textAlign={["left", "center"]}
        mb={8}
      >
        How can I help you?
      </Heading>
      <form onSubmit={sendMessageHandler}>
        <Flex columnGap="1rem" flexWrap="wrap">
          <Box flex="1" minWidth="10rem">
            <FormControl isRequired>
              <FormLabel>Your Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
          </Box>
          <Box flex="1" minWidth="10rem">
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </FormControl>
          </Box>
        </Flex>
        <Box flex="1" minWidth="10rem">
          <FormControl isRequired>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              rows="6"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></Textarea>
          </FormControl>
        </Box>
        <Box textAlign="right">
          <Button mt={6} isLoading={requestStatus === "pending"} type="submit">
            Send Message
          </Button>
        </Box>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Box>
  );
};

export default ContactForm;
