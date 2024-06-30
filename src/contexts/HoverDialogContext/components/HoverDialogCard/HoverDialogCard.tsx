import React, { RefObject, useRef } from "react";
import Image from "next/image";

import { useWatchlist } from "@/contexts/WatchlistContext";

import useButtonHover from "./hooks/useButtonHover";
import useCalculatedPosition from "./hooks/useCalculatedPosition";
import sty from "./HoverDialogCard.module.scss";

import { CardPositionMetaData } from "../../models";
import useFallbackImage from "@/hooks/useFallbackImage";
import Link from "next/link";

interface HoverDialogCardProps {
  dialogMetaData: CardPositionMetaData;
  globalWrapperRef: RefObject<HTMLDivElement>;
  setDialogMetaData: (data: CardPositionMetaData | null) => void;
}

const HoverDialogCard = (props: HoverDialogCardProps) => {
  const { dialogMetaData, globalWrapperRef, setDialogMetaData } = props;
  const hoverDialogRef = useRef<HTMLDivElement>(null);
  const { fallbackImage, onImageError } = useFallbackImage();

  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const isThisInWatchlist = isInWatchlist(dialogMetaData.id);

  const { isHovered, handleMouseEnter, handleMouseLeave } = useButtonHover();

  const calculatedPosition = useCalculatedPosition(
    dialogMetaData,
    globalWrapperRef,
  );

  const closeDialog = () => {
    setDialogMetaData(null);
  };

  const isHoveredText = isHovered
    ? "Remove from Watchlist?"
    : "Added To Watchlist";

  return (
    <div
      ref={hoverDialogRef}
      onMouseLeave={closeDialog}
      style={{ ...calculatedPosition }}
      className={sty.dialogContainer}
    >
      <Link
        className={sty.anchorLink}
        onClick={closeDialog}
        href={`/${dialogMetaData.itemType}/${dialogMetaData.id}`}
      >
        <Image
          {...dialogMetaData.imageProps}
          src={fallbackImage || dialogMetaData.imageProps.src}
          alt={"dialog-focus-trap"}
          onError={(e) => {
            if (dialogMetaData.imageProps.onError)
              dialogMetaData.imageProps.onError(e);
            onImageError();
          }}
        />
      </Link>
      <div className={sty.dialogContent}>
        <h4>{dialogMetaData.title}</h4>
        <p>{dialogMetaData.overview}</p>
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() =>
            isThisInWatchlist
              ? removeFromWatchlist(dialogMetaData.id)
              : addToWatchlist(dialogMetaData)
          }
          className={`${sty.watchlistButton} ${
            isThisInWatchlist ? sty.watchlistButtonActive : ""
          }`}
        >
          {isThisInWatchlist ? isHoveredText : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default HoverDialogCard;
