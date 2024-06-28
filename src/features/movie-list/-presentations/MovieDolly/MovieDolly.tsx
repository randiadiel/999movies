import { PropsWithChildren } from "react";
import sty from "./MovieDolly.module.css";

interface MovieDollyProps {
  title: string;
}

const MovieDolly = (props: PropsWithChildren<MovieDollyProps>) => {
  const { title, children } = props;

  return (
    <div className={sty.movieDollyContainer}>
      <h3 className={sty.movieDollyTitle}>{title}</h3>
      <div className={sty.moviesWrapper}>{children}</div>
    </div>
  );
};

export default MovieDolly;
