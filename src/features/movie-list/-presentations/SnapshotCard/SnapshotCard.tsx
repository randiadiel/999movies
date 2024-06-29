"use client";

import { MouseEvent, useRef, useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { useHoverDialogContext } from "@/contexts/HoverDialogContext";
import sty from "./SnapshotCard.module.css";

import PosterPlaceholder from "./assets/poster-placeholder.png";
import useFallbackImage from "@/hooks/useFallbackImage";

interface SnapshotCardProps {
  id: number;
  image: ImageProps;
  title: string;
  overview: string;
}

const SnapshotCard = (props: SnapshotCardProps) => {
  const { id, image, title, overview } = props;

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const { fallbackImage, onImageError } = useFallbackImage();
  const { showHoverDialog } = useHoverDialogContext();

  const handleHoverEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { top, left } = e.currentTarget.getBoundingClientRect();
    timeoutRef.current = setTimeout(() => {
      showHoverDialog({ image: props.image, id, title, overview, top, left });
    }, 500);
  };

  const handleHoverLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      <Image
        className={sty.snapshotImage}
        {...image}
        src={fallbackImage || image.src}
        alt={image.alt}
        onError={(e) => {
          if (image.onError) image.onError(e);
          onImageError();
        }}
      />
    </div>
  );
};

export default SnapshotCard;
