import { defineStyleConfig } from "@chakra-ui/react";

const InputStyles = defineStyleConfig({
  baseStyle: {
    borderRadius: "4px",
    field: {
      padding: 2,
      width: "100%",
      resize: "none",
      marginBottom: 3,
      _focus: {
        borderColor: "gray.600",
      },
    },
  },
  variants: {
    solid: {
      field: {
        border: "1px solid",
        borderColor: "gray.400",
        backgroundColor: "gray.100",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
});

export { InputStyles };
