"use client";

import { SnapshotCard } from "../..";
import { TmdbDiscoverFilters } from "../../-models/types/filter";
import { useDiscoverTv } from "../../-repositories/discover-movies";

export interface MovieListProps {
  filters: TmdbDiscoverFilters[];
}

const MovieList = (props: MovieListProps) => {
  const { filters } = props;
  const { data } = useDiscoverTv(filters) as {
    data: { results: [{ poster_path: string }] };
  };

  return (
    <>
      {data?.results?.map((movie: any) => (
        <SnapshotCard
          key={movie.poster_path}
          width={150}
          height={250}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt="poster"
        />
      ))}
    </>
  );
};

export default MovieList;
