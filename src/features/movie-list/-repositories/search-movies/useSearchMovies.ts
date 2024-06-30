import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { searchMovieFetcher } from "./fetchers/searchFetcher";
import searchMovieAdapter from "./adapters/searchMoviesAdapter";
import { MovieSearchResultContract } from "./constracts";

export const searchMovieFetchOption = (
  query: string,
): UseQueryOptions<MovieSearchResultContract> => ({
  queryKey: [`search/movies`, query],
  queryFn: async () => searchMovieFetcher(query),
  placeholderData: keepPreviousData,
  enabled: Boolean(query),
});

const useSearchMovies = (query: string) => {
  const { data, ...rest } = useQuery<MovieSearchResultContract>(
    searchMovieFetchOption(query),
  );
  return { data: searchMovieAdapter(data), ...rest };
};

export default useSearchMovies;
