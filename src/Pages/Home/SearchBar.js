import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-around mt-10">
      <p className="text-4xl font-bold">Search properties to rent</p>
      <div>
        <input
          className="font-bold placeholder:font-bold p-1 pl-2 border-2 border-gray-300 rounded-md input w-full max-w-xs"
          type="text"
          placeholder="Search with Search Bar>"
        />
      </div>
    </div>
  );
};

export default SearchBar;
