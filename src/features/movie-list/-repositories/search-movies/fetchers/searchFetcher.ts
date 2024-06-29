import { fetchMovieDB } from "@/models";

export const searchMovieFetcher =  async (
    query?: string
  ) => {
    return fetchMovieDB(
      "/search/movie",
      {query}
    );
  };

export const searchTvFetcher =  async (
    query?: string
  ) => {
    return fetchMovieDB(
      "/search/tv",
      {query}
    );
  };