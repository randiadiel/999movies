"use client"

import { SnapshotCard } from "../..";
import useSearchMovies from "../../-repositories/search-movies/useSearchMovies";

interface SearchMovieListProps {
    query: string;
}

const SearchMovieList = (props: SearchMovieListProps) => {
    const { query } = props;
    const { data, isLoading, isInitialLoading } = useSearchMovies(query) as {
        data: { results: [{ poster_path: string }] },
        isLoading: boolean, isInitialLoading: boolean
    };

    if (isInitialLoading) return <>Loading...</>

    return (<>{data?.results.length || isLoading ? data?.results?.map((movie: any) => (
        <SnapshotCard
            key={movie.id}
            image={{
                width: 150,
                height: 250,
                src: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                alt: "poster",
            }}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
        />
    )) : `No Movie with Keyword ${query} Found`}</>);
}

export default SearchMovieList;