import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { tvDiscoverFetcher } from "./fetchers/discoverFetcher";
import { TmdbDiscoverFilters } from "../../-models/types/filter";

export const discoverTVFetchOption = (
  filters: TmdbDiscoverFilters[]
): UndefinedInitialDataOptions => ({
  queryKey: [`discover/tv`, filters],
  queryFn: async () => tvDiscoverFetcher(filters),
});

const useDiscoverMovies = (filters: TmdbDiscoverFilters[]) => {
  return useQuery(discoverTVFetchOption(filters));
};

export default useDiscoverMovies;
