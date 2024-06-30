import { fetchMovieDB } from "@/models";

export const seasonDetailFetcher = async (id: number, seasonNum: number) => {
  return fetchMovieDB(`/tv/${id}/season/${seasonNum}`);
};
