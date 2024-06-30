import { fetchMovieDB } from "@/models";

export const tvDetailFetcher = async (id: number) => {
  return fetchMovieDB(`/tv/${String(id)}`);
};
