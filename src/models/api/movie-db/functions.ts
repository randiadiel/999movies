import { objectToSearchParams } from "@/utils/url";

export const fetchMovieDB = async (
  path: `/${string}`,
  queryString?: Record<string, unknown>,
  options?: RequestInit,
) => {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_MOVIE_DB_API_HOSTNAME}${path}`,
  );
  objectToSearchParams(url.searchParams, queryString);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_READ_ACCESS_TOKEN}`,
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
