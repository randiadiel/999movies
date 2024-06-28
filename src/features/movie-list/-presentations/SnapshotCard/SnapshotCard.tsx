"use client";

import Image, { ImageProps } from "next/image";
import sty from "./SnapshotCard.module.css";
import { MouseEvent, useRef } from "react";
import { useHoverDialogContext } from "@/contexts/HoverDialogContext";

interface SnapshotCardProps {
  id: number;
  image: ImageProps;
  title: string;
  overview: string;
}

const SnapshotCard = (props: SnapshotCardProps) => {
  const { id, image, title, overview } = props;

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
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
      <Image className={sty.snapshotImage} {...image} alt={image.alt} />
    </div>
  );
};

export default SnapshotCard;
