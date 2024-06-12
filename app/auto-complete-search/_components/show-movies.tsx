"use client";

import { MovieSearchCard } from "./movie-card";
import { useRecoilValue } from "recoil";
import { moviesState } from "../store/atoms/movies";

export const ShowMovies = () => {
  const movieDetails = useRecoilValue(moviesState);
  return (
    <div>
      {movieDetails.slice(0, 15).map((movie) => {
        return (
          <span key={Number(movie.id)} className="">
            <MovieSearchCard
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              image={movie.poster_path}
              voteAverage={movie.vote_average}
            />
          </span>
        );
      })}
    </div>
  );
};
