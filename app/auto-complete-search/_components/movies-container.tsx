import { MovieComponentSmall } from "./MovieComponentSmall";

export const MoviesContainer = () => {
  return (
    <div className='bg-green-300 w-2/3 h-[90vh] border-red-500 shadow-sm rounded-xl mt-2 grid grid-cols-12'>
      <div className='col-span-12 md:col-span-6 lg:col-span-4 p-2'>
        <MovieComponentSmall></MovieComponentSmall>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4 p-2'>
        <MovieComponentSmall></MovieComponentSmall>
      </div>
      <div className='col-span-12 md:col-span-6 lg:col-span-4 p-2'>
        <MovieComponentSmall></MovieComponentSmall>
      </div>
    </div>
  );
};
