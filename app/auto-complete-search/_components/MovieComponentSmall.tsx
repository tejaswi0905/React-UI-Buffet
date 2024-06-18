import React from "react";

export const MovieComponentSmall = (movie) => {
  return (
    <div className='flex flex-col bg-white p-4 shadow rounded mb-4 w-full md:w-[calc(25%-1rem)]'>
      {/* <img
        src={movie.image}
        alt={movie.title}
        className='w-full h-32 object-cover mb-2 rounded'
      /> */}
      <h3 className='text-lg font-semibold'>
        {movie.title} and something else
      </h3>
      <p className='text-sm text-gray-600'>{movie.author}</p>
      <p className='text-sm text-gray-500'>{movie.date}</p>
    </div>
  );
};
