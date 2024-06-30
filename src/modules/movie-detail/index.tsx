import { redirect } from "next/navigation";

import { movieDetailFetcher } from "./repositories/movie-detail/movieDetailFetcher";
import movieDetailAdapter from "./repositories/movie-detail/adapter";
import { dynamicBlurDataUrl } from "@/utils/dynamicBlurDataUrl";
import MovieDetail from "./MovieDetail";

interface MovieDetailServerProps {
  id: number;
}

const MovieDetailServer = async (props: MovieDetailServerProps) => {
  const { id } = props;

  const data = movieDetailAdapter(await movieDetailFetcher(id));

  if (!data) redirect("/");

  const blurDataUrl = await dynamicBlurDataUrl(data.smallBannerImage);

  return <MovieDetail id={id} movie={data} bannerBlurDataUrl={blurDataUrl} />;
};

export default MovieDetailServer;
