"use client";

import { useWatchlist } from "@/contexts/WatchlistContext";
import { DiscoverMovieTvList, MovieDolly } from "@/features/movie-list";

const WatchList = () => {
  const { watchlist } = useWatchlist();

  return (
    <div>
      <MovieDolly title="Your Watchlist">
        <DiscoverMovieTvList list={watchlist} />
      </MovieDolly>
    </div>
  );
};

export default WatchList;
