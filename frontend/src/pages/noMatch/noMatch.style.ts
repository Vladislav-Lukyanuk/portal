import styled from "styled-components";

import logoSrc from "../../assets/images/logo.png";
import { H1, H4 } from "../../typography";

export const ImageStyled = styled.img.attrs({
  src: logoSrc,
})`
  width: 31.25rem;
  height: 12.5rem;
`;

export const ErrorContainerStyled = styled.div`
  > * + * {
    margin-top: 1rem;
  }
`;

export const HttpCodeStyled = styled(H1).attrs(({ theme }) => ({
  color: theme.colors.secondary[30],
}))`
  text-align: center;
`;

export const DescriptionTextStyled = styled(H4).attrs(({ theme }) => ({
  color: theme.colors.secondary[30],
}))`
  text-align: center;
`;

export const MoMatchContainerStyled = styled.div``;

export const PageContainerStyled = styled.div`
  position: fixed;

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;
