export interface TmdbDiscoverFilters extends Record<string, unknown> {
  language?: string; // ISO 639-1 value
  region?: string; // ISO 3166-1 value
  sort_by?:
    | "popularity.asc"
    | "popularity.desc"
    | "release_date.asc"
    | "release_date.desc"
    | "revenue.asc"
    | "revenue.desc"
    | "primary_release_date.asc"
    | "primary_release_date.desc"
    | "original_title.asc"
    | "original_title.desc"
    | "vote_average.asc"
    | "vote_average.desc"
    | "vote_count.asc"
    | "vote_count.desc";
  certification_country?: string;
  certification?: string;
  "certification.lte"?: string;
  "certification.gte"?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
  primary_release_year?: number;
  "primary_release_date.gte"?: string; // Date in format YYYY-MM-DD
  "primary_release_date.lte"?: string; // Date in format YYYY-MM-DD
  "release_date.gte"?: string; // Date in format YYYY-MM-DD
  "release_date.lte"?: string; // Date in format YYYY-MM-DD
  with_release_type?: number; // Bitfield value
  year?: number;
  "vote_count.gte"?: number;
  "vote_count.lte"?: number;
  "vote_average.gte"?: number;
  "vote_average.lte"?: number;
  with_cast?: string; // Comma separated person IDs
  with_crew?: string; // Comma separated person IDs
  with_people?: string; // Comma separated person IDs
  with_companies?: string; // Comma separated company IDs
  with_genres?: string; // Comma separated genre IDs
  without_genres?: string; // Comma separated genre IDs
  with_keywords?: string; // Comma separated keyword IDs
  without_keywords?: string; // Comma separated keyword IDs
  "with_runtime.gte"?: number;
  "with_runtime.lte"?: number;
  with_original_language?: string; // ISO 639-1 value
  with_watch_providers?: string; // Comma separated watch provider IDs
  watch_region?: string; // ISO 3166-1 value
  with_watch_monetization_types?: "flatrate" | "free" | "ads" | "rent" | "buy";
}
