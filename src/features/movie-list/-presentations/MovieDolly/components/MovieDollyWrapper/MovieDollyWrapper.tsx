"use client";

import sty from "./MovieDollyWrapper.module.css";

import { MouseEvent, PropsWithChildren, useRef, useState } from "react";

const MovieDollyWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!wrapperRef.current) return;
    const slider = wrapperRef.current;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
    setIsDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsDown(false);
    if (!wrapperRef.current) return;
    document.body.style.cursor = "default";
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !wrapperRef.current) return;
    e.preventDefault();
    const slider = wrapperRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };

  return (
    <div
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={sty.moviesWrapper}
    >
      {children}
    </div>
  );
};

export default MovieDollyWrapper;
