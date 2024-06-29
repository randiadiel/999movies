import { createContext, useContext, useState, ReactNode, useRef } from "react";

import { CardPositionMetaData } from "./models";
import HoverDialogCard from "./components/HoverDialogCard/HoverDialogCard";

interface HoverDialogContextProps {
  showHoverDialog: (s: CardPositionMetaData) => void;
}

const HoverDialogContext = createContext<HoverDialogContextProps | undefined>(
  undefined,
);

const HoverDialogProvider = ({ children }: { children: ReactNode }) => {
  const [dialogMetaData, setDialogMetaData] =
    useState<CardPositionMetaData | null>(null);

  const globalWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <HoverDialogContext.Provider value={{ showHoverDialog: setDialogMetaData }}>
      <div style={{ position: "relative" }} ref={globalWrapperRef}>
        {dialogMetaData && (
          <HoverDialogCard
            dialogMetaData={dialogMetaData}
            globalWrapperRef={globalWrapperRef}
            setDialogMetaData={setDialogMetaData}
          />
        )}
        {children}
      </div>
    </HoverDialogContext.Provider>
  );
};

const useHoverDialogContext = () => {
  const context = useContext(HoverDialogContext);
  if (context === undefined) {
    throw new Error(
      "useHoverDialogContext must be used within an HoverDialogProvider",
    );
  }
  return context;
};

export { HoverDialogContext, HoverDialogProvider, useHoverDialogContext };
