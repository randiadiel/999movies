"use client";

import { useDeferredValue } from "react";
import {
  DiscoverMovieTvList,
  MovieDolly,
  useSearchMovies,
  useSearchTv,
} from "@/features/movie-list";
import useDebounce from "@/hooks/useDebounce";
import { useQueryState } from "@/hooks/useSearchParams";
import SearchBar from "@/components/SearchBar";
import CenterNotice from "@/components/CenterNotice";

export interface SearchProps {
  searchParams: Record<string, string>;
}

const Search = (props: SearchProps) => {
  const { searchParams } = props;
  const [query, setQuery] = useQueryState("query", searchParams?.query || "");
  const debouncedQuery = useDebounce(query, 500);
  const defferedQuery = useDeferredValue(debouncedQuery);

  const { data: tvData } = useSearchTv(defferedQuery);
  const { data: movieData } = useSearchMovies(defferedQuery);

  return (
    <>
      <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
      {query ? (
        <>
          {movieData && (
            <MovieDolly title="Movie Result">
              <DiscoverMovieTvList list={movieData} />
            </MovieDolly>
          )}
          {tvData && (
            <MovieDolly title="TV Result">
              <DiscoverMovieTvList list={tvData} />
            </MovieDolly>
          )}
        </>
      ) : (
        <CenterNotice title="Start Searching your Movie / TV" />
      )}
    </>
  );
};

export default Search;
