import { SeasonEpisodeAttribute } from "../../model";
import { SeasonDetailContract } from "./contract";

const seasonDetailAdapter = (
  data: Partial<SeasonDetailContract> | undefined,
): SeasonEpisodeAttribute[] | undefined => {
  if (data === undefined) return;
  return (data.episodes || []).map((episode) => ({
    id: episode.id,
    title: episode.name,
    airDate: new Date(episode.air_date),
    duration: `${episode.runtime}m`,
    seasonEps: `S${episode.season_number} E${episode.episode_number}`,
    stillImageSrc: `${process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_HOSTNAME}/original${episode.still_path}`,
  }));
};

export default seasonDetailAdapter;
