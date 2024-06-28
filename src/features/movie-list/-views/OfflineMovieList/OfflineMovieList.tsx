"use client";

import { useWatchlist } from "@/contexts/WatchlistContext";
import SnapshotCard from "../../-presentations/SnapshotCard";

const WatchlistMovieList = () => {
  const { watchlist } = useWatchlist();

  return (
    <>
      {watchlist.map((movie) => (
        <SnapshotCard key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default WatchlistMovieList;
