import { fetchMovieDB } from "@/models";
import { flattenCombineArrayOfObjects } from "@/helpers/array/flattenCombineArrayOfObjects";
import { TmdbDiscoverFilters } from "@/features/movie-list/-models/types/filter";

export const movieDiscoverFetcher = async (
  filters?: Array<TmdbDiscoverFilters>
) => {
  return await fetchMovieDB(
    "/discover/movie",
    flattenCombineArrayOfObjects(filters || [])
  );
};

export const tvDiscoverFetcher = async (
  filters?: Array<TmdbDiscoverFilters>
) => {
  return await fetchMovieDB(
    "/discover/tv",
    flattenCombineArrayOfObjects(filters || [])
  );
};
