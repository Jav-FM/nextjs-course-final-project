import { extendTheme } from "@chakra-ui/react";
import mainTheme from "../../tokens/main.json";
import mainThemeDark from "../../tokens/main-dark.json";
import { InputStyles as Input } from "./componentStyles/InputStyles";
import { TextareaStyles as Textarea } from "./componentStyles/TextareaStyles";
import { FormStyles as Form } from "./componentStyles/FormStyles";
import { ButtonStyles as Button } from "./componentStyles/ButtonStyles";

const fonts = {
  heading: "Oswald",
  mono: "Roboto",
};

// const fontSizes: {
//   xs: "0.75rem",
//   sm: "0.875rem",
//   md: "1rem",
//   lg: "1.125rem",
//   xl: "1.25rem",
//   "2xl": "1.5rem",
//   "3xl": "1.875rem",
//   "4xl": "2.25rem",
//   "5xl": "3rem",
//   "6xl": "3.75rem",
//   "7xl": "4.5rem",
//   "8xl": "6rem",
//   "9xl": "8rem",
// },
// const fontWeights: {
//   hairline: 100,
//   thin: 200,
//   light: 300,
//   normal: 400,
//   medium: 500,
//   semibold: 600,
//   bold: 700,
//   extrabold: 800,
//   black: 900,
// },

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const components = {
  Input,
  Textarea,
  Form,
  Button,
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
  // fontSizes,
  // fontWeights,
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
  components,
});

main.dark = extendTheme({
  colors: {
    ...mainThemeDark.color,
  },
  fonts,
  // fontSizes,
  // fontWeights,
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
  components,
});

export const theme = { main };
