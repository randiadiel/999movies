import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { discoverTVFetchOption } from "../../-repositories/discover-movies/useDiscoverTv";
import DiscoverTvList, { DiscoverTvListProps } from "./DiscoverTvList";

type DiscoverTvListComponentProps = DiscoverTvListProps;

const DiscoverTvListComponent = async (props: DiscoverTvListComponentProps) => {
  const { filters } = props;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(discoverTVFetchOption(filters));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DiscoverTvList {...props} />
    </HydrationBoundary>
  );
};

export default DiscoverTvListComponent;
