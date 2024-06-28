"use client";

import { SnapshotCard } from "../..";
import { TmdbDiscoverFilters } from "../../-models/types/filter";
import { useDiscoverMovies } from "../../-repositories/discover-movies";

export interface MovieListProps {
  filters: TmdbDiscoverFilters[];
}

const MovieList = (props: MovieListProps) => {
  const { filters } = props;
  const { data } = useDiscoverMovies(filters) as {
    data: { results: [{ poster_path: string }] };
  };

  return (
    <>
      {data?.results?.map((movie: any) => (
        <SnapshotCard
          key={movie.poster_path}
          width={150}
          height={250}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
        />
      ))}
    </>
  );
};

export default MovieList;
