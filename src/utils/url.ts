export const objectToSearchParams = (
  searchParams: URLSearchParams,
  obj: Record<string, unknown> | undefined,
) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      searchParams.append(key, String(obj[key]));
    }
  }
};
