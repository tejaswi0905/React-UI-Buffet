import { MovieComponentSmall } from "./_components/MovieComponentSmall";
import { AutoCompleteSearch } from "./_components/automated-search";
import { MovieSearchCard } from "./_components/movie-card";
import { MoviesContainer } from "./_components/movies-container";
import { NavCard } from "./_components/nav-card";

export default function Home() {
  return (
    <div className='flex flex-col gap-y-1 min-h-screen md:w-full bg-gradient-to-r from-indigo-200 to-indigo-300m-0 p-0'>
      <div className='relative'>
        <div className='absolute w-full z-10'>
          <AutoCompleteSearch></AutoCompleteSearch>
        </div>
        <div className='flex justify-between mt-10'>
          <NavCard></NavCard>
          <MoviesContainer></MoviesContainer>
        </div>
      </div>
    </div>
  );
}
