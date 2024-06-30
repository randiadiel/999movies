export interface SeasonDetailContract {
  _id: string;
  air_date: string;
  episodes: {
    air_date: string;
    episode_number: number;
    episode_type: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
    crew: {
      id: number;
      credit_id: string;
      name: string;
      department: string;
      job: string;
      profile_path: string | null;
    }[];
    guest_stars: {
      id: number;
      name: string;
      credit_id: string;
      character: string;
      order: number;
      profile_path: string | null;
    }[];
  }[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
}
