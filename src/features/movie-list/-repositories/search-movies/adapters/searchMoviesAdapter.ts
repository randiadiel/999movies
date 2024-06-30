import { MovieTVSnapshotAttributes } from "@/features/movie-list/-models/types/movie";
import PosterPlaceholder from "@/assets/poster-placeholder.png";
import { MovieSearchResultContract } from "../constracts";

const searchMovieAdapter = (
  data: Partial<MovieSearchResultContract> | undefined,
): MovieTVSnapshotAttributes[] | undefined => {
  if (data === undefined) return;
  return (data?.results || []).map((result) => ({
    id: result.id,
    title: result.title || "No Title",
    backdropPath:
      `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${result.backdrop_path}` ||
      PosterPlaceholder,
    posterPath:
      `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${result.poster_path}` ||
      PosterPlaceholder,
    overview: result.overview,
    voteAverage: result.vote_average || 0,
    voteCount: result.vote_count || 0,
    itemType: "movie",
  }));
};

export default searchMovieAdapter;
