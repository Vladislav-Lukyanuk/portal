import React, { FC } from "react";
import { GlobalStyle } from "../config/global.styles";

import { HomePage } from "./home";

export const RootRouter: FC = () => (
  <>
    <GlobalStyle />
    <HomePage />
  </>
);
