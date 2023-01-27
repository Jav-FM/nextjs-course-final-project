import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <Box>{children}</Box>
    </Fragment>
  );
};

export default Layout;
