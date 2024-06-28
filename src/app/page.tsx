import {
  MovieDolly,
  MovieList,
  TOP_RATED_FILTER,
  TOP_RATED_OF_RANGE_DATE_FILTER,
  TVList,
} from "@/features/movie-list";

export default function Home() {
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  return (
    <div>
      <MovieDolly title="Top Rated Movies & TV Series">
        <MovieList filters={[TOP_RATED_FILTER]} />
      </MovieDolly>
      <MovieDolly title="Top Rated Movie of the week">
        <MovieList
          filters={[TOP_RATED_OF_RANGE_DATE_FILTER(lastWeek, today)]}
        />
      </MovieDolly>
      <MovieDolly title="Top Rated TV Series of the week">
        <TVList filters={[TOP_RATED_OF_RANGE_DATE_FILTER(lastWeek, today)]} />
      </MovieDolly>
    </div>
  );
}
