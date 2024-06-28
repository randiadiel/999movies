import { ImageProps } from "next/image";

export interface MovieTVSnapshot {
  id: number;
  title: string;
  overview: string;
  image: ImageProps;
}
