import { RefObject, useCallback, useEffect, useState } from "react";

type TDimensions = {
  width: number;
  height: number;
};

const INITIAL_DIMENSIONS: TDimensions = {
  width: 0,
  height: 0,
};

export const useDimensions = (ref: RefObject<HTMLElement>): TDimensions => {
  const [dimensions, setDimensions] = useState(INITIAL_DIMENSIONS);
  const [resizeNumber, setResizeNumber] = useState(0);
  const clientWidth = ref.current?.clientWidth || 0;
  const clientHeight = ref.current?.clientHeight || 0;

  const handleResize = useCallback(() => {
    setResizeNumber((resizeNumber) => {
      if (resizeNumber === Number.MAX_VALUE) {
        return 0;
      }

      return ++resizeNumber;
    });
  }, [setResizeNumber]);

  useEffect(() => {
    const localDimensions = {
      width: clientWidth,
      height: clientHeight,
    };

    setDimensions(localDimensions);
  }, [resizeNumber, clientWidth, clientHeight]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
};
