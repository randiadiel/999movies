import {
  MovieDolly,
  DiscoverMovieList,
  TOP_RATED_FILTER,
  TOP_RATED_OF_RANGE_DATE_FILTER,
  DiscoverTvList,
} from "@/features/movie-list";

export default function Home() {
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  return (
    <div>
      <MovieDolly title="Top Rated Movies & TV Series">
        <DiscoverMovieList filters={[TOP_RATED_FILTER]} />
      </MovieDolly>
      <MovieDolly title="Top Rated Movie of the week">
        <DiscoverMovieList
          filters={[TOP_RATED_OF_RANGE_DATE_FILTER(lastWeek, today)]}
        />
      </MovieDolly>
      <MovieDolly title="Top Rated TV Series of the week">
        <DiscoverTvList filters={[TOP_RATED_OF_RANGE_DATE_FILTER(lastWeek, today)]} />
      </MovieDolly>
    </div>
  );
}
