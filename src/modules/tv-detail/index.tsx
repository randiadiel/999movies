import { redirect } from "next/navigation";

import { tvDetailFetcher } from "./repositories/tv-detail/movieDetailFetcher";
import { dynamicBlurDataUrl } from "@/utils/dynamicBlurDataUrl";
import TVDetail from "./TVDetail";
import tvDetailAdapter from "./repositories/tv-detail/adapter";
import { QueryClient } from "@tanstack/react-query";
import { seasonDetailFetchOption } from "./repositories/season-detail/useSeasonDetail";

interface TVDetailServerProps {
  id: number;
}

const DEFAULT_FIRST_EPS_NUM = 1;

const TVDetailServer = async (props: TVDetailServerProps) => {
  const { id } = props;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    seasonDetailFetchOption(id, DEFAULT_FIRST_EPS_NUM),
  );

  const data = tvDetailAdapter(await tvDetailFetcher(id));

  if (!data) redirect("/");

  const blurDataUrl = await dynamicBlurDataUrl(data.smallBannerImage);

  return <TVDetail id={id} tv={data} bannerBlurDataUrl={blurDataUrl} />;
};

export default TVDetailServer;
