/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./src/components/global/GlobalStyles";
import Theme from "./src/components/global/variables";

export const wrapRootElement = ({ element }) => {
  <ThemeProvider theme={Theme}><GlobalStyle/>{element}</ThemeProvider>;
};
