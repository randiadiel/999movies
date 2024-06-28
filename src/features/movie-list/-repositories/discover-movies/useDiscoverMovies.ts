import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { movieDiscoverFetcher } from "./fetchers/discoverFetcher";
import { TmdbDiscoverFilters } from "../../-models/types/filter";

export const discoverMovieFetchOption = (
  filters: TmdbDiscoverFilters[]
): UndefinedInitialDataOptions => ({
  queryKey: [`discover/movies`, filters],
  queryFn: async () => movieDiscoverFetcher(filters),
});

const useDiscoverMovies = (filters: TmdbDiscoverFilters[]) => {
  return useQuery(discoverMovieFetchOption(filters));
};

export default useDiscoverMovies;
