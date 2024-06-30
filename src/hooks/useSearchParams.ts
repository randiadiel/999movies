import { objectToSearchParams } from "@/utils/url";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useOnce from "./useOnce";

export const useQueryState = (key: string, initialState: string) => {
  const searchParams = useSearchParams();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(searchParams.get(key) || "");
  }, [searchParams, setState, key]);

  const setQueryParams = (value: string) => {
    const searchParams = new URLSearchParams();
    objectToSearchParams(searchParams, { ...searchParams, [key]: value });

    history.pushState(null, "", `?${searchParams.toString()}`);
  };

  useOnce(() => {
    setQueryParams(state);
  });

  return [state, setQueryParams] as const;
};
