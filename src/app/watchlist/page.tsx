import { MovieDolly } from "@/features/movie-list";
import WatchlistMovieList from "@/features/movie-list/-views/OfflineMovieList/OfflineMovieList";

const WatchList = () => {
  return (
    <div>
      <MovieDolly title="Your Watchlist">
        <WatchlistMovieList />
      </MovieDolly>
    </div>
  );
};

export default WatchList;
