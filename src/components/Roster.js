import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MovieBox from "./MovieBox";
import classes from "./roster.module.css";

import { useQuery, useInfiniteQuery } from "react-query";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";

export default function Roster() {
  const [currentSearch, setCurrentSearch] = useState();
  const [page, setPage] = useState(1);

  const getMovieRoster = async ({ pageParam = 1 }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=a44009a74ddccc7ee7b45a80292fbc26&language=en-US&page=${pageParam}`
    );
    const data = response.json();
    return data;
  };

  const {
    isLoading,
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery("movieRoster", getMovieRoster, {
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = 35082;
      const nextPage = allPages.length + 1;
      return nextPage <= maxPages ? nextPage : undefined;
    },
  });

  useEffect(() => {
    const onScroll = async (event) => {
      let fetching = false;
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.rosterHolder}>
        {!isLoading &&
          data.pages.map((page) =>
            page.results.map((movie) => {
              return (
                <MovieBox
                  key={movie.poster_path}
                  image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              );
            })
          )}
      </div>
    </div>
  );
}
