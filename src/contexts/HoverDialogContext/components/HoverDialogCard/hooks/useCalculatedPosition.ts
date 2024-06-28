import { useMemo, RefObject } from "react";
import { CardPositionMetaData } from "@/contexts/HoverDialogContext/models";

const useCalculatedPosition = (
  dialogMetaData: CardPositionMetaData,
  globalWrapperRef: RefObject<HTMLDivElement>
) => {
  return useMemo(() => {
    if (!dialogMetaData || !globalWrapperRef.current) return null;
    const { top: wrapperTop, left: wrapperLeft } =
      globalWrapperRef.current.getBoundingClientRect();
    const { top: cardTop, left: cardLeft } = dialogMetaData;

    const calculatedTop = cardTop - wrapperTop;
    const calculatedLeft = cardLeft - wrapperLeft;

    const marginedTop = calculatedTop < 0 ? 10 : calculatedTop;
    const marginedLeft = calculatedLeft < 0 ? 10 : calculatedLeft;

    return {
      top: `${marginedTop}px`,
      left: `${marginedLeft}px`,
    };
  }, [dialogMetaData, globalWrapperRef]);
};

export default useCalculatedPosition;
