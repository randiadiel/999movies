import { PropsWithChildren } from "react";
import sty from "./MovieDolly.module.css";
import MovieDollyWrapper from "./components/MovieDollyWrapper";

interface MovieDollyProps {
  title: string;
}

const MovieDolly = (props: PropsWithChildren<MovieDollyProps>) => {
  const { title, children } = props;

  return (
    <div className={sty.movieDollyContainer}>
      <h3 className={sty.movieDollyTitle}>{title}</h3>
      <MovieDollyWrapper>{children}</MovieDollyWrapper>
    </div>
  );
};

export default MovieDolly;
