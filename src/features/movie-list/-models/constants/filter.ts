import { TmdbDiscoverFilters } from "../types/filter";

export const TOP_RATED_FILTER: TmdbDiscoverFilters = {
  sort_by: "vote_average.desc",
  "vote_count.gte": 500,
};

export const TOP_RATED_OF_RANGE_DATE_FILTER = (
  start: Date,
  end: Date,
): TmdbDiscoverFilters => {
  const startDateIso = start.toISOString().split("T")[0];
  const endDateIso = end.toISOString().split("T")[0];
  return {
    "primary_release_date.gte": `${startDateIso}`,
    "primary_release_date.lte": `${endDateIso}`,
    sort_by: "vote_average.desc",
    "vote_count.gte": 10,
  };
};
