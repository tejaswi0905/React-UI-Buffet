"use client";
import { useEffect, useState } from "react";
import { searchMovie } from "../_actions/query-fetch";
import { SearchBar } from "./search-bar";
import { ShowMovies } from "./show-movies";
import { moviesState } from "../store/atoms/movies";
import { useSetRecoilState } from "recoil";

export const AutoCompleteSearch = () => {
  const [query, setQuery] = useState("");
  const setMoviesState = useSetRecoilState(moviesState);

  useEffect(() => {
    if (query.length < 2) {
      return;
    }
    const fetchMovies = async () => {
      const result = await searchMovie({ title: query });
      if (!result.error) {
        setMoviesState(result.results);
      } else {
        console.log(result.error);
      }
    };
    fetchMovies();
  }, [query]);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 flex justify-around mt-1">
        <span role="img">🍿</span>
        <span className="hidden md:inline md:font-bold">
          Auto-complete search
        </span>
      </div>
      <div className="col-span-5">
        <div className="w-full">
          <SearchBar query={query} setQuery={setQuery} />
          {query.length > 2 && <ShowMovies />}
        </div>
      </div>
      <div className="col-span-4 flex justify-around">
        <span className="hidden md:inline">UserImg</span>
        <span className="hidden md:inline">UserName</span>
        <span>Logout</span>
      </div>
    </div>
  );
};
