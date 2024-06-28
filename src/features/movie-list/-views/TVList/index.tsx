import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { discoverTVFetchOption } from "../../-repositories/discover-movies/useDiscoverTv";
import MovieList, { MovieListProps } from "./TVList";

type MovieListComponentProps = MovieListProps;

const MovieListComponent = async (props: MovieListComponentProps) => {
  const { filters } = props;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(discoverTVFetchOption(filters));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieList {...props} />
    </HydrationBoundary>
  );
};

export default MovieListComponent;
