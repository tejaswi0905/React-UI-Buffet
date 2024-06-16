"use client";

import { useRef, useEffect } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBar = ({ query, setQuery, setFocus }: SearchBarProps) => {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);
  return (
    <div className="relative w-full">
      <input
        className="bg-slate-200 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-black mt-1"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        ref={inputEl}
      />
      <button
        type="button"
        className="
            absolute
            right-2
            top-1/2
            transform -translate-y-1/2
            p-2
      
            text-black
            rounded-lg
            hover:bg-gray-500"
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </button>
    </div>
  );
};
