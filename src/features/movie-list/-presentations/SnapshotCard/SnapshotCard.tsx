"use client";

import { MouseEvent, useRef } from "react";
import Image, { ImageProps } from "next/image";
import { useHoverDialogContext } from "@/contexts/HoverDialogContext";
import sty from "./SnapshotCard.module.css";

import useFallbackImage from "@/hooks/useFallbackImage";
import { PLACEHOLDER_DATA_URL } from "./constants";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface SnapshotCardProps {
  id: number;
  image: ImageProps;
  title: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string | StaticImport;
  backdropPath: string | StaticImport;
  itemType: "tv" | "movie";
}

const SnapshotCard = (props: SnapshotCardProps) => {
  const { id, image, title, overview, itemType, ...rest } = props;

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const { fallbackImage, onImageError } = useFallbackImage();
  const { showHoverDialog } = useHoverDialogContext();

  const handleHoverEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { top, left } = e.currentTarget.getBoundingClientRect();
    timeoutRef.current = setTimeout(() => {
      showHoverDialog({
        imageProps: props.image,
        id,
        title,
        overview,
        top,
        left,
        itemType,
        ...rest,
      });
    }, 500);
  };

  const handleHoverLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <Link
      href={`/${itemType}/${id}`}
      onMouseEnter={handleHoverEnter}
      onMouseOutCapture={handleHoverLeave}
    >
      <div>
        <Image
          className={sty.snapshotImage}
          {...image}
          src={fallbackImage || image.src}
          alt={image.alt}
          onError={(e) => {
            if (image.onError) image.onError(e);
            onImageError();
          }}
          placeholder={PLACEHOLDER_DATA_URL}
        />
      </div>
    </Link>
  );
};

export default SnapshotCard;
