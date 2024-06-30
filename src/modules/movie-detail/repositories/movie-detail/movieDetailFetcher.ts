import { fetchMovieDB } from "@/models";

export const movieDetailFetcher = async (id: number) => {
  return fetchMovieDB(`/movie/${String(id)}`);
};
