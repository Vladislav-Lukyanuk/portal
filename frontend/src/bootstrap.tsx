import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, ResetGlobalStyles } from "config/global.styles";

import { RootRouter } from "pages/rootRouter";

import { theme } from "./theme";

export const Bootstrap: FC = () => (
  <>
    <ResetGlobalStyles />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <RootRouter />
    </ThemeProvider>
  </>
);
