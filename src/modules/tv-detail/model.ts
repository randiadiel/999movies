export interface TVDetailGenre {
  id: number;
  name: string;
}

export interface TVDetailSeason {
  id: number;
  seasonNumber: number;
  name: string;
}

export interface TVDetailAttribute {
  id: number;
  title: string;
  genres: TVDetailGenre[];
  bannerImage: string;
  smallBannerImage: string;
  seasons: TVDetailSeason[];
}

export interface SeasonEpisodeAttribute {
  id: number;
  title: string;
  seasonEps: string;
  airDate: Date;
  duration: string;
  stillImageSrc: string;
}
