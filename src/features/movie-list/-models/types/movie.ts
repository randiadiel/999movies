import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface MovieTVSnapshotAttributes {
  id: number;
  posterPath: string | StaticImport;
  backdropPath: string | StaticImport;
  title: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
}
