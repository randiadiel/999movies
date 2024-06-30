"use client";

import { SnapshotCard } from "../..";
import useSearchTv from "../../-repositories/search-movies/useSearchTv";

interface SearchTvListProps {
  query: string;
}

const SearchTvList = (props: SearchTvListProps) => {
  const { query } = props;
  const { data, isLoading, isInitialLoading } = useSearchTv(query) as {
    data: { results: [{ poster_path: string }] };
    isLoading: boolean;
    isInitialLoading: boolean;
  };

  if (!data?.results.length && !isLoading && query)
    return <>No Movie with Keyword {query} Found</>;

  return (
    <>
      {data?.results?.map((tv: any) => (
        <SnapshotCard
          key={tv.id}
          image={{
            width: 150,
            height: 250,
            src: tv.poster_path
              ? `https://image.tmdb.org/t/p/original${tv.poster_path}`
              : "",
            alt: "poster",
          }}
          id={tv.id}
          title={tv.original_name}
          overview={tv.overview}
        />
      ))}
    </>
  );
};

export default SearchTvList;
