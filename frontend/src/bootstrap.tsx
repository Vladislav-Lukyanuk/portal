import React, { FC } from "react";

import { GlobalStyles, ResetGlobalStyles } from "./config/global.styles";
import { RootRouter } from "./pages/rootRouter";

export const Bootstrap: FC = () => (
  <>
    <ResetGlobalStyles />
    <GlobalStyles />
    <RootRouter />
  </>
);
