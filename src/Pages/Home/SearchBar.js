import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="flex justify-around mt-10">
      <p className="text-4xl font-bold">Search properties to rent</p>
      <div className="flex bg-white border-2 border-gray-300 rounded-md px-3">
        <input
          className="font-bold placeholder:font-bold w-full max-w-xs focus:outline-none"
          type="text"
          placeholder="Search with Search Bar"
        />
        <button class="btn-white">
          <IoMdArrowDropdown className="bg-gray-300 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
