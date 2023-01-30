import { defineStyleConfig } from "@chakra-ui/react";

const ButtonStyles = defineStyleConfig({
  baseStyle: {
    borderRadius: "4px",
    padding: 6,
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
  },
  sizes: {
    md: {
      fontSize: "md",
    },
    lg: {
      fontSize: "lg",
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "gray.600",
      color: "gray.100",
      _hover: {
        bg: "gray.500",
      },
    },
  },
  defaultProps: {
    size: "lg",
    varian: "solid",
  },
});

export { ButtonStyles };
