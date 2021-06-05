import React, {FC, MutableRefObject, useEffect, useRef} from "react";

import { useDimensions } from "../../hooks/useDimensions";

import { setCameraAspect } from "./camera";
import { setRendererSize, mountRenderer } from "./renderer";

import { GALAXY_ID } from "./constants";

import { GalaxyWrapperStyled } from "./galaxy.styles";

function resize(width: number, height: number) {
  setCameraAspect(width, height);
  setRendererSize(width, height);
}

export const Galaxy: FC = () => {
  const containerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const containerDimensions = useDimensions(containerRef);

  useEffect(() => {
    mountRenderer();
  }, []);

  useEffect(() => {
    if (!containerDimensions) {
      return;
    }

    resize(containerDimensions.width, containerDimensions.height);
  }, [containerDimensions.width, containerDimensions.height]);

  return (
    <GalaxyWrapperStyled ref={containerRef}>
      <div id={GALAXY_ID} />
    </GalaxyWrapperStyled>
  );
};
