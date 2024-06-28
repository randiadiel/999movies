const objectToSearchParams = (
  url: URL,
  obj: Record<string, any> | undefined
) => {
  const params = url.searchParams;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, obj[key]);
    }
  }
};

export const fetchMovieDB = async (
  path: `/${string}`,
  queryString?: Record<string, unknown>,
  options?: RequestInit
) => {
  const url = new URL(`${process.env.MOVIE_DB_API_HOSTNAME}${path}`);
  objectToSearchParams(url, queryString);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.MOVIE_DB_READ_ACCESS_TOKEN}`,
    },
    ...options,
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
