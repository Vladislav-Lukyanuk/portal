import React, { MutableRefObject, useEffect, useRef } from "react";

import { useWidth } from "../../hooks/useWidth";

import { setCameraAspect } from "./camera";
import { setRendererSize, mountRenderer } from "./renderer";

import { GALAXY_ID, VIEW_HEIGHT } from "./constants";

// TODO: предусмортреть динамическое изменение размеров экрана
function init(width: number, height: number) {
  setCameraAspect(width, height);
  setRendererSize(width, height);
}

export const Galaxy = () => {
  const containerRef =
    useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const containerWidth = useWidth(containerRef);

  useEffect(() => {
    mountRenderer();
  }, []);

  useEffect(() => {
    if (!containerWidth) {
      return;
    }

    init(containerWidth, VIEW_HEIGHT);
  }, [containerWidth]);

  return (
    <div ref={containerRef}>
      <div id={GALAXY_ID} />
    </div>
  );
};
