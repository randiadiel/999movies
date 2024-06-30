import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { seasonDetailFetcher } from "./seasonDetailFetcher";
import movieDetailAdapter from "./adapter";
import { SeasonDetailContract } from "./contract";

export const seasonDetailFetchOption = (
  id: number,
  seasonNum: number,
): UseQueryOptions<SeasonDetailContract> => ({
  queryKey: [`tv/details/season/details`, id, seasonNum],
  queryFn: async () =>
    seasonDetailFetcher(id, seasonNum) as Promise<SeasonDetailContract>,
  placeholderData: keepPreviousData,
});

const useSeasonDetails = (id: number, seasonNum: number) => {
  const { data, ...rest } = useQuery<SeasonDetailContract>(
    seasonDetailFetchOption(id, seasonNum),
  );

  return { data: movieDetailAdapter(data), ...rest };
};

export default useSeasonDetails;
