import { SnapshotCard } from "../..";
import { MovieTVSnapshotAttributes } from "../../-models/types/movie";

export interface DiscoverMovieTvListProps {
  list: MovieTVSnapshotAttributes[];
}

const DiscoverMovieTvList = (props: DiscoverMovieTvListProps) => {
  const { list } = props;

  return (
    <>
      {list?.map((movie) => (
        <SnapshotCard
          key={movie.id}
          image={{
            width: 150,
            height: 250,
            src: movie.posterPath,
            alt: `Poster of ${movie.title}`,
          }}
          id={movie.id}
          title={movie.title}
          overview={movie.overview}
          itemType="movie"
          backdropPath={movie.backdropPath}
          posterPath={movie.posterPath}
          voteAverage={movie.voteAverage}
          voteCount={movie.voteCount}
        />
      ))}
    </>
  );
};

export default DiscoverMovieTvList;
