import { useMemo, RefObject } from "react";
import { CardPositionMetaData } from "@/contexts/HoverDialogContext/models";
import { CARD_SCALED_WIDTH } from "../constants";

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
    let calculatedLeft = cardLeft - wrapperLeft;

    const viewportWidth = window.innerWidth;

    // Adjust left position to keep dialog within viewport
    if (calculatedLeft + CARD_SCALED_WIDTH > viewportWidth) {
      calculatedLeft = viewportWidth - CARD_SCALED_WIDTH;
    }

    const marginedTop = calculatedTop < 0 ? 80 : calculatedTop;
    const marginedLeft = calculatedLeft < 0 ? 80 : calculatedLeft;

    return {
      top: `${marginedTop}px`,
      left: `${marginedLeft}px`,
    };
  }, [dialogMetaData, globalWrapperRef]);
};

export default useCalculatedPosition;
