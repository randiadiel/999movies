"use client";

import Image from "next/image";

import GenreChip from "@/components/GenreChip";
import Flex from "@/utils/ui/Flex";

import sty from "./TVDetail.module.scss";
import { TVDetailAttribute } from "./model";
import { MovieDolly } from "@/features/movie-list";
import { useQueryState } from "@/hooks/useSearchParams";
import useSeasonDetails from "./repositories/season-detail/useSeasonDetail";

interface TVDetailProps {
  id: number;
  bannerBlurDataUrl: string;
  tv: TVDetailAttribute;
}

const TVDetail = (props: TVDetailProps) => {
  const { bannerBlurDataUrl, tv, id } = props;
  const [activeSeasonNum, setActiveSeasonNum] = useQueryState("seasonNum", "1");
  const { data: epsData } = useSeasonDetails(id, Number(activeSeasonNum));

  return (
    <div>
      <div
        className={sty.tvDetailBannerImageContainer}
        style={{ position: "relative", height: "350px" }}
      >
        <Image
          blurDataURL={bannerBlurDataUrl}
          placeholder="blur"
          fill
          className={sty.tvDetailBannerImage}
          src={tv.bannerImage}
          alt={`banner-${tv.title}`}
        />
      </div>
      <div className={sty.tvDetailContentContainer}>
        <h1>{tv.title}</h1>

        <Flex gap="10px">
          {tv.genres.map((genre) => (
            <GenreChip
              key={genre.id}
              backgroundColor="rgb(var(--callout-rgb))"
              name={genre.name}
            />
          ))}
        </Flex>

        <MovieDolly title="">
          {tv.seasons.map((season) => (
            <div
              onClick={() => setActiveSeasonNum(String(season.seasonNumber))}
              style={{
                backgroundColor:
                  String(season.seasonNumber) === activeSeasonNum
                    ? "green"
                    : "rgb(var(--callout-rgb))",
              }}
              className={sty.epsSeasonSelectorChip}
              key={season.id}
            >
              {season.name}
            </div>
          ))}
        </MovieDolly>

        <Flex direction="column" gap="10px">
          {epsData?.map((episode) => (
            <div key={episode.id} className={sty.epsContainer}>
              <Flex>
                <Image
                  className={sty.stillImage}
                  style={{ objectFit: "cover" }}
                  width={150}
                  height={100}
                  src={episode.stillImageSrc}
                  alt={`Still-${episode.title}`}
                />
                <div style={{ padding: "1rem" }}>
                  <h3>{episode.title}</h3>
                  <h4>Airing From: {episode.airDate.toDateString()}</h4>
                  <p>
                    {episode.seasonEps}&nbsp;{episode.duration}&nbsp;
                  </p>
                </div>
              </Flex>
            </div>
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default TVDetail;
