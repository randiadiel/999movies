import { ImageProps } from "next/image";

export interface MovieSnapshotAttributes {
  posterPath: string;
  backdropPath: string;
  title: string;
  overview: string;
}

export interface MovieTVSnapshot {
  id: number;
  title: string;
  overview: string;
  image: ImageProps;
}