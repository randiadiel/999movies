import { MovieTVSnapshot } from "@/models/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface WatchlistContextProps {
  watchlist: MovieTVSnapshot[];
  addToWatchlist: (movie: MovieTVSnapshot) => void;
  removeFromWatchlist: (movieId: number) => void;
  isInWatchlist: (movieId: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextProps | undefined>(
  undefined
);

const WATCHLIST_KEY = "999movies_watchlist";

const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<MovieTVSnapshot[]>();

  useEffect(() => {
    try {
      const storedWatchlist = localStorage.getItem(WATCHLIST_KEY);
      if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
      }
    } catch (error) {
      setWatchlist([]);
    }
  }, []);

  useEffect(() => {
    if (watchlist !== null)
      localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie: MovieTVSnapshot) => {
    setWatchlist((prev = []) => [...prev, movie]);
  };

  const removeFromWatchlist = (movieId: number) => {
    setWatchlist((prev = []) => prev.filter((movie) => movie.id !== movieId));
  };

  const isInWatchlist = (movieId: number) => {
    return (watchlist || []).some((movie) => movie.id === movieId);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist: watchlist || [],
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
};

export { WatchlistProvider, useWatchlist };
