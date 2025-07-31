"use client";
import React, { useState } from "react";
import Icons from "./icons";
import { useRouter, useSearchParams } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [query, setQuery] = useState(q || "");

  const handleInput = (e) => setQuery(e.target.value);

  const onSearch = () => {
    if (!query) return;
    router.push(`/search?q=${query}`);
  };

  const handleKeyDown = (e) => {
    if (!query) return;
    if (e.key === "Enter") {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="relative flex items-center w-full md:w-2xl max-w-2xl text-gray-700">
      <input
        type="search"
        className="ps-4 pe-12 py-2.5 sm:py-4 sm:ps-6 sm:pe-31 outline-none bg-gray-50 border border-gray-400 rounded-full h-full w-full"
        placeholder="Search..."
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        defaultValue={query}
      />
      <button
        className="absolute right-1 sm:right-[2px] flex justify-center items-center size-9.5 sm:h-13.5 sm:w-auto cursor-pointer transition-all duration-200 bg-slate-800 text-white sm:px-4 sm:py-4 rounded-full"
        onClick={onSearch}
      >
        <Icons.search />
        <span className="hidden md:block ms-2">Search</span>
      </button>
    </div>
  );
};

export default Searchbar;
