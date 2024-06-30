import { StaticImageData } from "next/image";

export interface MovieTVSnapshotAttributes {
  id: number;
  posterPath: string | StaticImageData;
  backdropPath: string | StaticImageData;
  title: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
}
