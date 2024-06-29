"use client";

import { useWatchlist } from "@/contexts/WatchlistContext";
import { MovieDolly } from "@/features/movie-list";
import SnapshotCardList from "@/features/movie-list/-presentations/SnapshotCardList/SnapshotCardList";

const WatchList = () => {
  const { watchlist } = useWatchlist();

  return (
    <div>
      <MovieDolly title="Your Watchlist">
        <SnapshotCardList list={watchlist} />
      </MovieDolly>
    </div>
  );
};

export default WatchList;
