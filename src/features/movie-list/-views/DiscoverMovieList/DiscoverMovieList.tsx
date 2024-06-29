"use client";

import { SnapshotCard } from "../..";
import { TmdbDiscoverFilters } from "../../-models/types/filter";
import { useDiscoverMovies } from "../../-repositories/discover-movies";

export interface DiscoverMovieListProps {
  filters: TmdbDiscoverFilters[];
}

const DiscoverMovieList = (props: DiscoverMovieListProps) => {
  const { filters } = props;
  const { data } = useDiscoverMovies(filters) as {
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
          title={movie.title}
          overview={movie.overview}
        />
      ))}
    </>
  );
};

export default DiscoverMovieList;
