"use client";

import { useDeferredValue, useState } from "react";
import { MovieDolly } from "@/features/movie-list";
import SearchMovieList from "@/features/movie-list/-views/SearchMovieList";
import SearchTvList from "@/features/movie-list/-views/SearchTvList/SearchTvList";
import useDebounce from "@/hooks/useDebounce";
import SearchBar from "@/components/SearchBar";
import CenterNotice from "@/components/CenterNotice";

const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const defferedQuery = useDeferredValue(debouncedQuery);

  return (
    <>
      <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
      {query ? (
        <>
          <MovieDolly title="Movie Result">
            <SearchMovieList query={defferedQuery} />
          </MovieDolly>
          <MovieDolly title="TV Result">
            <SearchTvList query={defferedQuery} />
          </MovieDolly>
        </>
      ) : (
        <CenterNotice title="Start Searching your Movie / TV" />
      )}
    </>
  );
};

export default Search;
