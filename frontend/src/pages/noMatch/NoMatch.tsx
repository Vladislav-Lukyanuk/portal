import React, { FC } from "react";

import {
  DescriptionTextStyled,
  ErrorContainerStyled,
  HttpCodeStyled,
  ImageStyled,
  MoMatchContainerStyled,
  PageContainerStyled,
} from "./noMatch.style";

const HTTP_CODE = "404";
const DESCRIPTION = "Oops... Your content is not a found";

export const NoMatch: FC = () => (
  <PageContainerStyled>
    <MoMatchContainerStyled>
      <ImageStyled />
      <ErrorContainerStyled>
        <HttpCodeStyled>{HTTP_CODE}</HttpCodeStyled>
        <DescriptionTextStyled>{DESCRIPTION}</DescriptionTextStyled>
      </ErrorContainerStyled>
    </MoMatchContainerStyled>
  </PageContainerStyled>
);
