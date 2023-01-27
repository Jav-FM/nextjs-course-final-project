import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "../styles/charkaTheme";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript />
        <Main />
        <NextScript />
        <div id="notifications"></div>
      </body>
    </Html>
  );
}
