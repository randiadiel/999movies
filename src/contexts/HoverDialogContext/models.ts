import { MovieTVSnapshotAttributes } from "@/features/movie-list";
import { ImageProps } from "next/image";

export interface CardPositionMetaData extends MovieTVSnapshotAttributes {
  top: number;
  left: number;
  imageProps: ImageProps;
}
