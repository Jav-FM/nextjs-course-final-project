import { defineStyleConfig } from "@chakra-ui/react";

const TextareaStyles = defineStyleConfig({
  baseStyle: {
    borderRadius: "4px",
    padding: "2",
    width: "100%",
    resize: "none",
    _focus: {
      borderColor: "gray.600",
    },
  },
  variants: {
    solid: {
      border: "1px solid",
      borderColor: "gray.400",
      backgroundColor: "gray.100",
    },
  },
  defaultProps: {
    variant: "solid",
  },
});

export { TextareaStyles };
