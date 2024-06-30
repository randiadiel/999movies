import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { movieDetailFetcher } from "./movieDetailFetcher";
import movieDetailAdapter from "./adapter";
import { MovieDetailContract } from "./contract";

export const movieDetailFetchOption = (
  id: number,
): UseQueryOptions<MovieDetailContract> => ({
  queryKey: [`movie/details`, id],
  queryFn: async () => movieDetailFetcher(id) as Promise<MovieDetailContract>,
  placeholderData: keepPreviousData,
});

const useMovieDetails = (id: number) => {
  const { data, ...rest } = useQuery<MovieDetailContract>(
    movieDetailFetchOption(id),
  );

  return { data: movieDetailAdapter(data), ...rest };
};

export default useMovieDetails;
