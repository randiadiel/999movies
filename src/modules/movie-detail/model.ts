export interface MovieGenre {
  id: number;
  name: string;
}

export interface MovieDetailAttribute {
  id: number;
  title: string;
  releaseDate: Date | null;
  genres: MovieGenre[];
  overview: string;
  bannerImage: string;
  smallBannerImage: string;
}
