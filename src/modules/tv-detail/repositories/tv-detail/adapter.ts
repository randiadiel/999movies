import { TVDetailAttribute } from "../../model";
import { TVDetailContract } from "./contract";

const tvDetailAdapter = (
  data: Partial<TVDetailContract> | undefined,
): TVDetailAttribute | undefined => {
  if (data === undefined) return;
  return {
    title: data.original_name ? String(data.original_name) : "No Title",
    genres: (data.genres || []).map((genre) => ({
      id: genre.id || -1,
      name: genre.name || "Unknown Genre",
    })),
    id: Number(data.id),
    bannerImage: `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${data.backdrop_path || data.poster_path}`,
    smallBannerImage: `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/w200${data.backdrop_path || data.poster_path}`,
    seasons: (data.seasons || []).map((season) => ({
      id: season.id,
      name: season.name || `Season ${season.season_number}`,
      seasonNumber: season.season_number,
    })),
  };
};

export default tvDetailAdapter;
