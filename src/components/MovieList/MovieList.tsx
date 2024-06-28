"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const MovieList = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          headers: {
            Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  return (
    <>
      {/* {JSON.stringify(data)} */}
      {data.results?.map((movie: any) => (
        <Image
          key={movie.poster_path}
          width={150}
          height={250}
          src={`https://api.themoviedb.org/3${movie.poster_path}`}
          alt="poster"
        />
      ))}
    </>
  );
};

export default MovieList;
