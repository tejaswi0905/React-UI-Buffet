import { MovieComponentSmall } from "./_components/MovieComponentSmall";
import { AutoCompleteSearch } from "./_components/automated-search";
import { MovieSearchCard } from "./_components/movie-card";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-1 min-h-screen md:w-full bg-autoCompleteSearch-background m-0 p-0">
      <div className="">
        <AutoCompleteSearch></AutoCompleteSearch>
        <MovieComponentSmall></MovieComponentSmall>
      </div>
    </div>
  );
}
