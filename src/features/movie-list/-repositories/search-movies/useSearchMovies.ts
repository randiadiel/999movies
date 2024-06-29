import {
  UndefinedInitialDataOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { searchMovieFetcher } from "./fetchers/searchFetcher";

export const searchMovieFetchOption = (
  query: string,
): UndefinedInitialDataOptions => ({
  queryKey: [`search/movies`, query],
  queryFn: async () => searchMovieFetcher(query),
  placeholderData: keepPreviousData,
});

const useSearchMovies = (query: string) => {
  return useQuery(searchMovieFetchOption(query));
};

export default useSearchMovies;
