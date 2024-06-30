import MovieDetail from "@/modules/movie-detail";

interface MovieDetailPageParams {
  id: number;
}

interface MovieDetailPageProps {
  params: MovieDetailPageParams;
}

const MovieDetailPage = (props: MovieDetailPageProps) => {
  const { params } = props;
  return <MovieDetail id={params.id} />;
};

export default MovieDetailPage;
