import { extendTheme } from "@chakra-ui/react";
import mainTheme from "../../tokens/main.json";
import mainThemeDark from "../../tokens/main-dark.json";

const fonts = {
  heading: "Oswald",
  mono: "Roboto",
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const main = { light: {}, dark: {} };

main.light = extendTheme({
  colors: {
    ...mainTheme.color,
  },
  fonts,
  radii: {
    ...mainTheme.borderRadius,
  },
  config,
  breakpoints,
  styles: {
    global: {
      "html, body": {
        background: "#fff",
      },
    },
  },
  //   components: {
  //     Button,
  //   },
});

main.dark = extendTheme({
  colors: {
    ...mainThemeDark.color,
  },
  fonts,
  radii: {
    ...mainThemeDark.borderRadius,
  },
  config,
  breakpoints,
  styles: {
    global: {
      "html, body": {
        background: "#000",
      },
    },
  },
  //   components: {
  //     Button,
  //   },
});

export const theme = { main };
