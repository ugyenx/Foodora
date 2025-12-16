import { LiaSearchSolid } from "react-icons/lia";
import React from "react";
const Search = ({ searchText, setSearchText }) => {
  return (
    <section className="  my-15">
      <div className="relative justify-center items-center flex">
        <input
          type="text"
          placeholder="Search a Restaurant or a Menu"
          className="flex bg-transparent text-gray-800 placeholder-gray-500 outline-none w-1/2  h-10 border-2 rounded-xl border-blue-500/10 pr-12 pl-4"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <LiaSearchSolid className="absolute right-[27%] text-gray-500 text-xl font-bold" />
      </div>
    </section>
  );
};

export default Search;
