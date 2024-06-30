import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { searchTvFetcher } from "./fetchers/searchFetcher";
import { TvSearchResultContract } from "./constracts";
import searchTvAdapter from "./adapters/searchTvAdapter";

export const searchTvFetchOption = (
  query: string,
): UseQueryOptions<TvSearchResultContract> => ({
  queryKey: [`search/tvs`, query],
  queryFn: async () => searchTvFetcher(query),
  placeholderData: keepPreviousData,
  enabled: Boolean(query),
});

const useSearchTv = (query: string) => {
  const { data, ...rest } = useQuery<TvSearchResultContract>(
    searchTvFetchOption(query),
  );
  return { data: searchTvAdapter(data), ...rest };
};

export default useSearchTv;
