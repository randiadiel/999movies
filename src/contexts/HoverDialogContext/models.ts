import { MovieTVSnapshot } from "@/features/movie-list/-models/types/movie";

export interface CardPositionMetaData extends MovieTVSnapshot {
  top: number;
  left: number;
}
