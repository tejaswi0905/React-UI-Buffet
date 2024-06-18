import { MovieComponentSmall } from "./MovieComponentSmall";

import React from "react";

const fakeMovies = [
  {
    id: 1,
    title: "Movie One",
    author: "Author One",
    date: "2021-01-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Movie Two",
    author: "Author Two",
    date: "2021-02-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Movie Three",
    author: "Author Three",
    date: "2021-03-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Movie Four",
    author: "Author Four",
    date: "2021-04-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Movie Five",
    author: "Author Five",
    date: "2021-05-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Movie Six",
    author: "Author Six",
    date: "2021-06-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Movie Seven",
    author: "Author Seven",
    date: "2021-07-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Movie Eight",
    author: "Author Eight",
    date: "2021-08-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Movie Nine",
    author: "Author Nine",
    date: "2021-09-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Movie Ten",
    author: "Author Ten",
    date: "2021-10-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    title: "Movie Eleven",
    author: "Author Eleven",
    date: "2021-11-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    title: "Movie Twelve",
    author: "Author Twelve",
    date: "2021-12-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    title: "Movie Thirteen",
    author: "Author Thirteen",
    date: "2022-01-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    title: "Movie Fourteen",
    author: "Author Fourteen",
    date: "2022-02-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    title: "Movie Fifteen",
    author: "Author Fifteen",
    date: "2022-03-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    title: "Movie Sixteen",
    author: "Author Sixteen",
    date: "2022-04-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    title: "Movie Seventeen",
    author: "Author Seventeen",
    date: "2022-05-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    title: "Movie Eighteen",
    author: "Author Eighteen",
    date: "2022-06-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    title: "Movie Nineteen",
    author: "Author Nineteen",
    date: "2022-07-01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    title: "Movie Twenty",
    author: "Author Twenty",
    date: "2022-08-01",
    image: "https://via.placeholder.com/150",
  },
];

export const MoviesContainer = () => {
  return (
    <div className='w-2/3 h-[90vh] p-4 overflow-y-scroll'>
      <div className='flex flex-wrap justify-between'>
        {fakeMovies.map((movie) => (
          <MovieComponentSmall key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
