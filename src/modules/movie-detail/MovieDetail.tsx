"use client";

import Image from "next/image";

import GenreChip from "@/components/GenreChip";
import Flex from "@/utils/ui/Flex";

import sty from "./MovieDetail.module.scss";
import { MovieDetailAttribute } from "./model";

interface MovieDetailProps {
  id: number;
  bannerBlurDataUrl: string;
  movie: MovieDetailAttribute;
}

const MovieDetail = (props: MovieDetailProps) => {
  const { bannerBlurDataUrl, movie } = props;

  return (
    <div>
      <div
        className={sty.movieDetailBannerImageContainer}
        style={{ position: "relative", height: "350px" }}
      >
        <Image
          blurDataURL={bannerBlurDataUrl}
          placeholder="blur"
          fill
          className={sty.movieDetailBannerImage}
          src={movie.bannerImage}
          alt={`banner-${movie.title}`}
        />
      </div>
      <div className={sty.movieDetailContentContainer}>
        <h1>{movie.title}</h1>

        <Flex gap="10px">
          {movie.genres.map((genre) => (
            <GenreChip
              key={genre.id}
              backgroundColor="rgb(var(--callout-rgb))"
              name={genre.name}
            />
          ))}
        </Flex>
        <h5 className={sty.releaseDate}>
          Released at: {movie.releaseDate?.toDateString()}
        </h5>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
