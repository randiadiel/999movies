import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { movieDiscoverFetcher } from "./fetchers/discoverFetcher";
import { TmdbDiscoverFilters } from "../../-models/types/filter";
import movieListAdapter from "./adapters/movieAdapters";
import { DiscoverMovieContract } from "./contracts";

export const discoverMovieFetchOption = (
  filters: TmdbDiscoverFilters[],
): UseQueryOptions<DiscoverMovieContract> => ({
  queryKey: [`discover/movies`, filters],
  queryFn: async () => movieDiscoverFetcher(filters),
});

const useDiscoverMovies = (filters: TmdbDiscoverFilters[]) => {
  const { data, ...rest } = useQuery<DiscoverMovieContract>(
    discoverMovieFetchOption(filters),
  );

  return { data: movieListAdapter(data), ...rest };
};

export default useDiscoverMovies;
