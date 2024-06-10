"use client";
import { useEffect, useState } from "react";
import { searchMovie } from "../_actions/query-fetch";

export const AutoCompleteSearch = () => {
  const [query, setQuery] = useState("");

  const handleOnChange = (e: any) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length < 2) {
      return;
    }
    searchMovie({ title: query });
  }, [query]);
  return (
    <div>
      <p>Automated Serachhh</p>
      <input
        className="border rounded-sm"
        type="text"
        value={query}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};
