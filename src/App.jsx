// react hook , react
import React from "react";

// react library
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";

// styled-components , Style Files
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

import { darkTheme, lightTheme } from "./theme";

// Components
import Router from "./Router";

export default function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
