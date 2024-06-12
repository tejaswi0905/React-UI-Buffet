import { atom } from "recoil";

export type Movie = {
  poster_path: String;
  adult: Boolean;
  overvie: String;
  release_date: String;
  genre_ids: Number[];
  id: Number;
  original_title: String;
  original_language: String;
  title: String;
  backdrop_path: String;
  popularity: Number;
  vote_count: Number;
  video: Boolean;
  vote_average: Number;
};

export type FetchedMovieData = {
  page: Number;
  results: Movie[];
  total_pages: Number;
  total_results: Number;
};

export const moviesState = atom<Movie[] | []>({
  key: "moviesState",
  default: [],
});
