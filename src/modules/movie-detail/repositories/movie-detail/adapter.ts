import { MovieDetailAttribute } from "../../model";
import { MovieDetailContract } from "./contract";

const movieDetailAdapter = (
  data: Partial<MovieDetailContract> | undefined,
): MovieDetailAttribute | undefined => {
  if (data === undefined) return;
  return {
    title: String(data.original_title) || "No Title",
    genres: (data.genres || []).map((genre) => ({
      id: genre.id || -1,
      name: genre.name || "Unknown Genre",
    })),
    id: Number(data.id),
    overview: String(data.overview || ""),
    releaseDate: data.release_date ? new Date(data.release_date) : null,
    bannerImage: `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${data.backdrop_path}`,
    smallBannerImage: `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/w200${data.backdrop_path}`,
  };
};

export default movieDetailAdapter;
