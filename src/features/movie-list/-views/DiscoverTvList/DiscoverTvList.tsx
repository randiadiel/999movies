"use client";

import { SnapshotCard } from "../..";
import { TmdbDiscoverFilters } from "../../-models/types/filter";
import { useDiscoverTv } from "../../-repositories/discover-movies";

export interface DiscoverTvListProps {
  filters: TmdbDiscoverFilters[];
}

const DiscoverTvList = (props: DiscoverTvListProps) => {
  const { filters } = props;
  const { data } = useDiscoverTv(filters) as {
    data: { results: [{ poster_path: string }] };
  };

  return (
    <>
      {data?.results?.map((movie: any) => (
        <SnapshotCard
          key={movie.poster_path}
          image={{
            width: 150,
            height: 250,
            src: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            alt: "poster",
          }}
          id={movie.id}
          title={movie.original_name}
          overview={movie.overview}
        />
      ))}
    </>
  );
};

export default DiscoverTvList;
