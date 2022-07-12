import React from "react";

const SearchFilters = () => {
  return (
    <div className="bg-white w-full max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto mt-10 p-2 rounded-md">
      <div className="flex flex-col md:flex-row lg:flex-row justify-evenly">
        <div className="pt-2">
          <p className="text-start text-gray-400 text-sm font-bold">Location</p>
          <select className="select select-ghost w-full max-w-sm pl-0 font-bold focus:outline-none">
            <option value="New York,USA">New York,USA</option>
            <option>Los Angels</option>
            <option>Texas</option>
            <option>California</option>
          </select>
        </div>
        <div className="h-0 md:h-12 lg:h-12 w-0 md:w-[2px] lg:w-[2px] rounded-full bg-gray-300 my-auto"></div>
        <div className="pt-2">
          <p className="text-start text-gray-400 text-sm font-bold">When</p>
          <select className="select select-ghost w-full max-w-xs pl-0 font-bold focus:outline-none">
            <option value="Select Move-in Date">Select Move-in Date</option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
        <div className="h-0 md:h-12 lg:h-12 w-0 md:w-[2px] lg:w-[2px] rounded-full bg-gray-300 my-auto"></div>
        <div className="pt-2">
          <p className="text-start text-gray-400 text-sm font-bold">Price</p>
          <select className="select select-ghost w-full max-w-xs pl-0 font-bold focus:outline-none">
            <option value="$500-$2,000">$500-$2,000</option>
            <option>$2,000-$3,100</option>
            <option>$3,100-$4,400</option>
            <option>$4,400-$6,000</option>
          </select>
        </div>
        <div className="h-0 md:h-12 lg:h-12 w-0 md:w-[2px] lg:w-[2px] rounded-full bg-gray-300 my-auto"></div>
        <div className="pt-2">
          <p className="text-start text-gray-400 text-sm font-bold">
            Property Type
          </p>
          <select className="select select-ghost w-full max-w-xs pl-0 font-bold focus:outline-none">
            <option value="Houses">Houses</option>
            <option>Cottage</option>
            <option>Aparments</option>
          </select>
        </div>
        <div className="h-0 md:h-12 lg:h-12 w-0 md:w-[2px] lg:w-[2px] rounded-full bg-gray-300 my-auto"></div>
        <div className="flex justify-center items-center">
          <button className="btn btn-primary text-white normal-case">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
