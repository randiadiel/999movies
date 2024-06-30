import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { searchMovieFetchOption } from "@/features/movie-list/-repositories/search-movies/useSearchMovies";
import Search from "./Search";
import { searchTvFetchOption } from "@/features/movie-list/-repositories/search-movies/useSearchTv";

interface SearchServerProps {
  searchParams: Record<string, string>;
}

const SearchServer = async (props: SearchServerProps) => {
  const { searchParams } = props;
  const searchQuery = searchParams?.["query"] || "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(searchMovieFetchOption(searchQuery));
  await queryClient.prefetchQuery(searchTvFetchOption(searchQuery));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Search searchParams={searchParams} />
    </HydrationBoundary>
  );
};

export default SearchServer;
