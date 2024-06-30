import { MovieTVSnapshotAttributes } from "@/features/movie-list/-models/types/movie";
import PosterPlaceholder from "@/assets/poster-placeholder.png";

import { DiscoverTVContract } from "../contracts";

const tvListAdapter = (
  data: Partial<DiscoverTVContract> | undefined,
): MovieTVSnapshotAttributes[] | undefined => {
  if (data === undefined) return;
  return data.results?.map((result) => ({
    id: result.id,
    title: result.original_name || "No Title",
    backdropPath:
      `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${result.backdrop_path}` ||
      PosterPlaceholder,
    posterPath:
      `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${result.poster_path}` ||
      PosterPlaceholder,
    overview: result.overview,
    voteAverage: result.vote_average || 0,
    voteCount: result.vote_count || 0,
  }));
};

export default tvListAdapter;
