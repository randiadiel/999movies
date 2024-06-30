import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { tvDetailFetcher } from "./movieDetailFetcher";
import movieDetailAdapter from "./adapter";
import { TVDetailContract } from "./contract";

export const tvDetailFetchOption = (
  id: number,
): UseQueryOptions<TVDetailContract> => ({
  queryKey: [`tv/details`, id],
  queryFn: async () => tvDetailFetcher(id) as Promise<TVDetailContract>,
  placeholderData: keepPreviousData,
});

const useTvDetails = (id: number) => {
  const { data, ...rest } = useQuery<TVDetailContract>(tvDetailFetchOption(id));

  return { data: movieDetailAdapter(data), ...rest };
};

export default useTvDetails;
