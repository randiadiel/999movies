import { ImageProps } from "next/image";
import { MovieTVSnapshot } from "@/models/types";

export interface CardPositionMetaData extends MovieTVSnapshot {
  top: number;
  left: number;
}
