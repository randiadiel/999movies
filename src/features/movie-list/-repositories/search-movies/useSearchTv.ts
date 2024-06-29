import { UndefinedInitialDataOptions, keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchTvFetcher } from "./fetchers/searchFetcher";


export const searchTvFetchOption = (
  query: string
): UndefinedInitialDataOptions => ({
  queryKey: [`search/tvs`, query],
  queryFn: async () => searchTvFetcher(query),
  placeholderData: keepPreviousData,
});

const useSearchTv = (query: string) => {
  return useQuery(searchTvFetchOption(query));
};

export default useSearchTv;
