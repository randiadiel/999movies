import MovieListComponent from "@/components/MovieList";
import sty from "./page.module.css";

export default function Home() {
  return (
    <div className={sty.main}>
      <MovieListComponent />
    </div>
  );
}
