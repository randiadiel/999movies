"use client";

import { DiscoverMovieTvList, MovieDolly } from "@/features/movie-list";
import { MovieTVSnapshotAttributes } from "@/features/movie-list/-models/types/movie";

interface HomeProps {
  topMovieTv: MovieTVSnapshotAttributes[] | undefined;
  topMovieWeek: MovieTVSnapshotAttributes[] | undefined;
  topTvWeek: MovieTVSnapshotAttributes[] | undefined;
}

const Home = (props: HomeProps) => {
  const { topTvWeek, topMovieTv, topMovieWeek } = props;
  return (
    <div>
      {topMovieTv && (
        <MovieDolly title="Top Rated Movies & TV Series">
          <DiscoverMovieTvList list={topMovieTv} />
        </MovieDolly>
      )}
      {topMovieWeek && (
        <MovieDolly title="Top Rated Movie of the week">
          <DiscoverMovieTvList list={topMovieWeek} />
        </MovieDolly>
      )}
      {topTvWeek && (
        <MovieDolly title="Top Rated TV Series of the week">
          <DiscoverMovieTvList list={topTvWeek} />
        </MovieDolly>
      )}
    </div>
  );
};

export default Home;
