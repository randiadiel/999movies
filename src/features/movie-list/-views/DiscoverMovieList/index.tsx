import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import DiscoverMovieList, { DiscoverMovieListProps } from "./DiscoverMovieList";
import { discoverMovieFetchOption } from "../../-repositories/discover-movies/useDiscoverMovies";

type DiscoverMovieListComponentProps = DiscoverMovieListProps;

const DiscoverMovieListComponent = async (props: DiscoverMovieListComponentProps) => {
  const { filters } = props;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(discoverMovieFetchOption(filters));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DiscoverMovieList {...props} />
    </HydrationBoundary>
  );
};

export default DiscoverMovieListComponent;
