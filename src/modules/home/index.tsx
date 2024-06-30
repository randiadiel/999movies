import {
  movieDiscoverFetcher,
  tvDiscoverFetcher,
} from "@/features/movie-list/-repositories/discover-movies/fetchers/discoverFetcher";
import Home from "./Home";
import {
  TOP_RATED_FILTER,
  TOP_RATED_OF_RANGE_DATE_FILTER,
} from "@/features/movie-list";
import movieListAdapter from "@/features/movie-list/-repositories/discover-movies/adapters/movieAdapters";
import tvListAdapter from "@/features/movie-list/-repositories/discover-movies/adapters/tvAdapters";

const HomeServer = async () => {
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  const topMovie = movieListAdapter(
    await movieDiscoverFetcher([TOP_RATED_FILTER]),
  );
  const topTv = tvListAdapter(await tvDiscoverFetcher([TOP_RATED_FILTER]));

  const topMovieWeek = movieListAdapter(
    await movieDiscoverFetcher([
      TOP_RATED_OF_RANGE_DATE_FILTER(today, lastWeek),
    ]),
  );
  const topTvWeek = tvListAdapter(
    await tvDiscoverFetcher([TOP_RATED_OF_RANGE_DATE_FILTER(today, lastWeek)]),
  );

  const topMovieTv = [...(topMovie || []), ...(topTv || [])];
  topMovieTv.sort(
    (a, b) => b.voteAverage - a.voteAverage || b.voteCount - a.voteCount,
  );

  return (
    <Home
      topMovieWeek={topMovieWeek}
      topTvWeek={topTvWeek}
      topMovieTv={topMovieTv}
    />
  );
};

export default HomeServer;
