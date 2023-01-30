import { defineStyleConfig } from "@chakra-ui/react";

const FormStyles = defineStyleConfig({
  parts: ["container", "requiredIndicator", "helperText"],
  baseStyle: {
    container: {
      label: {
        fontFamily: "Oswald",
        fontSize: "2xl",
      },
    },
  },
});

export { FormStyles };
