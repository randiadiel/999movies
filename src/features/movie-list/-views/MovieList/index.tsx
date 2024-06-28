import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import MovieList, { MovieListProps } from "./MovieList";
import { discoverMovieFetchOption } from "../../-repositories/discover-movies/useDiscoverMovies";

type MovieListComponentProps = MovieListProps;

const MovieListComponent = async (props: MovieListComponentProps) => {
  const { filters } = props;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(discoverMovieFetchOption(filters));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MovieList {...props} />
    </HydrationBoundary>
  );
};

export default MovieListComponent;
